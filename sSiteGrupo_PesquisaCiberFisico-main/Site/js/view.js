// view.js
export class View {
  constructor() {
    // Seleciona o elemento <main> no DOM
    this.mainElement = document.querySelector("main");

    // Verifica se o elemento existe, se não existir, exibe um erro no console
    if (!this.mainElement) {
      console.error("Elemento <main> não encontrado no DOM.");
    }
  }

  // Método para renderizar as seções no <main>
  renderSections(sections) {
    // Se o elemento <main> não for encontrado, retorna sem fazer nada
    if (!this.mainElement) return;

    // Gera o HTML das seções e insere no <main>
    this.mainElement.innerHTML = sections
      .map(
        (section) => `
                <section>
                    <h2>${section.title}</h2>
                    <p>${section.content}</p>
                </section>
            `
      )
      .join(""); // .join('') une os elementos do array em uma única string
  }
}
