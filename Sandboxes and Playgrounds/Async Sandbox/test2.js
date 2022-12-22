//async/await promises test for sequential forEach, for ... of, etc

function numAfterXSeconds(x, sec) {
    return new Promise(resolve => {
      setTimeout(() => {
        
        resolve(x);
        console.log(`${x} after ${sec}s`);
      }, sec * 1000);
    });
  }

  async function one(){
    await numAfterXSeconds(1, 2);
    console.log(new Date().toISOString());
  }

  async function two(){
    await numAfterXSeconds(2, 2);
    console.log(new Date().toISOString());
  }

  async function run (){
    console.time('time');
    myPromises = [()=>numAfterXSeconds(1, 2), ()=>numAfterXSeconds(2, 2), ()=>numAfterXSeconds(3, 1)];
    // Promise.all(myPromises).then(()=> console.timeEnd('time'));  -> concurrent

    for (let promise of myPromises) {       //-> sequential
        let p1 = await promise();
        console.log(p1);
    }



    ////myPromises[0]();
    ////myPromises[1]();
    // one();    
    // two();    // -> these both run concurrently (start basically at same time),
              // because 'await' waits to continue INSIDE the code block its in,
              // not outside

    console.timeEnd('time');
  }
  
  run();