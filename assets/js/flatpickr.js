// npm package: flatpickr
// github link: https://github.com/flatpickr/flatpickr

$(function () {
  'use strict';

  //Quote date picker 
  if ($('#quote-flatpickr-date').length) {
    flatpickr("#quote-flatpickr-date", {
      wrap: true,
      dateFormat: "Y-m-d",
      mode: "range"
    });
  }
  //Policy date picker 
  if ($('#policy-flatpickr-date').length) {
    flatpickr("#policy-flatpickr-date", {
      wrap: true,
      dateFormat: "Y-m-d",
      mode: "range"
    });
  }
  //Claim date picker 
  if ($('#claim-flatpickr-date').length) {
    flatpickr("#claim-flatpickr-date", {
      wrap: true,
      dateFormat: "Y-m-d",
      mode: "range"
    });
  }
  //Transaction date picker 
  if ($('#transaction-flatpickr-date').length) {
    flatpickr("#transaction-flatpickr-date", {
      wrap: true,
      dateFormat: "Y-m-d",
      mode: "range"
    });
  }
  // date picker 
  if ($('#flatpickr-date').length) {
    flatpickr("#flatpickr-date", {
      wrap: true,
      dateFormat: "Y-m-d",
      mode: "range"
    });
  }


  // time picker
  if ($('#flatpickr-time').length) {
    flatpickr("#flatpickr-time", {
      wrap: true,
      enableTime: true,
      noCalendar: true,
      dateFormat: "H:i",
    });
  }

});