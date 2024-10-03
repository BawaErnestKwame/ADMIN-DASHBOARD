// sidbaropen
var sidebarOpen =false;

var sidebar = document.getElementById("sidebar");

function openSidebar(){
    if(sidebarOpen){
        sidebar.classList.add("sidebar-responsive");
        sidebarOpen= true;
    }
}

function closeSidebar() {
    if(sidebarOpen){
        sidebar.classList.classList.remove("sidebar-responsive")
        sidebar = false;
    }
    
}
