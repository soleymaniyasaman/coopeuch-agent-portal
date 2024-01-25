$(document).ready(function () {
    // Set initial visibility based on the default checked radio button
    toggleInputs();

    // Add change event listener to the radio buttons
    $('input[name="gender_radio"]').change(function () {
        toggleInputs();
    });

    function toggleInputs() {
        // If customerName radio is checked, show customerName input and hide customerID input
        if ($('#customerName').prop('checked')) {
            $('#logsCustomerName').show();
            $('#logsCustomerId').hide();
            $("input[name='logsCustomerId']").val('');

        } else {
            // If customerID radio is checked, show customerID input and hide customerName input
            $('#logsCustomerName').hide();
            $("input[name='logsCustomerName']").val('');
            $('#logsCustomerId').show();
        }
    }
});