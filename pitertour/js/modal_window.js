var modal  = document.querySelector('.popup');
var overflow = document.createElement('div');
var span = document.getElementsByClassName("close")[0];

function openWin() {
    overflow.className = "overflow";
    document.body.appendChild(overflow);
    modal.style.display = "block";
}
overflow.onclick = function () {
    modal.style.display = "none";
    overflow.remove();
} 

span.onclick = function() {
    modal.style.display = "none";
    overflow.remove();

}


