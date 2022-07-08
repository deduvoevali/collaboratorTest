'use strict';

window.addEventListener('DOMContentLoaded', () => {

    //modals 

    const detailsLink = document.querySelectorAll('.details'),
        modalMore = document.querySelector('#modal__more'),
        modalSave = document.querySelector('#modal__save'),
        saveBtn = document.querySelector('#save'),
        defaultBtn = document.querySelector('#default');

    detailsLink.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            modalMore.classList.add('modal__more--active');
        });
    })

    saveBtn.addEventListener('click', () => {
        modalSave.classList.add('modal__save--active');
        setTimeout(() => {
            location.reload();
        }, 2500);
    });

    modalMore.addEventListener('click', (e) => {
        if (e.target.className == 'modal__more modal__more--active' || e.target.id == 'close') modalMore.classList.remove('modal__more--active');
    });
    
    modalSave.addEventListener('click', (e) => {
        if (e.target.className == 'modal__save modal__save--active' || e.target.id == 'close') modalSave.classList.remove('modal__save--active');
    });

    defaultBtn.addEventListener('click', () => {
        const checkboxes = document.querySelectorAll('.item__switch'),
            selects = document.querySelectorAll('.item__select');
        selects.forEach(item => item.selectedIndex = 0);
        checkboxes.forEach(item => item.checked = true);
    });

    // flags

    const flagTriggers = document.querySelectorAll('.flag__remove');

    flagTriggers.forEach(function (trigger) {
        trigger.addEventListener('click', function () {
            this.parentElement.remove();
        })
    });
});