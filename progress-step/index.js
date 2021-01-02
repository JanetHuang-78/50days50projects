const next = document.getElementById('next')
const prev = document.getElementById('prev')
const progress = document.getElementById('progress')
const circles = document.querySelectorAll('.circle')

let currentActive = 1;
next.addEventListener('click', ()=>{
    currentActive++;
    
    if(currentActive > circles.length){
        currentActive = circles.length 
    } 

    updateCircle()
    
}
)
prev.addEventListener('click',()=>{
    currentActive--
    if(currentActive<1){
        currentActive = 1;
    }
    updateCircle()
})

function updateCircle() {
    circles.forEach((circle,idx) => {
        console.log(circle,idx)
        if(idx < currentActive){
            circle.classList.add('active')
        }else {
            circle.classList.remove('active')
        }
    });

    let actives = document.querySelectorAll('.active')

    progress.style.width = (actives.length-1)/(circles.length-1) *100 +'%'
    console.log(progress)

    if (currentActive===1){
        prev.disabled = true;
    }else if(currentActive ===4){
        next.disabled = true
    }else{
        prev.disabled = false;
        next.disabled = false;
    }
}
