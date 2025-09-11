# AI Cybersecurity Website

A modern Next.js website showcasing AI and cybersecurity solutions.

## Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

1. Install dependencies:
   ```bash
   pnpm install
   ```
   
   Or with npm:
   ```bash
   npm install
   ```

### Development

Run the development server:

```bash
pnpm dev
```

Or with npm:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the website.

### Troubleshooting

If you encounter permission issues when running `npm run dev`:

```bash
chmod +x node_modules/.bin/next
npm run dev
```

Or reinstall dependencies:

```bash
rm -rf node_modules
npm install
npm run dev
```

### Build

To build for production:

```bash
pnpm build
pnpm start
```

Or with npm:
```bash
npm run build
npm start
```

### Tech Stack

- **Framework:** Next.js 15
- **Styling:** Tailwind CSS
- **UI Components:** Radix UI
- **Icons:** Lucide React
- **Animations:** Framer Motion
- **TypeScript:** Full type safety