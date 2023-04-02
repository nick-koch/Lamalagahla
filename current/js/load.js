function loadPage() {
    var firstVisit = localStorage.firstVisit != "1"; 
    localStorage.firstVisit = "1"; 
    
    if( firstVisit ) { 
    location.reload();
    }
}