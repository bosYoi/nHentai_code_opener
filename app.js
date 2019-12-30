var bt = document.getElementById("openCodeBtn");
var code = document.getElementById("codeInput");
// var link_rad = document.getElementById("link");
// var code_rad = document.getElementById("code");

var cors = "https://cors-anywhere.herokuapp.com/";

bt.onclick = function() {
    
    var ob = document.createElement("p");
    ob.id = "message";
    
    var link = "https://nhentai.net/g/" + code.value;

    function checkCode(){
        var send =  new XMLHttpRequest();
        try{
            if ("withCredentials" in send) {
                send.open("get", cors + link);
            }
            send.send();
            send.onreadystatechange = function(){
                console.log(send.getAllResponseHeaders());
                console.log(send.status);
                if(send.status == 404)
                {
                    ob.innerHTML = "Kono hentai manga doesn't exist.";  
                    document.getElementsByTagName("body")[0].insertBefore(ob, bt);
                }
                else if(send.status == 200)
                {
                    window.location.href = link;
                }
            }
        }
        catch(err)
        {
            ob.innerHTML = "Unresolved error occured."; 
            document.getElementsByTagName("body")[0].insertBefore(ob, bt); 
            console.log(err);
        }
    }  
    checkCode();
}

// link_rad.onclick = function(){
//     code_rad.checked = false;
// }
    

// code_rad.onclick = function(){
//     link_rad.checked = false;
// }
    

