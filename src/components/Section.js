
export default class Section {
    constructor(renderer , container) {
       
        this._renderer = renderer;
        this._container = document.querySelector(container);
    }
    renderItems(item) {
    
        item.reverse().forEach(element => {
            this._renderer(element);
        });
    }
    addItem(element) {
        this._container.prepend(element)
    }
}
