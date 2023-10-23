document.addEventListener("DOMContentLoaded", function() {

    // Услуги и процесс работы
    const workProcesses = document.querySelectorAll('.workprocess__workflow-item');
    const workNumbers = document.querySelectorAll('.workprocess__workflow-number');
    const workDescriptions = document.querySelectorAll('.workprocess__workflow-characteristics');
    workProcesses.forEach(workProcess => {
        workProcess.addEventListener('click', function() {
            const {classList} = this;
            function removeSelection() {
                workProcesses.forEach(workProc => {
                    workProc.classList.remove('selected');
                    workProc.querySelectorAll('svg path').forEach(path =>
                        path.setAttribute('fill', '#C8A35F'));
                });
                workNumbers.forEach(workNumber => {
                    workNumber.classList.remove('selected');
                });
                workDescriptions.forEach(workDescription => {
                    workDescription.classList.remove('selected');
                });
            };
            removeSelection();
            this.classList.add('selected');
            document.querySelector(`.workprocess__workflow-numbers li[number=${
                this.getAttribute('number')}]`).classList.add('selected');
            document.querySelector(`.workprocess__workflow-characteristics[number=${
                this.getAttribute('number')}]`).classList.add('selected');
            this.querySelectorAll('svg path').forEach(path => path.setAttribute('fill', '#FFFFFF'));
        });
    });

    // Отзывы, видеоотчеты, фотоотчеты
    const swiper = new Swiper('.swiper-one', {
        direction: 'horizontal',
        slidesPerView: 'auto',
        spaceBetween: 30,
        navigation: {
            nextEl: '.swiper-button-next-one',
            prevEl: '.swiper-button-prev-one',
        }
    });
    const swiperTwo = new Swiper('.swiper-two', {
        direction: 'horizontal',
        slidesPerView: 4,
        spaceBetween: 30,
        navigation: {
            nextEl: '.swiper-button-next-two',
            prevEl: '.swiper-button-prev-two',
        }
    });
    const swiperThree = new Swiper('.swiper-three', {
        direction: 'horizontal',
        slidesPerView: 3,
        spaceBetween: 30,
        navigation: {
            nextEl: '.swiper-button-next-three',
            prevEl: '.swiper-button-prev-three',
        }
    });

});