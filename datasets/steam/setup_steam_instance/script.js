const { MeiliSearch } = require('meilisearch');
const documents = require('../steam-games.json');
const settings = require('../settings.json');

const client = new MeiliSearch({
  host: 'localhost:7700',
  apiKey: 'masterKey',
});

const setup_steam_instance = async () => {
  try {
    const uid = 'steam-video-games';

    const task = await client.createIndex(uid);
    await client.waitForTask(task.uid);
    const index = await client.getIndex(uid);

    await index.updateSettings(settings);

    await index.addDocuments(documents);
  } catch (e) {
    console.log(e);
  }
};

setup_steam_instance();
