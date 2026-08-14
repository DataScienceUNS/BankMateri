# DSRC

DSRC is a Next.js application for browsing and managing academic subjects, class data, and uploaded course materials. The app uses Google OAuth for authentication, PostgreSQL for persistence, and Redis for PKCE state during login.

## Features

- Browse subject and class information
- Upload and manage academic materials
- Role-aware access for students, lecturers, and administrators
- Google sign-in with JWT-based session cookies
- PostgreSQL-backed records for users, sessions, subjects, materials, and reports

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Prisma ORM
- PostgreSQL
- Redis
- Google OAuth (Arctic)
- Tailwind CSS
- Bun

## Requirements

Before running the project, make sure you have:

- Bun installed locally (this repo includes a `bun.lock` file)
- PostgreSQL running and accessible
- Redis running and accessible
- A Google OAuth client configured in Google Cloud Console
- A local environment file for app configuration

## Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. Install dependencies:

   ```bash
   bun install
   ```

3. Configure environment variables:

   Copy the sample file to a local environment file:

   ```bash
   cp .example.env .env.local
   ```

   Then fill in the values in `.env.local` based on the variables documented in the next section.

4. Set up the required services:
   - Start a PostgreSQL instance and create the database you want to use.
   - Start a Redis instance on the host/port defined in your environment variables.
   - Ensure your Google OAuth redirect URL matches the app URL and callback path configured in `GOOGLE_CALLBACK_URL`.

5. Generate the Prisma client and initialize the schema:

   ```bash
   bunx prisma generate
   bunx prisma migrate dev --name init
   ```

   If the database is already prepared and you are making schema changes later, use Prisma migrate commands as needed for those updates.

6. There is no project seed script in `package.json`, so there is no automated seed command to run in this repository.

7. Start the development server:

   ```bash
   bun run dev
   ```

   Open <http://localhost:3000> in your browser.

## Environment Variables

The repository includes `.example.env` and the app reads the values from `process.env` in Next.js and Prisma. Copy it to `.env.local` before running the project.

- `APP_NAME` — Required. Used to namespace Redis PKCE keys during Google login.
- `APP_URL` — Required. Base URL of the app, for example `http://localhost:3000`.
- `APP_STATE` — Required. Typically `development` locally and `production` in deployment.
- `JWT_SECRET` — Required. Secret used to sign the authentication JWT stored in the session cookie.
- `DATABASE_URL` — Required. PostgreSQL connection string used by Prisma.
- `REDIS_HOST` — Required. Redis hostname.
- `REDIS_PORT` — Required. Redis port; the sample config uses `6379`.
- `REDIS_PASSWORD` — Optional. Leave empty unless your Redis instance requires a password.
- `GOOGLE_CLIENT_ID` — Required. Google OAuth client ID.
- `GOOGLE_CLIENT_SECRET` — Required. Google OAuth client secret.
- `GOOGLE_CALLBACK_URL` — Required. Callback path for the Google login flow. The sample config uses `/auth/callback/google/`.

Do not commit real secrets or production credentials to the repository.

## Database

This project uses PostgreSQL through Prisma. The schema is defined in `prisma/schema.prisma` and includes models for users, sessions, subjects, classes, materials, and reports.

To set up the database for a fresh project:

```bash
bunx prisma generate
bunx prisma migrate dev --name init
```

The repo does not currently include a Docker Compose file or a dedicated seed script, so database setup is expected to be done via a local PostgreSQL instance plus Prisma migrations.

## Scripts

The project defines these scripts in `package.json`:

- `bun run dev` — Start the Next.js development server
- `bun run build` — Create a production build
- `bun run start` — Start the production server
- `bun run lint` — Run ESLint

## License

No license file is present in this repository, so no explicit project license is currently defined.
