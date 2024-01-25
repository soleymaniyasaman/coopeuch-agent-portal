(function ($) {
    'use strict';
    $(function () {
        //search with tags inside
        var selectedFilter = "All";
        var data = {
            "All": ["Susana", "Susana Diaz", "Susana Gimenez", "Susana Reid", "Susana Abaitua"],
            "Quotes": ["Susana Gimenez", "Susana Reid"],
            "Policies": ["Susana Abaitua", "Susana Diaz"],
            "Clients": ["Susana Diaz", "Susana Gimenez", "Susana Reid", "Susana Abaitua"],
            "Surveys": ["Susana", "Susana Diaz", "Susana Gimenez"],
            "Agents": ["Susana", "Susana Diaz", "Susana Gimenez"]
        };
        var filterIcons = {
            "All": '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-filter"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon></svg>',
            "Quotes": '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-book"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>',
            "Policies": '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-book-open"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>',
            "Clients": '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-users"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>',
            "Surveys": '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-list"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg>',
            "Agents": '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-list"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg>'
        };
        // Function to update the selected filter display
        function updateSelectedFilterDisplay() {
            $('.dropdown-menu .dropdown-item').removeClass('active');
            $('.dropdown-menu .dropdown-item[data-filter="' + selectedFilter + '"]').addClass('active');
        }

        // Update the selected filter display initially
        updateSelectedFilterDisplay();

        // Function to update the search results
        function updateSearchResults() {
            var searchTerm = $('#search_bar').val().toLowerCase();
            var results = data[selectedFilter].filter(function (item) {
                return item.toLowerCase().includes(searchTerm);
            });

            results = results.map(function (item) {
                var highlightedText = item.replace(new RegExp(searchTerm, 'gi'), function (match) {
                    return `<mark>${match}</mark>`;
                });
                return `<li class="text-primary ps-0 dropdown-item" role="button">${highlightedText}</li>`;
            });
            results = results.join("");

            // Replace "recentSearch" with your actual recent search data
            var recentSearchData = [
                "Recent Search 1",
                "Recent Search 2",
                "Recent Search 3"
            ];
            // Get the SVG icon path for the selected filter
            var filterIconPath = filterIcons[selectedFilter];

            // Convert recent search data into a formatted string
            var recentSearch = recentSearchData.map(function (item) {
                return `<li class="text-primary ps-0 dropdown-item" role="button">${item}</li>`;
            }).join("");

            // Perform the search with the selected filter and search term
            if (searchTerm.length === 0) {
                $('.search-results').html('<div class="d-flex justify-content-between"><div class="p-1 fw-bolder tx-16 text-primary">Recent Searches:</div><button class="btn text-decoration-underline text-primary">Clear All</button></div><ul class="ps-2">' + recentSearch + '</ul>');
            } else {
                var filterIcon = filterIconPath;

                $('.search-results').html('<div class="d-flex justify-content-between"><div class="p-1">' + filterIcon + '<span class="bold ms-2">' + selectedFilter + '</p></div><button class="btn text-decoration-underline text-primary">View All (189)</button></div><ul class="ps-2">' + results + '</ul>');
            }

        }

        // Update the search results initially
        updateSearchResults();

        // Handle filter option click
        $('.dropdown-menu .dropdown-item').click(function () {
            selectedFilter = $(this).data("filter");
            // Add a blue background color to the selected option
            updateSelectedFilterDisplay();

            // Focus on the search bar
            $('#search_bar').focus();

            // Set the cursor position to the end of the input value
            var input = $('#search_bar')[0];
            var textLength = input.value.length;
            input.setSelectionRange(textLength, textLength);

            // Update the search results when the filter is changed
            updateSearchResults();
        });

        // Prevent the dropdown from closing on option selection
        $('.dropdown-menu .dropdown-item').on('click', function (e) {
            e.stopPropagation();
        });

        // Handle search input
        $('#search_bar').on('input', function () {
            updateSearchResults();
        });
        //End

    })
})(jQuery);