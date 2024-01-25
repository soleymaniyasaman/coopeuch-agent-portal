// Filter table

$(document).ready(function () {
    $("#quoteSearch").on("click", function () {
        var value = $(this).val().toLowerCase();
        console.log("search value ===>", value)
        $("#quoteTableBody tr").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
});