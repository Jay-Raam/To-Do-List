const InputValue = document.getElementById('liAdded');
    const AddList = document.getElementById('AddnewList');

    InputValue.addEventListener('keypress', function(event) {
        if (event.key === 'Enter' && InputValue.value.trim() !== '') {
            const newListItem = document.createElement('li');
            const deleteText = document.createElement('span'); 
            
            newListItem.textContent = InputValue.value;
            
            AddList.appendChild(newListItem);

            deleteText.textContent = 'Delete';
            newListItem.appendChild(deleteText); 
            
            InputValue.value = '';

            deleteText.addEventListener('click', function() {
                AddList.removeChild(newListItem);
            });

            newListItem.addEventListener('click', function(event) {
                if (event.detail === 1) {
                    newListItem.style.backgroundColor = 'green';
                }
            });
        }
    });

