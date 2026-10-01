import { siteHeader } from '../layout/site-header.js';
import { siteFooter } from '../layout/site-footer.js';
import { heroSection } from '../sections/hero.js';
import { companySection } from '../sections/company.js';
import { appsSection } from '../sections/apps.js';
import { contactSection } from '../sections/contact.js';

export function homePage() {
    return `
        ${siteHeader()}
        <main>
            ${heroSection()}
            ${companySection()}
            ${appsSection()}
            ${contactSection()}
        </main>
        ${siteFooter()}
    `;
}
