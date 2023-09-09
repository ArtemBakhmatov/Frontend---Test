'use strict';

document.addEventListener('DOMContentLoaded', () => {
    ////////////////////// Создание кнопок на странице //////////////////////
    const btnsArray = [
        'Торговый центр',
        'Дорога в океан',
        'Стадион',
        'Ресторан',
        'Vip Гостиница',
        'Конференц зал',
        'Драмтеатр',
        'Отель',
        'Ж/Д Вокзал',
        'Ул.Московская, 17'
    ];
    
    btnsArray.forEach(btn => {
        document.querySelector('.container').innerHTML += `
            <button class="btn btn__position btn__color">
                <div class="btn__modal btn__modal-color ">
                    ${ btn }
                </div>
            </button>
        `
    });

    ////////////////////// События для кнопок //////////////////////

    const btnsParent = document.querySelector('.container'),        // Обёртка всех кнопок
                btns = document.querySelectorAll('.btn'),           // Все кнопки
            btnModal = document.querySelectorAll('.btn__modal');    // Все надписи у кнопок

    const openBtnModal = (i) => {
        btns[i].classList.add('btn-active');
        btns[i].classList.add('btn__color-active');
        btnModal[i].classList.add('btn__modal-active');
    }

    const closeBtnModal = (i) => {
        btns[i].classList.remove('btn-active');
        btns[i].classList.remove('btn__color-active');
        btnModal[i].classList.remove('btn__modal-active');
    }

    const toggleBtnModal = (i) => {
        if (!btnModal[i].classList.contains('btn__modal-active')) {
            openBtnModal(i);
        } else {
            closeBtnModal(i);
        }
    }

    btnsParent.addEventListener('click', (event) => {
        const target = event.target;
        if (target && target.classList.contains('btn')) {
            btns.forEach((btn, i) => {
                if (target === btn) {
                    toggleBtnModal(i);
                }
            })
        }
    })

    
});

