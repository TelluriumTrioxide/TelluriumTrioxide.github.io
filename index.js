
function SetSectionHeight(div, offset, ...args) {
    var total;
    for (var id of args)
    {
        var elem = document.getElementById(id);
        total += elem.offsetHeight;
    }
    document.getElementById(div).style.minHeight = (total - offset) + "px"; 
}