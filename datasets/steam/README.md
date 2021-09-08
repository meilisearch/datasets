# Steam Dataset

## General

The steam-games dataset weight `20MB` and contains `12546` games from steam.

## Content

Every game document is composed of the following fields:

- `id`: a string containing the unique identifier
- `name`: a string with the name of the game
- `description`: a string with a small description of the game
- `price`: a string with the price of the game
- `image`: a string with the url linking to the main image of the game on steam
- `releaseDate`: a date of the release date of the game in this format: `Nov 1 2000`.
- `recommendationCount`: an integer representing how much the game is recommended.
  - max: `1427633`
  - min: `0`
- `platforms`: an array of string with the different platforms the game can be played on
- `players`: an array of strings with the different modes users can play the game on.
- `misc`: an array of strings containing misc information about the game.


### Example
```json
{
  "id": "730",
  "name": "Counter-Strike: Global Offensive",
  "description": "Counter-Strike: Global Offensive (CS: GO) will expand upon the team-based action gameplay that it pioneered when it was launched 14 years ago.CS: GO features new maps characters and weapons and delivers updated versions of the classic CS content (de_dust etc.). In addition CS: GO will introduce new gameplay modes matchmaking leader boards and more.Counter-Strike took the gaming industry by surprise when the unlikely MOD became the most played online PC action game in the world almost immediately after its release in August 1999 said Doug Lombardi at Valve. For the past 12 years it has continued to be one of the most-played games in the world headline competitive gaming tournaments and selling over 25 million units worldwide across the franchise. CS: GO promises to expand on CS award-winning gameplay and deliver it to gamers on the PC as well as the next gen consoles and the Mac.",
  "price": "14.99 $",
  "image": "http://steam.meilisearch.dev/steam/apps/730/header.jpg?t=1467065027",
  "releaseDate": "Aug 21 2012",
  "recommendationCount": 1427633,
  "platforms": [
    "MacOS",
    "Linux",
    "Windows"
  ],
  "players": [
    "Multiplayer"
  ],
  "genres": [
    "Action"
  ],
  "misc": []
}
```

## Customisation

Using this dataset, we suggest you apply the following customization:

- Add `["platforms", "players", "genres", "misc"]` to the [`filterableAttributes` settings](https://docs.meilisearch.com/reference/api/filterable_attributes) to be able to [filter](https://docs.meilisearch.com/reference/features/search_parameters.html#filter) on these fields.
- Add `recommendationCount` to the [`sortableAttributes` settings](https://docs.meilisearch.com/reference/api/sortable_attributes) to be able to sort by descending `recommendationCount` using the [sort search parameter](https://docs.meilisearch.com/reference/features/search_parameters.html#sort).

## Provided files

We provide two files:
- `steam-games.json` containing the dataset.
- `settings.json` containing our suggested settings for this dataset.
