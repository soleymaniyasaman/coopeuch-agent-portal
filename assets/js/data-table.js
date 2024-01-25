// npm package: datatables.net-bs5
// github link: https://github.com/DataTables/Dist-DataTables-Bootstrap5
function updateDataTableSelectAllCtrl(table) {
  var $table = table.table().node();
  var $chkbox_all = $('tbody input[type="checkbox"]', $table);
  var $chkbox_checked = $('tbody input[type="checkbox"]:checked', $table);
  var chkbox_select_all = $('thead input[name="select_all"]', $table).get(0);

  // If none of the checkboxes are checked
  if ($chkbox_checked.length === 0) {
    chkbox_select_all.checked = false;
    if ('indeterminate' in chkbox_select_all) {
      chkbox_select_all.indeterminate = false;
    }

    // If all of the checkboxes are checked
  } else if ($chkbox_checked.length === $chkbox_all.length) {
    chkbox_select_all.checked = true;
    if ('indeterminate' in chkbox_select_all) {
      chkbox_select_all.indeterminate = false;
    }

    // If some of the checkboxes are checked
  } else {
    chkbox_select_all.checked = true;
    if ('indeterminate' in chkbox_select_all) {
      chkbox_select_all.indeterminate = true;
    }
  }
}
$(function () {
  'use strict';
  $(function () {
    $('.dataTables').DataTable({
      "aLengthMenu": [
        [5, 10, 30, 50, -1],
        [5, 10, 30, 50, "All"]
      ],
      "iDisplayLength": 5,
      "bFilter": false,  // Disable the search bar
      "language": {
        search: "",
        paginate: {
          next: '»',  // Custom symbol for next button
          previous: '«'  // Custom symbol for previous button
        }
      },
      "pagingType": "simple_numbers",  // Use simple numeric pagination
      "renderer": "bootstrap",
    });
    // Center the pagination
    $('.dataTables_paginate').addClass('float-start mt-4');
    $('.dataTables_info').addClass('d-none');
    $('.dataTables_length label').addClass('align-items-center d-inline-flex flex-nowrap mb-3');


    var tabTables = $('.dataTables').each(function () {
      var dataTable = $(this);
      // LENGTH - Inline-Form control
      var length_sel = dataTable.closest('.dataTables_wrapper').find('div[id$=_length] select');
      length_sel.removeClass('form-control-sm');
    });
    //custom pagination for dataTable
    var customPagination = $('#custom-pagination');

    var totalPages = tabTables.page.info().pages;

    // Add "Previous" button
    customPagination.append('<li class="page-item disabled"><a class="page-link" href="#" aria-label="Previous"><span aria-hidden="true">&laquo;</span></a></li>');

    // Add individual page buttons
    for (var i = 1; i <= totalPages; i++) {
      if (i === 1) {
        customPagination.append('<li class="page-item active"><a class="page-link" href="#">' + i + '</a></li>');
      } else {
        customPagination.append('<li class="page-item"><a class="page-link" href="#">' + i + '</a></li>');
      }
    }

    // Add "Next" button
    customPagination.append('<li class="page-item disabled"><a class="page-link" href="#" aria-label="Nexttttttt"><span aria-hidden="true">&raquo;</span></a></li>');

    // Handle click events on custom pagination buttons
    customPagination.find('.page-item:not(.disabled) a').on('click', function () {
      var pageIndex = $(this).text();
      table.page(parseInt(pageIndex) - 1).draw(false);
    });
  });



  $(function () {
    var rows_selected = [];

    var table = $('#dataTableExample').DataTable({
      "language": {
        search: "",
      },
      "lengthChange": false,
      "paging": false, // Disable DataTable default pagination
      dom: '<"row"<"col-12"f>>rt<"row"<"col-12"p>>',
      'columnDefs': [{
        'targets': 0,
        'searchable': false,
        'orderable': false,
        'width': '1%',
        'className': 'dt-body-center',
        'render': function (data, type, full, meta) {
          return '<input type="checkbox">';
        }
      }],
      'order': [[1, 'asc']],
      'rowCallback': function (row, data, dataIndex) {
        // Get row ID
        var rowId = data[0];

        // If row ID is in the list of selected row IDs
        if ($.inArray(rowId, rows_selected) !== -1) {
          $(row).find('input[type="checkbox"]').prop('checked', true);
          $(row).addClass('selected');
        }
      }
    });
    // Handle click on checkbox
    $('#dataTableExample tbody').on('click', 'input[type="checkbox"]', function (e) {
      var $row = $(this).closest('tr');

      // Get row data
      var data = table.row($row).data();

      // Get row ID
      var rowId = data[0];

      // Determine whether row ID is in the list of selected row IDs
      var index = $.inArray(rowId, rows_selected);

      // If checkbox is checked and row ID is not in list of selected row IDs
      if (this.checked && index === -1) {
        rows_selected.push(rowId);

        // Otherwise, if checkbox is not checked and row ID is in list of selected row IDs
      } else if (!this.checked && index !== -1) {
        rows_selected.splice(index, 1);
      }

      if (this.checked) {
        $row.addClass('selected');
      } else {
        $row.removeClass('selected');
      }

      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(table);

      // Prevent click event from propagating to parent
      e.stopPropagation();
    });

    // Handle click on table cells with checkboxes
    $('#dataTableExample').on('click', 'tbody td, thead th:first-child', function (e) {
      $(this).parent().find('input[type="checkbox"]').trigger('click');
    });

    // Handle click on "Select all" control
    $('thead input[name="select_all"]', table.table().container()).on('click', function (e) {
      if (this.checked) {
        $('#dataTableExample tbody input[type="checkbox"]:not(:checked)').trigger('click');
      } else {
        $('#dataTableExample tbody input[type="checkbox"]:checked').trigger('click');
      }

      // Prevent click event from propagating to parent
      e.stopPropagation();
    });

    // Handle table draw event
    table.on('draw', function () {
      // Update state of "Select all" control
      updateDataTableSelectAllCtrl(table);
    });

    // Handle form submission event
    $('#frm-example').on('submit', function (e) {
      e.preventDefault();
      var form = this;
      // Iterate over all selected checkboxes
      $.each(rows_selected, function (index, rowId) {
        // Create a hidden element
        console.log(rowId)
        $(form).append(
          $('<input>')
            .attr('type', 'hidden')
            .attr('name', 'id[]')
            .val(rowId)
        );
      });
    });




    $('#dataTableExample').each(function () {
      var datatable = $(this);
      // SEARCH - Add the placeholder for Search and Turn this into in-line form control
      var search_input = datatable.closest('.dataTables_wrapper').find('div[id$=_filter] input');
      search_input.attr('placeholder', 'Search');
      search_input.removeClass('form-control-sm');
      // LENGTH - Inline-Form control
      var length_sel = datatable.closest('.dataTables_wrapper').find('div[id$=_length] select');
      length_sel.removeClass('form-control-sm');
    });
  });

});


//custom pagination for datatable
// var customPagination = $('#custom-pagination');

// var totalPages = table.page.info().pages;

// // Add "Previous" button
// customPagination.append('<li class="page-item disabled"><a class="page-link" href="#" aria-label="Previous"><span aria-hidden="true">&laquo;</span></a></li>');

// // Add individual page buttons
// for (var i = 1; i <= totalPages; i++) {
//   if (i === 1) {
//     customPagination.append('<li class="page-item active"><a class="page-link" href="#">' + i + '</a></li>');
//   } else {
//     customPagination.append('<li class="page-item"><a class="page-link" href="#">' + i + '</a></li>');
//   }
// }

// // Add "Next" button
// customPagination.append('<li class="page-item disabled"><a class="page-link" href="#" aria-label="Next"><span aria-hidden="true">&raquo;</span></a></li>');

// // Handle click events on custom pagination buttons
// customPagination.find('.page-item:not(.disabled) a').on('click', function () {
//   var pageIndex = $(this).text();
//   table.page(parseInt(pageIndex) - 1).draw(false);
// });
