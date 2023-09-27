// controller.js
class Controller {
    constructor(model, view) {
        this.model = model;
        this.view = view;
        this.view.renderSections(this.model.getSections());
    }
}

const controller = new Controller(model, view);
