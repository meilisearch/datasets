# Books Dataset

## General

The books dataset weights `94K` and contains `244` books.

It is a sample dataset from GoodReads uploaded by [Jealous Leopard on Kaggle](https://www.kaggle.com/jealousleopard/goodreadsbooks?ref=blog.meilisearch.com).


## Content

Every book is composed of the following fields:

- `id`: the unique identifier
- `title`: a string with the title of the book
- `author`: a string with the author of the book
- `cover`: an string with 3 possible values `hard cover`, `hard cover with dust jacket`, and `soft cover`
- `language`: a string with the language of the book (`eng`, `en-GB`, `en-US`, `spa`, `fr` are the most common)
- `publisher`: a string with the name of the book's publisher
- `details`: an object containing the book's `isbn` code, the `rating`, and the number of `pages`. All three fields are of string type
- `isbn13`: a string with the 13-digit ISBN to identify the book, instead of the standard 11-digit ISBN


### Example
```json
{
    "id": "1",
    "title": "Harry Potter and the Half-Blood Prince",
    "author": "J.K. Rowling/Mary GrandPré",
    "cover": "hard cover with dust jacket",
    "language": "eng",
    "publisher": "Scholastic Inc.",
    "details": {
        "isbn": "0439785960",
        "rating": "4.57",
        "pages": "652"
    },
    "isbn13": "9780439785969"
}
```

## Customisation

Using this dataset, we suggest you apply the following customization:

- Add `language` to the [`filterableAttributes` settings](https://docs.meilisearch.com/reference/api/filterable_attributes.html).
- Add `isbn` to the [`distinctAtttribute` settings](https://www.meilisearch.com/docs/reference/api/settings#distinct-attribute) to avoid returning duplicate books only differ in the cover type

You can also [disable the typo tolerance](https://www.meilisearch.com/docs/learn/configuration/typo_tolerance#disableonattributes) for the `isbn` or `isbn13` field.
