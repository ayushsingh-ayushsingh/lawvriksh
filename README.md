# 🚀 LawVriksh Frontend Intern Assignment

This repository contains both assignments required for the **LawVriksh Frontend Internship Challenge** – implemented with care to match the Figma design and deliver a clean, responsive, and interactive user experience.

## 📁 Overview

This codebase is split into two parts:

1. **Assignment 1** – A tabbed card layout with horizontal scrolling, animations, and the ability to add new cards.
2. **Assignment 2** – A dynamic vertical **Recent Activities Timeline** where you can add new activities with instant UI updates and persistence.

Both projects are built using:

- ⚛️ React (via Vite for fast dev experience)
- 🎨 Tailwind CSS for styling
- 💡 ShadCN/UI components for consistent UI patterns
- 💾 LocalStorage for persistent data
- 💻 pnpm as the package manager

---

## 🔧 Tech Stack

| Tech         | Why It Was Used |
|--------------|------------------|
| **React**    | Component-based structure, fast updates, and easy state management. |
| **Vite**     | Ultra-fast dev environment, instant HMR, better than CRA. |
| **Tailwind** | Utility-first CSS framework for rapid, responsive styling. |
| **ShadCN/UI**| Beautiful, accessible UI components to match modern design standards. |
| **LocalStorage** | To persist user-added cards and activities even after reloads. |
| **pnpm**     | Faster, more efficient package management. |

---

## 📦 How to Run This Project

> Make sure you have `pnpm` installed globally. If not, install it with:
```bash
npm install -g pnpm
````

### 🏃‍♂️ Steps to get started:

```bash
git clone https://github.com/your-username/lawvriksh.git
cd lawvriksh
pnpm install
pnpm dev
```

Now visit [http://localhost:5173](http://localhost:5173) in your browser!

---

## 📚 Features Breakdown

### Assignment 1 – Profile Page with Cards

* ✅ Header with logo, nav links, icons, and avatar.
* ✅ Sidebar with profile picture, name, bio, and follower count.
* ✅ **Tabbed card section**: Recent, Trending, and About cards.
* ✅ **Card carousel**: Smooth horizontal scroll (scroll-snap) and animations.
* ✅ **Add New Card** button that pops a modal form to add cards dynamically.
* ✅ State is stored in localStorage – reload, and your cards are still there.

### Assignment 2 – Recent Activities Timeline

* ✅ Vertical **timeline layout** with date on the left, event on the right.
* ✅ “Add Activity” form with:

  * Title (required)
  * Date (defaults to today)
  * Optional link
* ✅ Activities are inserted **in chronological order** (newest at the top).
* ✅ Stored in localStorage for persistence.
* ✅ Fully **responsive** layout – works great from mobile (320px) to desktop (1440px).

---

## 🧠 State Management Strategy

No Redux or external libs – just React’s built-in `useState`, `useEffect`, and `useContext` (where needed). Simpler and more readable for a compact project like this.

Activities and cards are saved into `localStorage` on every change using:

```tsx
useEffect(() => {
  localStorage.setItem("cards", JSON.stringify(cards));
}, [cards]);
```

On page load, initial values are read back and restored if present.

---

## ✨ Animations Used

* Fade-in + slide-in for cards and timeline items using Tailwind transitions.
* Scale-up on hover to make the UI feel interactive and polished.
* Modal transitions are powered by ShadCN Dialog components.

---

## 📐 Responsiveness

Tested across breakpoints (320px → 1440px). The layout gracefully collapses where needed:

* Card carousel becomes scrollable on small screens.
* Timeline turns into a stacked layout on mobile.

---

## 🚀 Deployment

This react project is deployed on:

* [Cloudflare](https://lawvriksh-ayush-singh.pages.dev/) @ [lawvriksh-ayush-singh.pages.dev](https://lawvriksh-ayush-singh.pages.dev/)

To harness the fast edge network of clouflare.

---

**Crafted with ❤️ by Ayush Singh**
