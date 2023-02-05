# NextAuth.js Prisma Database

This is a starter project using [NextAuth.js](https://next-auth.js.org/) as an authentication provider and [Prisma](https://www.prisma.io/) as a database ORM for PostgreSQL.

> It allows to store user credentials automatically in a database during the authentication process

## IMPORTANT

When you are deploying your application to production, remember to set `Homepage URL` and `Authorization callback URL` in your GitHub OAuth App settings in Developer Settings on GitHub.

> Do the same for other providers

#### Example

- Homepage URL: `https://yourdomain.com`
- Authorization callback URL: `https://yourdomain.com/api/auth/callback/github`

#### Screenshot

<img src="screenshot.png" alt="screenshot" width="150">

## Getting Started

- clone this repo and `cd` into it
- run `npm install`
- Add `.env` file to the root of the project with the following content:

```bash
# * Prisma
# You can create a PostgreSQL database easly on Supabase
DATABASE_URL="postgresql://postgres:Tv3iY20HkOK5p0S8@db.gydufgctgqdfhopzfypu.supabase.co:5432/postgres"


# * NextAuth.js
# You will find these values in your GitHub OAuth App settings in Developer Settings on GitHub (Client ID and client secret), you will need to create a new OAuth App (remember to set Homepage URL and Authorization callback URL to production URL during production)
GITHUB_ID=YOUR_GITHUB_ID
GITHUB_SECRET=YOUR GITHUB SECRET

# ! Your NEXTAUTH_SECRET secret should be at least 32 characters long, not parakeet :)
NEXTAUTH_SECRET=parakeet
# ! Your NEXTAUTH_URL should be the URL of your site, change it in production
NEXTAUTH_URL=http://localhost:3000
```

> Note: If you are deploying to Vercel, the `NEXTAUTH_URL` env variable is not necessary

### Running the app

```bash
npm run dev
```

- Open [http://localhost:3000](http://localhost:3000) with your browser to see the result

> Note: NextAuth.js has many providers, you can find them [here](https://next-auth.js.org/configuration/providers)

## Add Prisma to an existing NextAuth.js project

- follow the instructions to [setup Prisma with NextAuth.js](https://next-auth.js.org/adapters/prisma)

### Prisma Configuration for this project

- run `npx prisma migrate dev` every time you change the schema
- run `npx prisma studio` to if you want to see the database in a GUI

### Prisma Configuration for new projects

- run `npm install prisma --save-dev`
- run `npm install next-auth @prisma/client @next-auth/prisma-adapter`

- run `npx prisma init` to initialize the Prisma project

> Note: I've created a new database with [Supabase](https://supabase.com/) which is a firebase-like database service that uses PostgreSQL
>
> - Create a new database with [Supabase](https://supabase.com/)
>
> - Go to `Project Settings` / `Database` / `Connection string` / `URI` and copy the `URI` string

- Paste the `URI` string in the `.env` file (DATABASE_URL)

- run `npx db pull` if you already have data in your database and you want to generate the Prisma schema

- add your schema in `schema.prisma`

- run `npx prisma migrate dev --name init` to create the database schema (run `npx prisma migrate dev` every time you change the schema)

- run `npx prisma generate` to generate the Prisma Client (run this command every time you change the schema)

- run `npx prisma studio` to if you want to see the database in a GUI

## NextAuth.js Providers

- [Email](https://next-auth.js.org/configuration/providers/email)
- [Credentials](https://next-auth.js.org/configuration/providers/credentials)
- [GitHub](https://next-auth.js.org/providers/github)
- [Google](https://next-auth.js.org/providers/google)
- [Apple](https://next-auth.js.org/providers/apple)
- [Facebook](https://next-auth.js.org/providers/facebook)
- [Discord](https://next-auth.js.org/providers/discord)
- [LinkedIn](https://next-auth.js.org/providers/linkedin)
- [More...](https://next-auth.js.org/configuration/providers/oauth#built-in-providers)

## Learn More

- [How to set up Providers](https://next-auth.js.org/configuration/providers/oauth#built-in-providers)
- [NextAuth.js Getting Starter](https://next-auth.js.org/getting-started/example)
- [NextAuth.js Prisma Setup](https://next-auth.js.org/adapters/prisma)
- [Prisma](https://www.prisma.io/)

## License

- [MIT](LICENSE.md)
