To include the detail about using Redux Thunk for data fetching in your README file, you can add this information under the "Technologies Used" section and briefly mention it in the "Data Fetching" section to highlight its role in asynchronous operations. Here’s how you could update those sections:

---

# Analytics Dashboard

This project is a responsive and interactive dashboard designed to visualize data from a fictional platform. Developed with Next.js and React Chart.js, it showcases skills in data visualization, interactivity, and responsiveness. The application utilizes dynamic imports to reduce bundle size and is styled using Tailwind CSS for a sleek, modern look. It has been deployed on Netlify for public access.

## Objective

Create a dashboard that presents e-commerce metrics such as sales, revenue, and user activity through various types of charts, ensuring a seamless user experience across all devices.

## Deployment

Deployed on Netlify, the live application can be accessed here: [Analytics Dashboard](https://analytics-dashboard-chartjs.netlify.app/). Netlify is chosen for its ease of use, continuous deployment from Git, and seamless Next.js application serving capabilities.

## Features

### Data Visualization

- Mock data represents e-commerce metrics for the last three years.
- Utilizes Chart.js to create visually appealing charts.
- Includes line chart, bar chart, and pie chart to represent various data aspects, allowing users to view and analyze sales, revenue, and user activity trends over the past three years.

### Responsive Design

- Fully responsive, adapting to different screen sizes.
- Mobile-first design approach.

### Interactivity

- Charts are interactive with hover effects and click events.
- Dynamic filters and controls for data customization.

### Data Fetching

- Simulates asynchronous data fetching with Redux Thunk, enabling efficient handling of API calls, loading states, and errors.
- Graceful handling of loading states and errors.

### Component Architecture

- Modular and reusable component design.
- Separation of concerns within dashboard elements.

### State Management

- Uses Redux for state management, with Redux Thunk middleware for handling asynchronous logic and data fetching.

### Animations

- Subtle animations to enhance user experience.

## Technologies Used

- **Next.js** for SSR, SEO benefits, and routing.
- **React Chart.js** for dynamic and responsive charts.
- **Tailwind CSS** for styling and responsiveness.
- **Redux and Redux Thunk** for state management and asynchronous data fetching.
- **Dynamic Imports** to optimize bundle size.

## Getting Started

### Prerequisites

- Node.js and npm installed.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/nimish1499/Analytics-Dashboard-ChartJS.git
   ```
2. Install NPM packages:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```

Visit `http://localhost:3000` to view the application.

