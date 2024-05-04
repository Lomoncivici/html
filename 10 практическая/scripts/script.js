document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('object-form');
  const nameInput = document.getElementById('name');
  const typeInput = document.getElementById('type');
  const objectsList = document.getElementById('objects-list');

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
    objectDiv.classList.add('col-md-6');
    const objectContent = `
      <div class="card mb-4">
        <div class="card-body">
          <h5 class="card-title">${name}</h5>
          <p class="card-text">Type: ${type}</p>
          <button class="btn btn-danger delete-btn">Delete</button>
          <button class="btn btn-primary edit-btn">Edit</button>
        </div>
      </div>
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
    objectDiv.querySelector('.card-title').textContent = name;
    objectDiv.querySelector('.card-text').textContent = `Type: ${type}`;
  }
});