function validatePassword() {
  const password = document.getElementById('pwd');
  const confirmPassword = document.getElementById('cnf-pwd');
  let errors = [];
  if (password.value !== confirmPassword.value)
    errors.push('Passwords do not match!');
  if (password.value.length < 6)
    errors.push('Password must have atleast 6 characters');
  if (password.value.search(/[a-z]/) < 0)
    errors.push('Password must have atleast one letter');
  if (password.value.search(/[0-9]/) < 0)
    errors.push('Password must have atleast one number');

  if (errors.length > 0) {
    alert(errors.join('\n'));
    return false;
  }
  return true;
}

document.querySelector('#signup').addEventListener('click', validatePassword);
