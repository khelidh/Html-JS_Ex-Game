var game = function() {
    //var nombreEssai = 6;
    
    var nombreRecherche = Math.floor(Math.random() * 100);
    var essai = -1;
    
    do{
        
        var essai = prompt("Dernière proposition " + essai + " : Nouvelle ?");
        
        if (essai > nombreRecherche){
            alert("Plus petit");
        }
        else if (essai < nombreRecherche){
            alert("Plus grand");
        }
        
        else {
            alert("Gagné : " + nombreRecherche);
            break;
        }
        
    } while(essai != nombreRecherche);
    
    
}