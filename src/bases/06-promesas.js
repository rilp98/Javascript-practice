

const p = new Promise((resolve, reject) => {

    setTimeout(() => {

        resolve('Holaaaaa')
        
    }, 2000);

});

p.then( (message)=>{
    console.log(message);
})