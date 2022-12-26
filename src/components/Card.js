export default class Card {
    constructor({ data, handleClickCard, handleDeleteClick, handleLikeClick, likeCountElement }, cardSelector) {
        this._name = data.name;
        this._link = data.link;
        this._likes = data.likes;

        this._id = data.id;
        this._userId = data.userId;
        this._ownerId = data.ownerId;

        this._handleClickCard = handleClickCard;
        this._handleDeleteClick = handleDeleteClick;
        this._handleLikeClick = handleLikeClick;
        this._likeCountElement = likeCountElement
        this._cardSelector = cardSelector;
    }

    _getTemplate() {
        const cardElement = document
            .querySelector(this._cardSelector)
            .content
            .querySelector('.list__element')
            .cloneNode(true);

        return cardElement;
    }

    getId() {
        return this._id
    }

    _removeLikeCard() {
        this._likeBtn.classList.remove('list__symbol_active');
    }
    _addLikeCard() {
        this._likeBtn.classList.add('list__symbol_active');
    }

    setLikes(newLikes) {
        this._likes = newLikes;
        this._likeCountElement.textContent = this._likes.length;

        if (this.isLiked()) {
            this._addLikeCard();
        }
    }
    handleDelCard() {
        this._element.remove();
        this._element = null;
    };

    isLiked() {
        const handleLikedCard = this._likes.some(user => user._id === this._userId);
        return handleLikedCard;
    }


    _setEventListeners() {

        this._image.addEventListener('click', () => {
            this._handleClickCard(this._name, this._link)
        })

        this._element.querySelector('.list__delete').addEventListener('click', () => {
            this._handleDeleteClick();
        })

        this._likeBtn.addEventListener('click', () => {
            if (this._likeBtn.classList.contains('list__symbol_active')) {
                this._disLike();
            } else {
                this._like()
            }
        });
    }



    _disLike() {
        this._removeLikeCard();
        this._handleLikeClick(this._id);
    }
    _like() {
        this._addLikeCard();
        this._handleLikeClick(this._id);
    }



    createCard() {
        this._element = this._getTemplate();
        this._image = this._element.querySelector('.list__img');
        this._likeBtn = this._element.querySelector('.list__symbol');
        this._likeCountElement = this._element.querySelector('.list__symbol-count');
        this._setEventListeners();

        this._element.querySelector('.list__title').textContent = this._name;
        this._image.src = this._link;
        this._image.alt = this._name;

        this.setLikes(this._likes)

        if (this._ownerId !== this._userId) {
            this._element.querySelector('.list__delete').style.display = 'none';
        }
        return this._element;
    }
}