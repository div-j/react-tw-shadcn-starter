# Modern React Starter

A production-ready React starter built with the latest technologies and best practices for modern web development.

## 🚀 Tech Stack

- **Framework**: React 19.1 + TypeScript
- **Build Tool**: Vite 7.0
- **Styling**: Tailwind CSS 4.1 with CSS Variables
- **UI Components**: shadcn/ui (New York style)
- **Icons**: Lucide React
- **Form Handling**: React Hook Form + Zod validation
- **Theme**: Dark/Light mode with next-themes
- **Animations**: tw-animate-css
- **State Management**: Built-in React hooks
- **Package Manager**: pnpm

## ✨ Features

### 🎨 **Modern UI System**
- **shadcn/ui components** with New York design style
- **Dark/Light mode** support with system preference detection
- **CSS Variables** for dynamic theming
- **Responsive design** with mobile-first approach
- **Accessible components** built on Radix UI primitives

### 🛠 **Developer Experience**
- **TypeScript** with strict configuration
- **ESLint** with React-specific rules
- **Vite** for lightning-fast development
- **Hot Module Replacement** for instant updates
- **Path aliases** configured (`@/components`, `@/lib`, etc.)

### 📦 **Pre-configured Components**
- Accordion, Alert Dialog, Avatar, Badge
- Button, Calendar, Card, Checkbox
- Dialog, Dropdown Menu, Form, Hover Card
- Input, Label, Navigation Menu, Popover
- Progress, Select, Separator, Skeleton
- Sonner (Toast notifications), Switch, Tabs
- Textarea, Tooltip

### 🎯 **Form & Validation**
- **React Hook Form** for performant forms
- **Zod** for runtime type validation
- **Form components** with built-in validation

## 🏗 Project Structure

```
better-fit/
├── public/                 # Static assets
├── src/
│   ├── components/
│   │   └── ui/            # shadcn/ui components
│   ├── lib/
│   │   └── utils.ts       # Utility functions
│   ├── assets/            # Images, icons, etc.
│   ├── App.tsx           # Main application component
│   ├── main.tsx          # Application entry point
│   └── index.css         # Global styles & CSS variables
├── components.json        # shadcn/ui configuration
├── tailwind.config.js     # Tailwind configuration
├── vite.config.ts         # Vite configuration
└── tsconfig.json         # TypeScript configuration
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

1. **Clone and install dependencies**:
```bash
git clone <your-repo-url>
cd better-fit
pnpm install
```

2. **Start development server**:
```bash
pnpm dev
```

3. **Open your browser**:
Navigate to `http://localhost:5173`

### Available Scripts

```bash
pnpm dev        # Start development server
pnpm build      # Build for production
pnpm preview    # Preview production build
pnpm lint       # Run ESLint
```

## � Animations with tw-animate-css

This project includes `tw-animate-css`, a powerful Tailwind CSS plugin that provides utility classes for CSS animations based on Animate.css.

### Quick Start

Add animations to any element using the utility classes:

```tsx
// Basic entrance animation
<div className="animate-in fade-in">Hello World</div>

// Combined animations with timing
<div className="animate-in slide-in-from-top duration-500">
  Sliding content
</div>
```

### Animation Categories

#### **Entrance Animations (animate-in)**
Perfect for page loads and component mounting:

```tsx
// Fading entrances
"animate-in fade-in"
"animate-in fade-in-up"
"animate-in fade-in-down"
"animate-in fade-in-left"
"animate-in fade-in-right"

// Sliding entrances
"animate-in slide-in-from-top"
"animate-in slide-in-from-bottom" 
"animate-in slide-in-from-left"
"animate-in slide-in-from-right"

// Zoom entrances
"animate-in zoom-in"
"animate-in zoom-in-50"
"animate-in zoom-in-95"

// Bounce entrances
"animate-in bounce-in"
"animate-in bounce-in-up"
"animate-in bounce-in-down"
```

#### **Exit Animations (animate-out)**
Great for modals, tooltips, and conditional content:

```tsx
"animate-out fade-out"
"animate-out slide-out-to-top"
"animate-out zoom-out"
"animate-out spin-out"
```

#### **Continuous Animations**
Looping animations for ongoing effects:

```tsx
"animate-bounce"
"animate-pulse"
"animate-ping"
"animate-spin"
"animate-wiggle"
"animate-shake"
"animate-swing"
"animate-rubberBand"
"animate-heartBeat"
```

#### **Attention Seekers**
Perfect for notifications and highlighting:

```tsx
"animate-flash"
"animate-shakeX"
"animate-shakeY" 
"animate-wobble"
"animate-jello"
"animate-tada"
```

### Timing & Control

Control animation duration, delays, and easing:

```tsx
// Duration control
"duration-75"     // 75ms
"duration-300"    // 300ms (default)
"duration-500"    // 500ms
"duration-1000"   // 1000ms
"duration-[2000ms]" // Custom duration

// Delay control
"delay-75"
"delay-150"
"delay-300"
"delay-500"

// Easing functions
"ease-in"
"ease-out"
"ease-in-out"
"ease-linear"
```

### Real-World Examples

#### **Staggered List Animation**
```tsx
function AnimatedList() {
  const items = ['Item 1', 'Item 2', 'Item 3']
  
  return (
    <div className="space-y-2">
      {items.map((item, index) => (
        <div 
          key={item}
          className={`animate-in slide-in-from-left duration-500 delay-${index * 100}`}
        >
          {item}
        </div>
      ))}
    </div>
  )
}
```

#### **Interactive Button Animations**
```tsx
<Button className="hover:animate-pulse transition-all duration-300">
  Hover me
</Button>

<Button className="active:animate-bounce">
  Click me
</Button>
```

#### **Loading States**
```tsx
// Spinning loader
<div className="animate-spin w-6 h-6 border-2 border-blue-500 border-t-transparent rounded-full"></div>

// Pulsing placeholder
<div className="animate-pulse bg-gray-300 h-4 w-full rounded"></div>

// Bouncing dots
<div className="flex space-x-1">
  <div className="animate-bounce w-2 h-2 bg-blue-500 rounded-full"></div>
  <div className="animate-bounce w-2 h-2 bg-blue-500 rounded-full delay-75"></div>
  <div className="animate-bounce w-2 h-2 bg-blue-500 rounded-full delay-150"></div>
</div>
```

#### **Success/Error Messages**
```tsx
// Success notification
<div className="animate-in slide-in-from-top bg-green-500 text-white p-4 rounded">
  ✅ Success! Action completed.
</div>

// Error with shake
<div className="animate-in shake bg-red-500 text-white p-4 rounded">
  ❌ Error! Please try again.
</div>
```

### Performance Tips

1. **Use `animate-in/out`** for mount/unmount animations
2. **Prefer CSS animations** over JavaScript for better performance
3. **Consider `prefers-reduced-motion`** for accessibility:

```tsx
<div className="motion-reduce:animate-none animate-bounce">
  Respects user preferences
</div>
```

4. **Use `will-change`** for complex animations:

```tsx
<div className="animate-bounce will-change-transform">
  Optimized animation
</div>
```

For more animation classes and examples, check the [tw-animate-css documentation](https://github.com/jamiebuilds/tailwindcss-animate).

## �🎨 Customizing Colors

This project uses Tailwind CSS 4.0 with CSS variables for dynamic theming.

### Method 1: CSS Variables (Recommended)
Add custom colors to the `@theme inline` block in `src/index.css`:

```css
@theme inline {
  /* existing colors... */
  --color-brand-primary: #1e40af;
  --color-brand-secondary: #7c3aed;
}
```

Usage in components:
```tsx
<div className="bg-brand-primary text-white">
  Custom branded content
</div>
```

### Method 2: Tailwind Config
Extend colors in `tailwind.config.js`:

```javascript
export default {
  theme: {
    extend: {
      colors: {
        'custom-blue': '#1e40af',
        'brand': {
          50: '#eff6ff',
          500: '#3b82f6',
          900: '#1e3a8a'
        }
      }
    }
  }
}
```

### Dark Mode Support
Define color variants for dark mode in `src/index.css`:

```css
:root {
  --brand-primary: #3b82f6;
}

.dark {
  --brand-primary: #60a5fa;
}
```

## 🧩 Adding Components

### Using shadcn/ui CLI
Add new components from the shadcn/ui library:

```bash
npx shadcn@latest add [component-name]
```

Examples:
```bash
npx shadcn@latest add table
npx shadcn@latest add data-table
npx shadcn@latest add command
```

### Manual Component Creation
Create custom components in `src/components/`:

```tsx
// src/components/custom-button.tsx
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface CustomButtonProps {
  variant?: "primary" | "secondary"
  children: React.ReactNode
}

export function CustomButton({ variant = "primary", children }: CustomButtonProps) {
  return (
    <Button 
      className={cn(
        "font-semibold",
        variant === "primary" && "bg-brand-primary hover:bg-brand-primary/90"
      )}
    >
      {children}
    </Button>
  )
}
```

## 📱 Responsive Design

All components are built with mobile-first responsive design:

```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  <Card className="p-4">Mobile: 1 col, Tablet: 2 cols, Desktop: 3 cols</Card>
</div>
```

## 🌙 Theme Switching

The project includes built-in dark/light mode support:

```tsx
import { useTheme } from "next-themes"

function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  
  return (
    <Button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
      Toggle theme
    </Button>
  )
}
```

## 📋 Form Handling

Example form with validation:

```tsx
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8)
})

function LoginForm() {
  const form = useForm({
    resolver: zodResolver(formSchema)
  })

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Enter email" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}
```

## 🔧 Configuration

### Path Aliases
Configured in `tsconfig.json` and `vite.config.ts`:
- `@/components` → `src/components`
- `@/lib` → `src/lib`
- `@/hooks` → `src/hooks`

### ESLint Rules
- React Hooks rules for proper hook usage
- React Refresh for HMR compatibility
- TypeScript strict checking

## 📦 Build & Deployment

### Build for Production
```bash
pnpm build
```

### Preview Production Build
```bash
pnpm preview
```

### Deploy to Vercel
```bash
npm i -g vercel
vercel
```

### Deploy to Netlify
```bash
npm i -g netlify-cli
netlify deploy --prod --dir dist
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

---

**Happy coding!** 🎉

For questions or support, please open an issue in the repository.

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
