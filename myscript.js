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

for (let i = 0; i < listaTeam.length; i++) {
    for (let key in listaTeam[i]) {
        //stampare i valori
        document.getElementById("teamContainer").innerHTML += `
        <div class="card" style="width: 18rem;">
            <img src="./img/${listaTeam[i]["Img"]}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${listaTeam[i]["Nome"]}</h5>
                <p class="card-text">${listaTeam[i]["Ruolo"]}</p>
            </div>
        </div>`;

        for (let key in listaTeam[i]) {
            document.getElementById("titolo").innerHTML += `<div>${[key][0]}</div>`;    
        }

        console.log(listaTeam[i][key]);
        //Stampare la chiave
        console.log(key);
    }
    
}