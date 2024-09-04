// Importando os módulos de Model e View
import { Model } from './model.js';
import { View } from './view.js';

// Definindo a classe Controller
class Controller {
    constructor(model, view) {
        this.model = model;
        this.view = view;

        // Verifica qual página está sendo carregada e renderiza as seções apropriadas
        const sections = this.model.getSections(window.location.pathname);
        this.view.renderSections(sections);
    }
}

// Criando as instâncias de Model e View e passando-as para o Controller
const model = new Model();
const view = new View();
const controller = new Controller(model, view);
