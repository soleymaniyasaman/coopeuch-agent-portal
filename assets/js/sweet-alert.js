// npm package: sweetalert2
// github link: https://github.com/sweetalert2/sweetalert2

$(function () {

  showSwal = function (type) {
    'use strict';
    if (type === 'basic') {
      swal.fire({
        text: 'The policy has been successfully modified!',
        icon: 'success',
        confirmButtonText: 'Accept',
        confirmButtonClass: 'btn btn-danger',
      })
    } else if (type === 'title-and-text') {
      Swal.fire(
        'The Internet?',
        'That thing is still around?',
        'question'
      )
    } else if (type === 'title-icon-text-footer') {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
        footer: '<a href>Why do I have this issue?</a>'
      })
    } else if (type === 'custom-html') {
      Swal.fire({
        title: '<strong>HTML <u>example</u></strong>',
        icon: 'info',
        html:
          'You can use <b>bold text</b>, ' +
          '<a href="//github.com">links</a> ' +
          'and other HTML tags',
        showCloseButton: true,
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonText:
          '<i class="fa fa-thumbs-up"></i> Great!',
        confirmButtonAriaLabel: 'Thumbs up, great!',
        cancelButtonText:
          '<i data-feather="thumbs-up"></i>',
        cancelButtonAriaLabel: 'Thumbs down',
      });
      feather.replace();
    } else if (type === 'custom-position') {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1500
      })
    } else if (type === 'passing-parameter-execute-cancel') {
      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger me-2',
        },
        buttonsStyling: false,
      })

      swalWithBootstrapButtons.fire({
        title: 'Are you sure you want to cancel your policy?',
        html:
          '<p class="mb-3 mt-3 lh-lg">Policy No. Hog-0000125 is about to be cancelled, the coverage will be in effect until TODAY.</p> ' +
          '<p class="mb-3">The total premium to be is $XXX</p> ',
        showCancelButton: true,
        confirmButtonClass: 'me-2',
        confirmButtonText: 'Cancel Policy',
        cancelButtonText: 'Back',
        reverseButtons: true
      }).then((result) => {
        if (result.value) {
          swalWithBootstrapButtons.fire(
            'Canceled!',
            'The policy has been successfully canceled.',
            'success'
          )
        }
      })
    } else if (type === 'passing-parameter-execute-delete') {
      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger me-2'
        },
        buttonsStyling: false,
      })

      swalWithBootstrapButtons.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonClass: 'me-2',
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, cancel!',
        reverseButtons: true
      }).then((result) => {
        if (result.value) {
          swalWithBootstrapButtons.fire(
            'Deleted!',
            'The quote has been deleted.',
            'success'
          )
        } else if (
          // Read more about handling dismissals
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            'Cancelled',
            'The quote is safe :)',
            'error'
          )
        }
      })
    } else if (type === 'passing-parameter-execute-delete-group') {
      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger me-2'
        },
        buttonsStyling: false,
      })

      swalWithBootstrapButtons.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonClass: 'me-2',
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, cancel!',
        reverseButtons: true
      }).then((result) => {
        if (result.value) {
          swalWithBootstrapButtons.fire(
            'Deleted!',
            'The Group has been deleted.',
            'success'
          )
        } else if (
          // Read more about handling dismissals
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            'Cancelled',
            'The group is safe :)',
            'error'
          )
        }
      })
    } else if (type === 'passing-parameter-execute-delete-agent') {
      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger me-2'
        },
        buttonsStyling: false,
      })

      swalWithBootstrapButtons.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonClass: 'me-2',
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, cancel!',
        reverseButtons: true
      }).then((result) => {
        if (result.value) {
          swalWithBootstrapButtons.fire(
            'Deleted!',
            'The Agent has been deleted from the group.',
            'success'
          )
        } else if (
          // Read more about handling dismissals
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            'Cancelled',
            'The group is safe :)',
            'error'
          )
        }
      })
    } else if (type === 'message-with-auto-close') {
      let timerInterval
      Swal.fire({
        title: 'Auto close alert!',
        html: 'I will close in <b></b> milliseconds.',
        timer: 2000,
        timerProgressBar: true,
        didOpen: () => {
          Swal.showLoading()
          timerInterval = setInterval(() => {
            const content = Swal.getHtmlContainer()
            if (content) {
              const b = content.querySelector('b')
              if (b) {
                b.textContent = Swal.getTimerLeft()
              }
            }
          }, 100)
        },
        willClose: () => {
          clearInterval(timerInterval)
        }
      }).then((result) => {
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
          console.log('I was closed by the timer')
        }
      })
    } else if (type === 'message-with-custom-image') {
      Swal.fire({
        title: 'Sweet!',
        text: 'Modal with a custom image.',
        // imageUrl: 'https://unsplash.it/400/200',
        imageUrl: '../../../assets/images/others/placeholder.jpg',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
      })
    } else if (type === 'mixin') {
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
      });

      Toast.fire({
        icon: 'success',
        title: 'Signed in successfully'
      })
    }
  }

});