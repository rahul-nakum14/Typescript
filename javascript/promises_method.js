//Method - 1

const myPromise = new Promise((resolve,reject) =>{
    
    try{
        setTimeout(async() =>{
            const response = await fetch('https://api.chucknorris.io/jokes/random');
            if(!response.ok){
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            resolve(data);
        },3000);
    }catch(error){
        reject(error);
    } 
});

const myPromise1 = new Promise(async (resolve,reject) =>{


    try{
        const resultdata = await fetch('https://api.chucknorris.io/jokes/random');

        if(!resultdata.ok){
            throw new error('Network Not ready');
        }
        const data = await resultdata.json();
        resolve(data);

    }catch(error){
        reject(error);
    }
});


async function resolvedFunction(data) {
    console.log('Resolved Function 1');
    return data;
  }
  
  async function resolvedFunction1(data) {
    console.log('Resolved Function 2 from data 2 ', data.value);
  }
  
  myPromise
    .then(resolvedFunction) // Call resolvedFunction after myPromise resolves
    .then(myPromise1) // If myPromise is successful, initiate myPromise1
    .then(resolvedFunction1) // Call resolvedFunction1 after myPromise1 resolves
    .catch(error => {
      console.error('Error:', error);
    }); 


//Method - 2


function resolvedFunction() {
    return new Promise((resolve, reject) => {
      fetch('https://api.chucknorris.io/jokes/random')
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json(); // Return the promise from response.json()
        })
        .then(data => {
          console.log('Resolved Function 1:', data.value);
          resolve(data); // Resolving with the data received from response.json()
        })
        .catch(error => reject(error));
    });
  }
  
  function resolvedFunction1(data) {
    return new Promise((resolve, reject) => {
      console.log('Resolved Function 2:', data.value);
      // Use the received data or perform operations here
      resolve(data); // Resolving with the same data
    });
  }
  
  resolvedFunction()
    .then(resolvedFunction1) // Passes the data from resolvedFunction to resolvedFunction1
    .then(data => {
      console.log('Final Resolved Value:', data.value);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  
//Method - 3


function resolvedFunction(){
    return fetch('https://api.chucknorris.io/jokes/random').then(response =>{
      if(!response.ok){
        throw new console.error('Network Bad');
      }
      return response.json();
    });
}


function resolvedFunction1(data){
  console.log('Data from resolvedFunction:', data.value);

  return fetch('https://api.chucknorris.io/jokes/random').then(response =>{
    if(!response.ok){
      throw new console.error('Network Bad');
    }
    return response.json();
  });
}


resolvedFunction()
.then(responseFrom1 =>{
  return resolvedFunction1(responseFrom1);
})
.catch(error => {
  console.error('Error:', error);
});
  
