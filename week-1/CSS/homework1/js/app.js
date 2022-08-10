
const getElement=(selector)=>{
    const element = document.querySelector(selector);
    if(element) return element;
    throw Error(`please double check your class names, there is no ${selector} class`);
}


const links = getElement('.nav-links-container')
const navBtnDOM = getElement('.nav-btn');
const label= document.querySelectorAll('input-label')
const formGroups= document.querySelectorAll('.form-group')

navBtnDOM.addEventListener('click', ()=>{
    links.classList.toggle('show-links')
})




// console.log(formGroups)
// formGroups.forEach((group)=>{
//     let input = group.getElementsByClassName("form-input")[0];
//     console.log(input);
//     let label = group.getElementsByClassName("input-label")[0];
//     input.addEventListener('click', ()=>{
      
//     label.classList.toggle('shrink')
//     })
// })
