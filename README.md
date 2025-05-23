# Token Price Explorer

This application lets users enter a USD amount to view a token’s value and compare it against another token.

## Demo

The project is hosted on Vercel. [Click here](https://token-swap-jade-psi.vercel.app/) to preview the application.

## Tech Stack

- Next.js
- React
- TypeScript
- Shadcn
- Tailwind CSS
- Tanstack Query
- Funkit API

## Process

### Project Research

Before diving into the code, I reviewed the project overview and examined the technical requirements. I researched existing token-price calculators and explored Dribbble for UI inspiration.

#### Funkit API

I couldn’t find much documentation on the API, but since it’s a type-safe library, it was relatively straightforward to use. The README page linked in NPMJS returned a 404, but the sample code provided a great starting point.

There was an error after installing the package, but it was a quick fix by adding the missing dependency `viem`. Alternatively, I could of installed the `funkit/core` package to resolve the dependency issue.

### Decisions & Ambiguity

I reached out to the recruiter to clarify the design requirements and the flexibility of the wireframe.

After reviewing the project overview, one of my first considerations was how to handle the token price data. TanStack Query fit my technical requirements and use case well. It’s a well-documented library that simplifies fetching, caching, and refetching data in React applications.

One of the assumptions I made was a reasonable amount of time to give the user accurate and up to date information. Currently, the application is set to refetch token prices every 10 seconds to provide users with near real-time data. This interval can be adjusted in the `useTokenPrice` hook.

Given more time, I would further explore options to optimize the data fetching of the token prices. Refetching seems to work fine for this use case, but we are making API requests quite frequently.

#### Preloader / Loading State

I added a preloader to the application to improve the UX and to show case the brand of Fun.xyz. There is an animated logo that displays when the app first loads and fetches the initial token prices. I intentionally made a small performance tradeoff (~0-500ms) to show the animated logo and finish at least one full animation cycle before the user can see the application. Even if the data fetching is complete, the preloader will wait until the animation finishes before hiding itself.

Given more time I would have like to explore Next's built in Loading UI feature (loading.js file) to see if I could leverage this technology for the given requirements above.

#### Shadcn

I chose to use Shadcn in this project to help me rapidly build a UI that looks clean, modern, accessible, and performant. It is highly customizable and designed for projects that leverage Tailwind CSS. For example, Shadcn enabled me to add dark mode in minutes, optimizing the UX and giving users more accessibility options

Shadcn is built around the following principles (source: [shadcn/ui](https://ui.shadcn.com/docs)):

- Open Code: The top layer of your component code is open for modification.
- Composition: Every component uses a common, composable interface, making them predictable.
- Distribution: A flat-file schema and command-line tool make it easy to distribute components.
- Beautiful Defaults: Carefully chosen default styles, so you get great design out-of-the-box.
- AI-Ready: Open code for LLMs to read, understand, and improve.

## Getting Started

### Installation

I used `pnpm` to manage the dependencies for this project. Alternatively, you can use npm or yarn.

```bash
pnpm install
```

#### Environment Variables

Create a `.env.local` file in the root of the project and add the following:

```bash
NEXT_PUBLIC_FUNKIT_API_KEY=your-api-key
```

#### Run the Application

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

Run the development server:

```bash
pnpm dev

# or
npm run dev
# or
yarn dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
