// script.js

function confirmAction() {
    
    event.preventDefault();
 


    const confirmText = document.getElementById('confirm').value.trim().toLowerCase();

    if(confirmText === 'yes') {
        alert('Your application has been confirmed!');
    } else if (confirmText === 'no') {
        alert('Your application has not been confirmed.');
    } else {
        alert('Please type "Yes" or "No" to confirm.');
    }
}
