var res1,res2,pos,op;
function DisplayContent(txt){  
    var str=document.getElementById("content").value;
    if(txt==='+' || txt==='*' || txt==='-' || txt==='/'){
        pos=2;
        res1=str;
        op=txt;
        document.getElementById("content").value="";
        
    }
    else{
        document.getElementById("content").value=str+txt;
    } 
}

function Cal(x){
    res2=x;
    
    if(isNaN(res1)===true || isNaN(res2)===true){
        document.getElementById("content").value="Syntax Error"; 
    }
    else{
    if(op==='+'){
        document.getElementById("content").value=""+(Number(res1)+Number(res2));
    }
    else if(op==='*'){
        document.getElementById("content").value=""+(Number(res1)*Number(res2));
    }
    else if(op==='/'){
        document.getElementById("content").value=""+(Number(res1)/Number(res2));
    }
    else if(op==='-'){
        document.getElementById("content").value=""+(Number(res1)-Number(res2));
    }
    else{
        document.getElementById("content").value="Unknown Error"; 
    }
    }
}