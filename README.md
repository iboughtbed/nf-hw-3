# [Blog](https://iboughtbed-nf-hw-3.vercel.app/)

This is an open source medium-alike app build with everything new in Next.js 14. It is bootstrapped with `create-t3-app`.

[![Blog](./public/og.png)](https://iboughtbed-nf-hw-3.vercel.app/)

## Tech Stack

- **Framework:** [Next.js](https://nextjs.org)
- **Styling:** [Tailwind CSS](https://tailwindcss.com)
- **UI Components:** [shadcn/ui](https://ui.shadcn.com)

## Features to be implemented

> NOTE: axios and dummyjson combo is killing me ahhaahh
> It's so inconvinient, I'd rather create my own api with my own schemas with react query

- [x] Fetch all posts using **axios**
- [x] Implement posts design on main page
- [x] Implement routing to detailed post page using dynamic routes

- [x] Create AuthContext that checks if the user is authenticated.
- [x] Sign in page
- [x] Passing auth token to axios request

- [x] Implement axios interceptor to pass auth token with requests
- [x] Handle API errors in axios interceptor response
- [x] Theme provider
- [x] CRUD for posts

## Running Locally

1. Clone the repository

   ```bash
   git clone https://github.com/iboughtbed/nf-hw-3.git
   ```

2. Install dependencies using pnpm

   ```bash
   pnpm install
   ```

3. Copy the `.env.example` to `.env` and update the variables.

   ```bash
   cp .env.example .env
   ```

4. Start the development server

   ```bash
   pnpm run dev
   ```

## Introduction

This is nFactorial Incubator homework for day 2

## License

Licensed under the MIT License. Check the [LICENSE](./LICENSE.md) file for details.
