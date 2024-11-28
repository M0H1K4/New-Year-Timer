// const showModalBtns = document.querySelectorAll(".show-modal");
// const closeModalbtn = document.querySelector(".close-modal");
// const hiddenModal = document.querySelector(".modal");
// const overlay = document.querySelector(".overlay");

// const openModal = () => {
//   hiddenModal.classList.remove("hidden");
//   overlay.classList.remove("hidden");
// };
// const closeModal = function () {
//   hiddenModal.classList.add("hidden");
//   overlay.classList.add("hidden");
// };

// for (let i = 0; i < showModalBtns.length; i++) {
//   showModalBtns[i].addEventListener("click", openModal);
// }

// closeModalbtn.addEventListener("click", closeModal);
// overlay.addEventListener("click", closeModal);

// document.addEventListener('keydown', function(e){

//     if(e.key == 'Escape' && !hiddenModal.classList.contains("hidden")){
//         closeModal();
//     }
// })

const days = document.querySelector('.days_p')
const hours = document.querySelector('.hours_p')
const minutes = document.querySelector('.minutes_p')
const seconds = document.querySelector('.seconds_p')
const container = document.querySelector('.container')

const newYear = new Date('January 1, 2025 00:00:00').getTime();
const timer = setInterval(() => {
    const now = new Date().getTime();
    const newYearTxt = document.querySelector('.newYear_h1')
    const timeLeft =  newYear - now;

    if(timeLeft < 0){
        clearInterval(timer)
        container.classList.add('hidden')
        newYearTxt.classList.remove('hidden')
    }else{
        const daysCounter = Math.floor(timeLeft / (1000 * 60 * 60 * 24))
        const hoursCounter = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutesCounter = Math.floor((timeLeft % (1000 * 60 * 60 )) / (1000 * 60))
        const secondsCounter = Math.floor((timeLeft % (1000 * 60)) / 1000)

        days.textContent = daysCounter;
        hours.textContent = hoursCounter;
        minutes.textContent = minutesCounter;
        seconds.textContent = secondsCounter

    }
})


