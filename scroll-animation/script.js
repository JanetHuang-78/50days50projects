const boxes = document.querySelectorAll('.box')


window.addEventListener('scroll',checkbox)
// checkbox()

function checkbox(){

    /*why is it divided by 5 and times 4 ??*/
    const triggerbottom = window.innerHeight / 5 * 4 
    boxes.forEach(box=>{
        let boxTop = box.getBoundingClientRect().top
        // console.log(boxTop)

        if(boxTop < triggerbottom){
            box.classList.add('active')
        }else{
            box.classList.remove('active')
        }
    })
}
