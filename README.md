# Solace PC Builder

A modern, high-performance PC building and custom hardware configuration web application. Solace provides intelligent budget-based component selection, hardware synergy verification, upgrade path guidance, and a visual assembly handbook.

## Features

- **Dynamic Rig Configurator**: Select your budget, storage preference, RAM size, and primary use case (Gaming, Editing, Streaming, Coding, Office) to generate optimized Budget, Balanced, and Performance builds.
- **Hardware Compatibility & Bottleneck Analysis**: Pure local verification assessing socket compatibility, wattage headroom, cooling adequacy, and GPU/CPU synergy without any external API dependencies.
- **Upgrade Advisor**: Evaluates current system processor and budget to recommend the most cost-effective next-step upgrade.
- **Visual Workshop Handbook**: Step-by-step masterclass guiding users through processor seating, thermal paste application, memory installation, chassis mounting, and PCIe GPU setup.
- **Customizable Delivery Flow**: Built-in order summary with assembly services, shipping calculations, and order confirmation.
- **Dark & Light Mode**: Sleek responsive design with theme toggling and glassmorphic UI.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version 18 or newer)
- npm or yarn

### Installation

1. Clone or extract the repository:
   ```bash
   cd solace-pc-builder
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Launch the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:3000`.

## Building for Production

To produce an optimized production build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

## Tech Stack

- **Framework**: React 19 + TypeScript
- **Bundler**: Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Zero External APIs**: Operates entirely client-side with complete offline capability.
