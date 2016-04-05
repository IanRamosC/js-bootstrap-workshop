var btn = document.getElementById('enviar');
var input = document.getElementById('tarefa');
var ul = document.getElementById('list');

function addItem() {
	var li = document.createElement('li');
	var txt = document.createElement('div');
	var deleteBtn = document.createElement('button');
	deleteBtn.textContent = "X";
	deleteBtn.className = "btn btn-delete";
	deleteBtn.addEventListener('click', deleteItem);

	txt.id = "textoTarefa";
	txt.textContent = input.value;

	li.addEventListener('dblclick', editItem);
	li.className = "list-group-item";
	li.appendChild(txt);
	li.appendChild(deleteBtn);
	ul.appendChild(li);

	input.value = "";
}

function deleteItem() {
	this.parentNode.parentNode.removeChild(this.parentNode);
}

function editItem() {
	var txt = this.children[0];
	txt.setAttribute('contenteditable', true);
	txt.focus();
	txt.addEventListener('blur', function() {
		this.setAttribute('contenteditable', false);
	});
	txt.addEventListener('keyup', function(e) {
		if (e.keyCode === 27) {
			this.setAttribute('contenteditable', false);
		}
	});
}

btn.addEventListener('click', addItem);