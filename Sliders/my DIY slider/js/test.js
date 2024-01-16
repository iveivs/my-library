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
    if(startPosition < urlJpg.length && startPosition >= 0) {
        console.log('test1', startPosition);
        wrapper.innerHTML = getTemplate(startPosition)
        startPosition++
        console.log('test1', startPosition);
    } else if(startPosition == urlJpg.length ){
        console.log('test2', startPosition);
        startPosition = 0
        wrapper.innerHTML = getTemplate(startPosition)
        startPosition++
        console.log('test2', startPosition);
    } else if (startPosition < 0) {
        console.log('test6', startPosition);
        startPosition++
        wrapper.innerHTML = getTemplate(startPosition)
        startPosition = 1
        console.log('test6', startPosition);
    } 
    
}

function renderLeft() {

    if(startPosition < urlJpg.length  && startPosition >= 0 && startPosition != 3) {
        console.log('test3', startPosition);
        wrapper.innerHTML = getTemplate(startPosition)
        startPosition--
        console.log('test3', startPosition);
    } else if (startPosition < 0){
        console.log('test4', startPosition);
        startPosition = urlJpg.length - 1
        wrapper.innerHTML = getTemplate(startPosition)
        startPosition--
        console.log('test4', startPosition);
    } else if (startPosition == 4) {
        console.log('test5', startPosition);
        startPosition = startPosition - 2
        wrapper.innerHTML = getTemplate(startPosition)
        startPosition--
        console.log('test5', startPosition);
    } else if (startPosition == 3) {
        console.log('test8', startPosition);
        startPosition = 1
        wrapper.innerHTML = getTemplate(startPosition)
        startPosition--
    }
}
setTimeout(render(), 100)
clearTimeout()
