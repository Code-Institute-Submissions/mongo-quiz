$(document).ready(function(){
    $('.sidenav').sidenav();
    $('.parallax').parallax();
    $('.tabs').tabs();
    $('select').formSelect();
    $('.tooltipped').tooltip();
    $('.collapsible').collapsible();
    
    $('#textarea1').val('');
    M.textareaAutoResize($('#textarea1'));
    
});

// Functions below are used to validate Difficulty qty matches Questions qty
// They couples with "if difficulty_total == quiz_details['questions']:" in def(create) in app.py
document.getElementById("questions").addEventListener("keyup", getDataFn);

function getDataFn() {
    questionsPerRound = parseInt(document.getElementById('questions').value);

    questionsVSdifficultyFN(questionsPerRound);
};

function questionsVSdifficultyFN(questionsPerRound){
    document.getElementById('easy').value = questionsPerRound;
    document.getElementById('label_easy').className = 'active';
};