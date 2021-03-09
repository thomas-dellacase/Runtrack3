function tri(nombres, order = 'asc')
{
	if (order === 'desc') {
		return nombres.sort().reverse();
	}
	return nombres.sort();
}
window.onload = function()
{
	console.log(tri([1,4,7,0,8,2]));
}