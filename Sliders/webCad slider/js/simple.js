// Не оптимизированный вариант

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
        // Скрываем текущий слайд
        slide.classList.add('hidden')
        slide.removeAttribute('data-active')

        // Расчитываем индекс следущего слайда

        const nextSlideIndex = index + 1 === sliderItems.length ?  0 : index + 1

        // Находим следующий слайд
        const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`)

        // Отображаем следующий слайд
        nextSlide.classList.remove('hidden')
        nextSlide.setAttribute('data-active', '')
    })
})

btnNext.addEventListener('click', () => {
    // Скрываем текущий слайд

    // Получаем текущий слайд
    const currentSlide = slider.querySelector('[data-active]')
    const currentSlideIndex = +currentSlide.dataset.index

    currentSlide.classList.add('hidden')
    currentSlide.removeAttribute('data-active')

    // показываем след слайд
    const nextSlideIndex = currentSlideIndex === 0 ? sliderItems.length - 1 : currentSlideIndex - 1
    const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`)
    nextSlide.classList.remove('hidden')
    nextSlide.setAttribute('data-active', '')
})

btnPrev.addEventListener('click', () => {
    // Скрываем текущий слайд

    // Получаем текущий слайд
    const currentSlide = slider.querySelector('[data-active]')
    const currentSlideIndex = +currentSlide.dataset.index

    currentSlide.classList.add('hidden')
    currentSlide.removeAttribute('data-active')

    // показываем след слайд
    const nextSlideIndex = currentSlideIndex + 1 === sliderItems.length ?  0 : currentSlideIndex + 1
    const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`)
    nextSlide.classList.remove('hidden')
    nextSlide.setAttribute('data-active', '')
})