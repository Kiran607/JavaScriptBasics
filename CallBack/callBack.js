console.log("Start");

function loginUser(email,passWord,callBack){
    setTimeout(()=>{
        console.log("Now we the data");
        callBack({userEmail:email,pass:passWord});
    },2000);
}

function getUserVideos(email,callBack){
    setTimeout(()=>{
        callBack (["video1","video2","video3"]);
    },1000);
}

function videoDetails(email,callBack){
    setTimeout(()=>{
        callBack ("Title of the video");
    },1000);
}

let user=loginUser("kiran@gmail.com",123456,user=>{
    console.log(user);
    getUserVideos(user.userEmail,(videos)=>{
        console.log(videos);
        videoDetails(user.userEmail,(Details)=>{
            console.log(Details);
        });
    });
});

console.log("finish");


//example 2
console.log("Start");

add=(a,b)=>{
    console.log("Addtion of",a+b);
}

subtraction=(a,b)=>{
    console.log(a-b);
}

calculation=(callback)=>{
    let result=(5);
    let result1=(2);
    callback(result,result1);
}

calculation(add);
calculation(subtraction);

console.log("Finish");


//example 3
let greeting=(name)=> {
    console.log('Hello ' + name);
  }
  
  processUserInput=(callback)=>{
    let name = "Kiran";
    callback(name);
  }
  
  processUserInput(greeting);
