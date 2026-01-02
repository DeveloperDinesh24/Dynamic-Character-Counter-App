# ✍️ PostPulse - Dynamic Character Counter

A sleek, state-driven text editor that handles different posting constraints with real-time visual feedback. This project focuses on **Side Effects (`useEffect`)**, **Conditional Logic**, and **Data-Driven UI Styling**.



## 🚀 Live Demo
**Check it out here:** [👉 [PASTE_YOUR_NETLIFY_URL_HERE]]([PASTE_YOUR_NETLIFY_URL_HERE])

---

## 🧠 The "Vroom" Features
This project tackles the balance between User Experience (UX) and Data Validation:

* **Dual-Mode Switching:** Toggle between **Bio Mode** (Strict 25ch limit) and **Tweet Mode** (50ch limit).
* **Automated Sync:** Uses `useEffect` to dynamically update constraints based on the selected post type.
* **The "Gatekeeper" Logic:** Prevents users from exceeding the "Hard Limit" during active typing.
* **Dynamic Visual Feedback:** The UI transitions from **Green (Safe)** to **Red (Limit Reached)** using conditional Tailwind classes.
* **Atomic Commits:** Built and refined through a series of tactical commits to ensure clean code and bug tracking.

## 🛠️ Tech Stack
* **React (Vite)** - For reactive state management and hooks.
* **Tailwind CSS** - For dynamic utility-first styling and smooth transitions.
* **JavaScript (ES6+)** - Logic for text slicing and percentage calculations.

## 🏗️ Architecture Note
The app utilizes a centralized state approach to manage the relationship between the input content and the shifting limits:
* **State Management:** Tracks `typeOfPost`, `limit`, and `value` independently.
* **Lifecycle Control:** Employs `useEffect` to ensure the UI stays in sync when the user toggles between modes.
* **Visual Logic:** Uses template literals to inject dynamic classes into the DOM based on state thresholds.

---

## 👨‍💻 Developed By

**[YOUR_NAME]** *Frontend Developer* *Logic enthusiast, React learner, and Berlin seeker.* 🕉️

---