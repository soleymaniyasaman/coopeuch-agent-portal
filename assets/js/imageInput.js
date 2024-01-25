
function uploadImage() {
    document.getElementById('imageInput').click();
}

function previewImage() {
    var input = document.getElementById('imageInput');
    var image = document.getElementById('profileImage');

    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            image.src = e.target.result;
        };

        reader.readAsDataURL(input.files[0]);
    }
}
function deleteImage() {
    var defaultAvatar = generateInitialsAvatar('Mike Popescu');
    document.getElementById('profileImage').src = defaultAvatar;

    // Optional: Clear the file input if you want to allow re-uploading the same image
    document.getElementById('imageInput').value = '';

    // Optional: Perform any additional delete actions if needed
    console.log('Image deleted!');
}

function useAvatars() {
    // Show the avatar modal
    $('#avatarModal').modal('show');
}

function selectAvatar(avatarSrc) {
    // Set the selected avatar as the profile image
    document.getElementById('profileImage').src = avatarSrc;

    // Close the avatar modal
    $('#avatarModal').modal('hide');
}

// Generate initials avatar
function generateInitialsAvatar(name) {
    var initials = name.split(' ')
        .map(word => word.charAt(0))
        .join('')
        .toUpperCase();

    var canvas = document.createElement('canvas');
    var context = canvas.getContext('2d');
    canvas.width = 47;
    canvas.height = 47;

    // Customize the font and color
    context.font = '14px Roboto';
    context.fillStyle = '#fff';
    context.fillRect(0, 0, canvas.width, canvas.height);

    // Draw initials in the center
    context.fillStyle = 'black';
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    context.fillText(initials, canvas.width / 2, canvas.height / 2);

    return canvas.toDataURL();
}

// Set the initials avatar
var initialsAvatar = generateInitialsAvatar('Mike Popescu');
document.getElementById('profileImage').src = initialsAvatar;

feather.replace(); // Replace Feather icons