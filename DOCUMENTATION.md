# Kids Survivor Liberia - Project Documentation

## 1. Project Overview
**Kids Survivor Liberia** is a React-based web application built to represent a non-profit/NGO organization focused on youth recovery, drug abuse prevention, community resilience, and empowerment in Liberia. The website showcases the organization's impact, programs, team, and county-level operations, while also providing avenues for donations, volunteering, and partnerships.

## 2. Technology Stack
The project is built using modern web development tools and libraries:
- **Core Framework**: React (v19) via Vite
- **Routing**: React Router DOM (v7)
- **Styling**: Tailwind CSS (v4)
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Notifications**: React Toastify
- **Email Integration**: EmailJS (for contact forms)
- **Payment Processing**: Flutterwave (for donations)

## 3. Getting Started

### Prerequisites
- Node.js installed on your machine.
- NPM or Yarn for package management.

### Installation
1. Clone the repository and navigate to the project directory:
   ```bash
   cd "Kids Survivor Liberia"
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

### Available Scripts
- `npm run dev`: Starts the Vite development server with Hot Module Replacement (HMR).
- `npm run build`: Bundles the app for production.
- `npm run preview`: Locally previews the production build.
- `npm run lint`: Runs ESLint to identify and report on patterns in your code.

## 4. Directory Structure
The application code lives inside the `src/` directory.

```
src/
├── assets/         # Static assets (images, logos, SVGs)
├── components/     # Reusable UI components
├── data/           # Static data files (e.g., counties.js)
├── hooks/          # Custom React hooks
├── pages/          # Top-level page components (configured in React Router)
├── App.jsx         # Main application layout and routing configuration
├── index.css       # Global styles and Tailwind configuration
└── main.jsx        # Application entry point
```

## 5. Routing and Pages
The application utilizes `react-router-dom` for client-side routing. The main routes are defined in `App.jsx`. All pages (except `NotFound`) are wrapped in a standard `Layout` component that likely manages consistent padding/margins.

**Available Pages:**
- `/` - **Home**: Landing page with hero section, impact highlights, and calls to action.
- `/about` - **About**: Organization history, mission, and vision.
- `/transparency` - **Transparency**: Financial reports and operational transparency.
- `/impact` - **Impact**: Detailed overview of the organization's impact.
- `/projects` - **Projects**: Ongoing and completed initiatives.
- `/gallery` - **Gallery**: Photo gallery of events and programs.
- `/volunteer` - **Volunteer**: Information and signup for volunteers.
- `/partnership` - **Partnership**: Information on partnering with the organization.
- `/programs` - **Programs**: Specific programs run by the NGO.
- `/blog` - **Blog**: News, updates, and articles.
- `/counties` - **Counties**: Overview of operations across different Liberian counties.
- `/counties/:countyId` - **CountyDetail**: Specific details, offices, and local operations for a single county.
- `/contact` - **Contact**: Contact form using EmailJS and contact information.
- `/donate` - **Donate**: Donation page integrating Flutterwave.
- `/team` - **OurTeam**: Displaying the organization's leadership and staff.
- `*` - **NotFound**: 404 Error page.

## 6. Key Components
- **Navbar & Footer**: Standard navigation and footer sections applied globally across all routes.
- **Preloader**: A visual loading screen that displays before the main content loads using Framer Motion (`<AnimatePresence>`).
- **CallToAction**: A reusable CTA block urging users to donate or volunteer.
- **ScrollToTop**: A floating button that appears on scroll, allowing users to quickly return to the top of the page.
- **DonateNotification**: A small banner or toast regarding donation statuses.
- **Teams**: A component likely used on the Home or About page to display a snapshot of team members.

## 7. Data Management
The project uses static data files to manage content that doesn't necessarily require a database but needs to be easily editable.
- **`src/data/counties.js`**: Contains structured data for all 15 Liberian counties, including their names, taglines, operational offices, and coordinators. This data drives the `/counties` and `/counties/:countyId` pages.

## 8. Styling and Animations
- **Tailwind CSS** handles all layout, spacing, typography, and responsive design. The `index.css` file contains global direct-styles and custom Tailwind utility classes if necessary.
- **Framer Motion** is used for page transitions (`<AnimatePresence mode="wait">` wraps the routes in `App.jsx`) and likely for scroll animations inside individual pages and components.

## 9. External Integrations
### EmailJS
Used on the Contact or Volunteer pages to send form submissions directly to an email address without requiring a custom backend server.

### Flutterwave
Used on the Donate page to securely process online donations natively within the React application.

---
*Generated by AI documentation assistant.*
