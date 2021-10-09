player_1=localStorage.getItem("player_1");
player_2=localStorage.getItem("player_2");
player_1_score=0;
player_2_score=0;
document.getElementById("play_1").innerHTML=player_1;
document.getElementById("play_2").innerHTML=player_2;
document.getElementById("play_1_s").innerHTML=player_1_score;
document.getElementById("play_2_s").innerHTML=player_2_score;

document.getElementById("ques").innerHTML="Question Turn : " + player_1;
document.getElementById("ans").innerHTML="Answer Turn : " + player_2;

function send()
{
number1=document.getElementById("num1").value;
number2=document.getElementById("num2").value;
actual_answer= parseInt(number1) * parseInt(number2);
question_word="<h4>"+ number1 + " X " + number2 + "</h4>";
text_input="<br><input type='text' placeholder='Answer' id='ans_q'>";
check_button="<br><br><button id='check_b' class='btn btn-info' onclick='check()'>Check</button>";
row= question_word + text_input + check_button;
document.getElementById("output").innerHTML=row;
document.getElementById("num1").value="";
document.getElementById("num2").value="";
}

question_turn="Player_1";
answer_turn="Player_2";

function check()
{
get_answer=document.getElementById("ans_q").value;
answer=get_answer.toLowerCase();
if(answer==actual_answer){
if(answer_turn=="Player_2"){
player_2_score=player_2_score+1;
document.getElementById("play_2_s").innerHTML=player_2_score;
}
else{
player_1_score=player_1_score+1;
document.getElementById("play_1_s").innerHTML=player_1_score;
}
}

if(question_turn=="Player_1"){
question_turn="Player_2";
document.getElementById("ques").innerHTML="Question Turn : " + player_2;
}
else{
question_turn="Player_1";
document.getElementById("ques").innerHTML="Question Turn : " + player_1;
}

if(answer_turn=="Player_1"){
    answer_turn="Player_2";
    document.getElementById("ans").innerHTML="Answer Turn : " + player_2;
    }
    else{
    answer_turn="Player_1";
    document.getElementById("ans").innerHTML="Answer Turn : " + player_1;
}
document.getElementById("num1").innerHTML="";
document.getElementById("num2").innerHTML="";
document.getElementById("output").innerHTML="";
}