var istatus = document.querySelector("h5");
var addFriend = document.querySelector("#add");
var check = 0


addFriend.addEventListener("click", function () {
    if(check == 0){
      istatus.innerHTML = 'friends';
      istatus.style.color = 'green'; 
      console.log("hui huii")
      check = 1
    }else{
        istatus.innerHTML = 'stranger';
        istatus.style.color = 'red';
        console.log("buii buii")
        check = 0
    }
  
});
