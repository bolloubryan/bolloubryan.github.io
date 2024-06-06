const sortablelist = document.getElementById('sortablelist')

new Sortable(sortablelist, {
   animation: 150,
   ghostClass: 'sortable-ghost'
 });

let ct = document.querySelector(".sortable");

function createRankerList (rankList) {

var arr = rankList

ct.innerHTML = '';

arr.forEach(value=>{
  const currentElement = document.createElement("li");
  currentElement.innerHTML = value + "<br/>";
  ct.appendChild(currentElement);
})

}

function getAreaText() {

    var parser = document.getElementsByName('parser');

    var delimiter = "Please select a delimiter!";

    var selected = false;
 
        for (i = 0; i < parser.length; i++) {
          if (parser[i].checked) {
            if (document.getElementById("other_parser").checked === true && document.getElementById("radiotext").value!=""){
              delimiter = document.getElementById("radiotext").value
             } else if (document.getElementById("other_parser").checked === true && document.getElementById("radiotext").value==="") {
              delimiter = "Please enter a custom delimiter!"
             } else {
              delimiter = parser[i].value;
             }
             selected = true;
             }

            document.getElementById("delimiter").innerHTML = "Deliminter Used: " + delimiter;
            }

    if (selected) {
      console.log("got here")
      var data_to_rank = document.getElementById("data_to_rank").value;
      var arr = [];
      if(delimiter==="newline" || delimiter==="\n") {
        var arr = data_to_rank.split("\n");
      } else {
        var arr = data_to_rank.split(delimiter);
      }
      createRankerList(arr)
      }

        }

// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}



