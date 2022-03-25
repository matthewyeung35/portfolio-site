/*closing collapse header on click*/
document.querySelectorAll('#collapsable-nav a').forEach(el => {
    el.addEventListener('click', function(){
    document.querySelector('.navbar-collapse').classList.remove("show");
    document.querySelector('.custom-navbar').classList.add("collapsed");
    });
});