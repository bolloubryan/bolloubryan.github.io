const sortablelist = document.getElementById('sortablelist')

new Sortable(sortablelist, {
   animation: 150,
   ghostClass: 'sortable-ghost'
 });


let ct = document.querySelector(".sortable");

const arr = ["naruto","one piece","hxh"];


arr.forEach(value=>{
  const currentElement = document.createElement("li");
  currentElement.innerHTML = value + "<br/>";
  ct.appendChild(currentElement);
})
