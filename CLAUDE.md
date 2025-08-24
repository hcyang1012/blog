# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a modern blog website built with Next.js 15, TypeScript, and Tailwind CSS. The blog supports markdown posts with frontmatter, includes a comment system via Giscus (GitHub Discussions), Google Analytics integration, and deploys automatically to GitHub Pages.

## Architecture

- **Framework**: Next.js 15 with App Router and TypeScript
- **Styling**: Tailwind CSS with custom prose styles
- **Content**: Markdown files in `/posts` directory with gray-matter frontmatter parsing
- **Comments**: Giscus component for GitHub Discussions-based comments
- **Analytics**: Google Analytics via @next/third-parties
- **Deployment**: Static export configured for GitHub Pages
- **State Management**: No complex state - primarily static content

## Development Commands

### Starting Development
```bash
npm run dev
```
Starts the development server on http://localhost:3000

### Building for Production
```bash
npm run build
```
Creates a static export in the `/out` directory ready for deployment

### Type Checking
```bash
npm run build
```
Next.js build includes TypeScript checking - no separate typecheck command is configured

### Linting
```bash
npm run lint
```
Runs ESLint with Next.js configuration

## Key File Structure

- `/posts/*.md` - Blog post markdown files with frontmatter
- `/lib/posts.ts` - Core blog post processing utilities
- `/types/post.ts` - TypeScript interfaces for blog posts
- `/components/Comments.tsx` - Giscus comments component
- `/components/GoogleAnalytics.tsx` - GA integration component
- `/src/app/page.tsx` - Home page displaying blog post list
- `/src/app/posts/[slug]/page.tsx` - Dynamic blog post pages
- `/src/app/layout.tsx` - Root layout with GA integration
- `/src/app/globals.css` - Global styles including prose styles
- `next.config.js` - Next.js configuration for static export and GitHub Pages

## Blog Post Format

Blog posts are markdown files in `/posts` directory with this frontmatter structure:

```markdown
---
title: "Post Title"
date: "YYYY-MM-DD"
excerpt: "Optional excerpt"
tags: ["tag1", "tag2"]
author: "Author Name"
featured: true
---

# Post content in markdown
```

## Environment Variables

Development and production use these environment variables:

- `NEXT_PUBLIC_GA_ID` - Google Analytics measurement ID
- `NEXT_PUBLIC_GISCUS_REPO` - GitHub repository for comments (username/repo)
- `NEXT_PUBLIC_GISCUS_REPO_ID` - Repository ID from Giscus
- `NEXT_PUBLIC_GISCUS_CATEGORY` - Discussion category name
- `NEXT_PUBLIC_GISCUS_CATEGORY_ID` - Discussion category ID from Giscus

## Deployment

The project uses GitHub Actions (`.github/workflows/deploy.yml`) for automatic deployment:

1. Builds the static site on push to main branch
2. Uploads to GitHub Pages
3. Uses repository secrets for environment variables

## Dependencies

Key dependencies:
- `next` - React framework
- `react`, `react-dom` - React libraries  
- `typescript` - Type checking
- `tailwindcss` - Styling
- `gray-matter` - Frontmatter parsing
- `remark`, `remark-html` - Markdown processing
- `date-fns` - Date formatting
- `@giscus/react` - Comments component
- `@next/third-parties` - Google Analytics integration

## Common Tasks

### Adding a New Blog Post
1. Create a new `.md` file in `/posts` directory
2. Add proper frontmatter with title, date, etc.
3. Write content in markdown
4. The post will automatically appear on the home page

### Modifying Styles
- Global styles: `/src/app/globals.css`
- Component styles: Use Tailwind classes in components
- Prose styles: Custom `.prose` classes in globals.css for markdown content

### Testing Locally
1. Run `npm run dev`
2. Navigate to http://localhost:3000
3. Test post creation by adding files to `/posts`
4. Build with `npm run build` to test static export