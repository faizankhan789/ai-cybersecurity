# AI Cybersecurity Website

A modern Next.js website showcasing AI and cybersecurity solutions.

## Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

1. Install dependencies:
   ```bash
   npm install --legacy-peer-deps
   ```
   
   Or with pnpm:
   ```bash
   pnpm install
   ```

### Development

Run the development server:

```bash
npm run dev
```

Or with pnpm:
```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the website.

### Quick Start (Next Time)

After initial setup, you only need:
```bash
npm run dev
```

### Troubleshooting

If you encounter dependency conflicts during installation:

```bash
npm install --legacy-peer-deps
```

If you encounter permission issues when running `npm run dev`:

```bash
chmod +x node_modules/.bin/next
npm run dev
```

For a complete clean reinstall:

```bash
rm -rf node_modules package-lock.json
npm install --legacy-peer-deps
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