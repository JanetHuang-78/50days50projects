const labels = document.querySelectorAll('.form-control label')

labels.forEach(label=>{
    label.innerHTML = label.innerText
    .split('')
    .map((label,idx)=>{`<span>${label}</span>`})
    .join('')
})