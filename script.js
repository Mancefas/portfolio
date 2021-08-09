const moreInfoBTN = document.querySelectorAll('.info');
const projInf = document.querySelectorAll('.project-info');


console.log(moreInfoBTN)
console.log(projInf)
putHidden()

for (let i = 0; i < moreInfoBTN.length; i++) {
    moreInfoBTN[i].addEventListener('click', () => {
        projInf[i].classList.toggle('hidden');
        
    });
};

function putHidden() {
    projInf.forEach(elm => {
        elm.classList.add('hidden')
    })
}




// moreInfoBTN.addEventListener('click', ( ) => {
//     projInf.forEach((el,i) => {
//         el[i].classList.toggle('hidden')
//     })
// })

// moreInfoBTN.addEventListener('click', () => {
//     projInf.forEach(el => el.classList.toggle('hidden'))
    
// }) 