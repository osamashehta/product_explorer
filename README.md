# Product Explorer 

A modern e-commerce product browsing application built with Next.js 15, featuring server-side rendering, advanced search, filtering, and optimized performance.

## Features

- **Product Browsing**: Browse through a comprehensive catalog of products
- **Advanced Search**: Real-time search functionality with query parameters
- **Smart Filtering**: Sort products by price (low to high, high to low)
- **Product Details**: Detailed product pages with images, descriptions, and pricing
- **Responsive Design**: Mobile-first responsive design using Tailwind CSS
- **Performance Optimized**: Server-side rendering, image optimization, and dynamic imports
- **Type Safe**: Built with TypeScript for type safety
- **Tested**: Comprehensive unit tests with Jest and React Testing Library

## Live Demo

**[View Live Demo](https://product-explorer-ecru.vercel.app/)**

## Data Source

This application uses the **[DummyJSON API](https://dummyjson.com/)** as its data source, providing:

- 100+ mock products with realistic data
- Product categories, images, and detailed information
- Search and filtering capabilities
- RESTful API endpoints for seamless integration

## Performance Techniques

### Server-Side Optimization

- **Server Components**: Leveraging Next.js 15 App Router for server-side rendering
- **ISR (Incremental Static Regeneration)**: Product pages revalidate every 60 seconds
- **Static Generation**: Static generation for optimal performance where possible
- **Streaming**: Uses React Suspense for progressive page loading

### Client-Side Optimization

- **Dynamic Imports**: Components loaded on-demand using `next/dynamic`
- **Image Optimization**: Next.js Image component with priority loading
- **Bundle Splitting**: Automatic code splitting for optimal loading
- **Caching**: Browser caching and SWR patterns for API calls

### Development Optimization

- **Turbopack**: Using Next.js Turbopack for faster development builds
- **Tree Shaking**: Unused code elimination in production builds
- **Console Removal**: Automatic console.log removal in production

## Architecture: Server vs Client Components

### Server Components (Default)

- **`app/page.tsx`**: Main product listing page (Server Component)
- **`app/products/[id]/page.tsx`**: Product details page (Server Component)
- **`components/ProductsList`**: Product grid rendering (Server Component)

**Benefits:**

- Zero JavaScript bundle for these components
- Direct database/API access
- Better SEO and initial page load
- Reduced client-side hydration time

### Client Components ("use client")

- **`components/Toolbar/Search.tsx`**: Interactive search functionality
- **`components/Toolbar/Filter.tsx`**: Sort/filter controls
- **`components/PriceBadge/PriceBadge.tsx`**: Interactive pricing display

**Benefits:**

- Interactive user experiences
- State management
- Event handling
- Browser API access

## 🛠️ Setup Instructions

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/osamashehta/product_explorer.git
   cd product_explorer
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Setup environment variables**

   ```bash
   cp .env.example .env.local
   ```

   Edit `.env.local` and add your environment variables (see Environment Variables section)

4. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Testing

### Run Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm test -- --coverage
```

### Test Structure

- **Unit Tests**: Component and function testing
- **Integration Tests**: API and server action testing
- **Mocking**: Comprehensive mocking of Next.js navigation and API calls

## Build & Deployment

### Development Build

```bash
npm run dev
```

### Production Build

```bash
npm run build
npm start
```

### Deployment

This project is optimized for deployment on Vercel:

1. **Push to GitHub**: Push your code to a GitHub repository
2. **Connect to Vercel**: Import your repository in Vercel dashboard
3. **Set Environment Variables**: Add your environment variables in Vercel settings
4. **Deploy**: Vercel will automatically build and deploy your application

## Environment Variables

Create a `.env.local` file in the root directory:

```env
# API Configuration
NEXT_PUBLIC_API_URL=https://dummyjson.com/

# Optional: Analytics, monitoring, etc.
# NEXT_PUBLIC_GA_ID=your_google_analytics_id
# SENTRY_DSN=your_sentry_dsn
```

## Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage (Server Component)
│   ├── loading.tsx        # Global loading UI
│   ├── not-found.tsx      # 404 page
│   └── products/
│       └── [id]/
│           └── page.tsx   # Product details (Server Component)
├── components/            # Reusable components
│   ├── Empty/            # Empty state component
│   ├── PriceBadge/       # Price display component
│   ├── ProductsList/     # Product grid component
│   ├── shared/           # Shared UI components
│   ├── Toolbar/          # Search and filter components
│   └── ui/               # Base UI components
├── lib/                  # Utilities and configurations
│   ├── apiServerCall.ts  # API client configuration
│   ├── serverActions.ts  # Server actions
│   └── utils.ts          # Utility functions
├── types/                # TypeScript type definitions
└── __tests__/           # Test files
```

## Type Safety

This project uses TypeScript with strict type checking:

- **Interface Definitions**: Comprehensive type definitions in `src/types/types.ts`
- **API Response Types**: Typed API responses for all endpoints
- **Component Props**: Fully typed React component props
- **Server Actions**: Type-safe server actions with proper error handling

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI + Custom components
- **HTTP Client**: Axios
- **Testing**: Jest + React Testing Library
- **Linting**: ESLint
- **Deployment**: Vercel


## 👨‍💻 Author

**Osama Shehta Saqr**

- GitHub: [@osamasaqr](https://github.com/osamashehta)
- Project: [Product Explorer](https://github.com/osamashehta/product_explorer)
