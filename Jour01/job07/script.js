function jourtravaille(date)
{
	//date=date.setMonth(date.getMonth());
	var a = date;

	f=false;
	w=false;
	tabDate =[
	new Date(2020,0,1),
	new Date(2020,4,13),
	new Date(2020,5,1),
	new Date(2020,5,8),
	new Date(2020,5,21),
	new Date(2020,6,1),
	new Date(2020,7,14),
	new Date(2020,8,15),
	new Date(2020,11,1),
	new Date(2020,11,11),
	new Date(2020,11,25)
	] ;
	
	for(var i=0 ; i<tabDate.length ; i++)
	{	
		if(tabDate[i].getDate()==a.getDate()&&tabDate[i].getMonth()==a.getMonth()&&tabDate[i].getFullYear()==a.getFullYear())
		{

			console.log("Le ",a.getDate(),"/",a.getMonth()+1,"/",a.getFullYear(), "est un jour férié");
			f=true;
			break;	
		}
	}
	if(f==false)
	{
		if(a.getDay()==6||a.getDay()==0)
		{
			console.log("Non, ",a.getDate(),"/",a.getMonth()+1,"/",a.getFullYear()," est un week-end");
			w=true;

		}
		if(w==false)
		{
			console.log("Oui, Le ",a.getDate(),"/",a.getMonth()+1,"/",a.getFullYear()," est un jour travaillé");
		}
	}	
}
var j = new Date("may 17 2020");
jourtravaille(j);