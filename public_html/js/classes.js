class Ordino {
    
    constructor(processeur, memoire, stockage){
        this.processeur = processeur;
        this.memoire = memoire;
        this.stockage = stockage;
    }
    
   
    affiche(){
        var informations = "Informations" + "\n     Processeurs : " + this.processeur
                + "\n       Mémoire : " + this.memoire
                + "\n       Stockage : " + this.stockage;
        
        alert(informations);
    }
    
    
}

class Pc extends Ordino {
    constructor(){
        super('x','y','z');
    }
}

class Mac extends Ordino {
}

class MacBook extends Mac {
    constructor(){
        super(2,8,0.5);
    }
}

class MacBookPro extends Mac {
    constructor(){
        super(4,16,1);
    }
}