# StoryBooks

> Create public and private stories from your life

This app uses Node.js/Express/MongoDB with Google OAuth for authentication

## Setup

1. Install dependencies:

```bash
npm install
```

2. Create your environment file:

- During install, `postinstall` attempts to create `.env` automatically from `.env.example`.
- If `.env` was not created, copy `.env.example` to `.env` manually.

3. Add values to `.env`:

```env
PORT=3000
MONGO_URI=mongodb+srv://<username>:<password>@<cluster-url>/<database>?retryWrites=true&w=majority
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

## MongoDB URI

Use your MongoDB Atlas connection string for `MONGO_URI`.

Example:

```env
MONGO_URI=mongodb+srv://appuser:your_password@cluster0.abcde.mongodb.net/storybooks?retryWrites=true&w=majority
```

## Google OAuth Setup

1. In Google Cloud Console, create or select a project.
2. Configure the OAuth consent screen.
3. Create OAuth 2.0 Client ID credentials (Web application).
4. Add an Authorized redirect URI:

```text
http://localhost:3000/auth/google/callback
```

5. Copy the generated Client ID and Client Secret into `.env` as `GOOGLE_CLIENT_ID` and `GOOGLE_CLIENT_SECRET`.

## Run

```bash
# Run in development
npm run dev

# Run in production
npm start
```
