# World Cities Dataset

## General

The world-cities dataset weights `10MB` and contains `32419` world cities with a population of more than 10000 inhabitants.

## Content

Every city document is composed of the following fields:

- `geonameid`: a string containing the unique identifier
- `name`: a string with the name of the city
- `asciiname`: a string with the name of the city in plain ascii characters
- `alternatenames`: a string with the alternate names or the name variants of the city
- `_geo`: an object with two keys `lat` and `lng` containing a floating point number, that indicates respectively, latitude and longitude
- `country code`: a string with ISO-3166 2-letter country code, 2 characters
- `population`: an integer representing the number of inhabitants
- `timezone`: a string with the IANA timezone name
- `country`: a string with the country to which the city belongs


### Example
```json
{
    "geonameid": "3688689",
    "name": "Bogotá",
    "asciiname": "Bogota",
    "alternatenames": "BOG,Bagata,Bogot,Bogota,Bogoto,Bogotà,Bogotá,Boqota,Buoguota,Bógóta,Mponkota,Santa-Fe-de-Bogota,Santafe de Bogota,Santafe de Bogotá,Santafé de Bogotá,Wukuta,beageatta,bo ge da,bogota,bokota,bwghwta,bwgwta,bwgwth,bwjwta,pokotta,Μπογκοτά,Багата,Богота,Боґота,Санта-Фе-де-Богота,Բոգոտա,באגאטא,בוגוטה,بوجوتا,بوغوتا,بوگوتا,بگوٹا,بۆگۆتا,बोगोटा,बोगोता,বোগোতা,ਬੋਗੋਤਾ,ବୋଗୋଟା,பொகோட்டா,ಬೊಗೋಟ,ബൊഗോട്ട,โบโกตา,པོ་གོ་ཏ,ဘိုဂိုတာမြို့,ბოგოტა,ቦጎታ,ទីក្រុងបូកូតា,ボゴタ,波哥大,보고타",
    "_geo": {
        "lat": 4.60971,
        "lng": -74.08175
    },
    "country code": "CO",
    "population": 7674366,
    "timezone": "America/Bogota",
    "country": "Colombia"
}
```

## Customisation

Using this dataset, we suggest you apply the following customization:

- Add `population` to the [`sortableAttributes` settings](https://docs.meilisearch.com/reference/api/sortable_attributes) to be able to sort by descending or ascending number of inhabitants using the [sort search parameter](https://docs.meilisearch.com/reference/features/search_parameters.html#sort).

## Provided file

We provide two files:
- `world-cities.json` containing the dataset.
- `settings.json` containing our suggested settings for this dataset.
