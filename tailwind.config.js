/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        vietnam: ['"Be Vietnam Pro"', 'sans-serif'],
        chakra: ['"Chakra Petch"', 'sans-serif'],
        opensans: ['"Open Sans"', 'sans-serif'],
        poppins: ['"Poppins"', 'sans-serif'],
        romans: ['Times New Roman', 'serif']
      },
      colors: {
        'gold': '#EDD899',
        'brown': '#AF5E00',
        'dark-grey': '#4E4E54'
      }
    },
    boxShadow: {
      'custom-drop': '4px 4px 2px 0 rgba(0, 0, 0, 0.25)',
    },
    screens: {
      se: '375px',
      promax: '430px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      'promax-only': { 'min': '430px', 'max': '450px' }
    },
    backgroundImage: {
      'gold-gradient': `linear-gradient(
                        90deg,
                        #DBB346 0%,
                        #FFE7A7 36%,
                        #FFCF4B 57%,
                        #FFF4D1 77%,
                        #E4B73D 100%
                      )`,
      'olive-gold-gradient': `linear-gradient(
  90deg,
  #5E5836 0%,     /* dark olive shadow */
  #8F8753 15%,    /* warm olive base */
  #C2B870 30%,    /* metallic gold rise */
  #F8F1C4 45%,    /* bright gold highlight (shine) */
  #D6C97C 60%,    /* taper highlight */
  #AFA664 75%,    /* olive-gold mid tone */
  #6E693E 100%    /* dark reflective end */
)`,



    }
  },
  plugins: [],
};
