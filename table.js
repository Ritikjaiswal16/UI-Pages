var arr=new Array();

function add(){
    var nm=document.getElementById("name").value;
    var ag=document.getElementById("age").value;
    var ct=document.getElementById("city").value;
    var em=document.getElementById("email").value;
    if( isEmpty(nm) && isEmpty(ag) && valAge(ag) && valEmail(em)){
        var obj=new Object();
        obj.Name=nm;
        obj.Age=ag;
        obj.City=ct;
        obj.Email=em;
        arr.push(obj);
        alert("Data Inserted");
        clear();
    }
    else{
        alert("Please reenter the data");
        document.getElementById("name").focus();
    }
}
function clear(){
    document.getElementById("name").value="";
    document.getElementById("age").value="";
    document.getElementById("city").value="";
    document.getElementById("email").value="";
    document.getElementById("name").focus();
}
function isEmpty(age){
    if(age.length==0){
        alert("one or more field filled is empty");
        return false;
    }
    else{
        return true;
    }
}
function valAge(age){
    if(isNaN(age)){
        alert("Invalid Input");

    }
    else if(age<21 || age>60){
        alert("Age should be between 21 to 60");
        return false;
    }
    else{
        return true;
    }
}
function valEmail(inputText)
{
var mailformat = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;
if(inputText.match(mailformat))
{
  //The pop up alert for a valid email address
return true;
}
else
{
alert("You have entered an invalid email address!");    //The pop up alert for an invalid email address

return true;
}
}

function showtable(){
    var t=document.getElementById("tab");
    var msg;
    msg+="<tr><th>Name</th><th>Age</th><th>City</th><th>Email</th></tr>";
    for(var i=0;i<arr.length;i++){
        msg+="<tr>";
        msg+="<td>"+arr[i].Name+"</td>"+"<td>"+arr[i].Age+"</td>"+"<td>"+arr[i].City+"</td>"+"<td>"+arr[i].Email+"</td>";
        msg+="</tr>";
    }
    t.innerHTML=msg;
}