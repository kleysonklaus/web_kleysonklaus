import { homePage } from '../../ui/pages/home-page.js';

export function renderApp() {
    const root = document.querySelector('[data-app-root]');
    if (!root) {
        return;
    }

    root.innerHTML = homePage();
}
