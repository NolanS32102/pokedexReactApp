# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
# Pokédex React App

Welcome to your own custom Pokédex! This is a React-based application that allows users to browse, filter, and star their favorite Pokémon using live data from the [PokéAPI](https://pokeapi.co/).


---

## Features

- **Search** Pokémon by name
- **Filter** by Pokémon type
- **Mark** favorite Pokémon with a star
- **View stats** in a popup on hover
- **Color-coded cards** based on Pokémon types
- Responsive grid layout, styled to resemble trading cards
- Error handling for API requests
- "Sad Pikachu" image when no results are found

---

## Tech Stack

- React (with Hooks)
- CSS Flexbox
- PokéAPI (https://pokeapi.co/)
- Vite (or Create React App, depending on your setup)

---

## Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/pokedex-react.git
cd pokedex-react

# Install dependencies
npm install

# Start the dev server
npm run dev
