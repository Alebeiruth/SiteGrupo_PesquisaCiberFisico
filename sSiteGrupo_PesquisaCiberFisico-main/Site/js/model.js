// model.js
export class Model {
    constructor() {
        // Definindo as seções genéricas; isso pode ser expandido com mais seções conforme necessário.
        this.sections = [
            { title: "Seção 1", content: "Conteúdo da seção 1..." },
            { title: "Seção 2", content: "Conteúdo da seção 2..." }
        ];
    }

    // Método que retorna as seções com base na página atual
    getSections(pathname) {
        switch (pathname) {
            case '/index.html':
                return [
                    { title: "Home Section 1", content: "Conteúdo da Home - Seção 1" },
                    { title: "Home Section 2", content: "Conteúdo da Home - Seção 2" }
                ];
            case '/projects.html':
                return [
                    { title: "Project Section 1", content: "Conteúdo do Projeto - Seção 1" },
                    { title: "Project Section 2", content: "Conteúdo do Projeto - Seção 2" }
                ];
            case '/publications.html':
                return [
                    { title: "Publications Section 1", content: "Conteúdo da Publicação - Seção 1" },
                    { title: "Publications Section 2", content: "Conteúdo da Publicação - Seção 2" }
                ];
            case '/team.html':
                return [
                    { title: "Team Section 1", content: "Conteúdo da Equipe - Seção 1" },
                    { title: "Team Section 2", content: "Conteúdo da Equipe - Seção 2" }
                ];
            default:
                return this.sections; // Retorna seções padrão se a página não for reconhecida
        }
    }
}
