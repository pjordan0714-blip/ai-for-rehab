# AI for Rehab

Practical AI resources for physical therapy, rehab operations, and clinic leadership.

## Getting Started

1. Make sure you have [Node.js](https://nodejs.org) installed
2. Open a terminal in this folder
3. Install dependencies: `npm install`
4. Start the dev server: `npm run dev`
5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
src/
├── app/                    # Pages (each folder = a route)
│   ├── page.tsx            # Home page
│   ├── about/              # About page
│   ├── case-studies/       # Case studies list + individual pages
│   ├── prompts/            # Prompt library
│   ├── resources/          # Resource library
│   ├── safety/             # Safety & compliance
│   ├── tools/              # AI tools reviews
│   └── use-cases/          # Use cases by role
├── components/             # Reusable components
│   ├── Navigation.tsx      # Top navbar
│   ├── Footer.tsx          # Site footer
│   ├── Newsletter.tsx      # Email signup section
│   └── PageHeader.tsx      # Page title banner
└── data/                   # Content (edit these to update the site)
    ├── caseStudies.ts      # Case study content
    ├── navigation.ts       # Nav menu links
    ├── prompts.ts          # Prompt library entries
    ├── resources.ts        # Resource categories
    ├── tools.ts            # AI tool reviews
    └── useCases.ts         # Use cases by role
```

## How to Update Content

All content lives in the `src/data/` folder as TypeScript arrays. To add or edit content:

- **Add a prompt**: Edit `src/data/prompts.ts` and add a new object to the array
- **Add a case study**: Edit `src/data/caseStudies.ts` — new entries automatically get their own page
- **Add a tool**: Edit `src/data/tools.ts`
- **Add a use case**: Edit `src/data/useCases.ts`
- **Add a resource category**: Edit `src/data/resources.ts`
- **Change nav links**: Edit `src/data/navigation.ts`

## Connecting the Newsletter

The newsletter form is a placeholder. To connect it to a service:

1. Open `src/components/Newsletter.tsx`
2. Replace the `handleSubmit` function with your email service's API call
3. Works with ConvertKit, Mailchimp, Beehiiv, or any service with an API

## Deploying

To put this site online:

1. Push this code to a GitHub repository
2. Connect it to [Vercel](https://vercel.com), [Netlify](https://netlify.com), or similar
3. It will build and deploy automatically

## Tech Stack

- [Next.js](https://nextjs.org) (App Router)
- [TypeScript](https://typescriptlang.org)
- [Tailwind CSS](https://tailwindcss.com)
