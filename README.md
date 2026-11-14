# El Muro

Un muro donde cada persona con sesión puede publicar. Es la base común del Taller 7 de MakerLab.

## Correrlo

```sh
npm install
npx clerk@latest init --accountless --framework next --pm npm --no-skills
npm run dev
```

`clerk init` no necesita cuenta: escribe llaves temporales en `.env.local`. Los posts se guardan en `muro.db` (SQLite de Node), que se crea solo con tres posts de ejemplo.
