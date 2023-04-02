import './bootstrap';
import '../css/app.css';
 import '../css/Auth.css';
import '../css/header.css';
import '../css/footer.css';
import '../css/movielist.css'
import '../css/DysBar.css'
// slidetopmovie css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';

const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, import.meta.glob('./Pages/**/*.jsx')),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(<App {...props} />);
    },
    progress: {
        color: '#4B5563',
    },
});
