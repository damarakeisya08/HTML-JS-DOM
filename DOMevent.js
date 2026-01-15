const tom = document.getElementById('tombol');
tom.onclick = function() {
   //document.body.style.backgroundColor = 'pink';
   //document.body.setAttribute('class', 'pink-muda');
   document.body.classList.toggle('pink-muda');

}



// tombol versi javasc

const kontol = document.createElement('button');
const tekskontol = document.createTextNode('random color');
kontol.appendChild(tekskontol);
kontol.setAttribute('type', 'button');
tom.after(kontol);
kontol.addEventListener('click', function() {
const r = Math.round (Math.random() * 255 +1);
const g = Math.round (Math.random() * 255 +1);
const b = Math.round (Math.random() * 255 +1);
document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';

});


// yang di atas tutorial mengubah warna dari tombol


const sred = document.querySelector('input[name=sliderred]');
const sgreen = document.querySelector('input[name=slidergreen]');
const sblue = document.querySelector('input[name=sliderblue]');

sred.addEventListener('input', function() {
   const r = sred.value;
   const g =sgreen.value;
   const b = sblue.value;
   
   document.body.style.backgroundColor = 'rgb('+ r +',' + g +',' + b +')';
   
});

sgreen.addEventListener('input', function() {
   const r = sred.value;
   const g =sgreen.value;
   const b = sblue.value;
   
   document.body.style.backgroundColor = 'rgb('+ r +',' + g +',' + b +')';
});

sblue.addEventListener('input', function() {
   const r = sred.value;
   const g =sgreen.value;
   const b = sblue.value;
   
   document.body.style.backgroundColor = 'rgb('+ r +',' + g +',' + b +')';
});


// di atas untuk mengubah halaman menggunakan slider

document.body.addEventListener('mousemove', function(event) {
   //console.log(event.clientY);
   //console.log(window.innerWidth);
   const xpos = Math.round((event.clientX / window.innerWidth) * 255);
   const ypos = Math.round((event.clientY / window.innerWidth) * 255);
   document.body.style.backgroundColor = 'rgb('+ xpos +','+ ypos +',100)';

})