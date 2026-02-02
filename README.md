# 🚀 TurboRepo Express & Next.js Scaffold

A high-performance, modern fullstack monorepo boilerplate. This scaffold is optimized for **Node 22**, using **Turbo** to manage a seamless workflow between an Express backend and Next.js frontends.

---

## 🏗️ Architecture

This monorepo is managed by [Turbo](https://turbo.build/). It allows you to run multiple applications simultaneously with shared configurations.

- **apps/api**: Express.js backend (Node 22 + TypeScript + tsx)
- **apps/web**: Next.js main web application
- **apps/docs**: Next.js documentation site
- **packages/**: Shared TypeScript and ESLint configurations

## ⚡ Tech Stack

* **Runtime:** [Node.js 22](https://nodejs.org/) (Utilizing native `--watch` mode)
* **Monorepo Tool:** [Turbo](https://turbo.build/)
* **Backend:** [Express.js](https://expressjs.com/) with ES Modules
* **Frontend:** [Next.js 15+](https://nextjs.org/)
* **Language:** [TypeScript](https://www.typescriptlang.org/) (Strict mode enabled)
* **TS Runner:** [tsx](https://tsx.is/) (Fastest TypeScript execution)

## 🛠️ Getting Started

### 1. Prerequisites
Make sure you have **Node.js 22.x** installed. You can check your version by running:
```bash
node -v

```

2. Installation
   # Clone the repository
git clone [https://github.com/your-username/turborepo-express-next-scaffold.git](https://github.com/your-username/turborepo-express-next-scaffold.git)

# Enter the directory
cd turborepo-express-next-scaffold

# Install dependencies for all apps
npm install

3. Development
Start the entire ecosystem (API, Web, and Docs) with one command:
```bash
npm run dev
```

To run only the backend API:
```bash
npx turbo run dev --filter=api
```
API Reference
The backend operates on http://localhost:5000.

Method	Endpoint	Description
GET	/api/v1	Health check - verify if API is alive

⚙️ Development Standards
ES Modules: This project uses "type": "module".

Import Logic: Always include the .js extension in your imports (e.g., import route from "./route/index.js") as required by Node 22 ESM standards.

Type Safety: Use import type for Express Request/Response objects to satisfy verbatimModuleSyntax requirements.
