//Definiamo un array di oggetti che rappresentano i membri del team. Ogni membro ha le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto.
let listaTeam = [
    {
        "Nome": "Wayne Barnett",
        "Ruolo": "Founder & CEO",
        "Img": "wayne-barnett-founder-ceo.jpg"
    },

    {
        "Nome": "Angela Caroll",
        "Ruolo": "Chief Editor",
        "Img": "angela-caroll-chief-editor.jpg"
    },

    {
        "Nome": "Walter Gordon",
        "Ruolo": "Office Manager",
        "Img": "walter-gordon-office-manager.jpg"
    },

    {
        "Nome": "Angela Lopez",
        "Ruolo": "Social Media Manager",
        "Img": "angela-lopez-social-media-manager.jpg"
    },

    {
        "Nome": "Scott Estrada",
        "Ruolo": "Developer",
        "Img": "scott-estrada-developer.jpg"
    },

    {
        "Nome": "Barhara Ramos",
        "Ruolo": "Graphic Designer",
        "Img": "barbara-ramos-graphic-designer.jpg"
    }

]

console.log(listaTeam);

//Milestone 1: stampare in console l'elenco dei membri del team, scrivendo separatamente i dettagli di ciascun componente.
for (let i = 0; i < listaTeam.length; i++) {
    for (let key in listaTeam[i]) {
        //Milestone 2: stampare i dati all'interno di un contenitore nella pagina html in modo dinamico, creando per ciascun membro del team un elemento che conterrà i suoi dati.
        document.getElementById("teamContainer").innerHTML += `
        <div class="col-12 me-5 ms-4 mt-3 mb-3 card" style="width: 18rem;">
            <img src="./img/${listaTeam[i]["Img"]}" class="card-img-top" alt="...">
            <div class="card-body text-center">
                <h5 class="card-title">${listaTeam[i]["Nome"]}</h5>
                <p class="card-text">${listaTeam[i]["Ruolo"]}</p>
            </div>
        </div>`;
        
        //ho usato la conoscenza proibita però funziona ABBIATE PIETA'
        break;

        console.log(listaTeam[i][key]);
        //Stampare la chiave
        console.log(key);
    }
    
}