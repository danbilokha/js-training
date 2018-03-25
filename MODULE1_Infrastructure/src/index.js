
function showName(name = 'what name?') {
    return name;
}

function showCreatorName(name = "Danylo Bilokha") {
    document.getElementsByClassName('creatorName')[0].innerHTML  = showName(name);
}

showCreatorName();
