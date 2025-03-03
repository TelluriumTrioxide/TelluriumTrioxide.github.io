
function SetSectionHeight(div, offset, ...args) {
    var total = 0;
    for (var id of args)
    {
        var elem = document.getElementById(id);
        total += elem.offsetHeight;
        total += parseInt(window.getComputedStyle(elem).getPropertyValue('margin-top'));
        total += parseInt(window.getComputedStyle(elem).getPropertyValue('margin-bottom'));
    }
    document.getElementById(div).style.minHeight = (total - offset) + "px"; 
}