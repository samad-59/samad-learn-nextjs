# React + Vite + React Router Navigation App - Complete Step-by-Step Guide

## Project Overview
Hum ne ek **modern React application** banaya hai jo:
- **Vite** (fast build tool) use karta hai
- **React Router** se navigation handle karta hai
- **Full-width header navbar** with active state indicator
- **Three pages** (Home, About, Services) with dynamic content

---

## Step 1: Project Setup (Base Foundation)

### 1.1 Vite Project Initialize
```bash
npm create vite@latest my-app -- --template react
cd my-app
npm install
```

**Kya hota hai?**
- `package.json` - dependencies define karta hai
- `vite.config.js` - build configuration
- `src/main.jsx` - app ka entry point
- `src/App.jsx` - main component

### 1.2 Project Structure (Shuruaat)
```
src/
├── App.jsx          (Main component)
├── App.css          (Styling)
├── main.jsx         (Entry point)
├── index.css        (Global styles)
└── pages/
    ├── Home.jsx
    ├── About.jsx
    └── Services.jsx
```

---

## Step 2: React Router Setup

### 2.1 Install React Router Package
```bash
npm install react-router-dom
```

**Kyun?** 
- `react-router-dom` se pages ke beech navigate kar sakte hain
- URL change hoti hai (example: `/`, `/about`, `/services`)
- Browser history maintain hoti hai

### 2.2 Hooks Samajhiye
**3 Important Hooks:**

```javascript
import { useLocation, useNavigate } from 'react-router-dom'

// useLocation() - current page path batata hai
const location = useLocation()
console.log(location.pathname) // "/" ya "/about" ya "/services"

// useNavigate() - programmatically navigate karne ke liye
const navigate = useNavigate()
navigate('/about') // /about page par jaao
```

---

## Step 3: App.jsx - Main Component Structure

### 3.1 Complete Code Breakdown

```javascript
// 1. IMPORTS - Sabse important cheezein laate hain
import React from 'react'
import { 
  BrowserRouter as Router,  // Browser history handle karta hai
  Routes,                   // Multiple routes define karte hain
  Route,                    // Single route define karta hai
  useLocation,              // Current path jaanne ke liye
  useNavigate               // Navigate karne ke liye
} from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'

// 2. NAVBAR COMPONENT - Navigation bar banate hain
function NavBar() {
  const location = useLocation()      // Aaj kis page par hain?
  const navigate = useNavigate()      // Kisi aur page par jaao

  // Active state check karta hai
  const isActive = (path) => location.pathname === path

  return (
    <header className="topbar">      {/* Full-width header */}
      <nav className="nav">           {/* Navigation buttons container */}
        {/* HOME BUTTON */}
        <button 
          className={`nav-btn ${isActive('/') ? 'active' : ''}`}
          onClick={() => navigate('/')}
        >
          Home
        </button>

        {/* ABOUT BUTTON */}
        <button 
          className={`nav-btn ${isActive('/about') ? 'active' : ''}`}
          onClick={() => navigate('/about')}
        >
          About
        </button>

        {/* SERVICES BUTTON */}
        <button 
          className={`nav-btn ${isActive('/services') ? 'active' : ''}`}
          onClick={() => navigate('/services')}
        >
          Services
        </button>
      </nav>
    </header>
  )
}

// 3. APPLAYOUT COMPONENT - Page layout + Routes
function AppLayout() {
  return (
    <div className="app-root">        {/* Main container */}
      <NavBar />                      {/* Navigation bar */}
      
      <main className="hero">         {/* Content area */}
        <Routes>
          {/* "/" path par Home page show hoga */}
          <Route path="/" element={<Home />} />
          
          {/* "/about" path par About page show hoga */}
          <Route path="/about" element={<About />} />
          
          {/* "/services" path par Services page show hoga */}
          <Route path="/services" element={<Services />} />
        </Routes>
      </main>
    </div>
  )
}

// 4. APP COMPONENT - Router wrap karte hain
function App() {
  return (
    <Router>                          {/* Browser routing enable karo */}
      <AppLayout />
    </Router>
  )
}

export default App
```

### 3.2 Key Concepts

**isActive Function:**
```javascript
const isActive = (path) => location.pathname === path
```
- Agar current path "/about" hai aur button path "/about" hai → `isActive` true return hoga
- True hone par `className` mein 'active' class add hoga
- CSS se active button ko different styling milegi

**onClick Handler:**
```javascript
onClick={() => navigate('/')}
```
- Button click hone par `navigate('/')` call hota hai
- App root page ("/") par jata hai
- URL bar mein change dikh jata hai

---

## Step 4: Page Components (Home, About, Services)

### 4.1 Home.jsx
```javascript
import React from 'react'

const Home = () => {
  return (
    <>
      <h1 className="hero-title">Home Page</h1>
      <p className="hero-sub">Welcome to our website!</p>
    </>
  )
}

export default Home
```

**Kya hota hai?**
- `<>` aur `</>` = React Fragment (extra div ke bina content wrap karta hai)
- `className="hero-title"` = CSS styling apply hota hai
- Jab user "/" path par ho, ye component render hota hai

### 4.2 About.jsx
```javascript
import React from 'react'

const About = () => {
  return (
    <>
      <h1 className="hero-title">About Page</h1>
      <p className="hero-sub">Learn more about us and our mission.</p>
    </>
  )
}

export default About
```

### 4.3 Services.jsx
```javascript
import React from 'react'

const Services = () => {
  return (
    <>
      <h1 className="hero-title">Services Page</h1>
      <p className="hero-sub">Explore our premium services and solutions.</p>
    </>
  )
}

export default Services
```

---

## Step 5: CSS Styling (App.css)

### 5.1 Full CSS Code with Explanation

```css
/* ========== ROOT & LAYOUT ========== */
#root {
  width: 100%;              /* Pura width use karo */
  margin: 0;                /* Koi margin nahi */
  padding: 0;               /* Koi padding nahi */
  text-align: center;
}

.app-root {
  min-height: 100vh;        /* Pura screen height */
  display: flex;            /* Flexbox use kar */
  flex-direction: column;   /* Vertical stacking */
  color: #eaeaea;           /* Light gray text */
}

/* ========== HEADER / NAVBAR ========== */
.topbar {
  display: flex;
  justify-content: center;  /* Navbar ko center mein rakho */
  padding: 1rem 0;          /* Top aur bottom padding */
  width: 100%;              /* Pura width */
  background: #1e1e1e;      /* Dark gray background */
  box-shadow: 0 6px 18px rgba(0,0,0,0.6);  /* Shadow effect */
}

.nav {
  display: flex;
  gap: 2.25rem;             /* Buttons ke beech space */
  align-items: center;      /* Vertical center */
  padding: 0.75rem 2rem;    /* Padding inside nav */
}

/* ========== NAV BUTTONS ========== */
.nav-btn {
  background: transparent;  /* Transparent background */
  color: #cfcfcf;          /* Light gray text */
  border: none;            /* Koi border nahi */
  padding: 0.5rem 1rem;    /* Button ke andar space */
  font-size: 1.05rem;      /* Text size */
  border-radius: 8px;      /* Rounded corners */
  cursor: pointer;         /* Pointer cursor */
  transition: color 150ms, border-color 150ms, background-color 150ms;
}

.nav-btn:hover {           /* Mouse hover karne par */
  color: #ffffff;          /* White text */
}

/* ========== ACTIVE NAV BUTTON ========== */
.nav-btn.active {
  color: #9aa0ff;          /* Purple text */
  background: linear-gradient(180deg, rgba(124,95,255,0.06), rgba(124,95,255,0.02));
  /* Purple gradient background */
  
  box-shadow: 0 0 0 2px rgba(124,95,255,0.12) inset, 0 6px 14px rgba(0,0,0,0.6);
  /* Inner aur outer shadow */
  
  border: 1px solid rgba(124,95,255,0.6);
  /* Purple border */
}

/* ========== HERO SECTION ========== */
.hero {
  flex: 1;                  /* Baaki sara space use karo */
  display: flex;
  flex-direction: column;
  align-items: center;      /* Horizontal center */
  justify-content: center;  /* Vertical center */
  text-align: center;
  padding: 3.5rem 1rem;
}

.hero-title {
  font-size: 3.4rem;        /* Bada heading */
  margin: 0 0 0.75rem;      /* Neech mein space */
  color: #fff;              /* White text */
}

.hero-sub {
  color: #bdbdbd;           /* Gray subtitle */
  font-size: 1.1rem;
}

/* ========== MOBILE RESPONSIVE ========== */
@media (max-width: 560px) {
  .nav { gap: 1rem; }           /* Chhota devices par kam gap */
  .hero-title { font-size: 2.2rem; }  /* Chhota heading */
}
```

### 5.2 CSS Concepts Explained

**Flexbox (flex):**
```css
display: flex;
flex-direction: column;  /* Items ko vertically stack karo */
justify-content: center; /* Horizontal center */
align-items: center;     /* Vertical center */
```

**Active Button Styling:**
```css
.nav-btn.active {
  color: #9aa0ff;  /* Purple color */
  border: 1px solid rgba(124,95,255,0.6);  /* Purple border */
  background: linear-gradient(...);        /* Gradient effect */
  box-shadow: ...;                         /* Glow effect */
}
```

**Transitions (Smooth Animation):**
```css
transition: color 150ms, border-color 150ms, background-color 150ms;
```
- Jab button hover hota hai, smooth animation hota hai
- 150ms mein change hota hai

---

## Step 6: Global Styles (index.css)

```css
:root {
  font-family: system-ui, Avenir, Helvetica, Arial, sans-serif;
  color: rgba(255, 255, 255, 0.87);
  background-color: #242424;  /* Dark background */
}

body {
  margin: 0;
  display: flex;
  place-items: center;
  min-height: 100vh;
}

h1 {
  font-size: 3.2em;
  line-height: 1.1;
}

button {
  border-radius: 8px;
  padding: 0.6em 1.2em;
  cursor: pointer;
  transition: border-color 0.25s;
}
```

---

## Step 7: Entry Point (main.jsx)

```javascript
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```

**Kya hota hai?**
1. `index.html` ke andar `<div id="root"></div>` dhundta hai
2. Wahan par React app render karta hai
3. `<App />` component load hota hai

---

## Step 8: HTML Entry Point (index.html)

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>React Router App</title>
  </head>
  <body>
    <div id="root"></div>  <!-- React yahan render hota hai -->
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

---

## Step 9: Complete Workflow Diagram

```
browser opens http://localhost:5173/
        ↓
    index.html loads
        ↓
    main.jsx runs
        ↓
    createRoot(document.getElementById('root')).render(<App />)
        ↓
    App.jsx loads
        ↓
    <Router> wraps everything (Browser routing enabled)
        ↓
    <AppLayout /> renders
        ↓
    <NavBar /> renders (with useLocation hook)
        ↓
    <Routes> render matching page (Home/About/Services)
        ↓
    User clicks button (e.g., "About")
        ↓
    onClick={() => navigate('/about')} executes
        ↓
    URL changes to http://localhost:5173/about
        ↓
    useLocation() hook detects change
        ↓
    isActive('/about') becomes true
        ↓
    "About" button gets 'active' className
        ↓
    CSS styling applied (purple color, border, etc.)
        ↓
    <Route path="/about" element={<About />} /> renders
        ↓
    About page content displays
```

---

## Step 10: Running the Application

### 10.1 Development Server
```bash
npm run dev
```

**Output:**
```
  VITE v5.x.x  ready in 234 ms

  ➜  Local:   http://localhost:5173/
  ➜  press h to show help
```

### 10.2 Test Karo
1. Browser mein `http://localhost:5173/` kholein
2. "Home" button active hona chahiye (purple color)
3. "About" button click karein → URL change hoga `/about`
4. "About" button ab active dikhega
5. Page content change hoga → "About Page" display hoga

---

## Step 11: Build for Production

```bash
npm run build
```

**Kya hota hai?**
- `dist/` folder banata hai
- Optimized production-ready files
- Deploy kar sakte ho

---

## Complete File Structure

```
project/
├── index.html                 (Entry HTML)
├── package.json               (Dependencies)
├── vite.config.js             (Vite config)
├── src/
│   ├── main.jsx               (Render point)
│   ├── App.jsx                (Main component - Router setup)
│   ├── App.css                (App styling)
│   ├── index.css              (Global styles)
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   └── Services.jsx
│   └── assets/                (Images, etc.)
└── dist/                      (Production build - after npm run build)
```

---

## Key Technologies Used

| Technology | Purpose | Install |
|-----------|---------|---------|
| **Vite** | Fast build tool & dev server | `npm create vite@latest` |
| **React** | UI library | Included with Vite |
| **React Router** | Client-side navigation | `npm install react-router-dom` |
| **CSS3** | Styling & animations | Built-in |
| **JavaScript ES6+** | Modern syntax | Built-in |

---

## Important Concepts Summary

### 1. **React Router Flow**
```
BrowserRouter → Routes → Route → Component
```

### 2. **Hooks Used**
- `useLocation()` - Current path jaanne ke liye
- `useNavigate()` - Navigate karne ke liye

### 3. **Active State Logic**
```javascript
const isActive = (path) => location.pathname === path
className={`nav-btn ${isActive('/') ? 'active' : ''}`}
```

### 4. **Component Rendering**
```javascript
<Routes>
  <Route path="/about" element={<About />} />
</Routes>
```
- Path match hone par element render hota hai

### 5. **CSS Flexbox**
```css
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
```
- Content ko center mein rakhne ke liye

---

## Troubleshooting

### Problem: "Cannot find module 'react-router-dom'"
**Solution:**
```bash
npm install react-router-dom
```

### Problem: CSS nahi apply ho rahi
**Solution:** Check karo:
1. `className` syntax sahi hai
2. CSS file import hai (`import './App.css'`)
3. Class names match ho rahi hain

### Problem: Active button nahi change ho rahi
**Solution:**
1. `useLocation()` hook correctly use ho rahi hai
2. `navigate()` function trigger ho rahi hai
3. Browser console mein error nahi hai

---

## Ab Khud Banao! (Custom App Checklist)

- [ ] **Step 1:** `npm create vite@latest my-custom-app -- --template react`
- [ ] **Step 2:** `npm install react-router-dom`
- [ ] **Step 3:** `App.jsx` mein Router setup karo
- [ ] **Step 4:** Page components banao (Custom pages)
- [ ] **Step 5:** CSS styling karo (Apna design)
- [ ] **Step 6:** Routes define karo
- [ ] **Step 7:** `npm run dev` se test karo
- [ ] **Step 8:** `npm run build` se production ready banao

---

## Helpful Links
- React Docs: https://react.dev
- React Router: https://reactrouter.com
- Vite: https://vitejs.dev
- CSS Flexbox: https://css-tricks.com/snippets/css/a-guide-to-flexbox/

---

**Bahut Mubarak! 🎉 Ab tu ek complete React routing app bana sakta hai!**
