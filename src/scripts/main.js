document.addEventListener('DOMContentLoaded', function() {
    const curiosities = document.querySelectorAll('[data-curiositie-question]');

    for (let i = 0; i < curiosities.length; i++) {
        curiosities[i].addEventListener('click', openOrCloseAnswer);
    }
})

function openOrCloseAnswer(element) {
    const curiositieClass = 'curiosities__content__item--is-open';
    const elementParent = element.target.parentNode;

    elementParent.classList.toggle(curiositieClass);
}