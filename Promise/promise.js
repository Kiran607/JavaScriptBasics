//Example 1 simple promise program
const promise=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("got the user");
        resolve({user:"ed"});
        reject(new Error("User not logged in"));
    },2000);
});

promise.then(user=>{
    console.log(user);
}).catch(err=>{
    console.log(err);
});

console.log("Start");

//Example 2 using settimeout

function loginUser(email,passWord){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Now we the data");
            resolve({userEmail:email,pass:passWord});
            reject(new Error("Data not fetch"));
        },2000);
    }); 
}

function getUserVideos(email){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(["video1","video2","video3"]);
            reject(new Error("Video not loaded"));
        },1000);
    });
   
}

function videoDetails(email){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Title of the video");
            reject(new Error("Title not printed"));
        },1000);
    })
}

loginUser("Kiran@gmail.com",12345)
.then(user=>getUserVideos(user.email))
.then(videos=>videoDetails(videos[0]))
.then(detail=>console.log(detail))
.catch((err)=>{
    console.log(err);
});

console.log("finish");

//Example 3 addition

const add = function(x, y) {
    return new Promise((resolve,reject) => {
      let sum = x + y;
      if (sum) {
        resolve(sum);
      }
      else {
        reject(Error("Could not add the two values!"));
      }
    });
  };
  
  const subtract = function(x, y) {
    return new Promise((resolve, reject) => {
      let sum = x - y;
      if (sum) {
        resolve(sum);
      }
      else {
        reject(Error("Could not subtract the two values!"));
      }
    });
  };

  // Starting promise chain
add(2,2)
.then((added) => {
  // added = 4
  return subtract(added, 3);
})
.then((subtracted) => {
  // subtracted = 1
  return add(subtracted, 5);
})
.then((added) => {
  // added = 6
  return added * 2;    
})
.then((result) => {
  // result = 12
  console.log("My result is ", result);
})
.catch((err) => {
  // If any part of the chain is rejected, print the error message.
  console.log(err);
});