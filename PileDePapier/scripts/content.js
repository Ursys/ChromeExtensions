// Check to see if there is anything in localStorage, if not create a key called text_in_editor.
// Set the contents of the editor to the localStorage VALUE with a KEY of text_in_editor.

if (localStorage.getItem('text_in_editor') !== null) {
	document.getElementById('editor').innerHTML = localStorage.getItem('text_in_editor');
}

// When a key is released update localStorage.

document.addEventListener('keyup', function(e) {
	localStorage.setItem('text_in_editor', document.getElementById('editor').innerHTML);
});
	
// When the Save button is clicked add a KEY with whatever is in the notes title and set the VALUE to whatever is in the editor field

document.getElementById('save_button').addEventListener('mousedown', function() {
	var saveName = document.getElementById('notes_title').innerHTML;
	localStorage.setItem(saveName, document.getElementById('editor').innerHTML);
});

// When the New button is clicked add or update the KEY with whatever is in the notes title and set the VALUE to whatever is in the editor field
// Set the editor to blank and reset the notes_title to "Title:"
// Need to figure out how to call a funtion to not have to repeat the first two lines of code
// removes the text_in_editor KEY from localStorage.

document.getElementById('new_button').addEventListener('mousedown', function() {
	var saveName = document.getElementById('notes_title').innerHTML;
	localStorage.setItem(saveName, document.getElementById('editor').innerHTML);
	document.getElementById('editor').innerHTML = "";
	document.getElementById('notes_title').innerHTML = 'Title:';
	localStorage.removeItem('text_in_editor');
});

document.getElementById('open_button').addEventListener('mousedown', function() {
	location.href = '/pages/openPage.html';
});