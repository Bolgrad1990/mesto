export default class Section {
    constructor({ items, renderer }, containerSelector) {
        this._items = items;
        this._renderer = renderer;
        this._container = document.querySelector(containerSelector);
    }

    renderItems(me, cards) {
        this._items = cards
        this._items.forEach(({ name, link, likes, _id, owner }) => {
            this._renderer({
                name: name,
                link: link,
                likes: likes,
                id: _id,
                userId: me.userId,
                ownerId: owner._id
            })

        })
    }

    setItem(element) {
        this._container.append(element);
    }
    setUserCard(element) {
        this._container.prepend(element);
    }

}