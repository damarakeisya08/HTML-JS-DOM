// DOM Selection
// document.getElementById() -> element
const judul = document.getElementById('judul');
judul.style.color = 'purple';
judul.style.backgroundColor = '#ccc';
judul.innerHTML = 'Damara Keisya';

// document.getElementsByTagname()
const p = document.getElementsByTagName('p');
p[0].style.backgroundColor = 'lightpink';
p[1].style.backgroundColor = 'lightpink';
p[2].style.backgroundColor = 'lightpink';
p[3].style.backgroundColor = 'lightpink';

const h1 = document.getElementsByTagName('h1')[0];
h1.style.fontSize = '50px';

// document.getElementsByClassName()
// -> HTMLCollection
const p1 = document.getElementsByClassName('p1');
p1[0].innerHTML = 'ini diubah dari javascript';