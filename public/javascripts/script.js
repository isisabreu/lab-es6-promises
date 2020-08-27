// This will print in the wrong order
// we added it for you to test to make sure data is loaded
// 🚨🚨🚨 comment out the next 3 lines when you start working on the code
for (let i = 0; i < mashPotatoes.length; i++) {
  //addFood(steak[i], '#steak');
  console.log(mashPotatoes[i])
}

// Iteration 1 using callbacks
addFood(steak[0], '#steak', () => {
  // ... your code here
  addFood(steak[1], '#steak', () => {
    addFood(steak[2], '#steak', () => {
      addFood(steak[3], '#steak', () => {
        addFood(steak[4], '#steak', () => {
          addFood(steak[5], '#steak', () => {
            addFood(steak[6], '#steak', () => {
              addFood(steak[7], '#steak', () => {
                
              })
            })
          })
        })
      })
    })
  })
});


// Iteration 2 using `.then()`
addFood(mashPotatoes[0], '#mashPotatoes').then(() => {
  // ... your code here
  addFood(mashPotatoes[1], '#mashPotatoes').then(() => {
    // ... your code here
    addFood(mashPotatoes[2], '#mashPotatoes').then(() => {
      // ... your code here
      addFood(mashPotatoes[3], '#mashPotatoes').then(() => {
        // ... your code here
        addFood(mashPotatoes[4], '#mashPotatoes')
      })
    })
  })
});

// Iteration 3 using async and await
function makeFood(step) {
  let arrPromise = step.map((num) => {
    return addFood( num, '#brusselSprouts');
    /* console.log('passou no item'+ num); */
  });
  Promise.all(arrPromise).then(() => {
   /*  console.log('finalizou'); */
    let imgBrussel = new Image();
    imgBrussel.src = './public/images/brusselSprouts.jpg';
    let tableBrussel = document.querySelector('#table');
    tableBrussel.appendChild(imgBrussel);
  });
  /* console.log(arrPromise); */
}
makeFood(brusselSprouts);



  /* async function makeFood(step) {
    for (let i = 0; i < step.length; i += 1) {
      await addFood(step[i], '#brusselSprouts');
    } 
  }
  makeFood(brusselSprouts);
 */
  