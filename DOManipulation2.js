const pnew = document.createElement('p');
const teksbaru = document.createTextNode('paragraf enyar');
pnew.appendChild(teksbaru);
const sectionA = document.getElementById('a');
sectionA.appendChild(pnew);


const lnew = document.createElement('li');
const teksLibaru = document.createTextNode('item nyar');
lnew.appendChild(teksLibaru);

const ul = document.querySelector('section#b ul');
const li2 = document.querySelector('li:nth-child(2)');

ul.insertBefore(lnew, li2);




const link = document.getElementsByTagName('a')[0];

sectionA.removeChild(link);


const sectionb = document.getElementById('b');
const p4 = sectionb.querySelector('p');

const h2new = document.createElement('h2');
const teksH2new = document.createTextNode('JudulBARUUUU');

h2new.appendChild(teksH2new);
sectionb.replaceChild(h2new, p4);

pnew.style.backgroundColor = "lightyellow";
lnew.style.backgroundColor = "lightyellow";
h2new.style.backgroundColor = "lightyellow";