const mix = require('laravel-mix');
const alert = require('sweetalert2');

mix.postCss('src/css/main.css', 'public/css',[require('tailwindcss')])
   .js('src/js/main.js', 'public/js')
   .setPublicPath('public');