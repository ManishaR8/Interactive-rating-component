let secondBox = document.getElementById('second_box');
secondBox.style.display = 'none';
let firstBox = document.getElementsByClassName('box')
let firstLayer = document.getElementsByClassName('layer');

let secondLayer = document.getElementsByClassName('layer1');
let SubmitBtn = document.getElementsByClassName('submit');

function uncheck(btns){
    
    for(var i = 0; i < btns.length; i++) {
        btns[i].style.background = "hsl(216, 6%, 28%)"
    }
}


function button(){
let btns = document.querySelectorAll(".btn");
    for(var i = 0; i < btns.length; i++) {
          btns[i].addEventListener('click',function(){
            uncheck(btns);
            let Colour =  this.style.background = "hsl(25, 97%, 53%)";
            // console.log(this.style.innerText + "is num")
            // getText(btns[i]);

            let NumChoose = this.innerText;
           
            Rateval(NumChoose)

            // if(Rateval(NumChoose) == null){
            //     alert('het');
            // }
            // else{
                console.log(Rateval(NumChoose))
            // }

});
    }
}

button();

function Rateval(NumChoose){
    let RateNum = document.getElementById('SelectedNum');
    RateNum.innerText = NumChoose;

}


SubmitBtn[0].addEventListener('click', function(){
    firstBox[0].style.display = 'none';
    secondBox.style.display = 'block';
})


