document.getElementById('registration-form').addEventListener('submit', function(event) {
  var recaptchaResponse = grecaptcha.getResponse();

  if (recaptchaResponse.length === 0) {
    event.preventDefault();
  }
});

grecaptcha.ready(function() {
  document.getElementById('submit-button').removeAttribute('disabled');
});
