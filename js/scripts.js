

$(function() {
  $('#loading').hide();
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

})
  