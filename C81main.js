var canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
canvas.addEventListener("mousedown", my_mousedown);//gets activated when mouse is clicked on the canvas

function my_mousedown(e)//e is an event which has relation with mousedown
{
    //taking color from input box
    color = document.getElementById("color").value;
    
  
    
     mouse_x = e.clientX - canvas.offsetLeft;//moves mouse to x coordinate of canvas when clicked
     mouse_y = e.clientY - canvas.offsetTop;//moves mouse to y coordinate of canvas when clicked

    
    circle(mouse_x , mouse_y); //passing coordinates to circle function   
}

function circle(mouse_x , mouse_y)// to draw circle at the coordinates when clicked
{
ctx.beginPath();
ctx.strokeStyle =color;
ctx.lineWidth =2;
ctx.arc(mouse_x, mouse_y, 40 ,0 , 360);
ctx.stroke();
}

//additional activity

function clearCanvas()
{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
