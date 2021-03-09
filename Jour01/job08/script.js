
function nbpremier(nombre)
{	
	for (i=nombre-1; i>=2;i-- ) 
	{
		var r=true ;
		if(nombre%i==0)
		{	r= false
			break;
			
		}

	}
	if(nombre==1 || nombre ==2)
	{
		r=true
	}
	return r;


	
}
function sommenombrespremiers(un,deux)
{
	if(nbpremier(un)==true&&nbpremier(deux)==true)
	{
		var res = un + deux;
		return res;
	}
	else
	{
		return false;
	}
}



console.log(sommenombrespremiers(43,13));