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

### GET /api/footprint/getfootprintcartravel

#### Paramètres

| Nom | Vehicule

#### Réponse

```json
{
  "footprint": "number"
}
```

### GET /api/footprint/getfootprintpublictransport

#### Paramètres

| Nom | Type

#### Réponse

```json
{
  "footprint": "number"
}
```

### GET /api/footprint/getfootprintflight

#### Paramètres

| Endpoint | Type

#### Réponse

```json
{
  "footprint": "number"
}
```

### GET /api/foodprint/getfoodprint

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

### GET /api/foodprint/getfoodprintbycategory

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

### GET /api/foodprint/getCategories

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


    