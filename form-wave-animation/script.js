const labels = document.querySelectorAll('.form-control label')

labels.forEach(label=>{
    label.innerHTML = label.innerText/*抓取每一格字*/
    .split('')
    .map((letter,idx)=>`<span style = "transition-delay:${idx*50}ms">${letter}</span>`)
    .join('')
})