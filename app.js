const goBtn = document.getElementById('openCodeBtn');

goBtn.addEventListener('click', openLink);

function openLink(){
    window.open(`https://nhentai.net/g/${document.getElementById('codeInput').value}/`, '_blank');
}