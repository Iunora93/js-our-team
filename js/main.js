`use strict`

/* MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.
MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe
BONUS 1:
Trasformare la stringa foto in una immagine effettiva
BONUS 2:
Organizzare i singoli membri in card/schede
Consigli del giorno:
Ragioniamo come sempre a step.
Prima la logica in italiano e poi traduciamo in codice.
E ricordiamoci che console.log() è nostro amico!
Buon lavoro! */

/* Creare l’array di oggetti con le informazioni fornite. */
const team = 
[
    {
        'name' : 'Wayne Barnett', 
        'role' : 'Founder & CEO',
        'photo' : 'wayne-barnett-founder-ceo.jpg'
    },

    {
        'name' : 'Angela Caroll', 
        'role' : 'Chief Editor',
        'photo' : 'angela-caroll-chief-editor.jpg'
    },

    {
        'name' : 'Walter Gordon', 
        'role' : 'Office Manager',
        'photo' : 'walter-gordon-office-manager.jpg'
    },

    {
        'name' : 'Angela Lopez', 
        'role' : 'Social Media Manager',
        'photo' : 'angela-lopez-social-media-manager.jpg'
    },

    {
        'name' : 'Scott Estrada', 
        'role' : 'Developer',
        'photo' : 'scott-estrada-developer.jpg'
    },

    {
        'name' : 'Barbara Ramos', 
        'role' : 'Graphic Designer',
        'photo' : 'barbara-ramos-graphic-designer.jpg'
    },
];

/* Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto */
for (let i = 0; i < team.length; i++){
    const teams = team[i];
    console.log(teams);
    const listItem = `
    <li>
        <h4>${teams.name}</h4>
        <p>${teams.role}</p>
        <img src="img/${teams.photo}" />
    </li>
    `;
    /* Stampare le stesse informazioni su DOM sottoforma di stringhe */
    document.getElementById('list-item').innerHTML += (listItem);

}