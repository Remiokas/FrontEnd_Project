document.querySelector('.submit').addEventListener('click', sendMessage);

function sendMessage (event) {
    event.preventDefault();
    let form = document.querySelector('.contact-form');
    form.style.display = 'none';
    let h2 = document.createElement('h2');
    h2.textContent = 'Thank You For Your Message!';
    document.querySelector('#contact-us').appendChild(h2);
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

