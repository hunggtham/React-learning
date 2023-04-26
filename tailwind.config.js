/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      keyframes: {
        'slide-right': {
          '0%': {
            '-webkit-transform': 'translateX(-500px)',
            transform: 'translateX(-500px);'
          },
          '100%': {
            '-webkit-transform': 'translateX(0px)',
            transform: 'translateX(0px);'
          }
        }
      },
      animation: {
        // 0.5s: duration
        //cubic-bezier: độ cong trong 5s
        //both: dài + rộng
        'slide-right': 'slide-right 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;'
      }
    },
  },
  plugins: [],
}