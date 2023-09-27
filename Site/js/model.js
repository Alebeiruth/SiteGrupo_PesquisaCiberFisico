// model.js
class Model {
    constructor() {
        this.sections = [
            { title: "Seção 1", content: "Conteúdo da seção 1..." },
            { title: "Seção 2", content: "Conteúdo da seção 2..." }
        ];
    }

    getSections() {
        return this.sections;
    }
}

const model = new Model();

