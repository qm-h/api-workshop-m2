# api-workshop-m2

API dédié au projet workshop du M2

# Installation

## Dépendances

```bash
$ pnpm install
```

## Prérequis

- Node.js
- npm

# Utilisation

## Lancement

```bash
$ pnpm start
```

## Tests

```bash
$ pnpm test
```

# Documentation

## API

### GET /footprint/getfootprintcartravel

#### Paramètres

| Nom | Vehicule

#### Réponse

```json
{
  "footprint": "number"
}
```

### GET /footprint/getfootprintpublictransport

#### Paramètres

| Nom | Type

#### Réponse

```json
{
  "footprint": "number"
}
```

### GET /footprint/getfootprintflight

#### Paramètres

| Endpoint | Type

#### Réponse

```json
{
  "footprint": "number"
}
```

### GET /foodprint/getfoodprint

#### Paramètres

| Endpoint | FrenchName

#### Réponse

```json
{
  "group": "string",
  "category": "string",
  "french_name": "string",
  "name": "string",
  "rating_quality": "string",
  "footprint": "string"
}
```

### GET /foodprint/getfoodprintbycategory

#### Paramètres

| Endpoint | Category

#### Réponse

```json
{
  "group": "string",
  "category": "string",
  "french_name": "string",
  "name": "string",
  "rating_quality": "string",
  "footprint": "string"
}
```

### GET /foodprint/getCategories

#### Paramètres

| None

#### Réponse

```json
{
  "categories": [
    "string"
  ]
}
```


    