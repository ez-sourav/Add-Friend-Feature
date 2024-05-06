var addFriend = document.querySelector("#add-btn");
var removeFriend = document.querySelector("#remove-btn");
var isStatas= document.querySelector("#sts");
var flag=1

// Add Friend
addFriend.addEventListener("click",function(){
    if(flag==1){
        isStatas.innerHTML="Friends"
        isStatas.style.color="Green"
        addFriend.innerHTML="Friends"
        addFriend.style.cursor="not-allowed";
        removeFriend.style.display = "inline-block";
        flag=0
    }
})

// Remove Friend
removeFriend.addEventListener("click",function(){
    if(flag==0){
        isStatas.innerHTML="Stranger";
        isStatas.style.color="Red";
        addFriend.innerHTML="Add Friend"
        addFriend.style.cursor="Pointer";
        removeFriend.style.display = "none";
        flag=1
    }
})