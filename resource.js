function CalTotal(x){
    var quan=document.getElementById("quantity"+x).value;
    var cos=document.getElementById("cost"+x).value;
    document.getElementById("total"+x).value=quan*cos;
}
function clear1(a){
    for(var i=1;i<=a;i++){
        document.getElementById("resource"+i).value="";
        document.getElementById("quantity"+i).value=null;
        document.getElementById("cost"+i).value=null;
        document.getElementById("total"+i).value=null;
    }
    (document.getElementById("resource1")).focus(); 
}
function save(){
    var arr=new Array();    /// array declared
            if(JSON.parse(localStorage.getItem("Resource"))!=undefined){
            arr=JSON.parse(localStorage.getItem("Resource"));
            }
            for(var i=1;i<=3;i++){
            var PObject={
                "resource":document.getElementById("resource"+i).value,
                "quantity":document.getElementById("quantity"+i).value,
                "cost":document.getElementById("cost"+i).value,
                "total":document.getElementById("total"+i).value
            };
            
            arr.push(PObject);
            localStorage.setItem("Resource",JSON.stringify(arr));
            }
            clear1(3);
}

function display(){
    var arr=new Array();    /// array declared

    if(JSON.parse(localStorage.getItem("Resource"))!=undefined){
        arr=JSON.parse(localStorage.getItem("Resource"));
        var tabData="<table border='1'><tr><th>Resource</th><th>Quantity</th><th>Cost</th><th>Total Cost</th></tr>";
            for(var i=0;i<arr.length;i++){
                var PObject=arr[i];
                tabData+="<tr><td>"+PObject.resource+"</td><td>"+PObject.quantity+"</td><td>"+PObject.cost+"</td><td>"+PObject.total+"</td></tr>";
            }
            tabData+="</table>";
        var divObject=document.getElementById("resultdiv");
        divObject.innerHTML=tabData;
    }
    else{
        alert("No data Found");
    }
    
}