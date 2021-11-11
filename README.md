<p align="center">
  <img src="https://github.com/meilisearch/integration-guides/blob/main/assets/logos/logo.svg" alt="MeiliSearch open datasets" width="200" height="200" />
</p>

<h1 align="center">Datasets</h1>

<h4 align="center">
  <a href="https://github.com/meilisearch/MeiliSearch">MeiliSearch</a> |
  <a href="https://docs.meilisearch.com">Documentation</a> |
  <a href="https://slack.meilisearch.com">Slack</a> |
  <a href="https://roadmap.meilisearch.com/tabs/1-under-consideration">Roadmap</a> |
  <a href="https://www.meilisearch.com">Website</a> |
  <a href="https://docs.meilisearch.com/faq">FAQ</a>
</h4>

<p align="center">
  <a href="https://github.com/meilisearch/datasets/blob/main/LICENSE"><img src="https://img.shields.io/badge/license-MIT-informational" alt="License"></a>
</p>


The **datasets** provided in this repository are compatible with MeiliSearch. Add them to your MeiliSearch instance and use them to try out different use cases.

The datasets are free to use for any other purpose.

**MeiliSearch** is an open-source search engine. [Discover what MeiliSearch is!](https://github.
com/meilisearch/MeiliSearch)

## Table of Contents <!-- omit in toc -->

- [🎁 List of datasets](#-list-of-datasets)
- [💅 Settings](#-Requirements)
- [🚗 Usage](#-Usage)
- [📖 Documentation](#-documentation)

## 🎁 List of datasets

All The datasets provided in this repository are accompanied by a README.md file containing relevant information about the dataset.

- [🎬 Movies](./datasets/movies)
- [👾 Steam Games](./datasets/steam)
- [🌍 World Cities](./datasets/world_cities)
- [😵 Deprecated Movies](./datasets/deprecated_movies)

## 💅 Settings

Some datasets files are joined with a settings file. We recommend adding the settings to the index containing the dataset for better search relevancy. Nonetheless, feel free to ignore them or to improve them any way you want.

## 🚗 Usage

Start by downloading the dataset of your choice.

One way to download a dataset is using `cURL`. For example to download the `movies.json` dataset:

```bash
curl https://raw.githubusercontent.com/meilisearch/datasets/main/datasets/movies/movies.json --output movies.json
```

If you wish to index the dataset, you need a running MeiliSearch instance. See how to [Download MeiliSearch](https://docs.meilisearch.com/learn/getting_started/installation.html).

Once MeiliSearch is running, add the dataset to the index name of your choice.
See how to index a [dataset](https://docs.meilisearch.com/reference/api/documents.html#add-or-replace-documents) in MeiliSearch.

Optionnaly, [add the settings](https://docs.meilisearch.com/reference/api/settings.html#update-settings) to the index.

## 📖 Documentation

See our [Documentation](https://docs.meilisearch.com/learn/tutorials/getting_started.html) or our [API References](https://docs.meilisearch.com/reference/api/).
