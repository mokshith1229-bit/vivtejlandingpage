# CallFlow CRM | Sales Platform landing page 

<div align="center">
  <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80" alt="CallFlow Dashboard Mockup" width="800" />
</div>

<br />

**CallFlow** is a modern, high-velocity CRM platform engineered specifically for outbound sales teams, call centers, and fast-growing startups. It combines intelligent dialing, automated WhatsApp/SMS workflows, and industry-specific CRM solutions into a beautiful, lightning-fast interface.

**[Live Demo / Website](https://landingpagevivtej.netlify.app/)** *(Replace with actual domain)*

---

## 🚀 Key Features

### 📞 Core Dialing & Automation
* **One-Click Dialer:** Call 100+ leads an hour without manual dialing. Auto-logs outcomes.
* **Smart Workflows:** Drag-and-drop automation for follow-ups and lead routing.
* **Automatic Call Recording:** Enterprise-grade encryption, AI-transcribed notes.
* **WhatsApp Broadcasts:** Send bulk, personalized WhatsApp messages that convert.

### 🏢 Industry-Specific Solutions
The platform includes tailored CRM interfaces and workflows out-of-the-box for:
* **Real Estate CRM:** Manage properties, buyers, and high-ticket pipelines.
* **Education CRM:** Streamline student admissions and counselor follow-ups.
* **Loan & Finance CRM:** Secure document collection and fast approval tracking.
* **B2B / SaaS CRM:** Multi-touch outbound cadences for Account Executives.

### 📊 Reporting & Analytics
* **Agents Leaderboard:** Gamify your sales floor with real-time performance tracking.
* **Hour-by-Hour Reports:** Identify peak connection times and optimize calling schedules.
* **Sales Pipeline:** Kan-ban boards for drag-and-drop deal management.

---

## 💻 Tech Stack

This marketing and application shell is built using modern frontend technologies optimized for performance and beautiful, 3D CSS aesthetics.

* **Framework:** [React 18](https://reactjs.org/)
* **Build Tool:** [Vite](https://vitejs.dev/) - Lightning fast HMR
* **Styling:** [Tailwind CSS 3](https://tailwindcss.com/) - Utility-first styling with complex custom glassmorphism & gradients.
* **Icons:** [Lucide React](https://lucide.dev/)
* **Animations:** Framer Motion *(implicit in UI design)*
* **Routing:** React Router v6

---

## 🛠️ Local Development & Setup

Follow these instructions to run the application locally.

### Prerequisites
Make sure you have Node.js (v18+) and npm installed.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/mokshith1229-bit/vivtejlandingpage.git
   cd vivtejlandingpage
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```
   *or if you use yarn:*
   ```bash
   yarn install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **View the app:**
   Open your browser and navigate to `http://localhost:5173`.

### Production Build

To build the app for production (creates a `/dist` folder):
```bash
npm run build
```

---

## 📂 Project Structure

A quick overview of the vital directories in this project:

```text
src/
├── components/          # Reusable UI components (Navbar, Footer, Modal)
│   ├── features/        # Complex 3D components for the marketing pages
│   └── layout/          # Wrapper layouts (FeaturePageLayout)
├── pages/               # Route-level components
│   ├── features/        # 16+ core product feature pages
│   ├── industries/      # 10+ industry-specific CRM solutions
│   ├── case-studies/    # Client success stories
│   ├── company/         # About & Careers
│   ├── legal/           # Privacy Policy & TOS
│   └── (other core pages like Pricing, Webinars, etc.)
├── App.tsx              # Main React Router configuration bridging ~40 routes
└── main.tsx             # React entry point
```

---

## 🎨 Design Philosophy

This project uses a "Cosmic SaaS" aesthetic. Key design tokens include:
- Deep indigo and midnight blue backgrounds (`#0A0B1A`).
- Vibrant gradients (Emerald, Amber, Rose, Indigo) used for abstract blurs and highlights.
- `preserve-3d` CSS properties for tilting mockups and parallax scrolling effects.
- Glassmorphism overlays with `backdrop-blur`.

---

## 📄 License & Legal

Copyright © 2026 CallFlow CRM. All rights reserved. 
*(Update this section based on your actual licensing requirements)*
