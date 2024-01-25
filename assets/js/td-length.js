$(document).ready(function () {
    // Select all <td> elements that need truncation
    $("td").each(function () {
        // Check if the <td> has children
        if ($(this).children().length === 0) {
            // If it has no children and contains plain text
            // Get the text content of the current <td> element
            var textContent = $(this).text();

            // Check if the length of the text exceeds 25 characters
            if (textContent.length > 25) {
                // Truncate the text and add "..." at the end
                var truncatedText = textContent.substring(0, 25) + "...";

                // Set the truncated text back to the <td> element
                $(this).text(truncatedText);
            }
        }
    });
});