# Vexora Digital — Portfolio Website

> **"AI Creativity. Digital Excellence."**
> Professional portfolio for **HAFIZ** — AI Creator & Web Developer.
> Showcasing AI Video Creation, Modern Website Development, AI Graphic Design, and AI Advertising & Promotional Content.

---

## 🌟 Overview & Key Features

- **Creator & Brand**: **HAFIZ** | **Vexora Digital**
- **Professional Title**: AI Creator & Web Developer
- **Brand Identity**: Clean, premium white minimal design with dark navy/charcoal typography and subtle blue & cyan accents.
- **Custom Brand Vector Mark**: Mathematical abstract 'V' emblem and modern typographic wordmark (SVG, razor-sharp at all resolutions).
- **Creator Portrait**: Real personal photograph of Hafiz integrated seamlessly in the About Me profile card with circular framing and responsive styling.
- **WhatsApp Direct Integration**:
  - Direct WhatsApp links configured throughout (Hero, Contact, and Footer).
  - Target URL: `https://wa.me/923262126950`
  - WhatsApp Number: `03262126950` (`+923262126950`)
- **Exactly Four Approved Skills**:
  1. **AI Video Creation**
  2. **Website Development**
  3. **AI Graphic Design**
  4. **AI Advertising & Promotional Content**
- **5 Comprehensive Concept Projects**:
  1. **Savor & Fire Artisan Grill** — 5-post coordinated social campaign & design system.
  2. **LUMINA Botanicals** — Luxury product video ad with 3-beat storyboard & cinematic treatment.
  3. **Apex Cloud Solutions** — Responsive SaaS landing page with interactive metric simulation.
  4. **NovaPulse Smartband** — Futuristic AI promotional video sequence & biometric HUD.
  5. **KROMA Studios** — Multi-format retail advertising package (Story 9:16, Feed 1:1, Banner 16:9).
- **Interactive Project Modal**: Opens rich case study modal with full objectives, problem breakdown, creative solutions, asset deliverables list, and tools used.
- **Interactive Portfolio Filters**: Live instant filtering by category: *All*, *AI Videos*, *Websites*, *Graphic Design*, and *Advertising*.
- **4-Step Creative Process**: Clear *Discover → Plan → Create → Deliver* workflow.
- **Why Choose Vexora Digital**: 6 value pillars highlighting tailored workflows, AI assistance, and visual craftsmanship.
- **Real Client Inquiry Form**: Validates inputs, handles service pre-selection, and connects directly to Formspree, Web3Forms, or direct email client (no fake success states).
- **Zero Heavy Dependencies**: Pure semantic HTML5, modern CSS3 (Custom properties, Flexbox, Grid), and modular vanilla JavaScript. Runs instantly in any browser without npm install or build friction.
- **Accessibility & Performance**: Mobile-first responsive layout, WCAG AA color contrast, keyboard-accessible modals, skip links, and reduced-motion support.

---

## 📁 Project Structure

```text
VEXORA DIGITAL/
│
├── index.html                   # Master semantic HTML5 document
├── README.md                    # Comprehensive setup & customization guide
│
├── css/
│   └── style.css                # Master stylesheet (theme tokens, components, responsive rules)
│
├── js/
│   ├── config.js                # Centralized profile, contact links, and brand config
│   ├── projects-data.js         # Centralized project case studies & deliverables data
│   └── main.js                  # Application logic (filters, modal, form validation, drawer)
│
└── assets/
    ├── brand/
    │   ├── logo.svg             # Vexora Digital primary wordmark + abstract V mark
    │   ├── logo-mark.svg        # Standalone square icon mark / favicon
    │   ├── hafiz-profile.png    # Official uploaded photograph of Hafiz
    │   └── profile-placeholder.svg # Fallback avatar graphic
    │
    └── projects/
        ├── hero-composition.svg # Layered multi-discipline isometric hero visual
        ├── project1-restaurant.svg
        ├── project2-skincare-video.svg
        ├── project3-website.svg
        ├── project4-ai-promo.svg
        └── project5-retail-fashion.svg
```

---

## 🚀 How to Run the Website Locally

Because this project is built using modern standards-compliant web technologies with zero compile-time dependencies, you can run it immediately without installing Node or NPM:

### Option 1: Direct Double-Click (Immediate)
Simply double-click `index.html` in your file explorer, and it will open in Chrome, Edge, Safari, or Firefox.

### Option 2: VS Code Live Server (Recommended for Development)
1. Open the `VEXORA DIGITAL` folder in Visual Studio Code.
2. Install the **Live Server** extension (by Ritwick Dey).
3. Right-click `index.html` and choose **"Open with Live Server"**.
4. The site will run at `http://127.0.0.1:5500` with hot-reloading on save.

### Option 3: Python Built-In Server (If Python is installed)
```bash
python -m http.server 8000
```
Then visit `http://localhost:8000` in your web browser.

---

## ✏️ How to Customize & Update Information

### 1. Update Contact & Social Media Links
In `js/config.js`, update the `contact` block:
```javascript
contact: {
  email: "vexoradigital00@gmail.com",
  whatsappNumber: "03262126950",
  whatsappInternational: "+923262126950",
  whatsappUrl: "https://wa.me/923262126950",
  linkedin: "https://linkedin.com/in/your-username",
  instagram: "https://instagram.com/your-username",
  github: "https://github.com/your-username",
  
  // Connect a free backend form service:
  formspreeEndpoint: "https://formspree.io/f/your_formspree_id"
}
```

---

## 🎨 How to Replace Demo Projects With Real Client Work

All project content is cleanly organized in `js/projects-data.js`.

### Adding or Updating a Project:
1. Open `js/projects-data.js`.
2. Locate the project you want to modify (e.g., `project-1`, `project-2`).
3. Replace the fields with your actual client project:
   ```javascript
   {
     id: "project-1",
     title: "Client Brand Name — Real Project Title",
     category: "Websites",
     filterCategories: ["websites"],
     label: "COMPLETED PROJECT",                 // Change from "CONCEPT PROJECT"
     thumbnail: "assets/projects/client-cover.jpg",
     subtitle: "High-Converting Redesign",
     clientType: "Direct-to-Consumer Client",
     summary: "Brief overview of what was built.",
     objective: "The goal the client hired you to achieve.",
     challenge: "The technical or creative difficulty faced.",
     solution: "How you executed the solution.",
     tools: ["Semantic HTML5", "Modern CSS", "Figma"],
     deliverables: [
       "Custom Responsive Website",
       "Product Page Optimization",
       "Lead Generation Setup"
     ]
   }
   ```
4. Save the file. The portfolio grid, modal, and category filters automatically refresh!

---

## 📬 Configuring the Contact Form Backend

The inquiry form is built with full error handling and validation. To receive customer inquiries directly to your inbox:

### Option A: Free Formspree Setup (Recommended - 2 Minutes)
1. Go to [https://formspree.io](https://formspree.io) and create a free account.
2. Click **"+ New Form"** and enter your email address.
3. Formspree will provide a URL like `https://formspree.io/f/mqkbrwop`.
4. Open `js/config.js` and paste it into `formspreeEndpoint`:
   ```javascript
   formspreeEndpoint: "https://formspree.io/f/mqkbrwop"
   ```
5. Any submissions on the website will now be delivered straight to your email inbox!

### Option B: Free Web3Forms Setup
1. Visit [https://web3forms.com](https://web3forms.com) and get an Access Key.
2. In `index.html`, set the form action to `https://api.web3forms.com/submit`.

### Option C: Direct Mail Client Fallback (Built-in)
If `formspreeEndpoint` is left blank, the form automatically generates a pre-formatted message in the user's default email client (`mailto:`) directed to your email address, ensuring no inquiries are ever lost.

---

## 🌐 How to Publish & Deploy Online (Free)

You can deploy Vexora Digital in under 3 minutes on any modern static hosting service:

### 1. GitHub Pages (Free)
1. Create a new GitHub repository called `vexora-digital`.
2. Push all project files to the repository.
3. In GitHub, go to **Settings > Pages**.
4. Under **Source**, select `main` branch and `/ (root)`, then click **Save**.
5. Your website will be live at `https://<your-username>.github.io/vexora-digital/`!

### 2. Vercel (Free)
1. Go to [vercel.com](https://vercel.com).
2. Connect your GitHub repository or drag and drop the `VEXORA DIGITAL` folder.
3. Click **Deploy**. Vercel will provide a fast global CDN URL and free SSL certificate.

### 3. Netlify (Free)
1. Go to [netlify.com](https://netlify.com).
2. Drag and drop the `VEXORA DIGITAL` folder into the Netlify Drop area.
3. Your website is instantly live with a custom domain option!

---

## 🛡️ Brand & Rights
- **Personal Name**: HAFIZ
- **Brand Name**: Vexora Digital
- **Tagline**: *"AI Creativity. Digital Excellence."*
- **WhatsApp**: 03262126950 (+923262126950)
