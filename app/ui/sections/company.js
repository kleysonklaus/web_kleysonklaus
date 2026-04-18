import { sectionIntro } from '../shared/section-intro.js';
import { siteContent } from '../shared/site-content.js';

export function companySection() {
    const company = siteContent.company;

    const cards = company.pillars
        .map(
            (item) => `
                <article class="capability">
                    <span class="capability__kicker">${item.kicker}</span>
                    <h3>${item.title}</h3>
                    <p>${item.copy}</p>
                </article>
            `
        )
        .join('');

    return `
        <section class="section" id="${company.section.id}">
            <div class="container">
                ${sectionIntro(company.section)}
                <div class="capabilities">${cards}</div>
            </div>
        </section>
    `;
}
