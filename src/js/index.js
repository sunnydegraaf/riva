document.addEventListener('click', function(event) {
    if (!event.target.matches('.btn-scroll-into')) return;
  
    event.preventDefault();
    
    var element = document.getElementById(event.target.dataset.target);
    var menu = document.getElementById('nav');
    menu.checked = "false"
    
    element.scrollIntoView({block: "start", behavior: "smooth"});
  
});