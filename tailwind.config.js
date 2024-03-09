/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
      },
      colors: {
        "custom-green": "#2E4C3D",
        "custom-orange": "#FFA500",
        "custom-grey": "#808080",
      },
      fontFamily:{
        'berlin': "Berlin",
        'garet-book': "Garet Book",
        'garet-heavy': "Garet Heavy",
        'hindGuntur-bold': "Hind Guntur Bold",
        'hindGuntur-light': "Hind Guntur Light",
        'hindGuntur-medium': "Hind Guntur Medium",
        'hindGuntur-regular': "Hind Guntur Regular",
        'hindGuntur-semiBold': "Hind Guntur SemiBold",
      }
    },
  },
  plugins: [],
}