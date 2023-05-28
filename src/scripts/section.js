
export default class Section {
    constructor({ items, renderer }, container) {
        this._renderedItems = items;
        this._renderer = renderer;
        this._container = document.querySelector(container);
    }
    renderItems() {
        console.log(this._renderedItems)
        this._renderedItems.reverse().forEach(element => {
            this._renderer(element);
        });
    }
    addItem(element) {
        this._container.prepend(element)
    }
}