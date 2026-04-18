import { buttonLink } from '../shared/button.js';
import { siteContent } from '../shared/site-content.js';

export function contactSection() {
    const contact = siteContent.contact;

    return `
        <section class="section contact-section" id="contacto">
            <div class="container">
                <div class="contact-minimal panel">
                    <div class="contact-minimal__copy">
                        <p class="eyebrow">${contact.eyebrow}</p>
                        <h2>${contact.title}</h2>
                        <p class="contact-minimal__lead">${contact.lead}</p>
                        <div class="contact-minimal__actions">
                            ${contact.actions.map((item) => buttonLink(item)).join('')}
                        </div>
                    </div>
                    <aside class="contact-minimal__meta" aria-label="Canal principal de contacto">
                        <span class="contact-minimal__eyebrow">${contact.meta.eyebrow}</span>
                        <a class="contact-minimal__link" data-email-address="${contact.meta.email}">${contact.meta.email}</a>
                        <p>${contact.meta.copy}</p>
                        <span class="contact-minimal__note">${contact.meta.note}</span>
                    </aside>
                </div>
            </div>
        </section>
    `;
}
