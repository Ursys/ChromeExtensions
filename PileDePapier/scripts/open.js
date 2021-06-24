document.getElementById('back_button').addEventListener('mousedown', function() {
	location.href = '../index.html';
});

for (var i=0, len=localStorage.length; i<len; i++) {
	let div = document.createElement('div');
	div.setAttribute('id', 'div_'+i);
	let btn = document.createElement('button');
	btn.setAttribute('id', 'btn_'+i);
	let fld = document.createElement('p');
	fld.setAttribute('id', 'fld_'+i);
	btn.innerHTML = "Open";
	fld.innerHTML = localStorage.key(i);
	document.body.appendChild(div);
	document.getElementById('div_'+i).appendChild(fld);
	document.getElementById('div_'+i).appendChild(btn);
	
}

/* 
I copied everything below this comment. I don't understand it and need to review
Next step is to take the key from the "P" and use that to store the localStorage Key and Value
Then update the note_title and editor fileds in index.html and navigate there
*/

const btns = document.querySelectorAll('button[id^=btn]')

btns.forEach(btn => {

   btn.addEventListener('click', event => {
        console.log( event.target.id );
   });

});