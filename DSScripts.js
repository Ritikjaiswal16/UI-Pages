function Display(){
    var str=document.getElementById('name').value;
    var str2=document.getElementById('Heading').innerText;
    return "This is a function that only returns a value"+"\t"+str+"\t"+str2;
}
//when you are working on regular HTML elements such as h1-h6, paragraph, span, div tag.
//Whenever you fetch data from these, you will get two types of data innerText and innerHTML
// If you are using control element, then it will return value in the form of String.
// and when you want to fetch the data you will use value property.
function Calculation(n1,n2){
    return n1+n2;
}