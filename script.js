btn = document.getElementById('btn');
inputbox = document.getElementById('inputbox');

function search(){
    window.location = 'https://google.com/search?q=' + inputbox.value;
}