NoteStack

NoteStack is a modern, full-stack note-taking web application built with Next.js (App Router). It allows users to create notebooks, write and manage notes, and access everything through an authenticated dashboard.

The project focuses on a clean UI, scalable architecture, and modern tooling.

Features>>

Authentication>>
User authentication powered by better-auth
GoogleGoogle Auth(signing with Google)
Notebooks & Notes
Create, view, and manage and delete notebooks
Add and edit notes inside notebooks

Dashboard
Centralized dashboard for managing content
Modern UI
Built with Tailwind CSS
Shadcn
Fast & Scalable
Next.js App Router
Server actions and API routes

Database>>
Drizzle ORM
Neon (Postgres) serverless database

Resend(mail)

Tech Stack>>
Next.js 16 (App Router)
React 19
TypeScript
Tailwind CSS
Next.js API Routes
better-auth
Drizzle ORM
Neon Database (PostgreSQL)
nuqs(nuqs Type-safe search params state manager for React)
Tiptap(Rich text editor)
Shadcn

Project Structure
noteforge/
├── app/
│ ├── api/ # API routes (auth, data)
│ ├── dashboard/ # Authenticated dashboard pages
│ └── layout.tsx # Root layout
├── components/ # Reusable UI components
├── lib/ # Auth, DB, utilities
├── server/ # Server-side data logic
├── public/ # Static assets
├── drizzle/ # Database schema & migrations
└── tailwind.config.ts # Tailwind configuration

Getting Started

1. Clone the repository
   git clone https://github.com/your-username/notestack.git
   cd noteforge

2. Install dependencies
   npm install

# or

pnpm install

# or

yarn install

3. Environment Variables
   Create a .env.local file in the root directory and configure the following:
   NEXT_PUBLIC_BASE_URL=
   GOOGLE_CLIENT_ID=
   GOOGLE_CLIENT_SECRET=
   RESEND_API_KEY=
   DATABASE_URL=
   BETTER_AUTH_SECRET=
   BETTER_AUTH_UR=

Make sure your Neon database is set up before running migrations.

4. Run database migrations
   npx drizzle-kit migrate

5. Start the development server
   npm run dev

Visit http://localhost:3000 to see the app.

Deployment
The app is optimized for deployment on Vercel.
Steps:

Push the repo to GitHub

Import into Vercel

Set environment variables

Deploy
