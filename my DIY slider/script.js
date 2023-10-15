const urlJpg = [
    'img/1.jpg',
    'img/2.jpg',
    'img/3.jpg',
    'img/4.jpg'
]

const wrapper = document.querySelector('.slider__content'),
    rightBtn = document.querySelector('.icon-right-open'),
    leftBtn = document.querySelector('.icon-left-open')



function getTemplate(url) {
    let elemArr = urlJpg[url]
    return `
    <div>
        <img src="${elemArr}" alt="">
    </div>
    `
}

rightBtn.addEventListener('click', () => {
    
    render()
})

leftBtn.addEventListener('click', () => {
    renderLeft()
})

let startPosition = 0

function render() {
    if(startPosition < 4 ) {
        wrapper.innerHTML = getTemplate(startPosition)
        startPosition++
    } else if(startPosition == 4){
        startPosition = 0
        wrapper.innerHTML = getTemplate(startPosition)
        startPosition++
    }
}

function renderLeft() {
    if(startPosition <= 4 && startPosition >= 0) {
        wrapper.innerHTML = getTemplate(startPosition)
        startPosition--
    } else if (startPosition < 0){
        startPosition = 3
        wrapper.innerHTML = getTemplate(startPosition)
        startPosition--

    }
}
setTimeout(render(), 100)
clearTimeout()
