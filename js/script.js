// ================ active script for navbar ======================
// Get the container element
var btnContainer = document.getElementById('myDIV');

// Get all buttons with class="btn" inside the container
var btns = btnContainer.getElementsByClassName('nav-link');

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener('click', function () {
    var current = document.getElementsByClassName('active');
    current[0].className = current[0].className.replace(' active', '');
    this.className += ' active';
  });
}

// ================ navbar backgrount when scroll change ============
function changeBg() {
  let navbar = document.getElementById('navbar_part');
  let scrollValue = window.scrollY;
  if (scrollValue < 150) {
    navbar.classList.remove('nav_scroll');
  } else {
    navbar.classList.add('nav_scroll');
  }
}
window.addEventListener('scroll', changeBg);

// banner_part slider

$('#banner_part').slick({
  dots: true,
  infinite: true,
  speed: 300,
  fade: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: false,
});

// from part script

function SendMail() {
  var params = {
    from_name: document.getElementById('fullName').value,
    email_name: document.getElementById('email_id').value,
    phone: document.getElementById('phone').value,
    message: document.getElementById('message').value,
  };

  emailjs
    .send('service_7cij6i8', 'template_9j0csje', params)
    .then(function (res) {
      alert('Success! ' + res.status);
    });
}
