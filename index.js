
function SetSectionHeight(div, offset, ...args) {
    var section = document.getElementById(div);
 
    for (var id of args)
    {
        var elem = document.getElementById(id);
        total += elem.offsetHeight;
    }
    section.style.maxHeight = total - offset; 
}