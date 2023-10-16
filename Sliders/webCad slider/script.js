const slider = document.querySelector('#slider')
const sliderItems = Array.from(slider.children)

sliderItems.forEach((slide, index) => {
    
    // Скрываем все индексы кроме первого
    if(index != 0) {
        slide.classList.add('hidden')
    }
    // Добавляем индексы в дата-атрибут
    slide.dataset.index = index

    // Клик по слайдам
    slide.addEventListener('click', () => {
        slide.classList.add('hidden')
        // slider.querySelector(`${data-index=""}`)
    })
})