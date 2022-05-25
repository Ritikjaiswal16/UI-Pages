var res=[],x=0;
var op;
function DisplayContent(txt){  
    var str=document.getElementById("content").value;
    if(txt==='+' || txt==='*' || txt==='-' || txt==='/'){
        Cal();
        res[x]=str;

        op=txt;
        document.getElementById("content").value="";
        if(res3==undefined){
            Cal(res3);
        }
    }
    else{
        document.getElementById("content").value=str+txt;
    } 
}

function Cal(){
    if(res.length==0){

    }
    else{
        for(let i=0;i<x;i++){

        
    if(isNaN(res1)===true || isNaN(res2)===true){
        document.getElementById("content").value="Syntax Error"; 
    }
    else{
    if(op==='+'){
        res3=Number(res1)+Number(res2);
        document.getElementById("content").value=""+res1;
    }
    else if(op==='*'){
        res3=Number(res1)*Number(res2);
        document.getElementById("content").value=res3;
    }
    else if(op==='/'){
        res3=Number(res1)/Number(res2);
        document.getElementById("content").value=""+res3;
    }
    else if(op==='-'){
        res3=Number(res1)*Number(res2);
        document.getElementById("content").value=""+res3;
    }
    else{
        document.getElementById("content").value="Unknown Error"; 
    }
}
    }
    }}