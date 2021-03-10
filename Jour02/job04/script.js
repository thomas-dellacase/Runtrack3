  
function onkeydownF(e){
    var keyCode = e.which ? e.which : e.keyCode;
    var accept = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    if(accept.indexOf(String.fromCharCode(keyCode)) >= 0)
    {
        var string = String.fromCharCode(keyCode).toLowerCase();
        var t = document.getElementById('keylogger');
        var value = t.value;
        value = value + string;
        if(document.activeElement.id === 'keylogger')
        {
            value = value + string;
        }
        t.value = value;
    }

}
window.onkeydown = onkeydownF;