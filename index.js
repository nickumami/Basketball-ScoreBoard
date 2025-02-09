let score = document.getElementById("score")
console.log(score)

 let count = 0
function add1R(){
    score.textContent= count+=1
}
function add2R(){
    score.textContent= count+=2
}
function add3R(){
    score.textContent= count+=3
}

//------------------------------//
let score2 = document.getElementById("score2")
let count2 = 0
function add1L(){
    score2.textContent= count2+=1
}
function add2L(){
    score2.textContent= count2+=2
}
function add3L(){
    score2.textContent= count2+=3
}

function resetScore(){
    count = 0
    count2 = 0
    score.textContent = 0
    score2.textContent = 0
    
}
