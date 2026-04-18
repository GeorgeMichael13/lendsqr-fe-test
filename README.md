Lendsqr Frontend Engineering Assessment

This is a pixel-perfect implementation of the Lendsqr Admin Console, built as part of the Frontend Engineering recruitment process. The application focuses on high visual fidelity, scalable architecture, and robust data handling.

Live Link

Deployment: https://georgemichael13-lendsqr-fe-test.vercel.app
(Note: Ensure your Vercel/Netlify project name matches this exactly before final submission)

Tech Stack & Tools

Framework: React (Vite)

Language: TypeScript (Compulsory)

Styling: SCSS (Variables, Mixins, and BEM naming convention)

State Management: React Context API

Data Fetching: Axios

Storage: LocalStorage (for User Details persistence)

Testing: Jest / React Testing Library

Mock API: Json-generator.com (500 records generated)

Key Features & Architectural Decisions

Pixel Perfection: Every margin, padding, and font-weight has been matched 100% to the Figma design using SCSS variables and custom mixins for consistent layout.

Responsiveness: Implemented a mobile-first approach to ensure the dashboard remains functional and aesthetic across all device types, specifically handling complex table views on smaller screens.

Data Management: Optimized handling of 500+ mock user records with client-side pagination and robust filtering logic.

Persistence: User detail views leverage LocalStorage to ensure data consistency and reduce redundant API calls during navigation.

Component Pattern: Followed a modular atomic design pattern to ensure reusability and maintainability of UI elements like Buttons, Inputs, and Modals.

Getting Started
Prerequisites
Node.js (v18+)

npm or yarn

Installation
Clone the repository:

Bash
git clone https://github.com/GeorgeMichael13/lendsqr-fe-test.git
Install dependencies:

Bash
npm install

Run the development server:

Bash
npm run dev

Testing

To run the positive and negative scenario unit tests:

Bash

npm test

Decisions & Trade-offs

Vite over CRA: Chosen for significantly faster build times and better Hot Module Replacement (HMR) during development.

Context API: Used for state management to avoid "prop drilling" across the Sidebar and User views without the overhead of Redux for this specific scope.

SCSS Modules: Employed to prevent style leakage and ensure that component styles remain encapsulated.
