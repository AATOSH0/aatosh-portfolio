# Aatosh Portfolio

A modern, React-based portfolio website built with Vite and Tailwind CSS.

## Project Architecture

### Component Structure

- `src/components/` - All React components following a modular structure:
  - `Header.jsx` - Navigation component
  - `Hero.jsx` - Landing section
  - `Skills.jsx` - Skills showcase
  - `Projects.jsx` - Portfolio projects grid
  - `About.jsx` - About section
  - `Contact.jsx` - Contact form
  - `Footer.jsx` - Footer section

### Data Management

- `src/data/` - Centralized data storage:
  - `projectData.js` - Portfolio projects configuration
  - `aboutData.js` - About section content
  - `images.js` - Image imports and management
  - All images are stored in `src/data/images/` and `src/data/projects-images/`

## Development Workflow

### Setup

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Key Dependencies

- React 19.1.1
- Vite 7.1.2
- Tailwind CSS 4.1.12
- React Icons 5.5.0

## Project Conventions

### Component Structure

- Components are organized by feature/section
- Each component is a standalone React functional component
- Components use Tailwind CSS for styling

### Data Management Pattern

- All static content is centralized in `src/data/` directory
- Projects data follows this structure:

```javascript
{
  title: string,
  description: string,
  image: ImportedImage,
  technologies: string[],
  liveUrl: string,
  githubUrl: string
}
```

### Styling Patterns

- Uses Tailwind CSS utility classes
- Custom theme configuration in `tailwind.config.js`
- Netflix-inspired loading animation using Tailwind's animate utilities

## Build and Deployment

- Vite-based build system
- ESLint configuration for code quality
- Production builds are optimized for performance

## Integration Points

- Hosted assets (images) managed through direct imports
- Project links point to GitHub repositories and live deployments on Netlify
- Resume available at `src/data/resume.pdf`

Feel free to ask for clarification on any section of this documentation.
