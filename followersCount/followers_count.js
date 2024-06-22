let count = 0;


function increaseCount(){
    count++;
    displayCount();
    checkCountValue();

}

function displayCount() {
document.getElementById('countDisplay').innerHTML=count; // Display the count in the HTML
}

function checkCountValue() {
  
  if (count%10 === 0) {
        alert("Your Instagram post gained "+count+" followers! Congratulations!");
  } else if (count === 20) {
    alert("Your Instagram post gained 20 followers! Keep it up!");
  }
}

function reset(){
    count = 0;
    displayCount();
}