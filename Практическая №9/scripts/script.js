document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('object-form');
  const nameInput = document.getElementById('name');
  const typeInput = document.getElementById('type');
  const objectsList = document.getElementById('objects-list');
  let selectedObject = null;

  form.addEventListener('submit', function(event) {
    event.preventDefault();
    const name = nameInput.value.trim();
    const type = typeInput.value.trim();

    if (name && type) {
      if (selectedObject) {
        updateObject(selectedObject, name, type);
      } else {
        addObject(name, type);
      }
      nameInput.value = '';
      typeInput.value = '';
      selectedObject = null;
    } else {
      alert('Please fill out all fields.');
    }
  });

  function addObject(name, type) {
    const objectDiv = document.createElement('div');
    objectDiv.classList.add('object');
    const objectContent = `
      <h2>${name}</h2>
      <p>Type: ${type}</p>
      <button class="edit-btn">Edit</button>
      <button class="delete-btn">Delete</button>
    `;
    objectDiv.innerHTML = objectContent;
    objectsList.appendChild(objectDiv);

    objectDiv.querySelector('.edit-btn').addEventListener('click', function() {
      nameInput.value = name;
      typeInput.value = type;
      selectedObject = objectDiv;
    });

    objectDiv.querySelector('.delete-btn').addEventListener('click', function() {
      objectDiv.remove();
    });
  }

  function updateObject(objectDiv, name, type) {
    objectDiv.querySelector('h2').textContent = name;
    objectDiv.querySelector('p').textContent = `Type: ${type}`;
  }
});