var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var list = document.querySelectorAll("li");

function inputLength() {
	return input.value.length;
}

//append button for each existed list
for (let i = 0; i < list.length; i++) {
	var delBtn = document.createElement("button");
	delBtn.appendChild(document.createTextNode("Delete"));
	list[i].appendChild(delBtn);
	delBtn.onclick = deleButton;
}


function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	var delBtn = document.createElement("button");
	delBtn.appendChild(document.createTextNode("Delete"));
	li.appendChild(delBtn);
	li.onclick = markList;
	delBtn.onclick = deleButton;
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}
function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}
//toggle style done
function markList(ele) {
	if (ele.target.tagName === "LI") {
		ele.target.classList.toggle("done");
	}
}
for (let i = 0; i < list.length; i++) {
	list[i].addEventListener("click", markList);
}
//list.forEach(element => {
//	element.addEventListener("click", ele => {
//		ele.target.classList.toggle("done");
//	});
//});

//delete item when click delete button
function deleButton(dele) {
	dele.target.parentNode.remove();
}




button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);


