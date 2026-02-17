# AI Dev Daily - Website Documentation

## Overview

AI Dev Daily is an Astro-based website for an AI agency and web development company. The site features a blog, services showcase, pricing plans, and contact functionality.

## Website Content

### Pages
- **Home** (`/`) - Main landing page with hero, about, services, pricing, process, blog topics, FAQ, and CTA sections
- **Blog** (`/blog`) - Blog listing with search, category filters, tags, and pagination
- **Blog Post** (`/blog/[slug]`) - Individual blog post pages
- **About** (`/about`) - Company information, services, team, and values
- **Contact** (`/contact`) - Contact form with plan selection and FAQ

### Design
- **Colors**: Purple (#6c2bd9), White, Black
- **Theme**: Light theme
- **Logo**: From aidevdaily.com
- **Animations**: Floating shapes, gradient orbs, particles, scroll animations

## Build & Run

### Prerequisites
- Node.js 18+
- npm

### Installation

```bash
cd ai-dev-daily
npm install
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Preview

```bash
npm run preview
```

## Features

### Blog
- [x] Markdown-based content management (Astro Content Collections)
- [x] Search functionality with text highlighting
- [x] Category filtering (All, Development, AI News, Review, etc.)
- [x] Tag filtering
- [x] Pagination (6 posts per page)
- [x] Featured post display
- [x] Popular posts sidebar
- [x] Newsletter subscription form

### Homepage
- [x] Animated hero section with floating shapes and gradient orbs
- [x] About section
- [x] Services showcase (4 services)
- [x] Pricing plans (3 tiers)
- [x] 3-step process section
- [x] Blog topics section
- [x] FAQ section (6 questions)
- [x] Call-to-action section

### Contact
- [x] Contact form with fields:
  - Full Name
  - Company Name
  - Email Address
  - Phone Number
  - Plan Selection (dropdown)
  - Message
- [x] Contact information display
- [x] Social media links
- [x] FAQ section

### General
- [x] Responsive design (mobile, tablet, desktop)
- [x] Animated page elements
- [x] Fixed header with navigation
- [x] Footer with social links

## Project Structure

```
ai-dev-daily/
├── src/
│   ├── content/
│   │   ├── config.ts          # Blog content schema
│   │   └── blog/              # Blog markdown files
│   │       ├── google-antigravity.md
│   │       ├── ai-news-today.md
│   │       ├── openai-codex-review.md
│   │       └── ...
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── Hero.astro
│   │   ├── FeaturedArticles.astro
│   │   ├── Categories.astro
│   │   ├── Newsletter.astro
│   │   └── Loader.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       ├── index.astro
│       ├── blog.astro
│       ├── blog/[slug].astro
│       ├── about.astro
│       └── contact.astro
├── public/
│   └── favicon.svg
├── package.json
├── astro.config.mjs
└── tsconfig.json
```

## Content Management

### Adding a Blog Post

Create a new `.md` file in `src/content/blog/`:

```markdown
---
title: "Your Post Title"
excerpt: "A brief description of your post"
image: "https://example.com/image.jpg"
imageAlt: "Image description"
category: "Development"
date: "2025-01-15"
readTime: "5"
featured: false
author: "Your Name"
---

# Your Post Content

Write your content here...
```

### Categories
- Development
- AI News
- Review
- Tools
- Career

## Customization

### Colors
Edit CSS variables in `src/layouts/Layout.astro`:

```css
:root {
  --purple-primary: #6c2bd9;
  --purple-light: #8b5cf6;
}
```

### Adding Services
Edit the services array in `src/pages/index.astro`.

### Modifying Pricing Plans
Edit the plans section in `src/pages/index.astro`.

## Tech Stack

- **Framework**: Astro
- **Styling**: CSS (custom properties, animations)
- **Content**: Markdown with Astro Content Collections
- **Fonts**: Space Grotesk (Google Fonts)

## Deployment

### Deploy to Vercel

1. **Install Vercel CLI** (optional):
```bash
npm i -g vercel
```

2. **Deploy**:
```bash
vercel
```

Or connect your GitHub repository to Vercel for automatic deployments.

### Build for Production

```bash
npm run build
```

The static files will be generated in the `dist/` folder, which can be deployed to any static hosting service.

### Deploy Commands for Vercel

- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

## License

All content and design rights reserved to AI Dev Daily.
