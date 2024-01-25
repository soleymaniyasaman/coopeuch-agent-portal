// Initialize Feather Icons
feather.replace();

// Event listener for the select input
document.getElementById('editButtonSelect').addEventListener('click', () => toggleEditModeSelect('selectInput', 'editButtonSelect'));

// Function to toggle edit mode for the select input
function toggleEditModeSelect(selectId, editButtonId) {
    const selectInput = document.getElementById(selectId);
    const editButtonSelect = document.getElementById(editButtonId);

    if (selectInput.disabled) {
        // Enter edit mode
        selectInput.disabled = false;
        editButtonSelect.innerHTML = ' <button class="btn end-0 p-0 position-absolute top-0" type="button" id="editButton1" style = "margin-top: 0rem; z-index: 970;" ><i data-feather="check" class="icon-lg me-2 bg-white text-black-50"></i></button > ';
        feather.replace();
    } else {
        // Exit edit mode
        selectInput.disabled = true;
        editButtonSelect.innerHTML = ' <button class="btn end-0 p-0 position-absolute top-0" type="button" id="editButton1" style = "margin-top: 0rem; z-index: 970;" ><i data-feather="edit" class="icon-lg me-2 bg-white text-black-50"></i></button > ';
        feather.replace();

        // Log the updated value
        console.log(`${selectId}: ${selectInput.value}`);
    }
}

// Function to toggle edit mode for a specific input field
function toggleEditMode(inputId, editButtonId) {
    const input = document.getElementById(inputId);
    const editButton = document.getElementById(editButtonId);

    if (input.readOnly) {
        // Enter edit mode
        input.readOnly = false;
        input.focus();
        editButton.innerHTML = '<button class="btn end-0 p-0 position-absolute top-0" type="button" id="editButton1" style = "margin-top: 0rem; z-index: 970;" ><i data-feather="check" class="icon-lg me-2 bg-white text-black-50"></i></button >';
        feather.replace();
    } else {
        // Exit edit mode
        input.readOnly = true;
        editButton.innerHTML = '<button class="btn end-0 p-0 position-absolute top-0" type="button" id="editButton1" style = "margin-top: 0rem; z-index: 970;" ><i data-feather="edit" class="icon-lg me-2 bg-white text-black-50"></i></button > ';
        feather.replace();

        // Log the updated value
        console.log(`${inputId}: ${input.value}`);
    }
}

// Event listeners for edit buttons
document.getElementById('editButton1').addEventListener('click', () => toggleEditMode('input1', 'editButton1'));
document.getElementById('editButton2').addEventListener('click', () => toggleEditMode('input2', 'editButton2'));
document.getElementById('editButton3').addEventListener('click', () => toggleEditMode('input3', 'editButton3'));
document.getElementById('editButton4').addEventListener('click', function () {
    // Set the new URL for redirection
    window.location.href = '../back-office/groups/groups-edit.html';
});
document.getElementById('editButton5').addEventListener('click', () => toggleEditMode('input5', 'editButton5'));