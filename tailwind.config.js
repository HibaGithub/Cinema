const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                'primary': '#080e2c',
                'primary-dark': '#040716',
                'primary-light': '#101b56',
                'secondary': '#44d6e9',
                'secondary-dark': '#2dd1e6',
                'secondary-light': '#5bdbec'
            },
        },
    },

    plugins: [require('@tailwindcss/forms')],
};
