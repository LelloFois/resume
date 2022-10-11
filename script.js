
const observer = new IntersectionObserver((entries) => {
   entries.forEach(entry => {
    
    if (entry.isIntersecting) {
        entry.target.classList.add('show');
    } else {
        entry.target.classList.remove('show');
    }

    
   })
});

const hiddenEl = document.querySelectorAll('.hidden');

hiddenEl.forEach((el) => observer.observe(el));

const modalOne = document.querySelector('.modal_one');
const modalTwo = document.querySelector('.modal_two');
const modalThree = document.querySelector('.modal_three');
const modalFour = document.querySelector('.modal_four');
const openModalOne = document.querySelector('.open_modal_one');
const openModalTwo = document.querySelector('.open_modal_two');
const openModalThree = document.querySelector('.open_modal_three');
const openModalFour = document.querySelector('.open_modal_four');
const closeModals = document.querySelectorAll('.btn-close-modal');


openModalOne.addEventListener('click', () => {
    modalOne.showModal()
    
})

openModalTwo.addEventListener('click', () => {
    modalTwo.showModal()
    modalTwo.scrollTo(0,0)
})

openModalThree.addEventListener('click', () => {
    modalThree.showModal()
    modalThree.scrollTo(0,0)
})

openModalFour.addEventListener('click', () => {
    modalFour.showModal()
    modalFour.scrollTo(0,0)
})


closeModals.forEach((el) => {
    el.addEventListener('click', (e) => {
        if (modalOne) {
            modalOne.close();
        }
        if (modalTwo) {
            modalTwo.close()
        }
        if (modalThree) {
            modalThree.close()
        }
        if (modalFour) {
            modalFour.close()
        }
    })
})

window.addEventListener('click', (e) => {
    if (e.target == modalOne) {
        modalOne.close();
    }

    if (e.target == modalTwo) {
        modalTwo.close();
    }

    if (e.target == modalThree) {
        modalThree.close();
    }

    if (e.target == modalFour) {
        modalFour.close();
    }
})

const btn = document.querySelector('.scroll_btn');

btn.addEventListener('click', () => {
    window.scrollTo(0,0);
})

const hero = document.querySelector('.blackbg');

const heroObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {

     if (!entry.isIntersecting) {
         btn.classList.add('show');
     } else {
         btn.classList.remove('show');
     }
     
    })
 });
 

heroObserver.observe(hero);
