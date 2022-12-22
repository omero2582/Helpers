const img = document.querySelector('img');
console.log('start');
//yficq2NToKvNKmRDzdrJP2328itpTWCB

const searchBox = document.querySelector('#search');
const form = document.querySelector('form');

const addGif = searchParam => {
    return fetch(`https://api.giphy.com/v1/gifs/translate?api_key=yficq2NToKvNKmRDzdrJP2328itpTWCB&s=${searchParam}`, {mode: 'cors'})
    .then( response => response.json())
    .then( searchData => img.src = searchData.data.images.original.url)
    // .catch(e => console.log(e));
}

const getGif = async searchParam => {
    const response = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=yficq2NToKvNKmRDzdrJP2328itpTWCB&s=${searchParam}`, {mode: 'cors'});
    const searchData = await response.json();
    return img.src = searchData.data.images.original.url;
    // .catch(e => console.log(e));
}

form.addEventListener( 'submit', e => {
    e.preventDefault();
    getGif(searchBox.value).catch(e => console.log(e));
});


function doubleAfter2Seconds(x, sum) {
    return new Promise(resolve => {
      setTimeout(() => {
        sum += x * 2;
        console.log(x,' * 2 =',  x * 2, ' , sum = ', sum);
        resolve(sum);
      }, 1000);
    });
  }


//https://codeburst.io/javascript-es-2017-learn-async-await-by-example-48acc58bad65
//this guy straight trolling... wrote the first addPromise example below as his solution, 
//but it can be made so much simpler as shown in my last refactor

//   function addPromise(x){
//     return new Promise(resolve => {
//       doubleAfter2Seconds(10).then((a) => {
//         doubleAfter2Seconds(20).then((b) => {
//           doubleAfter2Seconds(30).then((c) => {
//             resolve(x + a + b + c);
//             })
//         })
//       })
//     });
//   }

//   function addPromise(x){
//     return new Promise(resolve => {
//       let promise = doubleAfter2Seconds(10, 0)
//         .then(sum => doubleAfter2Seconds(20, sum))
//         .then(sum => doubleAfter2Seconds(30, sum))
//         .then(sum => resolve(sum + x));
//   })
//   }
  
function addPromise(x){
      return doubleAfter2Seconds(10, 0)
        .then(sum => doubleAfter2Seconds(20, sum))
        .then(sum => doubleAfter2Seconds(30, sum))
        .then(sum => (sum + x));
  }

  addPromise(10).then(sum => console.log(sum));