var varyingModal = document.getElementById('descriptionModal')
varyingModal.addEventListener('show.bs.modal', function (event) {
    // Button that triggered the modal
    var button = event.relatedTarget
    // Extract info from data-bs-* attributes
    var recipient = button.getAttribute('data-bs-whatever')
    // If necessary, you could initiate an AJAX request here
    // and then do the updating in a callback.
    //
    // Update the modal's content.
    // var modalTitle = varyingModal.querySelector('.modal-title')
    var modalBodyInput = varyingModal.querySelector('.modal-body p')

    // modalTitle.textContent = 'New message to ' + recipient
    modalBodyInput.innerText = recipient
})