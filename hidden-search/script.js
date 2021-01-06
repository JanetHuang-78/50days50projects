const box = document.querySelector('.box')
const btn = document.querySelector('.btn')
const container = document.querySelector('.container')

btn.addEventListener('click',()=>{
    container.classList.toggle('active')
    box.placeholder = 'search...'
    box.focus()
})
