function populate(){
    if(quiz.isEnded()){
        showScore()
    }
    else{
        //for my question 

        var element=document.getElementById('question')
        element.innerHTML=quiz.getQuestionIndex().text
//for option
var mychoice=quiz.getQuestionIndex().choice

        for( var i=0;i<mychoice.length;i++){
var spanEle=document.getElementById("choice"+i)
spanEle.innerHTML=mychoice[i]
guess("btn"+i,mychoice[i])
    
}
        
progress()
    }
function guess(id,guess){
var myBtn=document.getElementById(id)
myBtn.onclick=function(){
    populate()
    quiz.guess(guess)
}
}
function showScore(){
    var result="<h1>Result</h1>"
    result +="<h2 id='score'>YOUR SCORE:"+quiz.score+"</h2>"
    var page=document.getElementById("score")

    page.innerHTML=result
}


function progress(){
var currentQuestionNumber=quiz.questionIndex+1
var footerElement=document.getElementById("max")
footerElement.innerHTML="Question " + currentQuestionNumber+" of "+quiz.question.length
}
}
var questions=[
    new Question('The first Indian Satellite Aryabhatta was launched in',['1974','1975','1973','1977'],'1975'),
    new Question('MIRV stands for',['Multi-dimensional Independent Reentry Vehicle','Multi-directional Independently Reoriented Vehicle','Multiple Independently-targetable Re-entry Vehicle','Multi-purpose Integrally-targeted Revolutionary Vehicle'],'Multiple Independently-targetable Re-entry Vehicle'),
    new Question('Which one of the following is an ‘Air-to-Air’ missile?',['Astra','Akash','Becquerel','Prithivi'],'Astra'),
    new Question('From where was India’s multipurpose telecommunication satellite INSAT -2E launched?',['Thumba','Baikanour','Kourou','Sriharikota'],'Kourou'),
    new Question('Geo-stationary satellite revolves at ________',['Any height','Fixed height','Height above pole','Height which depends upon its mass'],'Fixed height')
]
var quiz=new Quiz(questions)
populate()