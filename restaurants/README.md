# Fake Restaurants Dataset

## General

The restaurants dataset `huge-world-cities.json` weights `187KB` and contains `200` fake restaurants created with [Faker(https://github.com/faker-ruby/faker)] and pictures from [Unsplash](https://unsplash.com/).

## Content

Every restaurant document is composed of the following fields:

- `id`: a string containing the unique identifier
- `name`: a string with the name of the restaurant
- `description`: a string with the restaurant description
- `picture`: a string containing the URL to a restaurant image from Unsplash
- `picture_author`: a string with the name of the picture's author
- `picture_author_profile_link`: a string containing the URL of the picture's author profile on Unsplash
- `categories`: a string with one of the following categories 👉 'Brunch', 'French food', 'Italian food', 'Vegetarian', 'Fine dining', 'Fast food'

### Example
```json
{
  "id": 0,
  "name": "Fat Brasserie",
  "description": "SVIs mission is to deliver quality products at affordable prices to our independent retailers, wholesalers and food service partners around the world by providing international procurement, distribution, marketing and supply chain management.",
  "picture": "https://images.unsplash.com/photo-1552566626-52f8b828add9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMTg4Mzh8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTA0NDgxMDQ&ixlib=rb-1.2.1&q=80&w=400&utm_source=restaurants_demo&utm_medium=referral&utm_campaign=api-credit",
  "picture_author": "Nick Karvounis",
  "picture_author_profile_link": "https://unsplash.com/@nickkarvounis?utm_source=restaurants_demo&utm_medium=referral&utm_campaign=api-credit",
  "categories": "Italian food"
}
```

## Customisation

Using this dataset, we suggest you apply the following customization:

- Add `categories` to the [`filterableAttributes` settings](https://docs.meilisearch.com/reference/api/filterable_attributes.html)

## Warning

Since this is randomly generated fake data, there may be duplicates. The name, description, picture and categories may not be consistent with each other.
