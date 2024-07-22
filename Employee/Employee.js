function validateForm() {
    const id = document.getElementById('id').value;
    const email = document.getElementById('email').value;
    const department = document.getElementById('department').value;
    const gender = document.getElementById('gender').value;
    const skills = document.querySelectorAll('input[name="skills"]:checked');
    const status = document.querySelector('input[name="status"]:checked');
    const errorMessage = document.getElementById('error-message');

    // Clear previous error message
  

    if (id === '' || email === '' || department === '' || gender === '' || skills.length === 0 || !status) {
        alert('Please fill out all fields.');
        return false;
    }

    return true;
}
