(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e,n){var r=e.data,o=e.handleClickCard,i=e.handleDeleteClick,a=e.handleLikeClick,l=e.likeCountElement;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._name=r.name,this._link=r.link,this._likes=r.likes,this._id=r.id,this._userId=r.owner._id,this._ownerId=r.ownerId,this._handleClickCard=o,this._handleDeleteClick=i,this._handleLikeClick=a,this._likeCountElement=l,this._cardSelector=n}var n,r;return n=t,(r=[{key:"_getTemplate",value:function(){return document.querySelector(this._cardSelector).content.querySelector(".list__element").cloneNode(!0)}},{key:"getId",value:function(){return this._id}},{key:"_handleLikeCard",value:function(){this._likeBtn.classList.toggle("list__symbol_active")}},{key:"handleDelCard",value:function(){this._element.remove(),this._element=null}},{key:"_setEventListeners",value:function(){var e=this;this._image.addEventListener("click",(function(){e._handleClickCard(e._name,e._link)})),this._element.querySelector(".list__delete").addEventListener("click",(function(){e._handleDeleteClick()})),this._likeBtn.addEventListener("click",(function(){e._handleLikeClick(e._id)}))}},{key:"isLiked",value:function(){var e=this;return this._likes.find((function(t){return t._id===e._userId}))}},{key:"setLikes",value:function(e){this._likes=e,this._likeCountElement.textContent=this._likes.length,this.isLiked()&&this._handleLikeCard()}},{key:"createCard",value:function(){return this._element=this._getTemplate(),this._image=this._element.querySelector(".list__img"),this._likeBtn=this._element.querySelector(".list__symbol"),this._likeCountElement=this._element.querySelector(".list__symbol-count"),this._setEventListeners(),this._element.querySelector(".list__title").textContent=this._name,this._image.src=this._link,this._image.alt=this._name,this.setLikes(this._likes),this._ownerId!==this._userId&&(this._element.querySelector(".list__delete").style.display="none"),this._element}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}();function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var r=function(){function e(t,n){var r,o,i=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),o=function(){return i._inputList.some((function(e){return!e.validity.valid}))},(r="_hasInvalidInput")in this?Object.defineProperty(this,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):this[r]=o,this._formElement=n,this._formSelector=t.formSelector,this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass,this._inputList=Array.from(this._formElement.querySelectorAll(this._inputSelector)),this._buttonElement=this._formElement.querySelector(this._submitButtonSelector)}var t,r;return t=e,(r=[{key:"_showInputError",value:function(e,t){var n=this._formElement.querySelector(".".concat(e.id,"-error"));e.classList.add(this._inputErrorClass),n.textContent=t,n.classList.add(this._errorClass)}},{key:"_hideInputError",value:function(e){var t=this._formElement.querySelector(".".concat(e.id,"-error"));e.classList.remove(this._inputErrorClass),t.classList.remove(this._errorClass),t.textContent=""}},{key:"_isValid",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e,e.validationMessage)}},{key:"_setEventListeners",value:function(){var e=this;this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._isValid(t),e._toggleButtonState()}))})),this._toggleButtonState()}},{key:"restartValidation",value:function(){var e=this;this._toggleButtonState(),this._inputList.forEach((function(t){e._hideInputError(t)}))}},{key:"_disableButton",value:function(){this._buttonElement.classList.add(this._inactiveButtonClass),this._buttonElement.setAttribute("disabled","disabled")}},{key:"_enableButton",value:function(){this._buttonElement.classList.remove(this._inactiveButtonClass),this._buttonElement.removeAttribute("disabled")}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?this._disableButton():this._enableButton()}},{key:"enableValidation",value:function(){this._setEventListeners()}}])&&n(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(t),this._closeButton=this._popup.querySelector(".popup__close"),this._closeEsc=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_is-opened"),document.addEventListener("keyup",this._closeEsc)}},{key:"close",value:function(){this._popup.classList.remove("popup_is-opened"),document.removeEventListener("keyup",this._closeEsc)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._popup.addEventListener("mousedown",(function(t){(t.target.classList.contains("popup_is-opened")||t.target.classList.contains("popup__close"))&&e.close()}))}}])&&o(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(){return u="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=s(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},u.apply(this,arguments)}function s(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=p(e)););return e}function c(e,t){return c=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},c(e,t)}function f(e,t){if(t&&("object"===a(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function p(e){return p=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},p(e)}var h=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&c(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=p(r);if(o){var n=p(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return f(this,e)});function a(e){var t,n=e.popupSelector,r=e.handleSubmitProfileForm;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,n))._popupForm=t._popup.querySelector(".form"),t._inputElements=t._popupForm.querySelectorAll(".form__input"),t._buttonSubmitForm=t._popupForm.querySelector(".form__button"),t.handleSubmitProfileForm=r,t}return t=a,(n=[{key:"_getInputValues",value:function(){var e=this;return this._formValues={},this._inputElements.forEach((function(t){e._formValues[t.name]=t.value})),this._formValues}},{key:"setInputValues",value:function(e){this._inputElements.forEach((function(t){e[t.name]&&(t.value=e[t.name])}))}},{key:"changeSabmitHandler",value:function(e){this.handleSubmitProfileForm=e}},{key:"setEventListeners",value:function(){var e=this;u(p(a.prototype),"setEventListeners",this).call(this),this._popupForm.addEventListener("submit",(function(t){t.preventDefault(),e.handleSubmitProfileForm(e._getInputValues())}))}},{key:"close",value:function(){u(p(a.prototype),"close",this).call(this),this._popupForm.reset()}},{key:"loading",value:function(e){this._buttonSubmitForm.textContent=e?"Сохранение...":"Сохранить"}}])&&l(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(i);function d(e){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d(e)}function _(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function y(){return y="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=m(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},y.apply(this,arguments)}function m(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=k(e)););return e}function v(e,t){return v=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},v(e,t)}function b(e,t){if(t&&("object"===d(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function k(e){return k=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},k(e)}var S=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&v(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=k(r);if(o){var n=k(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return b(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._popupTitle=t._popup.querySelector(".popup__caption"),t._popupImage=t._popup.querySelector(".popup__image"),t}return t=a,(n=[{key:"open",value:function(e){this._popupImage.src=e.link,this._popupTitle.textContent=e.name,this._popupImage.alt=e.name,y(k(a.prototype),"open",this).call(this)}}])&&_(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(i);function g(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var w=function(){function e(t,n){var r=t.items,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._items=r,this._renderer=o,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"renderItems",value:function(e,t){var n=this;this._items=t,this._items.forEach((function(t){var r=t.name,o=t.link,i=t.likes,a=t._id,l=t.owner;n._renderer({name:r,link:o,likes:i,id:a,userId:l._id,ownerId:e.userId})}))}},{key:"setItem",value:function(e){this._container.append(e)}},{key:"setUserCard",value:function(e){this._container.prepend(e)}}])&&g(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function E(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var C=function(){function e(t){var n=t.aboutMeSelector,r=t.userNameSelector,o=t.avatarSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._aboutMe=document.querySelector(n),this._userName=document.querySelector(r),this._avatar=document.querySelector(o)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{aboutMe:this._aboutMe.textContent,userName:this._userName.textContent,avatar:this._avatar.src}}},{key:"setUserInfo",value:function(e){this._aboutMe.textContent=e.about,this._userName.textContent=e.name,this._avatar.src=e.avatar}}])&&E(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function L(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var O=function(){function e(t){var n=t.baseUrl,r=t.headers;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._baseUrl=n,this._headers=r}var t,n;return t=e,(n=[{key:"_checkResponse",value:function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}},{key:"getProfile",value:function(){return fetch("".concat(this._baseUrl,"/users/me"),{headers:this._headers}).then(this._checkResponse)}},{key:"editProfile",value:function(e){return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify(e)}).then(this._checkResponse)}},{key:"updateProfile",value:function(e){var t=e.avatar;return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:t})}).then(this._checkResponse)}},{key:"getInitialCards",value:function(){return fetch("".concat(this._baseUrl,"/cards"),{headers:this._headers}).then(this._checkResponse)}},{key:"addNewCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify(e)}).then(this._checkResponse)}},{key:"deleteCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then(this._checkResponse)}},{key:"addLikeCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e,"/likes"),{method:"PUT",headers:this._headers}).then(this._checkResponse)}},{key:"deleteLikeCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e,"/likes"),{method:"DELETE",headers:this._headers}).then(this._checkResponse)}}])&&L(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),P=document.querySelector(".profile__button-popup"),j=document.querySelector(".profile__button-add"),q=document.querySelector('[name="editForm"]'),I=document.querySelector('[name="cardsForm"]'),R=(document.querySelector(".form__input_type_name"),document.querySelector(".form__input_type_job"),document.querySelector(".profile__title"),document.querySelector(".profile__subtitle"),document.querySelector(".popup_type_avatar")),B=document.querySelector(".profile__button-avatar"),T=R.querySelector('[name="avatarForm"]'),U=(I.querySelector('[name="place"]'),I.querySelector('[name="link"]'),document.querySelectorAll(".popup"),document.querySelector(".popup_type_edit"),document.querySelector(".popup_type_cards"),document.querySelector(".list"),document.querySelector(".popup_type_image"),document.querySelector(".popup__image"),document.querySelector(".popup__caption"),{formSelector:".form",inputSelector:".form__input",submitButtonSelector:".form__button",inactiveButtonClass:"form__button_disabled",inputErrorClass:"form__input_type_error",errorClass:"form__error_visible"});function F(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var V=new O({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-54",headers:{authorization:"8002b1c6-936e-448e-b4b8-bec58afe72bf","Content-Type":"application/json"}});Promise.all([V.getProfile(),V.getInitialCards()]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,l=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(e){l=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(l)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return F(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?F(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];x.setUserInfo(o),H.renderItems(o,i)})).catch((function(e){return console.log("Ошибка: ".concat(e))}));var x=new C({userNameSelector:".profile__title",aboutMeSelector:".profile__subtitle",avatarSelector:".profile__img"}),A=new h({popupSelector:".popup_type_edit",handleSubmitProfileForm:function(e){A.loading(!0),V.editProfile({name:e.userName,about:e.aboutMe}).then((function(e){x.setUserInfo(e),A.close()})).catch((function(e){return console.log("Ошибка: ".concat(e))})).finally((function(){return A.loading(!1)}))}});A.setEventListeners(),P.addEventListener("click",(function(){$.restartValidation();var e=x.getUserInfo();A.setInputValues(e),A.open()}));var D=new h({popupSelector:".popup_type_avatar",handleSubmitProfileForm:function(e){D.loading(!0),V.updateProfile(e).then((function(e){x.setUserInfo(e),D.close()})).catch((function(e){return console.log("Ошибка: ".concat(e))})).finally((function(){return D.loading(!1)}))}});D.setEventListeners(),B.addEventListener("click",(function(){K.restartValidation(),D.open()}));var N=new h({popupSelector:".popup_type_cards",handleSubmitProfileForm:function(e){N.loading(!0),V.addNewCard(e).then((function(e){H.setUserCard(M({name:e.name,link:e.link,likes:e.likes,id:e._id,userId:e.owner,ownerId:e.owner._id})),N.close(),console.log(e.likes)})).catch((function(e){return console.log("Ошибка: ".concat(e))})).finally((function(){return N.loading(!1)}))}});N.setEventListeners(),j.addEventListener("click",(function(){G.restartValidation(),N.open()}));var M=function(e){var n=new t({data:e,handleClickCard:function(e,t){J.open({name:e,link:t})},handleDeleteClick:function(){z.open(),z.changeSabmitHandler((function(){V.deleteCard(e.id).then((function(){n.handleDelCard(),z.close()})).catch((function(e){return console.log("Ошибка: ".concat(e))}))}))},handleLikeClick:function(e){n.isLiked()?V.deleteLikeCard(e).then((function(e){n.setLikes(e.likes),console.log(e)})).catch((function(e){return console.log("Ошибка: ".concat(e))})):(console.log("like"),V.addLikeCard(e).then((function(e){n.setLikes(e.likes),console.log(e)})).catch((function(e){return console.log("Ошибка: ".concat(e))})))}},".template");return n.createCard()},H=new w({items:[],renderer:function(e){H.setItem(M(e))}},".list"),J=new S(".popup_type_image");J.setEventListeners();var z=new h({popupSelector:".popup_type_delete-confirm"});z.setEventListeners();var $=new r(U,q);$.enableValidation();var G=new r(U,I);G.enableValidation();var K=new r(U,T);K.enableValidation()})();
//# sourceMappingURL=main.js.map