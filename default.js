function btnclick(){

    var input=document.getElementById('inpid').value;

    var tag=document.createElement('h1');
    var text=document.createTextNode(input);
    tag.appendChild(text);
    var ele=document.getElementById('div');
    ele.appendChild(tag);



    var btn=document.createElement('button');
    var btntext=document.createTextNode('delete');
    btn.appendChild(btntext);
    btn.style.marginLeft='80px'
   
    var ele=document.getElementById('ulid');
    ele.appendChild(btn);




}

function changeColor(){
document.getElement(btnclick(tag)).style.color = 'red';

}