/*function myFunction1() {
    var x = document.getElementById("ab1disc");
    var a = document.getElementById("ab2disc");
    var b = document.getElementById("ab3disc");
    var c = document.getElementById("ab4disc");
    var d = document.getElementById("ab5disc");
    if (x.style.display === "none") {
      x.style.display = "block";
      a.style.display = "none";
      b.style.display = "none";
      c.style.display = "none";
      d.style.display = "none";
    } else {
      x.style.display = "none";
    }
  }
  function myFunction2() {
    var x = document.getElementById("ab2disc");
    var a = document.getElementById("ab1disc");
    var b = document.getElementById("ab3disc");
    var c = document.getElementById("ab4disc");
    var d = document.getElementById("ab5disc");
    if (x.style.display === "none") {
      x.style.display = "block";
      a.style.display = "none";
      b.style.display = "none";
      c.style.display = "none";
      d.style.display = "none";
    } else {
      x.style.display = "none";
    }
  }
  function myFunction3() {
    var x = document.getElementById("ab3disc");
    var a = document.getElementById("ab2disc");
    var b = document.getElementById("ab1disc");
    var c = document.getElementById("ab4disc");
    var d = document.getElementById("ab5disc");
    if (x.style.display === "none") {
      x.style.display = "block";
      a.style.display = "none";
      b.style.display = "none";
      c.style.display = "none";
      d.style.display = "none";
    } else {
      x.style.display = "none";
    }
  }
  function myFunction4() {
    var x = document.getElementById("ab4disc");
    var a = document.getElementById("ab2disc");
    var b = document.getElementById("ab3disc");
    var c = document.getElementById("ab1disc");
    var d = document.getElementById("ab5disc");
    if (x.style.display === "none") {
      x.style.display = "block";
      a.style.display = "none";
      b.style.display = "none";
      c.style.display = "none";
      d.style.display = "none";
    } else {
      x.style.display = "none";
    }
  }
  function myFunction5() {
    var x = document.getElementById("ab5disc");
    var a = document.getElementById("ab2disc");
    var b = document.getElementById("ab3disc");
    var c = document.getElementById("ab4disc");
    var d = document.getElementById("ab1disc");
    if (x.style.display === "none") {
      x.style.display = "block";
      a.style.display = "none";
      b.style.display = "none";
      c.style.display = "none";
      d.style.display = "none";
    } else {
      x.style.display = "none";
    }
  }
  var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
})

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})
var myModal = document.getElementById('myModal')
var myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', function () {
  myInput.focus()
})*/
  const names=document.getElementsByClassName('name');
  const cards=new Array();
  var x=0;
  for (i in names) {
    cards[x]=names[i].parentElement;
    x++;
  }
  const box=document.getElementById('srbox');
box.addEventListener('keyup', function() {
  var word=box.value;
  console.log(word);
  for (i in names){
    if(names[i].textContent.includes(word)){
      names[i].parentElement.style.display='block';
    } else {
      names[i].parentElement.style.display='none';
    }
  }

})
  