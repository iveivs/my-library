const urlJpg = [
    'img/1.jpg',
    'img/2.jpg',
    'img/3.jpg',
    'img/4.jpg'
]

const rightBtns = document.querySelectorAll('.slider__right'),
        leftBtns = document.querySelectorAll('.slider__left')

class Slider {
    startPosition = 0
    constructor(wrapper) {
        this.wrapper = wrapper
    }
    init() {

    }
    renderRight() {
        if (startPosition < urlJpg.length) {
            this.wrapper.innerHTML = getTemplate(startPosition)
            startPosition++
        } else if (startPosition == urlJpg.length) {
            startPosition = 0
            this.wrapper.innerHTML = getTemplate(startPosition)
            startPosition++
        }
    }
    renderLeft() {
        if(startPosition <= urlJpg.length  && startPosition >= 0) {
            wrapper.innerHTML = getTemplate(startPosition)
            startPosition--
        } else if (startPosition < 0){
            startPosition = urlJpg.length - 1
            wrapper.innerHTML = getTemplate(startPosition)
            startPosition--
    
        }
    }
    
}


rightBtns.forEach(function (rightBtn) {
    this.startPosition = 0
    this.renderRight(rightBtn.previousElementSibling)
    rightBtn.addEventListener('click', () => {
        this.renderRight(rightBtn.previousElementSibling)
    })
    
})
leftBtns.forEach(function (leftBtn) {
    this.startPosition = 0
    leftBtn.addEventListener('click', () => {
        renderLeft(leftBtn.nextElementSibling)
    })
})

function getTemplate(url) {
    let elemArr = urlJpg[url]
    return `
    <div>
        <img src="${elemArr}" alt="">
    </div>
    `
}





