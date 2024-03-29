module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", './src/**/*.{html,js}', './node_modules/tw-elements/dist/js/**/*.js'
  ],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    colors: {
      'blue': '#59CAFF',
      'blue-light': '#8DDFFC',
      'blue-dark': '#4EB0E9',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#212529',
      'gray': '#091426',
      'gray-light': '#d3dce6',
      'white' : '#ffffff',
      'red' : '#e03131 ',
      'ivory' : '#f5f5f5',
      'gray-white' : '#303030',
      'btn' : "#ED1B42",
      'blue-text' : "#2B2B49",
      'white-light' : "#EEF5FA",


    },
    extend: {
      backgroundImage: {
        'home' : "url('/src/Images/william.jpg')",
        'tour' : "url('/src/Images/pinkBeach.jpg')"
      }
    },
  },
  plugins: [require('tw-elements/dist/plugin')],
}
