/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        gradient_1:'linear-gradient(180deg, #FCD2D3 0%, rgba(255, 234, 234, 0.00) 100%)',
        primaryColor:'#05284C',
        secondaryColor:'#ED3237',
        textPrimary:'#D3DCEF',
       
        
      },

      screens: {
        smallest: { max:'639px'},
        'smipx': '300px',
        
      },
    },
  },
};
