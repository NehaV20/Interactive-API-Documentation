document.addEventListener("DOMContentLoaded", function() {
    
    const logoLink = document.querySelector("a.md-logo, a.md-header-nav__title");
    
    if (logoLink) {
        logoLink.href = "/BlitzAdmin-API-Documentation/index.html"; 
    }
});
