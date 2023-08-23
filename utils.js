// redéfinir getElementById
function gid(id) {
    return document.getElementById(id);
}


// pour mettre du HTML
function setHtml(id, str) {
    gid(id).innerHTML = str;
}

