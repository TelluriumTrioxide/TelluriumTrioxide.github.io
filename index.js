
function SetSectionHeight(div, inoffset, ...args) {
    var total = 0;
    var lastelem;
    for (var id of args)
    {
        var elem = document.getElementById(id);
        total += elem.offsetHeight;
        total += parseInt(window.getComputedStyle(elem).getPropertyValue('margin-top'));
        total += parseInt(window.getComputedStyle(elem).getPropertyValue('margin-bottom'));
        lastelem = elem;
    }
    var offset = 0;
    offset += elem.offsetHeight;
    offset += parseInt(window.getComputedStyle(elem).getPropertyValue('margin-top'));
    offset += parseInt(window.getComputedStyle(elem).getPropertyValue('margin-bottom'));
    offset *= 0.5;
    document.getElementById(div).style.minHeight = (total - offset-inoffset) + "px"; 
}