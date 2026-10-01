import { renderApp } from './render-app.js';
import { initNavigation } from '../layout/navigation.js';
import { initAppsShowcase } from '../sections/apps-showcase.js';
import { initHeroSection } from '../sections/hero.js';
import { initContactSection } from '../sections/contact.js';

function bootstrap() {
    renderApp();
    initNavigation();
    initAppsShowcase();
    initHeroSection();
    initContactSection();
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bootstrap, { once: true });
} else {
    bootstrap();
}
