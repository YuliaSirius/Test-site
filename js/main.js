// Slider

$(document).ready(function () {
  $('.slider').slick({
    dots: true,
    arrows: false,
  });
});

(function () {
  let submit = document.getElementById('submit');
  submit.addEventListener('click', showMessage);
  function showMessage() {
    alert('Ваше сообщение отправлено');
  }
})();
