# My Blog

A modern blog built with Next.js, TypeScript, and Tailwind CSS. Features include markdown support, comments via Giscus, Google Analytics integration, and automatic deployment to GitHub Pages.

## Features

- 📝 **Markdown Support**: Write posts in markdown with frontmatter
- 💬 **Comments**: GitHub Discussions powered comments via Giscus
- 📊 **Analytics**: Google Analytics integration
- 🎨 **Modern Design**: Responsive design with Tailwind CSS
- 🌙 **Dark Mode**: Automatic dark/light mode based on system preference
- 📱 **Mobile Friendly**: Optimized for all device sizes
- ⚡ **Fast**: Static site generation with Next.js
- 🚀 **Auto Deploy**: Automatic deployment to GitHub Pages

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd blog
```

2. Install dependencies:
```bash
npm install
```

3. Copy the environment variables example:
```bash
cp .env.local.example .env.local
```

4. Configure your environment variables in `.env.local`:
   - Add your Google Analytics ID
   - Configure Giscus settings (visit https://giscus.app/)

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Writing Posts

Create new blog posts as markdown files in the `posts/` directory:

```markdown
---
title: "Your Post Title"
date: "2024-08-24"
excerpt: "A brief description of your post"
tags: ["tag1", "tag2"]
author: "Your Name"
featured: true
---

# Your Content

Write your blog post content here using markdown.
```

### Deployment

This blog is configured for automatic deployment to GitHub Pages:

1. Push your code to the `main` branch
2. Enable GitHub Pages in your repository settings
3. Set the source to "GitHub Actions"
4. Configure the following repository secrets:
   - `GA_ID`: Your Google Analytics ID
   - `GISCUS_REPO`: Your repository name (username/repo)
   - `GISCUS_REPO_ID`: Your repository ID from Giscus
   - `GISCUS_CATEGORY`: Discussion category name
   - `GISCUS_CATEGORY_ID`: Discussion category ID

### Building for Production

```bash
npm run build
```

This generates a static export in the `out/` directory.

## Project Structure

```
blog/
├── components/          # React components
├── lib/                # Utility functions
├── posts/              # Blog posts (markdown files)
├── public/             # Static assets
├── src/
│   └── app/           # Next.js app directory
├── types/             # TypeScript type definitions
└── .github/workflows/ # GitHub Actions workflows
```

## Configuration

### Comments (Giscus)

1. Visit [giscus.app](https://giscus.app/)
2. Configure your repository
3. Copy the generated values to your environment variables

### Google Analytics

1. Create a GA4 property
2. Copy your Measurement ID (G-XXXXXXXXXX)
3. Add it to your environment variables

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

MIT License - see LICENSE file for details
