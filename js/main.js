var a=[];
 var size=parseInt (prompt("Enter size of Array"))
	for(let i=0;i<size;i++)
	{
		a[i]=parseInt (prompt("Enter The Valu"));
	}
	document.write(a+"<br>");
var reset=[];
var temp=0;
for(let i=0;i<a.length;i++)
{
	for(let j=i+1;j<a.length;j++)
	{
		if(a[i]<a[j])
		{
		temp=a[i];
		a[i]=a[j];
		a[j]=temp;
		}
	}
	reset.push(a[i]);
}
document.write(reset+"<br>");	