const myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';
alert('hello!');
document.querySelector('html').addEventListener('click', function() {
    alert('Ouch! Stop poking me!');
  });