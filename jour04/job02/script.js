var json =
  '{"name": "La Plateforme_", "address": "8 rue d hozier", "city": "Marseille", "nb_staff": "11", "creation":"2019"}';

function jsonValueskey(json, key) {
  const json2 = JSON.parse(json);
  console.log(json2[key]);
  return json2[key];
}
console.log(jsonValueskey(json, "city"));

$("#bouton").click(function(){
    jsonValueskey(json, "city")
});
