!function(){"use strict";class t{constructor(t,e,s){this._name=t.name,this._link=t.link,this._cardSelector=e,this._handleImageClick=s}_getTemplate(){return document.querySelector(this._cardSelector).content.querySelector(".card").cloneNode(!0)}_handleDeleteCard(){this._cardElement.remove(),this._cardElement=null}_handleLikeIcon(){this._likeButton.classList.toggle("card__like-button_active")}_setEventListeners(){this._likeButton.addEventListener("click",(()=>{this._handleLikeIcon()})),this._cardElement.querySelector(".card__trash-button").addEventListener("click",(()=>{this._handleDeleteCard()})),this._cardImageEl.addEventListener("click",(()=>{this._handleImageClick(this._name,this._link)}))}getView(){return this._cardElement=this._getTemplate(),this._likeButton=this._cardElement.querySelector(".card__like-button"),this._cardDeleteButton=this._cardElement.querySelector(".card__trash-button"),this._cardTitleEl=this._cardElement.querySelector(".card__title"),this._cardImageEl=this._cardElement.querySelector(".card__image"),this._cardImageEl.src=this._link,this._cardImageEl.alt=this._name,this._cardTitleEl.textContent=this._name,this._setEventListeners(),this._cardElement}}var e=class{constructor(t,e){this._form=e,this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass,this._inputList=[...this._form.querySelectorAll(t.inputSelector)]}_showInputError(t){const e=this._form.querySelector(`#${t.id}-error`);t.classList.add(this._inputErrorClass),e.textContent=t.validationMessage,e.classList.add(this._errorClass)}_hideInputError(t){const e=this._form.querySelector(`#${t.id}-error`);t.classList.remove(this._inputErrorClass),e.textContent="",e.classList.remove(this._errorClass)}_checkInputValidity(t){if(!t.validity.valid)return this._showInputError(t);this._hideInputError(t)}_hasInvalidInput(){return!this._inputList.every((t=>t.validity.valid))}disableButton(){this._submitButton.classList.add(this._inactiveButtonClass),this._submitButton.disabled=!0}_enableButton(){this._submitButton.classList.remove(this._inactiveButtonClass),this._submitButton.disabled=!1}_toggleButtonState(){this._hasInvalidInput()?this.disableButton():this._enableButton()}_setEventListeners(){this._submitButton=this._form.querySelector(this._submitButtonSelector),this._inputList.forEach((t=>{t.addEventListener("input",(e=>{this._checkInputValidity(t),this._toggleButtonState()}))}))}resetValidation(){this._inputList.forEach((t=>{this._hideInputError(t)})),this._toggleButtonState()}enableValidation(){this._form.addEventListener("submit",(t=>{t.preventDefault()})),this._setEventListeners()}};const s={inputSelector:".modal__input",submitButtonSelector:".modal__button",inactiveButtonClass:"modal__button_disabled",inputErrorClass:"modal__input_type_error",errorClass:"modal__error_visible"},i=document.forms["edit-card-form"],r=document.querySelector("#profile-edit-button"),n=document.querySelector("#profile-add-button"),o=(Array.from(i.querySelectorAll(".modal__input")),document.querySelector("#profile-title-input")),a=document.querySelector("#profile-description-input"),l=(document.forms["add-card-form"],"#card-template"),c=[...document.querySelectorAll(".modal__form")],u={},d={};class _{constructor(t){let{popupSelector:e}=t;this._popupElement=document.querySelector(e)}open(){this._popupElement.classList.add("modal_opened"),document.addEventListener("keyup",this._handleEscClose)}close=()=>{this._popupElement.classList.remove("modal_opened"),document.removeEventListener("keyup",this._handleEscClose)};_handleEscClose=t=>{"Escape"===t.key&&this.close()};setEventListeners(){this._closeButton=this._popupElement.querySelector(".modal__close"),this._closeButton.addEventListener("click",this.close),this._popupElement.addEventListener("mousedown",(t=>{t.target===t.currentTarget&&this.close()}))}}class p extends _{constructor(t,e){super(t),this._popupForm=this._popupElement.querySelector(".modal__form"),this._handleFormSubmit=e,this._inputList=[...this._popupForm.querySelectorAll(".modal__input")]}_getInputValues(){const t={};return this._inputList.forEach((e=>{t[e.name]=e.value})),t}setEventListeners(){this._popupForm.addEventListener("submit",(t=>{t.preventDefault();const e=this._getInputValues();this._handleFormSubmit(e)})),super.setEventListeners()}close(){this._popupForm.reset(),super.close()}}const m=new class{constructor(t){let{profileTitle:e,profileDescription:s}=t;this._profileTitle=document.querySelector(e),this._profileDescription=document.querySelector(s)}getUserInfo(){const t={};return t.title=this._profileTitle.textContent,t.description=this._profileDescription.textContent,t}setUserInfo(t){this._profileTitle.textContent=t.title,this._profileDescription.textContent=t.description}}({profileTitle:".profile__title",profileDescription:".profile__description"});c.forEach((t=>{const i=new e(s,t);i.enableValidation(),u[t.name]=i,d[t.name]=t}));const h=new p({popupSelector:"#profile-edit-modal"},(function(t){m.setUserInfo(t),h.close()})),E=new p({popupSelector:"#add-card-modal"},(function(t){let{title:e,link:s}=t;const i=g({name:e,link:s});f.addItem(i),u.addCardForm.disableButton(),d.addCardForm.reset(),E.close()}));E.setEventListeners();const v=new class extends _{constructor(t){super(t),this._previewImage=this._popupElement.querySelector(".modal__preview-image"),this._previewImageTitle=this._popupElement.querySelector(".modal__preview-title")}open(t){let{name:e,link:s}=t;this._previewImage.src=s,this._previewImage.alt=e,this._previewImageTitle.textContent=e,super.open()}}({popupSelector:"#preview__image-modal"});v.setEventListeners();const f=new class{constructor(t,e){let{items:s,renderer:i}=t;this._items=s,this._renderer=i,this._container=document.querySelector(e)}renderItems=()=>{this._items.forEach((t=>{this.addItem(this._renderer(t))}))};addItem=t=>{this._container.prepend(t)}}({items:[{name:"Yosemite Valley",link:"https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg"},{name:"Lake Louise",link:"https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg"},{name:"Bald Mountains",link:"https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg"},{name:"Latemar",link:"https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg"},{name:"Vanoise National Park",link:"https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg"},{name:"Lago di Braies",link:"https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg "}],renderer:g},".cards__gallery");function g(e){return new t(e,l,S).getView()}function S(t,e){v.open({name:t,link:e})}r.addEventListener("click",(()=>{!function(){const t=m.getUserInfo();o.value=t.title,a.value=t.description.trim()}(),u.editCardForm.resetValidation(),h.open()})),n.addEventListener("click",(()=>E.open())),f.renderItems(),h.setEventListeners()}();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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R0FJbEIsT0FIYSxJQUFJMUksRUFBSzBJLEVBQVV2SSxFQUFjQyxHQUVyQnVCLFNBRTNCLENBRUEsU0FBU3ZCLEVBQWlCRyxFQUFNRSxHQUM5Qm9ILEVBQWV4QyxLQUFLLENBQUU5RSxPQUFNRSxRQUM5QixDQTZCQWdFLEVBQWtCaEQsaUJBQWlCLFNBQVMsTUEzQjVDLFdBQ0UsTUFBTWtILEVBQVdqQyxFQUFTSyxjQUMxQnBDLEVBQW9CNEIsTUFBUW9DLEVBQVMxQixNQUNyQ25DLEVBQXFCeUIsTUFBUW9DLEVBQVN6QixZQUFZMEIsTUFDcEQsQ0F3QkVDLEdBRUE3RCxFQUFBQSxhQUFBQSxrQkFDQXVDLEVBQWtCbEMsTUFBTSxJQUcxQlgsRUFBaUJqRCxpQkFBaUIsU0FBUyxJQUFNK0YsRUFBZ0JuQyxTQUVqRXNDLEVBQWNXLGNBRWRmLEVBQWtCNUIsbUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcmFjdGljdW0vLi9zcmMvY29tcG9uZW50cy9DYXJkLmpzIiwid2VicGFjazovL3ByYWN0aWN1bS8uL3NyYy9jb21wb25lbnRzL0Zvcm1WYWxpZGF0b3IuanMiLCJ3ZWJwYWNrOi8vcHJhY3RpY3VtLy4vc3JjL3V0aWxzL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly9wcmFjdGljdW0vLi9zcmMvY29tcG9uZW50cy9Qb3B1cC5qcyIsIndlYnBhY2s6Ly9wcmFjdGljdW0vLi9zcmMvY29tcG9uZW50cy9Qb3B1cHdpdGhGb3JtLmpzIiwid2VicGFjazovL3ByYWN0aWN1bS8uL3NyYy9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9wcmFjdGljdW0vLi9zcmMvY29tcG9uZW50cy9Vc2VySW5mby5qcyIsIndlYnBhY2s6Ly9wcmFjdGljdW0vLi9zcmMvY29tcG9uZW50cy9Qb3B1cFdpdGhJbWFnZS5qcyIsIndlYnBhY2s6Ly9wcmFjdGljdW0vLi9zcmMvY29tcG9uZW50cy9TZWN0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIENhcmQge1xyXG4gIGNvbnN0cnVjdG9yKGRhdGEsIGNhcmRTZWxlY3RvciwgaGFuZGxlSW1hZ2VDbGljaykge1xyXG4gICAgdGhpcy5fbmFtZSA9IGRhdGEubmFtZTtcclxuICAgIHRoaXMuX2xpbmsgPSBkYXRhLmxpbms7XHJcbiAgICB0aGlzLl9jYXJkU2VsZWN0b3IgPSBjYXJkU2VsZWN0b3I7XHJcbiAgICB0aGlzLl9oYW5kbGVJbWFnZUNsaWNrID0gaGFuZGxlSW1hZ2VDbGljaztcclxuICB9XHJcblxyXG4gIF9nZXRUZW1wbGF0ZSgpIHtcclxuICAgIHJldHVybiBkb2N1bWVudFxyXG4gICAgICAucXVlcnlTZWxlY3Rvcih0aGlzLl9jYXJkU2VsZWN0b3IpXHJcbiAgICAgIC5jb250ZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZFwiKVxyXG4gICAgICAuY2xvbmVOb2RlKHRydWUpO1xyXG4gIH1cclxuXHJcbiAgX2hhbmRsZURlbGV0ZUNhcmQoKSB7XHJcbiAgICB0aGlzLl9jYXJkRWxlbWVudC5yZW1vdmUoKTtcclxuICAgIHRoaXMuX2NhcmRFbGVtZW50ID0gbnVsbDtcclxuICB9XHJcblxyXG4gIF9oYW5kbGVMaWtlSWNvbigpIHtcclxuICAgIHRoaXMuX2xpa2VCdXR0b24uY2xhc3NMaXN0LnRvZ2dsZShcImNhcmRfX2xpa2UtYnV0dG9uX2FjdGl2ZVwiKTtcclxuICB9XHJcblxyXG4gIF9zZXRFdmVudExpc3RlbmVycygpIHtcclxuICAgIHRoaXMuX2xpa2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgdGhpcy5faGFuZGxlTGlrZUljb24oKTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5fY2FyZEVsZW1lbnRcclxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZF9fdHJhc2gtYnV0dG9uXCIpXHJcbiAgICAgIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuX2hhbmRsZURlbGV0ZUNhcmQoKTtcclxuICAgICAgfSk7XHJcbiAgICB0aGlzLl9jYXJkSW1hZ2VFbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICB0aGlzLl9oYW5kbGVJbWFnZUNsaWNrKHRoaXMuX25hbWUsIHRoaXMuX2xpbmspO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBnZXRWaWV3KCkge1xyXG4gICAgdGhpcy5fY2FyZEVsZW1lbnQgPSB0aGlzLl9nZXRUZW1wbGF0ZSgpO1xyXG4gICAgdGhpcy5fbGlrZUJ1dHRvbiA9IHRoaXMuX2NhcmRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZF9fbGlrZS1idXR0b25cIik7XHJcbiAgICB0aGlzLl9jYXJkRGVsZXRlQnV0dG9uID0gdGhpcy5fY2FyZEVsZW1lbnQucXVlcnlTZWxlY3RvcihcclxuICAgICAgXCIuY2FyZF9fdHJhc2gtYnV0dG9uXCJcclxuICAgICk7XHJcbiAgICB0aGlzLl9jYXJkVGl0bGVFbCA9IHRoaXMuX2NhcmRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZF9fdGl0bGVcIik7XHJcbiAgICB0aGlzLl9jYXJkSW1hZ2VFbCA9IHRoaXMuX2NhcmRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZF9faW1hZ2VcIik7XHJcblxyXG4gICAgdGhpcy5fY2FyZEltYWdlRWwuc3JjID0gdGhpcy5fbGluaztcclxuICAgIHRoaXMuX2NhcmRJbWFnZUVsLmFsdCA9IHRoaXMuX25hbWU7XHJcbiAgICB0aGlzLl9jYXJkVGl0bGVFbC50ZXh0Q29udGVudCA9IHRoaXMuX25hbWU7XHJcblxyXG4gICAgdGhpcy5fc2V0RXZlbnRMaXN0ZW5lcnMoKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5fY2FyZEVsZW1lbnQ7XHJcbiAgfVxyXG59XHJcbiIsImNsYXNzIEZvcm1WYWxpZGF0b3Ige1xyXG4gIGNvbnN0cnVjdG9yKHNldHRpbmdzLCBmb3JtRWxlbWVudCkge1xyXG4gICAgdGhpcy5fZm9ybSA9IGZvcm1FbGVtZW50O1xyXG4gICAgdGhpcy5faW5wdXRTZWxlY3RvciA9IHNldHRpbmdzLmlucHV0U2VsZWN0b3I7XHJcbiAgICB0aGlzLl9zdWJtaXRCdXR0b25TZWxlY3RvciA9IHNldHRpbmdzLnN1Ym1pdEJ1dHRvblNlbGVjdG9yO1xyXG4gICAgdGhpcy5faW5hY3RpdmVCdXR0b25DbGFzcyA9IHNldHRpbmdzLmluYWN0aXZlQnV0dG9uQ2xhc3M7XHJcbiAgICB0aGlzLl9pbnB1dEVycm9yQ2xhc3MgPSBzZXR0aW5ncy5pbnB1dEVycm9yQ2xhc3M7XHJcbiAgICB0aGlzLl9lcnJvckNsYXNzID0gc2V0dGluZ3MuZXJyb3JDbGFzcztcclxuICAgIHRoaXMuX2lucHV0TGlzdCA9IFsuLi50aGlzLl9mb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoc2V0dGluZ3MuaW5wdXRTZWxlY3RvcildO1xyXG4gIH1cclxuXHJcbiAgX3Nob3dJbnB1dEVycm9yKGlucHV0RWxlbWVudCkge1xyXG4gICAgY29uc3QgZXJyb3JNZXNzYWdlRWxlbWVudCA9IHRoaXMuX2Zvcm0ucXVlcnlTZWxlY3RvcihcclxuICAgICAgYCMke2lucHV0RWxlbWVudC5pZH0tZXJyb3JgXHJcbiAgICApO1xyXG4gICAgaW5wdXRFbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5faW5wdXRFcnJvckNsYXNzKTtcclxuICAgIGVycm9yTWVzc2FnZUVsZW1lbnQudGV4dENvbnRlbnQgPSBpbnB1dEVsZW1lbnQudmFsaWRhdGlvbk1lc3NhZ2U7XHJcbiAgICBlcnJvck1lc3NhZ2VFbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5fZXJyb3JDbGFzcyk7XHJcbiAgfVxyXG5cclxuICBfaGlkZUlucHV0RXJyb3IoaW5wdXRFbGVtZW50KSB7XHJcbiAgICBjb25zdCBlcnJvck1lc3NhZ2VFbGVtZW50ID0gdGhpcy5fZm9ybS5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICBgIyR7aW5wdXRFbGVtZW50LmlkfS1lcnJvcmBcclxuICAgICk7XHJcbiAgICBpbnB1dEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLl9pbnB1dEVycm9yQ2xhc3MpO1xyXG4gICAgZXJyb3JNZXNzYWdlRWxlbWVudC50ZXh0Q29udGVudCA9IFwiXCI7XHJcbiAgICBlcnJvck1lc3NhZ2VFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5fZXJyb3JDbGFzcyk7XHJcbiAgfVxyXG5cclxuICBfY2hlY2tJbnB1dFZhbGlkaXR5KGlucHV0RWxlbWVudCkge1xyXG4gICAgaWYgKCFpbnB1dEVsZW1lbnQudmFsaWRpdHkudmFsaWQpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuX3Nob3dJbnB1dEVycm9yKGlucHV0RWxlbWVudCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLl9oaWRlSW5wdXRFcnJvcihpbnB1dEVsZW1lbnQpO1xyXG4gIH1cclxuXHJcbiAgX2hhc0ludmFsaWRJbnB1dCgpIHtcclxuICAgIHJldHVybiAhdGhpcy5faW5wdXRMaXN0LmV2ZXJ5KFxyXG4gICAgICAoaW5wdXRFbGVtZW50KSA9PiBpbnB1dEVsZW1lbnQudmFsaWRpdHkudmFsaWRcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBkaXNhYmxlQnV0dG9uKCkge1xyXG4gICAgdGhpcy5fc3VibWl0QnV0dG9uLmNsYXNzTGlzdC5hZGQodGhpcy5faW5hY3RpdmVCdXR0b25DbGFzcyk7XHJcbiAgICB0aGlzLl9zdWJtaXRCdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgX2VuYWJsZUJ1dHRvbigpIHtcclxuICAgIHRoaXMuX3N1Ym1pdEJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuX2luYWN0aXZlQnV0dG9uQ2xhc3MpO1xyXG4gICAgdGhpcy5fc3VibWl0QnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBfdG9nZ2xlQnV0dG9uU3RhdGUoKSB7XHJcbiAgICBpZiAodGhpcy5faGFzSW52YWxpZElucHV0KCkpIHtcclxuICAgICAgdGhpcy5kaXNhYmxlQnV0dG9uKCk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMuX2VuYWJsZUJ1dHRvbigpO1xyXG4gIH1cclxuXHJcbiAgX3NldEV2ZW50TGlzdGVuZXJzKCkge1xyXG4gICAgdGhpcy5fc3VibWl0QnV0dG9uID0gdGhpcy5fZm9ybS5xdWVyeVNlbGVjdG9yKHRoaXMuX3N1Ym1pdEJ1dHRvblNlbGVjdG9yKTtcclxuXHJcbiAgICB0aGlzLl9pbnB1dExpc3QuZm9yRWFjaCgoaW5wdXRFbGVtZW50KSA9PiB7XHJcbiAgICAgIGlucHV0RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKGUpID0+IHtcclxuICAgICAgICB0aGlzLl9jaGVja0lucHV0VmFsaWRpdHkoaW5wdXRFbGVtZW50KTtcclxuICAgICAgICB0aGlzLl90b2dnbGVCdXR0b25TdGF0ZSgpO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcmVzZXRWYWxpZGF0aW9uKCkge1xyXG4gICAgdGhpcy5faW5wdXRMaXN0LmZvckVhY2goKGlucHV0RWxlbWVudCkgPT4ge1xyXG4gICAgICB0aGlzLl9oaWRlSW5wdXRFcnJvcihpbnB1dEVsZW1lbnQpO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLl90b2dnbGVCdXR0b25TdGF0ZSgpO1xyXG4gIH1cclxuXHJcbiAgZW5hYmxlVmFsaWRhdGlvbigpIHtcclxuICAgIHRoaXMuX2Zvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4ge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9KTtcclxuICAgIHRoaXMuX3NldEV2ZW50TGlzdGVuZXJzKCk7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBjb25zdCBzZXR0aW5ncyA9IHtcclxuLy8gICBmb3JtU2VsZWN0b3I6IFwiLm1vZGFsX19mb3JtXCIsXHJcbi8vICAgaW5wdXRTZWxlY3RvcjogXCIubW9kYWxfX2lucHV0XCIsXHJcbi8vICAgc3VibWl0QnV0dG9uU2VsZWN0b3I6IFwiLm1vZGFsX19idXR0b25cIixcclxuLy8gICBpbmFjdGl2ZUJ1dHRvbkNsYXNzOiBcIm1vZGFsX19idXR0b25fZGlzYWJsZWRcIixcclxuLy8gICBpbnB1dEVycm9yQ2xhc3M6IFwibW9kYWxfX2lucHV0X3R5cGVfZXJyb3JcIixcclxuLy8gICBlcnJvckNsYXNzOiBcIm1vZGFsX19lcnJvcl92aXNpYmxlXCIsXHJcbi8vIH07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb3JtVmFsaWRhdG9yO1xyXG4iLCJleHBvcnQgY29uc3QgaW5pdGlhbENhcmRzID0gW1xyXG4gIHtcclxuICAgIG5hbWU6IFwiWW9zZW1pdGUgVmFsbGV5XCIsXHJcbiAgICBsaW5rOiBcImh0dHBzOi8vcHJhY3RpY3VtLWNvbnRlbnQuczMudXMtd2VzdC0xLmFtYXpvbmF3cy5jb20vc29mdHdhcmUtZW5naW5lZXIvYXJvdW5kLXByb2plY3QveW9zZW1pdGUuanBnXCIsXHJcbiAgfSxcclxuXHJcbiAge1xyXG4gICAgbmFtZTogXCJMYWtlIExvdWlzZVwiLFxyXG4gICAgbGluazogXCJodHRwczovL3ByYWN0aWN1bS1jb250ZW50LnMzLnVzLXdlc3QtMS5hbWF6b25hd3MuY29tL3NvZnR3YXJlLWVuZ2luZWVyL2Fyb3VuZC1wcm9qZWN0L2xha2UtbG91aXNlLmpwZ1wiLFxyXG4gIH0sXHJcblxyXG4gIHtcclxuICAgIG5hbWU6IFwiQmFsZCBNb3VudGFpbnNcIixcclxuICAgIGxpbms6IFwiaHR0cHM6Ly9wcmFjdGljdW0tY29udGVudC5zMy51cy13ZXN0LTEuYW1hem9uYXdzLmNvbS9zb2Z0d2FyZS1lbmdpbmVlci9hcm91bmQtcHJvamVjdC9iYWxkLW1vdW50YWlucy5qcGdcIixcclxuICB9LFxyXG5cclxuICB7XHJcbiAgICBuYW1lOiBcIkxhdGVtYXJcIixcclxuICAgIGxpbms6IFwiaHR0cHM6Ly9wcmFjdGljdW0tY29udGVudC5zMy51cy13ZXN0LTEuYW1hem9uYXdzLmNvbS9zb2Z0d2FyZS1lbmdpbmVlci9hcm91bmQtcHJvamVjdC9sYXRlbWFyLmpwZ1wiLFxyXG4gIH0sXHJcblxyXG4gIHtcclxuICAgIG5hbWU6IFwiVmFub2lzZSBOYXRpb25hbCBQYXJrXCIsXHJcbiAgICBsaW5rOiBcImh0dHBzOi8vcHJhY3RpY3VtLWNvbnRlbnQuczMudXMtd2VzdC0xLmFtYXpvbmF3cy5jb20vc29mdHdhcmUtZW5naW5lZXIvYXJvdW5kLXByb2plY3QvdmFub2lzZS5qcGdcIixcclxuICB9LFxyXG5cclxuICB7XHJcbiAgICBuYW1lOiBcIkxhZ28gZGkgQnJhaWVzXCIsXHJcbiAgICBsaW5rOiBcImh0dHBzOi8vcHJhY3RpY3VtLWNvbnRlbnQuczMudXMtd2VzdC0xLmFtYXpvbmF3cy5jb20vc29mdHdhcmUtZW5naW5lZXIvYXJvdW5kLXByb2plY3QvbGFnby5qcGcgXCIsXHJcbiAgfSxcclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCB2YWxpZGF0aW9uU2V0dGluZ3MgPSB7XHJcbiAgaW5wdXRTZWxlY3RvcjogXCIubW9kYWxfX2lucHV0XCIsXHJcbiAgc3VibWl0QnV0dG9uU2VsZWN0b3I6IFwiLm1vZGFsX19idXR0b25cIixcclxuICBpbmFjdGl2ZUJ1dHRvbkNsYXNzOiBcIm1vZGFsX19idXR0b25fZGlzYWJsZWRcIixcclxuICBpbnB1dEVycm9yQ2xhc3M6IFwibW9kYWxfX2lucHV0X3R5cGVfZXJyb3JcIixcclxuICBlcnJvckNsYXNzOiBcIm1vZGFsX19lcnJvcl92aXNpYmxlXCIsXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgcHJvZmlsZUVkaXRGb3JtID0gZG9jdW1lbnQuZm9ybXNbXCJlZGl0LWNhcmQtZm9ybVwiXTtcclxuXHJcbmV4cG9ydCBjb25zdCBwcm9maWxlRWRpdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvZmlsZS1lZGl0LWJ1dHRvblwiKTtcclxuXHJcbmV4cG9ydCBjb25zdCBhZGROZXdDYXJkQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9maWxlLWFkZC1idXR0b25cIik7XHJcblxyXG5leHBvcnQgY29uc3QgZWRpdFByb2ZpbGVJbnB1dExpc3QgPSBBcnJheS5mcm9tKFxyXG4gIHByb2ZpbGVFZGl0Rm9ybS5xdWVyeVNlbGVjdG9yQWxsKFwiLm1vZGFsX19pbnB1dFwiKVxyXG4pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGVkaXRNb2RhbElucHV0VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gIFwiI3Byb2ZpbGUtdGl0bGUtaW5wdXRcIlxyXG4pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGVkaXRNb2RhbERlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuICBcIiNwcm9maWxlLWRlc2NyaXB0aW9uLWlucHV0XCJcclxuKTtcclxuXHJcbmV4cG9ydCBjb25zdCBhZGRDYXJkRm9ybUVsZW1lbnQgPSBkb2N1bWVudC5mb3Jtc1tcImFkZC1jYXJkLWZvcm1cIl07XHJcblxyXG5leHBvcnQgY29uc3QgY2FyZFNlbGVjdG9yID0gXCIjY2FyZC10ZW1wbGF0ZVwiO1xyXG5leHBvcnQgY29uc3QgZm9ybUxpc3QgPSBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5tb2RhbF9fZm9ybVwiKV07XHJcbi8ve2VkaXRDYXJkRm9ybTogaHRtbGVsZW1lbnR9IGZvcm1MaXN0LmVkaXRDYXJkRm9ybVxyXG5cclxuZXhwb3J0IGNvbnN0IGZvcm1WYWxpZGF0b3JzID0ge307XHJcblxyXG5leHBvcnQgY29uc3QgZm9ybXMgPSB7fTtcclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9wdXAge1xyXG4gIGNvbnN0cnVjdG9yKHsgcG9wdXBTZWxlY3RvciB9KSB7XHJcbiAgICB0aGlzLl9wb3B1cEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHBvcHVwU2VsZWN0b3IpO1xyXG4gIH1cclxuICBvcGVuKCkge1xyXG4gICAgdGhpcy5fcG9wdXBFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJtb2RhbF9vcGVuZWRcIik7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgdGhpcy5faGFuZGxlRXNjQ2xvc2UpO1xyXG4gIH1cclxuXHJcbiAgY2xvc2UgPSAoKSA9PiB7XHJcbiAgICB0aGlzLl9wb3B1cEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcIm1vZGFsX29wZW5lZFwiKTtcclxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCB0aGlzLl9oYW5kbGVFc2NDbG9zZSk7XHJcbiAgfTtcclxuXHJcbiAgX2hhbmRsZUVzY0Nsb3NlID0gKGV2dCkgPT4ge1xyXG4gICAgaWYgKGV2dC5rZXkgPT09IFwiRXNjYXBlXCIpIHtcclxuICAgICAgdGhpcy5jbG9zZSgpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHNldEV2ZW50TGlzdGVuZXJzKCkge1xyXG4gICAgdGhpcy5fY2xvc2VCdXR0b24gPSB0aGlzLl9wb3B1cEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbF9fY2xvc2VcIik7XHJcbiAgICB0aGlzLl9jbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5jbG9zZSk7XHJcblxyXG4gICAgdGhpcy5fcG9wdXBFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgKGV2dCkgPT4ge1xyXG4gICAgICBpZiAoZXZ0LnRhcmdldCA9PT0gZXZ0LmN1cnJlbnRUYXJnZXQpIHtcclxuICAgICAgICB0aGlzLmNsb3NlKCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQb3B1cFdpdGhGb3JtIGV4dGVuZHMgUG9wdXAge1xyXG4gIGNvbnN0cnVjdG9yKHBvcHVwU2VsZWN0b3IsIGhhbmRsZUZvcm1TdWJtaXQpIHtcclxuICAgIHN1cGVyKHBvcHVwU2VsZWN0b3IpO1xyXG4gICAgdGhpcy5fcG9wdXBGb3JtID0gdGhpcy5fcG9wdXBFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxfX2Zvcm1cIik7XHJcbiAgICB0aGlzLl9oYW5kbGVGb3JtU3VibWl0ID0gaGFuZGxlRm9ybVN1Ym1pdDtcclxuICAgIHRoaXMuX2lucHV0TGlzdCA9IFsuLi50aGlzLl9wb3B1cEZvcm0ucXVlcnlTZWxlY3RvckFsbChcIi5tb2RhbF9faW5wdXRcIildO1xyXG4gIH1cclxuICBfZ2V0SW5wdXRWYWx1ZXMoKSB7XHJcbiAgICBjb25zdCBpbnB1dFZhbHVlID0ge307XHJcbiAgICB0aGlzLl9pbnB1dExpc3QuZm9yRWFjaCgoaW5wdXQpID0+IHtcclxuICAgICAgaW5wdXRWYWx1ZVtpbnB1dC5uYW1lXSA9IGlucHV0LnZhbHVlO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gaW5wdXRWYWx1ZTtcclxuICB9XHJcblxyXG4gIHNldEV2ZW50TGlzdGVuZXJzKCkge1xyXG4gICAgdGhpcy5fcG9wdXBGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGV2dCkgPT4ge1xyXG4gICAgICBldnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgY29uc3QgaW5wdXRWYWx1ZXMgPSB0aGlzLl9nZXRJbnB1dFZhbHVlcygpO1xyXG4gICAgICB0aGlzLl9oYW5kbGVGb3JtU3VibWl0KGlucHV0VmFsdWVzKTtcclxuICAgIH0pO1xyXG4gICAgc3VwZXIuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcclxuICB9XHJcblxyXG4gIGNsb3NlKCkge1xyXG4gICAgdGhpcy5fcG9wdXBGb3JtLnJlc2V0KCk7XHJcbiAgICBzdXBlci5jbG9zZSgpO1xyXG4gIH1cclxufVxyXG5cclxuaW1wb3J0IFBvcHVwIGZyb20gXCIuL1BvcHVwLmpzXCI7XHJcbiIsImltcG9ydCBDYXJkIGZyb20gXCIuLi9jb21wb25lbnRzL0NhcmQuanNcIjtcclxuaW1wb3J0IEZvcm1WYWxpZGF0b3IgZnJvbSBcIi4uL2NvbXBvbmVudHMvRm9ybVZhbGlkYXRvci5qc1wiO1xyXG5pbXBvcnQge1xyXG4gIGluaXRpYWxDYXJkcyxcclxuICB2YWxpZGF0aW9uU2V0dGluZ3MsXHJcbiAgcHJvZmlsZUVkaXRCdXR0b24sXHJcbiAgYWRkTmV3Q2FyZEJ1dHRvbixcclxuICBmb3JtTGlzdCxcclxuICBlZGl0TW9kYWxJbnB1dFRpdGxlLFxyXG4gIGVkaXRNb2RhbERlc2NyaXB0aW9uLFxyXG4gIGZvcm1WYWxpZGF0b3JzLFxyXG4gIGNhcmRTZWxlY3RvcixcclxuICBmb3JtcyxcclxufSBmcm9tIFwiLi4vdXRpbHMvY29uc3RhbnRzLmpzXCI7XHJcblxyXG5pbXBvcnQgU2VjdGlvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9TZWN0aW9uLmpzXCI7XHJcbmltcG9ydCBVc2VySW5mbyBmcm9tIFwiLi4vY29tcG9uZW50cy9Vc2VySW5mby5qc1wiO1xyXG5pbXBvcnQgUG9wdXBXaXRoSW1hZ2UgZnJvbSBcIi4uL2NvbXBvbmVudHMvUG9wdXBXaXRoSW1hZ2UuanNcIjtcclxuaW1wb3J0IFBvcHVwV2l0aEZvcm0gZnJvbSBcIi4uL2NvbXBvbmVudHMvUG9wdXB3aXRoRm9ybS5qc1wiO1xyXG5cclxuaW1wb3J0IFwiLi9pbmRleC5jc3NcIjtcclxuXHJcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbi8qICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXHJcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbmNvbnN0IHVzZXJJbmZvID0gbmV3IFVzZXJJbmZvKHtcclxuICBwcm9maWxlVGl0bGU6IFwiLnByb2ZpbGVfX3RpdGxlXCIsXHJcbiAgcHJvZmlsZURlc2NyaXB0aW9uOiBcIi5wcm9maWxlX19kZXNjcmlwdGlvblwiLFxyXG59KTtcclxuXHJcbmZvcm1MaXN0LmZvckVhY2goKGZvcm0pID0+IHtcclxuICBjb25zdCB2YWxpZGF0b3IgPSBuZXcgRm9ybVZhbGlkYXRvcih2YWxpZGF0aW9uU2V0dGluZ3MsIGZvcm0pO1xyXG4gIHZhbGlkYXRvci5lbmFibGVWYWxpZGF0aW9uKCk7XHJcbiAgZm9ybVZhbGlkYXRvcnNbZm9ybS5uYW1lXSA9IHZhbGlkYXRvcjtcclxuICBmb3Jtc1tmb3JtLm5hbWVdID0gZm9ybTtcclxufSk7XHJcblxyXG5jb25zdCBlZGl0TW9kYWxXaXRoRm9ybSA9IG5ldyBQb3B1cFdpdGhGb3JtKFxyXG4gIHtcclxuICAgIHBvcHVwU2VsZWN0b3I6IFwiI3Byb2ZpbGUtZWRpdC1tb2RhbFwiLFxyXG4gIH0sXHJcbiAgaGFuZGxlUHJvZmlsZUVkaXRTdWJtaXRcclxuKTtcclxuXHJcbmNvbnN0IGFkZENhcmRXaXRoRm9ybSA9IG5ldyBQb3B1cFdpdGhGb3JtKFxyXG4gIHtcclxuICAgIHBvcHVwU2VsZWN0b3I6IFwiI2FkZC1jYXJkLW1vZGFsXCIsXHJcbiAgfSxcclxuICBoYW5kbGVBZGRDYXJkRm9ybVN1Ym1pdFxyXG4pO1xyXG5cclxuYWRkQ2FyZFdpdGhGb3JtLnNldEV2ZW50TGlzdGVuZXJzKCk7XHJcblxyXG5jb25zdCBtb2RhbFdpdGhJbWFnZSA9IG5ldyBQb3B1cFdpdGhJbWFnZSh7XHJcbiAgcG9wdXBTZWxlY3RvcjogXCIjcHJldmlld19faW1hZ2UtbW9kYWxcIixcclxufSk7XHJcblxyXG5tb2RhbFdpdGhJbWFnZS5zZXRFdmVudExpc3RlbmVycygpO1xyXG5cclxuY29uc3QgY2FyZHNSZW5kZXJlciA9IG5ldyBTZWN0aW9uKFxyXG4gIHtcclxuICAgIGl0ZW1zOiBpbml0aWFsQ2FyZHMsXHJcbiAgICByZW5kZXJlcjogY3JlYXRlQ2FyZCxcclxuICB9LFxyXG4gIFwiLmNhcmRzX19nYWxsZXJ5XCJcclxuKTtcclxuXHJcbi8vIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbi8qICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9ucyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXHJcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcblxyXG5mdW5jdGlvbiBjcmVhdGVDYXJkKGNhcmREYXRhKSB7XHJcbiAgY29uc3QgY2FyZCA9IG5ldyBDYXJkKGNhcmREYXRhLCBjYXJkU2VsZWN0b3IsIGhhbmRsZUltYWdlQ2xpY2spO1xyXG5cclxuICBjb25zdCBjYXJkRWxlbWVudCA9IGNhcmQuZ2V0VmlldygpO1xyXG4gIHJldHVybiBjYXJkRWxlbWVudDtcclxufVxyXG5cclxuZnVuY3Rpb24gaGFuZGxlSW1hZ2VDbGljayhuYW1lLCBsaW5rKSB7XHJcbiAgbW9kYWxXaXRoSW1hZ2Uub3Blbih7IG5hbWUsIGxpbmsgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZpbGxVc2VyRGF0YSgpIHtcclxuICBjb25zdCB1c2VyRGF0YSA9IHVzZXJJbmZvLmdldFVzZXJJbmZvKCk7XHJcbiAgZWRpdE1vZGFsSW5wdXRUaXRsZS52YWx1ZSA9IHVzZXJEYXRhLnRpdGxlO1xyXG4gIGVkaXRNb2RhbERlc2NyaXB0aW9uLnZhbHVlID0gdXNlckRhdGEuZGVzY3JpcHRpb24udHJpbSgpO1xyXG59XHJcblxyXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4vKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFdmVudHMgaGFuZGxlcnMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xyXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG5cclxuZnVuY3Rpb24gaGFuZGxlUHJvZmlsZUVkaXRTdWJtaXQodmFsdWUpIHtcclxuICB1c2VySW5mby5zZXRVc2VySW5mbyh2YWx1ZSk7XHJcbiAgZWRpdE1vZGFsV2l0aEZvcm0uY2xvc2UoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gaGFuZGxlQWRkQ2FyZEZvcm1TdWJtaXQoeyB0aXRsZSwgbGluayB9KSB7XHJcbiAgY29uc3QgbmV3Q2FyZCA9IGNyZWF0ZUNhcmQoeyBuYW1lOiB0aXRsZSwgbGluayB9KTtcclxuICBjYXJkc1JlbmRlcmVyLmFkZEl0ZW0obmV3Q2FyZCk7XHJcbiAgZm9ybVZhbGlkYXRvcnNbXCJhZGRDYXJkRm9ybVwiXS5kaXNhYmxlQnV0dG9uKCk7XHJcbiAgZm9ybXMuYWRkQ2FyZEZvcm0ucmVzZXQoKTtcclxuICBhZGRDYXJkV2l0aEZvcm0uY2xvc2UoKTtcclxufVxyXG5cclxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuLyogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRXZlbnQgTGlzdGVuZXJzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cclxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuXHJcbnByb2ZpbGVFZGl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgZmlsbFVzZXJEYXRhKCk7XHJcblxyXG4gIGZvcm1WYWxpZGF0b3JzW1wiZWRpdENhcmRGb3JtXCJdLnJlc2V0VmFsaWRhdGlvbigpO1xyXG4gIGVkaXRNb2RhbFdpdGhGb3JtLm9wZW4oKTtcclxufSk7XHJcblxyXG5hZGROZXdDYXJkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBhZGRDYXJkV2l0aEZvcm0ub3BlbigpKTtcclxuXHJcbmNhcmRzUmVuZGVyZXIucmVuZGVySXRlbXMoKTtcclxuXHJcbmVkaXRNb2RhbFdpdGhGb3JtLnNldEV2ZW50TGlzdGVuZXJzKCk7XHJcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFVzZXJJbmZvIHtcclxuICBjb25zdHJ1Y3Rvcih7IHByb2ZpbGVUaXRsZSwgcHJvZmlsZURlc2NyaXB0aW9uIH0pIHtcclxuICAgIHRoaXMuX3Byb2ZpbGVUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocHJvZmlsZVRpdGxlKTtcclxuICAgIHRoaXMuX3Byb2ZpbGVEZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocHJvZmlsZURlc2NyaXB0aW9uKTtcclxuICB9XHJcblxyXG4gIGdldFVzZXJJbmZvKCkge1xyXG4gICAgY29uc3QgdXNlckN1cnJlbnRJbmZvID0ge307XHJcbiAgICB1c2VyQ3VycmVudEluZm8udGl0bGUgPSB0aGlzLl9wcm9maWxlVGl0bGUudGV4dENvbnRlbnQ7XHJcbiAgICB1c2VyQ3VycmVudEluZm8uZGVzY3JpcHRpb24gPSB0aGlzLl9wcm9maWxlRGVzY3JpcHRpb24udGV4dENvbnRlbnQ7XHJcbiAgICByZXR1cm4gdXNlckN1cnJlbnRJbmZvO1xyXG4gIH1cclxuXHJcbiAgc2V0VXNlckluZm8oZGF0YSkge1xyXG4gICAgdGhpcy5fcHJvZmlsZVRpdGxlLnRleHRDb250ZW50ID0gZGF0YS50aXRsZTtcclxuICAgIHRoaXMuX3Byb2ZpbGVEZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGRhdGEuZGVzY3JpcHRpb247XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBQb3B1cCBmcm9tIFwiLi9Qb3B1cC5qc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9wdXBXaXRoSW1hZ2UgZXh0ZW5kcyBQb3B1cCB7XHJcbiAgY29uc3RydWN0b3IocG9wdXBTZWxlY3Rvcikge1xyXG4gICAgc3VwZXIocG9wdXBTZWxlY3Rvcik7XHJcbiAgICB0aGlzLl9wcmV2aWV3SW1hZ2UgPSB0aGlzLl9wb3B1cEVsZW1lbnQucXVlcnlTZWxlY3RvcihcclxuICAgICAgXCIubW9kYWxfX3ByZXZpZXctaW1hZ2VcIlxyXG4gICAgKTtcclxuICAgIHRoaXMuX3ByZXZpZXdJbWFnZVRpdGxlID0gdGhpcy5fcG9wdXBFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgIFwiLm1vZGFsX19wcmV2aWV3LXRpdGxlXCJcclxuICAgICk7XHJcbiAgfVxyXG4gIG9wZW4oeyBuYW1lLCBsaW5rIH0pIHtcclxuICAgIHRoaXMuX3ByZXZpZXdJbWFnZS5zcmMgPSBsaW5rO1xyXG4gICAgdGhpcy5fcHJldmlld0ltYWdlLmFsdCA9IG5hbWU7XHJcbiAgICB0aGlzLl9wcmV2aWV3SW1hZ2VUaXRsZS50ZXh0Q29udGVudCA9IG5hbWU7XHJcbiAgICBzdXBlci5vcGVuKCk7XHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlY3Rpb24ge1xyXG4gIGNvbnN0cnVjdG9yKHsgaXRlbXMsIHJlbmRlcmVyIH0sIGNvbnRhaW5lclNlbGVjdG9yKSB7XHJcbiAgICB0aGlzLl9pdGVtcyA9IGl0ZW1zO1xyXG4gICAgdGhpcy5fcmVuZGVyZXIgPSByZW5kZXJlcjtcclxuICAgIHRoaXMuX2NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY29udGFpbmVyU2VsZWN0b3IpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVySXRlbXMgPSAoKSA9PiB7XHJcbiAgICB0aGlzLl9pdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgIHRoaXMuYWRkSXRlbSh0aGlzLl9yZW5kZXJlcihpdGVtKSk7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBhZGRJdGVtID0gKGVsZW1lbnQpID0+IHtcclxuICAgIHRoaXMuX2NvbnRhaW5lci5wcmVwZW5kKGVsZW1lbnQpO1xyXG4gIH07XHJcbn1cclxuIl0sIm5hbWVzIjpbIkNhcmQiLCJjb25zdHJ1Y3RvciIsImRhdGEiLCJjYXJkU2VsZWN0b3IiLCJoYW5kbGVJbWFnZUNsaWNrIiwidGhpcyIsIl9uYW1lIiwibmFtZSIsIl9saW5rIiwibGluayIsIl9jYXJkU2VsZWN0b3IiLCJfaGFuZGxlSW1hZ2VDbGljayIsIl9nZXRUZW1wbGF0ZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImNvbnRlbnQiLCJjbG9uZU5vZGUiLCJfaGFuZGxlRGVsZXRlQ2FyZCIsIl9jYXJkRWxlbWVudCIsInJlbW92ZSIsIl9oYW5kbGVMaWtlSWNvbiIsIl9saWtlQnV0dG9uIiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwiX3NldEV2ZW50TGlzdGVuZXJzIiwiYWRkRXZlbnRMaXN0ZW5lciIsIl9jYXJkSW1hZ2VFbCIsImdldFZpZXciLCJfY2FyZERlbGV0ZUJ1dHRvbiIsIl9jYXJkVGl0bGVFbCIsInNyYyIsImFsdCIsInRleHRDb250ZW50Iiwic2V0dGluZ3MiLCJmb3JtRWxlbWVudCIsIl9mb3JtIiwiX2lucHV0U2VsZWN0b3IiLCJpbnB1dFNlbGVjdG9yIiwiX3N1Ym1pdEJ1dHRvblNlbGVjdG9yIiwic3VibWl0QnV0dG9uU2VsZWN0b3IiLCJfaW5hY3RpdmVCdXR0b25DbGFzcyIsImluYWN0aXZlQnV0dG9uQ2xhc3MiLCJfaW5wdXRFcnJvckNsYXNzIiwiaW5wdXRFcnJvckNsYXNzIiwiX2Vycm9yQ2xhc3MiLCJlcnJvckNsYXNzIiwiX2lucHV0TGlzdCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJfc2hvd0lucHV0RXJyb3IiLCJpbnB1dEVsZW1lbnQiLCJlcnJvck1lc3NhZ2VFbGVtZW50IiwiaWQiLCJhZGQiLCJ2YWxpZGF0aW9uTWVzc2FnZSIsIl9oaWRlSW5wdXRFcnJvciIsIl9jaGVja0lucHV0VmFsaWRpdHkiLCJ2YWxpZGl0eSIsInZhbGlkIiwiX2hhc0ludmFsaWRJbnB1dCIsImV2ZXJ5IiwiZGlzYWJsZUJ1dHRvbiIsIl9zdWJtaXRCdXR0b24iLCJkaXNhYmxlZCIsIl9lbmFibGVCdXR0b24iLCJfdG9nZ2xlQnV0dG9uU3RhdGUiLCJmb3JFYWNoIiwiZSIsInJlc2V0VmFsaWRhdGlvbiIsImVuYWJsZVZhbGlkYXRpb24iLCJwcmV2ZW50RGVmYXVsdCIsInZhbGlkYXRpb25TZXR0aW5ncyIsInByb2ZpbGVFZGl0Rm9ybSIsImZvcm1zIiwicHJvZmlsZUVkaXRCdXR0b24iLCJhZGROZXdDYXJkQnV0dG9uIiwiZWRpdE1vZGFsSW5wdXRUaXRsZSIsIkFycmF5IiwiZnJvbSIsImVkaXRNb2RhbERlc2NyaXB0aW9uIiwiZm9ybUxpc3QiLCJmb3JtVmFsaWRhdG9ycyIsIlBvcHVwIiwiX3JlZiIsInBvcHVwU2VsZWN0b3IiLCJfcG9wdXBFbGVtZW50Iiwib3BlbiIsIl9oYW5kbGVFc2NDbG9zZSIsImNsb3NlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImV2dCIsImtleSIsInNldEV2ZW50TGlzdGVuZXJzIiwiX2Nsb3NlQnV0dG9uIiwidGFyZ2V0IiwiY3VycmVudFRhcmdldCIsIlBvcHVwV2l0aEZvcm0iLCJoYW5kbGVGb3JtU3VibWl0Iiwic3VwZXIiLCJfcG9wdXBGb3JtIiwiX2hhbmRsZUZvcm1TdWJtaXQiLCJfZ2V0SW5wdXRWYWx1ZXMiLCJpbnB1dFZhbHVlIiwiaW5wdXQiLCJ2YWx1ZSIsImlucHV0VmFsdWVzIiwicmVzZXQiLCJ1c2VySW5mbyIsInByb2ZpbGVUaXRsZSIsInByb2ZpbGVEZXNjcmlwdGlvbiIsIl9wcm9maWxlVGl0bGUiLCJfcHJvZmlsZURlc2NyaXB0aW9uIiwiZ2V0VXNlckluZm8iLCJ1c2VyQ3VycmVudEluZm8iLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwic2V0VXNlckluZm8iLCJmb3JtIiwidmFsaWRhdG9yIiwiRm9ybVZhbGlkYXRvciIsImVkaXRNb2RhbFdpdGhGb3JtIiwiYWRkQ2FyZFdpdGhGb3JtIiwibmV3Q2FyZCIsImNyZWF0ZUNhcmQiLCJjYXJkc1JlbmRlcmVyIiwiYWRkSXRlbSIsIm1vZGFsV2l0aEltYWdlIiwiX3ByZXZpZXdJbWFnZSIsIl9wcmV2aWV3SW1hZ2VUaXRsZSIsImNvbnRhaW5lclNlbGVjdG9yIiwiaXRlbXMiLCJyZW5kZXJlciIsIl9pdGVtcyIsIl9yZW5kZXJlciIsIl9jb250YWluZXIiLCJyZW5kZXJJdGVtcyIsIml0ZW0iLCJlbGVtZW50IiwicHJlcGVuZCIsImNhcmREYXRhIiwidXNlckRhdGEiLCJ0cmltIiwiZmlsbFVzZXJEYXRhIl0sInNvdXJjZVJvb3QiOiIifQ==