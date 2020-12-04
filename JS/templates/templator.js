(function() {
  class Templator {
    constructor(template) {
      this._template = template;
    }

    compile(ctx) {

      // return `<p>${ctx.innerHTML}</p>`;
     return "<p>Моя разметка живет </p>";
    }
  }

  window.Templator = Templator;
})();
