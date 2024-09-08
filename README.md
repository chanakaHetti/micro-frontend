# Micro Frontend Project

This project demonstrates a micro frontend architecture using two different technologies: **Next.js** and **Nuxt.js**. Both applications are served under different ports, and the setup ensures seamless integration between them.

## Applications

- **Next.js**: A React-based framework for server-rendered or statically-exported React applications.
  - **Port**: 3001
- **Nuxt.js**: A Vue.js framework for server-side rendered applications and static site generation.
  - **Port**: 3002

## Folder Structure

```
micro-frontend/
├── next-app/ # Next.js application
├── nuxt-app/ # Nuxt.js application
├── package.json # Package file for managing scripts
├── README.md
```

## Setup and Installation

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/micro-frontend.git
cd micro-frontend
```

### 2. Install Dependencies

```bash
cd next-app
npm install

cd ../nuxt-app
npm install
```

### 3. Run the Applications

```bash
cd micro-frontend
npm run start
```

This will start the Next.js application on http://localhost:3001.

and,

This will start the Nuxt.js application on http://localhost:3002.
