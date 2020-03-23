# Cocktails

O objetivo desse projeto é criar uma PWA para consultar receitas de drinks, a consulta é feita através da API [Coktail DB](https://www.thecocktaildb.com/api.php?ref=apilist.fun) de drinks utilizando VueJS e Vuetify

## Project setup

### Environment variables

Necessário criar as seguintes variáveis de ambiente para acesso ao Firebase

```

VUE_APP_FIREBASE_API_KEY
VUE_APP_FIREBASE_AUTH_DOMAIN
VUE_APP_FIREBASE_DATA_BASE_URL
VUE_APP_FIREBASE_PROJECT_ID
VUE_APP_FIREBASE_STORAGE_BUCKET
VUE_APP_FIREBASE_MESSAGING_SENDER_ID
VUE_APP_FIREBASE_APP_ID
VUE_APP_MEASUREMENT_ID

```

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn serve
```

### Compiles and minifies for production

```
yarn build
```

## Docker
O preview da aplicação pode ser feita via docker compose

    docker-compose -f "docker-compose.yml" up -d --build
