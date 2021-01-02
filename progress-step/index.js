const next = document.getElementById('next')
const prev = document.getElementById('prev')
const progress = document.getElementById('progress')
const circles = document.getElementsByClassName('circle')

let currentActive = 1;
next.addEventListener('click', ()=>{
    currentActive++;
    
    if(currentActive > circles.length){
        currentActive = circles.length 
    } 

    circles.forEach((circle,idx) => {
    console.log(circle) })
    
}
)
prev.addEventListener('click',()=>{
    currentActive--
    if(currentActive<1){
        currentActive = 1;
    }
    updateCircle()
})

// function updateCircle(){
//     circles.forEach((circle,idx) => {
//         console.log(circle)
//         // if(idx < currentActive){
//         //     circle.classList.add('active')
//         // }else {
//         //     circle.classList.remove('active')
//         // }
//     });
// }