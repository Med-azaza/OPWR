function myFunction1() {
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
  