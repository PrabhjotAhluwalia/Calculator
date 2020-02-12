var numSquares=6;
var colors=generateRandomColors(numSquares);

var pickedColor=pickColor();
document.getElementById("colorDisplay").textContent=pickedColor;
var squares=document.querySelectorAll(".square");
var messageDisplay=document.querySelector("#message");

var resetButton=document.querySelector("#reset");

var modeButtons=document.querySelectorAll(".mode");

for(var i=0;i<modeButtons.length;i++){
    modeButtons[i].addEventListener("click",function(){
        modeButtons[0].classList.remove("selected");
        modeButtons[1].classList.remove("selected");
        this.classList.add("selected");
        this.textContent==="Easy" ?  numSquares=3 : numSquares=6;
        reset();
    })
}

function reset(){
    colors=generateRandomColors(numSquares);
    pickedColor=pickColor();
    document.getElementById("colorDisplay").textContent=pickedColor;

    if(numSquares===3){
        for(var i=0;i<3;i++) 
        squares[i].style.backgroundColor=colors[i];
    
    for(var i=3;i<=5;i++)    // we are effectively hiding the 3 blocks
        squares[i].style.display="none"; //even when we reset , it remains hidden 
    }
    
    else{

        for(var i=0;i<6;i++) 
        squares[i].style.backgroundColor=colors[i];
    
        for(var i=3;i<=5;i++)      // un-hide the 3 blocks , if they were hidden before
        squares[i].style.display="block";
    }
}
/*
easyBtn.addEventListener("click",function(){
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");

    //generate 3 random colors
    numSquares=3;
    colors=generateRandomColors(numSquares);
    pickedColor=pickColor();
    document.getElementById("colorDisplay").textContent=pickedColor;

    for(var i=0;i<3;i++) 
        squares[i].style.backgroundColor=colors[i];
    
    for(var i=3;i<=5;i++)    // we are effectively hiding the 3 blocks
        squares[i].style.display="none"; //even when we reset , it remains hidden 
})

hardBtn.addEventListener("click",function(){
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");

    numSquares=6;
    colors=generateRandomColors(numSquares);
    pickedColor=pickColor();
    document.getElementById("colorDisplay").textContent=pickedColor;

    for(var i=0;i<6;i++) 
        squares[i].style.backgroundColor=colors[i];
    
    for(var i=3;i<=5;i++)      // un-hide the 3 blocks , if they were hidden before
        squares[i].style.display="block";
    

})

*/

resetButton.addEventListener("click",function(){
//alert("clicked reset");
//1.generate new colors
    colors=generateRandomColors(numSquares);
//2. pick a new random color
    pickedColor=pickColor();
//3. chnage required color of heading
    document.getElementById("colorDisplay").textContent=pickedColor;
//4. Update the colors of squares
for(var i=0;i<squares.length;i++)
    squares[i].style.backgroundColor=colors[i]; 
    
//5. Reset the Header background ( in case the user won and now wants to play again)
    h1.style.backgroundColor="steelblue";

//6. Empty the span tag , if in case as it may say incorrect or correct
    messageDisplay.textContent="";

//7. If reset button is set to play again? then after pressing it , it should again say new colors
    resetButton.textContent="New Colors";

});

var h1=document.querySelector("h1");   // to change the h1 background when correct color is selected 
for(var i=0;i<squares.length;i++){
    squares[i].style.backgroundColor=colors[i];  
    // add click listeners to squares

    squares[i].addEventListener("click",function(){

        // grab color of clicked square and compare with the color on heading
        if(this.style.backgroundColor===pickedColor){
           // alert("Correct");
           messageDisplay.textContent="Correct";
           changeColors(this.style.backgroundColor);
           h1.style.backgroundColor=this.style.backgroundColor;
           resetButton.textContent="Play Again?" //modify the resetbutton only to save complexity
        }
        else{
           // alert("Wrong");
            this.style.backgroundColor="#232323";
            messageDisplay.textContent="Try Again";
        }
    });
}

function changeColors(color){
    for(var i=0;i<squares.length;i++){
        squares[i].style.backgroundColor=color;
    }
    //loop through all squares to match given color

}

function pickColor(){
    //first pick a random number
    var random=Math.floor(Math.random()*colors.length);   //Math.random picks between 0 and 1(Not included)
    //so we multiply by no of squares , . finally take floor to get a whole no.

    return colors[random];
}

function generateRandomColors(num){

    //add 'num' random colors

    var arr=[];

    for(var i=0;i<num;i++){
        //get random colors and push into array
        arr.push(randomColor());
    }

    return arr;
}

function randomColor(){
    var r=Math.floor(Math.random()*256);
    var g=Math.floor(Math.random()*256);
    var b=Math.floor(Math.random()*256);
    return "rgb("+r+", "+g+", "+b+")";

}