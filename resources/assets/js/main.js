const editTab = document.querySelector('#edit');
const addTab = document.querySelector('#add-new');
const editButtons = document.querySelectorAll('.edit-button');
const deleteButtons = document.querySelector('.delete-button');
const csrf_token = $('meta[name="csrf-token"]').attr('content');

// Show cards when the window is scrolled
window.addEventListener('scroll', (e) => {
    const grid = document.querySelector('.faded-cards');
    grid.classList.remove('hide');
    grid.classList.add('appear');
});

// Card template that is shown on Edit click
function generateCard(id, productUrl, img, title, subtitle, description) {
    let cardForm = `
                <form class="card card-hovered d-flex h-100 flex-column justify-content-between" id="${id}" name="${id}" method="POST" action="update" >
                    <input type="hidden" name="update" />
                    <input type="hidden" name="id" value="${id}" />
                    <div class="form-group">
                        <label for="url">URL</label>
                        <input type="url" class="form-control" name="url" value="${productUrl}" title="Website URL" >
                    </div>
                    <div class="form-group">
                        <label for="photo">Слика</label>
                        <input type="url" name="photo" class="form-control" value="${img}" title="Photo URL" > 
                    </div>
                    <div class="card-title text-secondary m-0">
                        <div class="form-group">
                            <label for="name">Име</label>
                            <input type="text" name="name" class="card-title form-control" value="${title}" title="Product Name"/>
                        </div>
                        <div class="form-group">
                            <label for="subtitle">Поднаслов</label>
                            <input type="text" name="subtitle" class="card-text form-control" value="${subtitle}" />
                        </div>
                    </div>
                    <div class="card-body form-group">
                        <label for="description">Опис</label>
                        <textarea class="card-text form-control" name="description">${description}</textarea>
                    </div>
                    <div class="card-footer">
                        <div class="controls">
                            <input type="submit" class="update-button-${id}" value="Зачувај">
                            <input type="button" class="cancel-button-${id}" value="Откажи">
                        </div>
                    </div>
                    <input type="hidden" name="_token" value="${csrf_token}">
                </form>
    `;
    return cardForm;
}

// Get the card data from the DOM instead of the database, and pass it to the card generator
function cardData(b) {
    const card = b.parentElement.parentElement.parentElement;

    return {
        card,
        id: card['id'],
        img: card.children[0].children[0].currentSrc,
        productUrl: card.children[0].href,
        title: card.children[0].children[1].children[0].innerHTML,
        subtitle: card.children[0].children[1].children[1].innerHTML,
        description: card.children[0].children[2].children[0].innerHTML,
        oldCard: card.innerHTML
    };
}

// Event listener on the edit button
const editListener = b => b.addEventListener('click', (e) => {
    e.preventDefault();
    const { card, id, img, productUrl, title, subtitle, description, oldCard } = cardData(b);
    const cardForm = generateCard(id, productUrl, img, title, subtitle, description);

    addTab.classList.remove('active');
    editTab.classList.add('active');

    // Change the innerHTML of the card with the update form generated with the generateCard function
    card.innerHTML = cardForm;

    const updateButton = document.querySelector(`.update-button-${id}`);
    const cancelButton = document.querySelector(`.cancel-button-${id}`);

    // Update button listener
    updateButton.addEventListener('click', (e) => {
        addTab.classList.remove('active');
        editTab.classList.add('active');
    });

    // Cancel button listener, switches back the card HTML if the form is cancelled
    cancelButton.addEventListener('click', (e) => {
        e.preventDefault();
        addTab.classList.remove('active');
        editTab.classList.add('active');

        card.innerHTML = oldCard;

        // Select edit button
        const el = document.querySelector(`.edit-${id}`);
        // Add evt. listener to edit button since it was dropped because of the innerHTML switch
        editListener(el);
    });
});

// Add event listener to the edit button after the innerHTML has been aplied, so the edit button can be clicked again
Array.from(editButtons).forEach(b => editListener(b));

// Triggering the modal
$('#deleteModal').on('shown.bs.modal', function (e) {
    $('#myInput').trigger('focus');
    let id = e.relatedTarget.parentElement.parentElement.parentElement.id;
    $('#delete-form').attr('action', `/delete?id=${id}`);
})
