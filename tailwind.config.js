/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      body: 'Barlow',
      name: 'Fraunces',
    },
  },
  plugins: [
    require('flowbite/plugin')
]
}

