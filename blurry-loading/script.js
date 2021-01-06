const img = document.querySelector('img')
const text = document.querySelector('.text')

let load = 1;
/*讓load 每30mini second 加1*/
let int = setInterval(blurry, 30)


function blurry(){
    load++
    if(load > 99){

        /*直到load大於99後就不會再增加*/
        clearInterval(int)
    }
    text.innerHTML = `${load}%`
    text.style.opacity = load /100
    const scale = (num, in_min, in_max, out_min, out_max) => {
        return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
      }
      /*0-100是指跑的數字從0%-100%, 30-0指blur從30px到0px(模糊到清晰)*/
    img.style.filter= `blur(${scale(load, 0,100,30,0)}px) `
}