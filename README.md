# 🌍 TravelVista — Travel-Friendly Hotel Booking Website

TraVista is a modern and responsive travel website built using **Next.js 13 App Router**. It offers users a seamless experience for exploring destinations, getting travel help, and securely booking hotels online. 

## ✨ Features

- 🏨 Online Hotel Booking System
- 📍 Destination Information
- 🙋‍♂️ Travel Support and Help Sections
- 📞 Contact Form
- 🔐 Authentication System
- 🧮 Stats & Hero Sections on Homepage
- 📱 Fully Responsive Design
- 🌐 SEO Optimized Pages

## 📁 Project Structure

```bash
app/
│
├── about/ # About Us Page
├── auth/ # Authentication Pages (Login/Register)
├── booking/ # Hotel Booking Pages
├── contact/ # Contact Form Page
├── help/ # Help & FAQs
├── support/ # Support Page
├── globals.css # Global Styles
├── layout.js # Root Layout for App Router
└── page.js # Homepage
components/
├── Footer.js # Footer Component
├── Header.js # Header Component
├── HeroSection.js # Homepage Hero Banner
├── StatsSection.js # Travel Stats Display
└── WelcomePage.js # Welcome/Intro Section
public/
├── assets/ # Static Assets (Images, Icons)
├── bengal_travista.json # Destination or Cultural JSON Data
├── help.json # Help Content JSON
└── t.webp # Banner or logo image
```

## 🛠️ Tech Stack

- **Framework:** Next.js 13 (App Router)
- **Languages:** JavaScript, HTML, CSS
- **Styling:** CSS Modules / Global CSS
- **Hosting Ready:** Vercel / Netlify compatible
- **Auth Support:** Ready for integration (Email/Phone/Google)
- **Data Format:** JSON (for help & destination data)

## 🚀 Getting Started

### Prerequisites

- Node.js >= 18
- npm or yarn

### Installation

```bash
git clone https://github.com/yourusername/travelvista.git
cd travelvista
npm install
```

### Run the development server

```bash
npm run dev
# or
yarn dev
```
Open http://localhost:3000 to see the app in action.

## 🔧 Customization
- Update JSON Data: Modify public/help.json or bengal_travista.json to match your own content.

- Add New Pages: Create new folders inside the app/ directory.

- Styling: Use globals.css for global styles or create module-based CSS.

## 📌 TODO
- ✅ Add hotel filtering & search

- ✅ Integrate booking form with database

- ⏳ Payment gateway integration

- ⏳ Multi-language support

## 🤝 Contributing
Contributions, issues, and feature requests are welcome!
Feel free to check the issues page.

## 📄 License
This project is licensed under the MIT License.