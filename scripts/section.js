

export default class Section {
    constructor({ items, renderer }, container) {
        this._renderedItems = items; //массив дефолтных карточек и новых
        this._renderer = renderer; //функция орисовки
        this._container = document.querySelector(container);//куда добавлять всю хуйню
    }
    renderItems() {
        this._renderedItems.forEach(item => {
            this._renderer(item);
        });
    }
    addItem(item) {
        this._container.append(item)
    }
}