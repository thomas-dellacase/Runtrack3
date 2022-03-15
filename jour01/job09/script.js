function tri(tab){
    var done = false;
    while (!done){
        done = true;
        for(var i = 1; i < tab.length; i += 1){
            if(tab[i-1]> tab[i]){
            done = false ;
            var tmp = tab[i - 1 ];
            tab[i-1]=tab[i];
            tab[i] = tmp;
        }
    }
}
return tab
}
let tab=[1,7,8,6,4,3,9,54,86,9875];
tri(tab);
console.log(tab);