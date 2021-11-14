let input =document.getElementById('input')   //Input field



let buttons= document.querySelectorAll('.box');  //All buttons including operators

function buttonClicked(e)     //Function to show input value
{
    input.value+= e.target.id ;
}


// Event listner for button clicked 
buttons.forEach(box=>{
    box.addEventListener('click',buttonClicked)
})


//Event listener to compute result
document.getElementById('res').addEventListener('click',function()
{
    document.getElementById('output').innerText= eval(input.value);
})


   //Event listener to reset the application
document.getElementById('clear').addEventListener('click', function(){
    document.getElementById('output').innerText = '';
    input.value='';
     
    buttons.forEach(number => {
        number.removeEventListener('click', buttonClicked)
    })
    buttons.forEach(number => {
        number.addEventListener('click', buttonClicked)
    })
 
})