# Frontend - Next.js + React

Klient aplikacji zbudowany w oparciu o Next.js oraz React, wykorzystujący biblioteki do zarządzania formularzami, walidacji i fetchowania danych.

---

## Główne zależności

- `next` — framework React z SSR (Server-Side Rendering) i innymi funkcjonalnościami  
- `react`, `react-dom` — biblioteki React  
- `react-hook-form` — prosty i wydajny sposób obsługi formularzy  
- `@hookform/resolvers` — integracja `react-hook-form` z biblioteką `zod` do walidacji  
- `zod` — schema validation dla TypeScript i JavaScript  
- `@tanstack/react-query` — zarządzanie asynchronicznymi zapytaniami i cache danych  

---

## Instalacja

1. Sklonuj repozytorium klienta:
   ```bash
   git clone <URL twojego repozytorium>
   cd <nazwa folderu z projektem>

## Uruchomienie
2. Uruchomienie aplikacji w trybie deweloperskim:
   npm run dev
   Budowanie aplikacji do produkcji:
   npm run build
   Uruchomienie produkcyjnej wersji aplikacji:
   npm start
 

## Struktura projektu
app/ — strony Next.js 
components/ — komponenty React
/lib/schemas/ — schematy walidacji Zod
