/**
 * @type {import("prettier").Config}
 *
 * This is a basic Prettier configuration for a modern web project,
 * with specific support for Astro files.
 */
module.exports = {
  // Use single quotes instead of double quotes
  singleQuote: true,

  // Add semicolons at the end of statements
  semi: true,

  // Use a comma at the end of arrays and objects
  trailingComma: 'all',

  // Use 2 spaces for indentation
  tabWidth: 2,

  // Add plugins for Astro support. This is crucial for formatting
  // .astro, .md, and .mdx files correctly.
  plugins: ['prettier-plugin-astro', 'prettier-plugin-tailwindcss'],

  // Overrides to handle specific file types
  overrides: [
    {
      files: '*.astro',
      options: {
        // Enforce Astro parser for .astro files
        parser: 'astro',
      },
    },
  ],

  tailwindConfig: './tailwind.config.ts',
};
