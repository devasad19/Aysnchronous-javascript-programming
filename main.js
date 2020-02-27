/**
 *  -> Long running data process system
 *  -> catch data with error
 *  -> work with API
 *  -> Asyncronous system
 *  -> code using callback method.
 */
    getUser(1, function(user){
        console.log(user);
        enrolledCourse(user.name, function(courses){
            console.log(courses);
            getPrice(courses[0], function(price){
                console.log(`course name is- ${courses[0]} and price is- ${price}`)
            });
        })
    })

    function getUser(id, callback){
        setTimeout( () => {
            callback({
                id:2,
                name: "adnan",
                profession: 'web developer'
            });
        },2000  )
    }

    function enrolledCourse(firstname, callback2){
        setTimeout(() => {
            callback2(['android', 'react', 'nodejs', 'laravel']);
        }, 2000);
    }

    function getPrice(courseName, callback3){
        setTimeout(() => {
            callback3('4000 tk');
        });
    }


/**
 *  -> simple example JavaScript Promise
 *  -> javascrip promise
 */


    const result = new Promise((resolve, reject) =>{
        setTimeout(() => {
            // reject('promise function result show will after 2 sec');
            reject( new Error('promise function result show will after 2 sec'));
        }, 2000);
    })

    result.then((text) =>{
        console.log(text);
    }).catch((error) => {
        console.log(error.message);
    })

/**
 *  -> javascript 'promise'
 *  -> extends explain with promise
 */


getUser(1)
    .then((user)=>{
        console.log(user);
        return enrolledCourse(user.firstname)
    })
    .then( (courses) => {
        console.log(courses);
        return getPrice(courses[0])
    })
    .then( (price) =>{
        console.log(`course price is ${price}`)
    })
    .catch( (err) => {
        console.log(err);
})


function getUser(id){
   return new Promise( (resolve, reject) => {
        setTimeout( () => {
            resolve({
                id: 1,
                name: 'adnan',
                course: 'javascript react'
            });
        }, 2000);
    });
}

    function enrolledCourse(firstname){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(['android', 'react', 'nodejs', 'laravel']);
            }, 2000);
        })
    }

    function getPrice(courseName){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // resolve('4000 tk');
                reject(new Error('price in an error occured'))
            }, 2000);
        })
    }





/**
 *  -> Async await
 *  -> just get output without error catching
 *  -> get data with error using try-catch 
 *  -> if return some data from async method
 */

    // just get output 
    async function getResult(){
        const user = await getUser(2);
        console.log(user);
        const courses = await enrolledCourse(user.name);
        console.log(courses);
        const price = await getPrice(courses[0]);
        console.log(price);
    }
getResult();



// if will come error and catch using try-catch 
try{
    async function getResult(){
        const user = await getUser(2);
        console.log(user);
        const courses = await enrolledCourse(user.name);
        console.log(courses);
        const price = await getPrice(courses[0]);
        console.log(price);
    }
getResult();
}catch(e){
    console.log(e);
}


//  just return some from async function
    async function getResult(){
        const user = await getUser(2);
        console.log(user);
        const courses = await enrolledCourse(user.name);
        console.log(courses);
        const price = await getPrice(courses[0]);
        return price;
    }
getResult().then( (price)=>{
    console.log(price);
})
.catch( (err) =>{
    console.log(err);
})



// user data functions
function getUser(id){
   return new Promise( (resolve, reject) => {
        setTimeout( () => {
            resolve({
                id: 1,
                name: 'adnan',
                course: 'javascript react'
            });
        }, 2000);
    });
}

    function enrolledCourse(firstname){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(['android', 'react', 'nodejs', 'laravel']);
            }, 2000);
        })
    }

    function getPrice(courseName){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // resolve('4000 tk');
                reject(new Error('price in an error occured'))
            }, 2000);
        })
    }






