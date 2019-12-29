const goBtn = document.getElementById('openCodeBtn');

goBtn.addEventListener('click', openLink);

function openLink(){

    if(document.getElementById('codeInput').value == ''){
        return;
    }

    else if(isNaN(document.getElementById('codeInput').value)){
        document.getElementById('codeInput').value = '';
        return;
    }

    else{
        window.open(`https://nhentai.net/g/${document.getElementById('codeInput').value}/`, '_blank');
        document.getElementById('codeInput').value = '';
    }
}
