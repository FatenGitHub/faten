const changeNameButton = document.querySelector(".change-name-button");
const alertScreen = document.querySelector(".alert-container");
const personNameElement = document.querySelector(".person-name");

changeNameButton.addEventListener("click", () => {
    const personName = document.querySelector(".input-field").value;

    alertScreen.classList.remove("hidden")
    personNameElement.textContent = personName + "? HAHA!"

})