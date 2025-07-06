# 📁 Task 1: Expandable Sidebar

## 📝 Overview

This project is a fully functional, responsive **expandable sidebar** built using **HTML, CSS, and JavaScript**. The sidebar includes a logo placeholder, navigation links with icons, and a toggle button to open or collapse the sidebar smoothly.

---

## 🎯 Objectives

- Build a sidebar that expands and collapses on button click
- Include a logo section and 4–5 navigation links with icons
- Ensure a clean layout with a smooth transition effect
- Make the layout responsive for different screen sizes

---

## 🧱 Features

- ✅ Expandable/collapsible sidebar layout
- ✅ Navigation links with **Boxicons** icons
- ✅ Smooth width and visibility transition
- ✅ Responsive design using CSS variables and media queries
- ✅ Toggle button with rotate effect
- ✅ Accessible color contrast and hover states

---

## 🧩 Technologies Used

| Tech       | Purpose                        |
| ---------- | ------------------------------ |
| HTML       | Page structure                 |
| CSS        | Styling, layout, and animation |
| JavaScript | Sidebar toggle functionality   |
| Boxicons   | Icon library for nav links     |

---

## 🖼️ Layout Description

- The sidebar appears fixed to the left side of the screen
- It contains:
  - A **logo** placeholder at the top
  - 4 navigation links: Home, About, Contact, Settings
  - A **toggle button** at the bottom with a chevron icon
- When collapsed:
  - The sidebar width shrinks (`5rem`)
  - Navigation **labels are hidden**, only icons remain
- When expanded:
  - Full width (`12rem`) and **labels are visible**

---

## ⚙️ Toggle Behavior

The toggle button adds/removes the `sb-expanded` class on the `<body>`:

```javascript
const resizeButton = document.querySelector('[data-resize-btn]');
resizeButton.addEventListener('click', function(e) {
    e.preventDefault();
    document.body.classList.toggle('sb-expanded');
});
```

This dynamically adjusts:

* Sidebar width (`--sb-width`)
* Label visibility (`opacity`, `visibility`)
* Chevron icon rotation (visually shows direction)

## 📱 Responsive Design

* Uses `CSS variables` to control sidebar width
* Responsive layout with a `media query` that adjusts `main` margin for wider screens
* Works smoothly on both mobile and desktop

## 📂 File Structure

📁 sidebar-task
├── index.html         # HTML structure
├── styles.css         # CSS styles and transitions
└── script.js          # (Inline in HTML) toggle logic


## 🚀 How to Run

1. Download or clone the repo
2. Open `index.html` in a browser
3. Click the **Toggle** button in the sidebar to expand/collapse
4. Resize the browser window to test responsiveness


## 📌 Future Improvements

* Add tooltips to icons when collapsed
* Improve keyboard accessibility
* Extract JavaScript to a separate file (`script.js`)
* Support dark/light theme toggle
* Add real navigation routing or link actions


## 👨‍💻 Author

**Usman Khan**

[LinkedIn Profile](www.linkedin.com/in/usman-khan55) - www.linkedin.com/in/usman-khan55
