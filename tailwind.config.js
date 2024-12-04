/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin')


module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        'robot':['"roboto-regular"','regular'],
      }
    },
  },
  plugins: [
    plugin(function({addUtilities}){
      addUtilities({
        'rotate-y-180':{
          transform:"rotateY(180deg)"
        },
        '-rotate-y-180':{
          transform:"rotateY(-180deg)"
        }
      })
    })
  ]
}