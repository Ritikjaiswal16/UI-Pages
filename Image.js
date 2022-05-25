var array=new Array();
function add(){
    var str=document.getElementById("txt");
    if(str.value.length>0){
        array.push(str.value);
        alert("Data Saved");
        str.value="";
        str.focus();
    }
    else{
        alert("Invalid something");
        str.value="";
        str.focus();
    }
}
function Display(){
    
    var msg="<ul>";
    for(var i=0;i<array.length;i++){
        msg+="<li>"+array[i]+"</li>";
    }
    msg+="</ul>";
    document.getElementById("list").innerHTML=msg;
}
function displayImage(){
    var imObj=document.getElementById("image1");
    imObj.src="download.jfif";
}
