let sliderContainer = document.getElementById('slider');
let slides = document.querySelectorAll('.slide');
let slideWidth = slides[0].offsetWidth + 15; // Ширина одного слайда и margin-right
let maxScrollLeft = sliderContainer.scrollWidth - sliderContainer.clientWidth;

function moveSlider(offset) {
    sliderContainer.style.transform = `translateX(${offset}px)`;
}

let currentOffset = 0;
document.getElementById('next').addEventListener('click', () => {
    if (currentOffset > -maxScrollLeft) {
        currentOffset -= slideWidth; // Перемещаем вправо
        moveSlider(currentOffset);
    }
});

document.getElementById('prev').addEventListener('click', () => {
    if (currentOffset < 0) {
        currentOffset += slideWidth; // Перемещаем влево
        moveSlider(currentOffset);
    } 
});
