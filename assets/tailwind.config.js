tailwind.config = {
    theme: {
      extend: {
        // Variabilisation des couleur
        colors: {
          primary: '#7286D3',
          secondary: '#8EA7E9',
          tcolor:  '#19192C', 
        }
      },
      screens: {
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
      }
    }
  }