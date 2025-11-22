# GitHub Copilot Instructions

This repository contains a personal website built with HTML5, CSS3, Bootstrap, Sass, jQuery, and JavaScript. All code is written from scratch as a learning project for web development.

## General Guidelines

- Write clean, readable code with consistent formatting
- Avoid adding unnecessary dependencies or libraries
- Keep changes minimal and focused
- Follow existing patterns and conventions in the codebase

## HTML Guidelines

- Use semantic HTML5 elements where appropriate
- Maintain consistent indentation (tabs for this project)
- Include proper meta tags for SEO and viewport settings
- Use descriptive class and id names that reflect purpose
- Ensure all images have descriptive alt text for accessibility
- Structure pages with proper document flow: header, main content, footer

## CSS/Sass Guidelines

### Code Organization
- Follow the 7-1 pattern from Hugo Giraudel for Sass architecture
- Main styles are in `sass/style.scss`
- Compiled CSS goes to `css/style.css`

### Naming Conventions
- Use camelCase for IDs (e.g., `#startPage`, `#mainMenu`, `#homeAbout`)
- Use lowercase with hyphens for multi-word classes
- Prefix animation classes with their animation type (e.g., `fadeInUpText`, `bounceInLeftButton`)

### Styling Standards
- Use rem/em units for scalability
- Define colors in hex format
- Include vendor prefixes for cross-browser compatibility:
  - `-webkit-` for Chrome, Safari
  - `-moz-` for Firefox
  - `-o-` for Opera
  - `-ms-` for Internet Explorer
- Order vendor prefixes consistently (webkit, moz, o, ms)
- Use transitions for smooth effects: `transition: all 0.4s ease`

### Responsive Design
- Follow mobile-first approach with media queries
- Use standard Bootstrap breakpoints:
  - Extra Small: < 480px (vertical phones)
  - Small: ≥ 480px (horizontal phones, vertical tablets)
  - Medium: ≥ 768px (horizontal tablets, low-res desktops)
  - Large: ≥ 992px (normal desktops)
  - Extra Large: ≥ 1200px (wide screens)
- Test responsive behavior at all breakpoints

## JavaScript/jQuery Guidelines

### Code Style
- Use jQuery's ready function: `$(function() { ... })` or `$(document).ready(function() { ... })`
- Place variables at the top of their scope
- Use descriptive variable names with camelCase
- Cache jQuery selectors when used multiple times
- Use `var` for variable declarations (ES5 style maintained in this project)

### jQuery Patterns
- Use method chaining where appropriate
- Use `stop()` before animations to prevent queue buildup: `$element.stop().slideToggle(400)`
- Store state in jQuery data: `$element.data('clicked', true)`
- Use proper event handlers: `$element.on('click', function() { ... })`

### Animation Guidelines
- Use smooth scroll for navigation with `animate()` method
- Set reasonable animation durations (300-1200ms)
- Use `Math.random()` with bounds for varied timing effects
- Implement proper hash handling in URL after scroll animations

## Bootstrap Integration

- Use Bootstrap 3.3.7 classes and conventions
- Leverage Bootstrap's grid system (`.row`, `.col-sm-*`, etc.)
- Use Bootstrap components (navbar, buttons, dropdowns) with custom styling
- Override Bootstrap styles in custom CSS, don't modify Bootstrap directly
- Maintain Bootstrap's responsive breakpoint structure

## Comments and Documentation

- Add comments only when code logic is complex or non-obvious
- Use section dividers in CSS to separate major areas:
  ```css
  /*________________________
  
      SECTION NAME
  _________________________*/
  ```
- Document JavaScript functions with inline comments explaining behavior
- Keep comments concise and to the point
- Use English for all comments

## Performance and Best Practices

- Minimize DOM manipulations
- Load scripts in proper order (jQuery before Bootstrap, custom scripts last)
- Use CDN links for external libraries (Bootstrap, jQuery, Google Fonts)
- Optimize images for web
- Avoid inline styles; use classes instead

## Accessibility

- Ensure proper contrast ratios for text
- Include ARIA roles where appropriate (`role="navigation"`, `role="button"`)
- Make sure interactive elements are keyboard accessible
- Test with screen readers when adding new features
- Use semantic HTML to improve accessibility

## File Structure

```
marcosfvilaboa.com/
├── css/              # Compiled CSS files
├── js/               # JavaScript files
├── sass/             # Sass source files
├── images/           # Image assets
├── index.html        # Landing page
├── main.html         # Main application page
└── README.md         # Project documentation
```

## Code Review Focus Areas

When reviewing code changes, pay special attention to:
- Cross-browser compatibility (especially vendor prefixes)
- Responsive design at all breakpoints
- Animation performance and smoothness
- jQuery selector efficiency
- Accessibility compliance
- Code consistency with existing patterns
