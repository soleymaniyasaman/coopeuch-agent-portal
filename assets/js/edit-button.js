// Wait for the document to be ready
$(document).ready(function () {
    // Hide the submit button initially
    $('#clientProfileSubmit').hide();

    // Handle click on edit button
    $('#clientProfileEdit').click(function () {
        // Hide edit button, show submit button
        $('#clientProfileEdit').hide();
        $('#clientProfileSubmit').show();

        // Enable inputs
        $('.profile-form').prop('disabled', false);
    });

    // Handle click on submit button
    $('#clientProfileSubmit').click(function () {
        // Hide submit button, show edit button
        $('#clientProfileSubmit').hide();
        $('#clientProfileEdit').show();

        // Disable inputs
        $('.profile-form').prop('disabled', true);
    });
    // Use event delegation to handle dynamically changed buttons
    $(document).on("click", "#editGroupName", function () {
        var isEditing = $(this).text().toLowerCase() === "edit";

        if (isEditing) {
            // Remove the 'disabled' attribute from the input
            $("#groupNameInputDisabled1").prop("disabled", false);

            // Change the button to a submit button
            $(this).text("Submit").attr("type", "submit");
        } else {
            // Change the value of the input to what the user wrote
            var newValue = $("#groupNameInputDisabled1").val();
            console.log("Submitted Value:", newValue);

            // Change the button back to Edit
            $(this).text("Edit").attr("type", "button");

            // Add the 'disabled' attribute back to the input
            $("#groupNameInputDisabled1").prop("disabled", true);
        }
    });

    // Variable to track the state of the form
    var isEditingQuote = false;

    // Function to toggle form state
    function toggleQuoteFormState() {
        // Toggle the state
        isEditingQuote = !isEditingQuote;

        // Enable/disable checkboxes and switch button based on the state
        // $(".disabled-switch").prop("disabled", !isEditingQuote);
        // $("#editQuotePermissions").text(isEditingQuote ? "Submit" : "Edit");
    }

    // Click event for the editQuotePermissions button
    // $("#editQuotePermissions").on("click", function () {
    //     toggleQuoteFormState();
    // });

    // quotationPermissionForm submission event
    $("#quotationPermissionForm").on("submit", function (event) {
        // Prevent the default form submission
        event.preventDefault();

        // If in editing state, submit the form (you can add your logic here)
        if (isEditingQuote) {
            console.log("Form submitted!");
            // You can add your logic here to handle the form submission
        }

        // Toggle the form state after submission
        // toggleQuoteFormState();
    });
    // Variable to track the state of the form
    var isEditingPolicy = false;

    // Function to toggle form state
    function togglePolicyFormState() {
        // Toggle the state
        isEditingPolicy = !isEditingPolicy;

        // Enable/disable checkboxes and switch button based on the state
        // $(".disabled-policy-switch").prop("disabled", !isEditingPolicy);
        // $("#editPolicyPermissions").text(isEditingPolicy ? "Submit" : "Edit");
    }

    // Click event for the editPolicyPermissions button
    $("#editPolicyPermissions").on("click", function () {
        // togglePolicyFormState();
    });

    // policyPermissionForm submission event
    $("#policyPermissionForm").on("submit", function (event) {
        // Prevent the default form submission
        event.preventDefault();

        // If in editing state, submit the form (you can add your logic here)
        if (isEditingPolicy) {
            console.log("Form submitted!");
        }

        // Toggle the form state after submission
        // togglePolicyFormState();
    });
});

// Feather icons setup
feather.replace();