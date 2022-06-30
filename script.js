let main = document.querySelector('.main');
let slides = Array.from(main.querySelectorAll('.section'))
for (let i = 0; i < slides.length; i++) {
    slides[i].style.order = `${i - 1}`;
}
let lastSlide = slides[slides.length - 1];
slides[slides.length - 1].classList.toggle('active', true)
slides.forEach(slide => {
    slide.querySelector('.section__header').addEventListener('click', (e) => {
        toggleSlides(e);
    })
})

const request = () => {
    let text = prompt("оставьте нам сообщение")
    console.log(text);
    alert("Вы успешно записаны!")
}
const toggleSlides = (event) => {
    if (event.target.parentElement == lastSlide) {
        return;
    } else {
        for (let i = 0; i < slides.length; i++) {
            slides[i].classList.toggle('active', false)
        }
        setTimeout(() => {
            for (let i = 0; i < slides.length; i++) {
                if (event.target.parentElement == slides[i]) {
                    lastSlide = event.target.parentElement;
                    const p1 = slides.slice(0, i);
                    const p2 = slides.slice(i);
                    if (p2.length == 1) {
                        p2[0].style.order = `${slides.length - 2}`;
                        p2[0].classList.toggle('active', true)
                        for (let j = -1; j < p1.length - 1; j++) {
                            p1[j + 1].style.order = `${j}`;
                        }
                    } else {
                        for (let j = 0; j < p2.length; j++) {
                            if (j == 0) {
                                p2[j].style.order = `${slides.length - 2}`;
                                p2[j].classList.toggle('active', true)
                            } else {
                                p2[j].style.order = `${j - 2}`;
                            }
                        }
                        for (let j = 0; j < p1.length; j++) {
                            p1[j].style.order = `${j}`;
                        }
                    }
                }
            }
        }, 300)
    }
}