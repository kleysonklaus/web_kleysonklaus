import { queryAll } from '../shared/dom.js';

export function initContactSection() {
    const emailNodes = queryAll('[data-email-address]');

    emailNodes.forEach((node) => {
        const email = node.getAttribute('data-email-address');
        if (!email) {
            return;
        }

        node.setAttribute('href', `mailto:${email}`);
        node.setAttribute('title', `Escribir a ${email}`);
    });
}
