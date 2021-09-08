# Movies Dataset

## General

The movie dataset weight `19MB` and contains `31968` movies.

The movies have been choosen based on:
- Popularity
- Not explicit adult content
- To the extend of the possible, no movies that are 17+

The movies have been fetched using [https://www.themoviedb.org/](https://www.themoviedb.org/) and their [public API](https://developers.themoviedb.org/3).

We cannot guarantee that some obscure unknown films that have no accreditation are present in this dataset.

## Content

Every movie is composed of the following fields:

- `id`: the unique identifier
- `title`: a string with the title of the movie
- `overview`: a string with a small pitch of the movie
- `genres`: an array of strings with the genres of the movie
- `poster`: a string containing the URL to its poster image
- `release_date`: a timestamp of the release date of the movie.

The order of the fields determine their importance in MeiliSearch. With the show-cased example, a match in `title` will be considered more relevant than a match in `overview` ([See this doc](https://docs.meilisearch.com/learn/core_concepts/relevancy.html#attribute-ranking-order)).

### Example
```json
{
  "id": 24238,
  "title": "Mary and Max",
  "overview": "A tale of friendship between two unlikely pen pals: Mary, a lonely, eight-year-old girl living in the suburbs of Melbourne, and Max, a forty-four-year old, severely obese man living in New York. In the mid-1970s, a homely, friendless Australian girl of 8 picks a name out of a Manhattan phone book and writes to him; she includes a chocolate bar. He writes back, with chocolate. Thus begins a 20-year correspondence. Will the two ever meet face to face?",
  "genres": [
    "Animation",
    "Comedy",
    "Drama"
  ],
  "poster": "https://image.tmdb.org/t/p/w500/b4LKlquh0ls5Rgb27QLPlkC7Oya.jpg",
  "release_date": 1234137600
}
```

## Customisation

Using this dataset, we suggest you apply the following customization:

- Add `genres` to the [`filterableAttributes` settings](https://docs.meilisearch.com/reference/api/filterable_attributes.html#filterable-attributes).
- Add `release_date` to the [`sortableAttributes` settings](https://docs.meilisearch.com/reference/api/ranking_rules.html#get-ranking-rules) to be able to sort by descending or ascending`release_date` using the [sort search parameter](https://docs.meilisearch.com/reference/features/search_parameters.html#sort).

Of course, you can also [add `synonyms`](https://docs.meilisearch.com/reference/features/synonyms.html#synonyms) for example `magician` and `wizard`.
Or [stop-words](https://docs.meilisearch.com/reference/features/stop_words.html) if you want to avoid the redudancy of words like `the`.
