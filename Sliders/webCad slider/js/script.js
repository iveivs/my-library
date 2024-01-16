const slider = document.querySelector('#slider')
const sliderItems = Array.from(slider.children)
const btnNext = document.querySelector('#btnNext')
const btnPrev = document.querySelector('#btnPrev')

sliderItems.forEach((slide, index) => {
    
    // Скрываем все индексы кроме первого
    if(index != 0) {
        slide.classList.add('hidden')
    }
    // Добавляем индексы в дата-атрибут
    slide.dataset.index = index

    // Добавляем data атрибут для первого / активного слайда

    sliderItems[0].setAttribute('data-active', '')

    // Клик по слайдам
    slide.addEventListener('click', () => {
        showNextSlide('next')
    })
})

btnNext.addEventListener('click', () => {
    showNextSlide('next')
})

btnPrev.addEventListener('click', () => {
    showNextSlide('prev')
})

function showNextSlide(dirrection) {
      // Скрываем текущий слайд

    // Получаем текущий слайд
    const currentSlide = slider.querySelector('[data-active]')
    const currentSlideIndex = +currentSlide.dataset.index

    currentSlide.classList.add('hidden')
    currentSlide.removeAttribute('data-active')

    let nextSlideIndex;
    if(dirrection === 'next') {
        // показываем след слайд
        nextSlideIndex = currentSlideIndex + 1 === sliderItems.length ?  0 : currentSlideIndex + 1
    } else if (dirrection === 'prev') {
        nextSlideIndex = currentSlideIndex === 0 ? sliderItems.length - 1 : currentSlideIndex - 1
    }

    const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`)
    nextSlide.classList.remove('hidden')
    nextSlide.setAttribute('data-active', '')
}