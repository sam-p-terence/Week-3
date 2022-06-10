

function GetValue()
{
    var myarray= new Array("https://farmhousesf.com/",);
    var random = myarray[Math.floor(Math.random() * myarray.length)];
    //alert(random);
    document.getElementById("message").innerHTML=random;
}