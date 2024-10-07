// let ele = document.getElementById('ram')
// console.log(ele);


// let ele2 = document.getElementsByClassName('abc')
// console.log(ele2[1].innerHTML);


// let h1 = document.querySelectorAll('#ram')
// let h = document.querySelector('.abc')

// console.log(h1);

let ul = document.querySelector('ul')
// console.log(ul);
// console.log(ul.firstElementChild.innerHTML);
// console.log(ul.lastElementChild.innerHTML);

ul.firstElementChild.nextElementSibling.nextElementSibling.style.background = 'red'

let th = document.querySelector('#third')
th.parentElement.style.background = 'teal';

let ele = document.createElement('img')
ele.src = 'https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg'
// ele.setAttribute('width','200px')
ele.width = 200

// console.log(ele);
let pre = document.querySelector('#rama')
console.log(pre);

document.body.insertBefore(ele,pre)

pre.remove()



