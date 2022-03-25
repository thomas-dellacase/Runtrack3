'use strict';
document.addEventListener("DOMContentLoaded",()=>{
    let select = document.getElementById('typePk');
    let envoyer = document.querySelector("button");
    let idPk=document.querySelector("[name = 'id']");
    let namePk=document.querySelector("[name = 'name']");
    let typePkm=document.querySelector("[name = 'type']");
    envoyer.addEventListener("click",(e)=>{
        e.preventDefault();
        const dataPk = ('./pokemon.json');
        fetch(dataPk);
        async function getJson(dataPk){
            const response = await fetch(dataPk);
            let data = await response.json();

            for(let i=0; i<150; i++){
                let id=document.querySelector("[name = 'id']")
                if(data.id == id.value ){
                    console.log('coucou');
                    console.log(id.value);
                }
            }
            if(response){
                hideloader();
            }


            // nouvelle fonction
            if((select !== '')){
                showById(select)
                let emptyTab = [];
                // créer un nouveau tableau vide,

                // faire une boucle sur le tableau data ou json pour faire défiler les valeurs, 
                // a chaque nouvelle valeur on insère dans le nouveau tableau 

            }
            else{
                console.log('aucun type selectionné')
            }
            // nouvelle fonction
            show(data);
        }
        getJson(dataPk)


});
    ;

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
            //console.log(idPk.value );
            if(row.id== idPk.value){
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
        </tr>`;}else if(row.name.french == namePk.value || row.name.english == namePk.value || row.name.chinese == namePk.value || row.name.japanese == namePk.value){
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
        }else if(row.type == typePkm.value){
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
        }
        document.getElementById("pokemon").innerHTML = tab;

    }
    //console.log(select);
  
    // if(typePk )
    function showById(id) {
       
    }

//     let btnEnvoyer = document.querySelector("button");
//     btnEnvoyer.addEventListener("click", function(e) {
//     e.preventDefault();
//     //récupérer les données du formulaires
//     id = document.querySelector("#id"). || ;
//     nom = document.querySelector("#name"). || ;
//     menu = document.querySelector("#type"). || ;
//     console.log(id, nom, menu);

// })
})


