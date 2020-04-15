var modal = document.getElementById('virtualHost');

var modalBtn = document.getElementById('modalBtn');

var closeBtn = document.getElementById('closeBtn');


modalBtn.addEventListeneer('click', openModal);

function openModal(){
   modal.style.display = 'block';
   console.log(123)
}