function validateForm() {
    const id = document.getElementById('id').value;
    const name = document.getElementById('name').value;
    const department = document.getElementById('department').value;
    const interests = document.querySelectorAll('input[name="interests"]:checked');
    const gender = document.querySelector('input[name="gender"]:checked');
    const description = document.getElementById('description').value;
    const errorMessage = document.getElementById('error-message');

    if (id === '' || name === '' || department === '' || interests.length === 0 || !gender || description === '') {
        errorMessage.textContent = 'Please fill out all fields.';
        return false;
    }

    if (description.length > 50) {
        errorMessage.textContent = 'Description must be 50 characters or less.';
        return false;
    }

    return true;
}
