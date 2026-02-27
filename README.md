# AMPL Frontend (Vite + React + TypeScript)

Frontend for the AMPL mental health experience built with Vite, React, TypeScript, and Tailwind CSS.

## Scripts

- `npm run dev` - Start local dev server
- `npm run build` - Type-check and create production build
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## Run Locally

```bash
npm install
npm run dev
```

Open `http://localhost:5173`.

## Folder Structure

```text
src/
  app/
    routes/
      paths.ts                # Central route definitions
  components/                # Shared UI building blocks
    auth/
    dashboard/
    landing-page/
    layout/
  features/                  # Feature-owned code
    applications/
      components/
      pages/
      constants.ts
      types.ts
    auth/
      pages/
    dashboard/
      pages/
    home/
      pages/
    onboarding/
      pages/
    profile/
      components/
      hooks/
      pages/
      constants.ts
      storage.ts
      types.ts
    wellness/
      pages/
  main.tsx
  App.tsx
```

## Page Ownership

- `Home`: `src/features/home/pages/HomePage.tsx`
- `Login`: `src/features/auth/pages/LoginPage.tsx`
- `Sign Up`: `src/features/auth/pages/SignUpPage.tsx`
- `Dashboard`: `src/features/dashboard/pages/DashboardPage.tsx`
- `Create Profile`: `src/features/onboarding/pages/CreateProfileStepOnePage.tsx`
- `Feeling Step`: `src/features/onboarding/pages/CreateProfileStepTwoPage.tsx`
- `Deep Breathing`: `src/features/wellness/pages/DeepBreathingPage.tsx`
- `Chakra Meditation`: `src/features/wellness/pages/ChakraMeditationPage.tsx`
- `Profile Initial/Edit/View/Plan`: `src/features/profile/pages/*`
- `Applications`: `src/features/applications/pages/*`

## Tech Stack

- React 19
- Vite 6
- TypeScript 5
- Tailwind CSS 4
- React Router 7
