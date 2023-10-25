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

### POST /api/openAI/chatgptHelper

#### Paramètres

| Message | Model | Max_Tokens

#### Réponse

```json
{
  "chatGPTId": "string",
  "chatGPTMessage": "string",
  "chatGPTFinishReason": "string",
  "chatGPTUsage": {
    "prompt_tokens": "number",
    "completion_tokens": "number",
    "total_tokens": "number"
  }
}
```

### Using Model

The model used is the GPT-3-turbo model, but it is possible to change it using the "model" parameter in the request.

### Using Max_Tokens

The max_tokens parameter is used to limit the number of tokens generated by the model. The default value is 300.




    