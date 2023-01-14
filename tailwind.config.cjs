/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,js,jsx,svelte}"],
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography')
  ],
  theme:{
    fontFamily:{
      'sans':['Poppins','system-ui']
    },
    extend:{
      colors:{
        teal:{
          600:"#577865"
        },
        brown:{
          600:"#3d2215"
        },
        gray:{
          600:"#c3b19a"
        }
      }
    }
  }
}
