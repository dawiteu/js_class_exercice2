let prixDuTicket = 2.80; 


class Lieu{ 
    constructor(nom, personnes=0){
        this.nom = nom; 
        this.personnes = []; 
        personnes != 0 ? this.personnes.push(personnes) : 0 ;
    }
}

let bu = new Lieu("Bus");

let mg = new Lieu("MolenGeek"); 
let sn = new Lieu("Snack"); 
let ms = new Lieu("Maison"); 


class Personne{
    constructor(nom, prenom, argent,LieuActuel){
        this.nom = nom; 
        this.prenom = prenom; 
        this.argent = argent;
        this.lieu = LieuActuel != 0 ? this.lieu = LieuActuel.nom : 0;
    }

    seDeplacer(destination,moyen=0){
        
        if(moyen == 0){ // par def, si moyen non prédéfini il va en bus. 
            console.log(`${this.prenom} commence un trajet (a pied en dirrection du bus) a destination: ${destination.nom}`);
            if(this.argent > 2.79){
                console.log(`Embarquement dans le Bus. Destination? ${destination.nom}`); 
                this.lieu = bu.nom; //console.log(this);
                b59.embarquer(this, destination); 
            }else{
                console.log(`Erreur, embarquement impossible. Pas d'argent.)`);
                console.log(this);
            }           
        }else{
            console.log(`${this.prenom} effectue un rajet strictement à pieds en destination ${destination.nom}`);
            this.lieu = destination.nom; 
            console.log(`${this.prenom} est arrivé à ${this.lieu}`);
        }

    }
}

class Bus{
    constructor(nom, clbus,caisse){
        this.nom = nom; 
        this.clbus = [];
        //clbus != 0 ? this.clbus.push(clbus) : 0; 
        this.caisse = caisse;
    }

    embarquer(personne, destination){
            console.log(`Vous etes a bord du bus ${this.nom}`);
            //console.log(this);
            this.caisse += prixDuTicket; 
            personne.argent -= prixDuTicket; 
            this.clbus.push(personne); // console.log(this.clbus); console.log(this);
            this.clbus.splice( this.clbus.indexOf(personne), 1); 
            console.log(`${personne.prenom} quitte le bus ${this.nom}`);
            destination.personnes.push(personne); // console.log(destination);
            personne.lieu = destination.nom; //console.log(personne);
            console.log(`${personne.prenom} etes actuellement: ${personne.lieu}`);
            
    }
}

let b59 = new Bus("b59", [], 0); 

let pers1 = new Personne("Tararuj", "Dawid", 10.50, ms); 

console.log(pers1);

pers1.seDeplacer(mg);

pers1.seDeplacer(sn);

pers1.seDeplacer(mg, "pied"); 

pers1.seDeplacer(ms);

console.log(`Question thunes: \n`, pers1,'\n', b59);

//console.log(pers1);



 //lieu.personnes.push(this.prenom); 
        //console.log(`${this.nom} ${this.prenom} est actuellement ici: ${lieu.nom}`);
        //console.log(lieu);