export const inputName = popupRedactor.querySelector("#nameInput");
export const inputStatus = popupRedactor.querySelector("#statusInput");
export const openRedactorBtn = document.querySelector(".profile__redactor");
export const openAdderBtn = document.querySelector(".profile__add");
export const memes = [
    {
        name: 'Архыз',
        link: 'https://sun9-25.userapi.com/impg/ACPbtCWjNlkNxETg7ZnG6CSiBLLsC1eWWJYEqw/DJidYBntE7k.jpg?size=1224x1224&quality=96&sign=a2d51e32a4c046bfff7c19893904d34a&type=album'
    },
    {
        name: 'Челябинская область',
        link: 'https://sun9-35.userapi.com/impg/Dnx-K_dVQdXokSySQdRfHcisv1RLJRF2OaRscw/bLVhyZAsz4U.jpg?size=1080x1254&quality=96&sign=98ef054c8f609e07a5079dbbd4fd95ae&type=album'
    },
    {
        name: 'Иваново',
        link: 'https://sun9-71.userapi.com/impg/OKoHzozs_j9GaWWFVslSR0_7R10a_Qbpf7NXjQ/kNfr82uI5Co.jpg?size=1200x1178&quality=96&sign=942743b0a63fd6c23d0f95c4cbcb2968&type=album'
    },
    {
        name: 'Камчатка',
        link: 'https://sun9-19.userapi.com/impg/dBcxROhyVqj0K1JD0MZv6azh0oluOye0LGs4uA/4iX_VomU67Y.jpg?size=1215x2160&quality=95&sign=c4eea7df86a973993cefafa83aaf70d0&type=album'
    },
    {
        name: 'Холмогорский район',
        link: 'https://sun9-47.userapi.com/impg/ZWwSIn_Wkpp8wgJdWSjdTOgfrOQY4R--yW2y6Q/BDNmXNY0GzI.jpg?size=1028x862&quality=96&sign=a27832dde2f0ebf54f5bf8be62c674f5&type=album'
    },
    {
        name: 'Байкал',
        link: 'https://sun9-65.userapi.com/impg/y8tRn1Aj_6cE7_60GthiM2VcQjiHyPMdyJH09A/GIhFG3uQeWk.jpg?size=1920x1080&quality=96&sign=9d84f70a970a5404b7b047fa4d5d6523&type=album'
    }
];
export const config = {
    formSelector: '.popup__form',
    inputSelector: '.popup__element',
    submitButtonSelector: '.popup__save',
    inactiveButtonClass: 'popup__save_disabled',
    inputErrorClass: 'popup_input-error',
    errorClass: 'popup__element-error'
};