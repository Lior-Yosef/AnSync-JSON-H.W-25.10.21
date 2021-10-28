const UserJASON = JSON.stringify([
    {
        "_id": "605acace4ab389d8ed54c496",
        "age": 35,
        "name": {
            "last": "Hensley",
            "first": "Dollie"
        },
        "email": "dollie.hensley@undefined.org",
        "index": 0,
        "phone": "+1 (904) 421-3160",
        "picture": "http://placehold.it/32x32"
    },
    {
        "_id": "605acaceed1f0e1cfa1eee67",
        "age": 21,
        "name": {
            "last": "Hunt",
            "first": "Dolores"
        },
        "email": "dolores.hunt@undefined.com",
        "index": 1,
        "phone": "+1 (967) 432-2905",
        "picture": "http://placehold.it/32x32"
    },
    {
        "_id": "605acacefedd0fe77874d78f",
        "age": 28,
        "name": {
            "last": "Pennington",
            "first": "Milagros"
        },
        "email": "milagros.pennington@undefined.net",
        "index": 2,
        "phone": "+1 (922) 492-2085",
        "picture": "http://placehold.it/32x32"
    },
    {
        "_id": "605acace6d3f84fc9b40849f",
        "age": 32,
        "name": {
            "last": "Anderson",
            "first": "Myrtle"
        },
        "email": "myrtle.anderson@undefined.biz",
        "index": 3,
        "phone": "+1 (858) 404-3273",
        "picture": "http://placehold.it/32x32"
    },
    {
        "_id": "605acace06d24518b6419d23",
        "age": 29,
        "name": {
            "last": "York",
            "first": "Terry"
        },
        "email": "terry.york@undefined.co.uk",
        "index": 4,
        "phone": "+1 (816) 492-3475",
        "picture": "http://placehold.it/32x32"
    },
    {
        "_id": "605acace46f0669738455d6b",
        "age": 38,
        "name": {
            "last": "Bridges",
            "first": "Effie"
        },
        "email": "effie.bridges@undefined.info",
        "index": 5,
        "phone": "+1 (856) 423-3786",
        "picture": "http://placehold.it/32x32"
    },
    {
        "_id": "605acace5ab5217354268532",
        "age": 26,
        "name": {
            "last": "Walter",
            "first": "Krista"
        },
        "email": "krista.walter@undefined.me",
        "index": 6,
        "phone": "+1 (849) 513-2888",
        "picture": "http://placehold.it/32x32"
    },
    {
        "_id": "605acaced68677a5dca08a9b",
        "age": 20,
        "name": {
            "last": "Buchanan",
            "first": "Gomez"
        },
        "email": "gomez.buchanan@undefined.biz",
        "index": 7,
        "phone": "+1 (888) 494-2462",
        "picture": "http://placehold.it/32x32"
    },
    {
        "_id": "605acaceb7ece55cb38e546a",
        "age": 20,
        "name": {
            "last": "Potter",
            "first": "moshe"
        },
        "email": "caitlin.potter@undefined.io",
        "index": 8,
        "phone": "+1 (801) 514-3055",
        "picture": "http://placehold.it/32x32"
    },
    {
        "_id": "605acace98de45687c4c6279",
        "age": 26,
        "name": {
            "last": "Dillon",
            "first": "moshe"
        },
        "email": "guzman.dillon@undefined.ca",
        "index": 9,
        "phone": "+1 (857) 407-2403",
        "picture": "http://placehold.it/32x32"
    }
])


// ! 1


// function userPromis() {
//     return new Promise((resolve,reject)=>{
//         const UserOBJ = JSON.parse(UserJASON)
//         if(UserOBJ.length!=0){
//             resolve(UserJASON)

//         }
//         else{
//             reject ({Message:"error"})
//         }

//     })
// }

// async function returnUserOBJ() {
//     try {
//         return await userPromis(UserJASON)
//     }
//     catch(err){
//         return err
//     }
// }


// returnUserOBJ()
// .then((rec)=>{console.log(rec);})
// .catch((rej)=>{console.log(rej);})

// ! 1



// ! 2

function userPromisID(ID) {
    return new Promise((resolve, reject) => {
        const UserOBJ = JSON.parse(UserJASON)
        for (const item of UserOBJ) {
            if (item._id == ID) {
                resolve(item)
            }
        }
        reject({ Message: "THIS USER DOEIS NOT EXCITE" })
    })
}

//  async function returnUseID() {
//      try{
//          return await userPromisID("605acace5ab5217354268532")
//      }
//      catch(err){
//          return err
//      }
//  }




//  returnUseID()
//  .then((rec)=>{console.log(rec);})
//  .catch((rej)=>{console.log(rej);})

// ! 2


// ! 3

// function userPromisEmail(emailUser) {
//     return new Promise ((resolve,reject)=>{
//         const UserOBJ = JSON.parse(UserJASON)
//         for (const item of UserOBJ) {
//             if(item.email==emailUser){
//                 resolve(item)
//             }
//         }
//         reject({Message:"THIS USER EMAIL DOEIS NOT EXCITE"})
//     })
// }

// async function returnUseEmail() {
//     try{
//         return await userPromisEmail("gomez.buchanan@undefined.biz")
//     }
//     catch (err){
//         return err
//     }
// }



// returnUseEmail()
// .then((rec)=>{console.log(rec);})
// .catch((rej)=>{console.log(rej);})




// ! 3



// ! 4


// function UserArray(ageUser) {
//     return new Promise ((resolve,reject)=>{
//         const UserOBJ = JSON.parse(UserJASON);
//         let newArrayUser=[];
//         for (const item of UserOBJ) {
//             if(item.age>ageUser){
//                 newArrayUser.push(item)
//             }
//         }
//         if(newArrayUser.length>0){
//             resolve(newArrayUser)
//         }
//         reject ({Message:"USER DOES NOT EXITS"})

//     })
// }


// async function returnNewArray() {
//     try{
//         return await UserArray(24)
//     }
//     catch(err){
//         return err
//     }
// }

// returnNewArray()
// .then((rec)=>{console.log(rec);})
// .catch((rej)=>{console.log(rej);})



// ! 4


// ! 5

 function UserArrayName(UserName) {
     return new Promise((resolve, reject) => {
         const UserOBJ = JSON.parse(UserJASON);
         let newOBJ = []
         for (const item of UserOBJ) {
             if (item.name.first == UserName) {
                 newOBJ.push(item)
             }
         }
         if (newOBJ.length > 0) {
             resolve(newOBJ)
         }
         reject({ Message: "USER NAME DOES NOT EXITS" })
     })
 }


// async function returnNewArray() {
//     try{
//         return await UserArrayName("Krista")
//     }
//     catch(err){
//         return err
//     }
// }

// returnNewArray()
//     .then((res) => { console.log(res); })
//     .catch((rej) => { console.log(rej); })



// ! 5


// ! 6+7


let InputID = document.getElementById("InputID");
let btnID = document.getElementById("btnID");
let results = document.getElementById("results");
let sel = document.getElementById("sel");
let img = document.getElementById("img");

btnID.onclick = () => {
    cleanSearch()

    showImg()

    setTimeout(() => {

        switch (sel.value) {
        
            case "ID":
    
                let UserPromis = userPromisID(InputID.value)
                UserPromis
                    .then((user) => { display(user) })
                    .catch(() => { results.innerText = "err 404" })
                    break
            case "Fname":
    
               let UserPromisArr= UserArrayName(InputID.value)    
               UserPromisArr
               .then((userArray)=>{
                   for (const item of userArray) {
                    display(item)
                   }
               })
               .catch(() => { results.innerText = "err 404" })
                break   
        }

        hideImg()
        
    }, 2000);



}



// ! 6+7


function display(user) {
    results.innerText += user.name.first
    results.innerHTML += `<br>`
    results.innerText += user.name.last
    results.innerHTML += `<br>`
    results.innerText += user.email
    results.innerHTML += `<br>`
    results.innerHTML += `<img src="${user.picture}"> <br> `
}



function cleanSearch() {
    results.innerText= " "
    
}

function showImg() {
    img.style.display="block"
    
}

function hideImg() {
    img.style.display="none"
    
}









// ! 8

let showAll=document.getElementById("showAll")
const UserOBJ = JSON.parse(UserJASON)

showAll.onclick = () => {
    UserOBJ.forEach(user => {
        display(user)
        
    });
}



// ! 8

