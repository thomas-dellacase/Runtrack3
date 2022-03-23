//'use strict';
// const dataPk = ('./pokemon.json')
// fetch(dataPk)
// .then(response => response.json())
// .then(data=>console.log(data))
// .catch(error => console.log(error));


// fetch('pokemon.json').then((response) =>{
//     console.log('resolved', response);
//     return response.json();
// }).then(data =>{
//     console.log(data);
//     let dataPkm = data;
//     let button = getElementById('button');
// }).catch((err)=>{
//     console.log('error', err);
// });



document.addEventListener("DOMContentLoaded",()=>{

const dataPk = ('./pokemon.json');
fetch(dataPk);
async function getJson(dataPk){
    const response = await fetch(dataPk);
    let data = await response.json();
    console.log(data);
    if(response){
        hideloader();
    }
    show(data);
}
getJson(dataPk);
function hideloader(){
    document.getElementById('loading').style.display = 'none';
}
function show(data){
    let tab = 
    `<tr>
        <th>id</th>
        <th>name</th>
        <th>type</th>
        <th>Base</th>
    </tr>`;

    for (let row of data){
        tab += `<tr> 
        <td>${row.id} </td>
        <td>${row.name.french},
            ${row.name.english},
            ${row.name.chinese}, 
            ${row.name.japanese}</td>
        <td>${row.type}</td> 
        <td>'HP = '${row.base.HP}, 
            'Attack = '${row.base.Attack}, 
            'Defense = '${row.base.Defense}, 
            'Sp. Attack = '${row.base.SpAttack},
            'Sp. Defense = '${row.base.SpDefense}, 
            'Speed = '${row.base.SpAttack},
            </td>         
    </tr>`;
    }
    document.getElementById("pokemon").innerHTML = tab;
}
})







