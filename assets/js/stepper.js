$(document).ready(function () {
    $('.step').on('click', function () {
        const stepNumber = $(this).data('step');
        showStep(stepNumber);
    });

    $('.continueButton').on('click', function () {
        const currentStep = parseInt($('.content.active').data('step'));

        showStep(currentStep + 1);

    });


    $('.backButton').on('click', function () {
        const currentStep = parseInt($('.content.active').data('step'));
        showStep(currentStep - 1);
    });

    $('.startOverButton').on('click', function () {
        showStep(1);
    });
    // Check for the hash in the URL to determine the initial step
    // const initialStep = window.location.hash ? parseInt(window.location.hash.slice(1)) : 1;
    // showStep(initialStep);
});

function showStep(stepNumber) {
    // Hide all steps and contents
    $('.step, .line, .content').removeClass('active');
    $('.step, .line, .content').removeClass('check');

    // Show the selected step and content
    for (let i = 1; i <= stepNumber; i++) {
        $(`.step[data-step=${i}]`).addClass('active');
        $(`.step[data-step=${i - 1}]`).addClass('check');
        $(`.line[data-step=${i}]`).addClass('active');
    }

    $(`.content[data-step=${stepNumber}]`).addClass('active');
}

