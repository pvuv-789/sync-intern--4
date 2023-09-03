
document.getElementById('signup-form').addEventListener('submit', function (e) {
    e.preventDefault();

   
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    
    alert(`User ${username} registered successfully!`);

    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
});


document.getElementById('upload-button').addEventListener('click', function () {
   
    const fileInput = document.getElementById('file-upload');
    const file = fileInput.files[0];

    if (file) {
        
        alert(`File "${file.name}" uploaded successfully!`);
      
        fileInput.value = '';
    } else {
        alert('Please select a file to upload.');
    }
});


