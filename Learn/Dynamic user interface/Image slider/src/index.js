import './style.css'
import imgSrc1 from './assets/fiora.jpg';
import imgSrc2 from './assets/Leblanc_Splash_0.jpg';
import imgSrc3 from './assets/zed-classic.jpg';

const fs = require('fs');




const imageHolder = document.querySelector('.image-slider');


const imgArray = [];
let index = -1;

function createImage(imgSource) {
    const img1 = new Image();
    img1.src =  imgSource;
    imgArray.push(img1);
    
    //
    imageHolder.appendChild(img1);
}


// function getNext(array){
//     index++;
//     index = index == array.length ? 0 : index;
//     const nextEl = array[index];
//     return nextEl;
// }

// function renderNext(){
//     imageHolder.innerHTML = '';
//     imageHolder.appendChild(getNext(imgArray));
//     console.log(index);
//     console.log('renderNext');
// }
const sliderWidth = parseInt(getComputedStyle(imageHolder).width);

function renderNext(){   
    imgArray.forEach(element => {
        let currRight = parseInt(getComputedStyle(element).right);
        console.log(currRight +' + '+ sliderWidth);
        element.style.right = `${(currRight+sliderWidth)}px`;
    });
    console.log('next');

}

function renderPrev(){   
    imgArray.forEach(element => {
        let currRight = parseInt(getComputedStyle(element).right);
        console.log(`${currRight} - ${sliderWidth} = ${(currRight-sliderWidth)}px`);
        element.style.right = `${(currRight-sliderWidth)}px`;
    });
    console.log('prev');

}


createImage(imgSrc1);
createImage(imgSrc2);
createImage(imgSrc3);

// imgArray.forEach(image => imageHolder.appendChild(image));


const btnNext = document.querySelector('.next');
const btnPrev = document.querySelector('.prev');

// btnNext.addEventListener('click', () => renderNext());
btnNext.addEventListener('click', () => renderNext());

btnPrev.addEventListener('click', () => renderPrev());