// view.js
class View {
    constructor() {
        this.mainElement = document.querySelector('main');
    }

    renderSections(sections) {
        this.mainElement.innerHTML = sections
            .map(section => `
                <section>
                    <h2>${section.title}</h2>
                    <p>${section.content}</p>
                </section>
            `)
            .join('');
    }
}

const view = new View();
