// This is a git test

var newElemColorFlag = true;

function changeDiv() {
  var textDiv = document.getElementById("onlydiv");
  var divClassName = textDiv.className;
  if(divClassName === "bluediv"){
    console.log("ya tiene la clase bluediv seteada,se resetea");
    textDiv.classList.replace('bluediv','onlydiv');
  } else {
    textDiv.classList.replace('onlydiv','bluediv');
    console.log("Se activo el boton");
  }
}

function addUlLi(){
  var newEl = document.createElement('li');
  var newText = document.createTextNode('New Elem');
  newEl.appendChild(newText);
  if (newElemColorFlag) {
    newEl.setAttribute('class','cold');
    newElemColorFlag = false;
  } else {
    newEl.setAttribute('class','hot');
    newElemColorFlag = true;
  }

  var ulItem = document.getElementsByTagName('ul')[0];
  ulItem.appendChild(newEl);

}

var btn = document.getElementById('colorbutton');
btn.addEventListener("click", changeDiv);

var appendBtn = document.getElementById('appendbutton');
appendBtn.addEventListener("click",addUlLi);
