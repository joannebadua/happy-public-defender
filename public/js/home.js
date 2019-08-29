$(document).ready(function(){
    var nameInput = $("#name");
    var ptmGrantedInput = $("#ptmGranted");
    var trialWonInput = $("#trialWon");
    var noJailSentenceInput = $("#noJailSentence");
    var thankYouFromClientInput = $("#thankYouFromClient");
    var complimentFromCourtInput = $("#complimentFromCourt");
    var starMomentInput = $("#starMoment");
    
    //Form
    var attorneyDataForm = $("#attorneyData")
    $(attorneyDataForm).on('submit', function(event){
        event.preventDefault();
        var newEntryData = {
            name: nameInput.val().trim(),
            ptmGranted: ptmGrantedInput.val().trim(),
            trialWon: trialWonInput.val().trim(),
            noJailSentence: noJailSentenceInput.val().trim(),
            thankYouFromClient: thankYouFromClientInput.val().trim(),
            complimentFromCourt: complimentFromCourtInput.val().trim(),
            starMoment: starMomentInput.val().trim(),
        }
        console.log(newEntryData)
        $.post("/api/attorneyData", newEntryData).then(function () {
            console.log("newEntryData", newEntryData)
        });
    });
});
