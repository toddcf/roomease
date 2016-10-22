var evaluateQuestion = function(userAIndex,userBIndex,qIndex,friends){
    var percentCompatible;
    var userAResp = friends[userAIndex].scores[qIndex];
    var userBResp = friends[userBIndex].scores[qIndex];

    // User answers "true" AND wants a roommate who is the same:
    if(userAResp[0]==true && userAResp[1]=="yes"){
        if(userBResp[0]==true && userBResp[1]=="yes")
            percentCompatible = 100;
        else if(userBResp[0]==true && userBResp[1]=="dc")
            percentCompatible = 100;
        else if(userBResp[0]==true && userBResp[1]=="no")
            percentCompatible = 50;
        else if(userBResp[0]==false && userBResp[1]=="no")
            percentCompatible = 0;
        else if(userBResp[0]==false && userBResp[1]=="dc")
            percentCompatible = 50;
        else if(userBResp[0]==false && userBResp[1]=="yes")
            percentCompatible = 50;
    }
    // User answers "true" and doesn't care how the roommate answered:
    else if(userAResp[0]==true && userAResp[1]=="dc"){
        if(userBResp[0]==true && userBResp[1]=="yes")
            percentCompatible = 100;
        else if(userBResp[0]==true && userBResp[1]=="dc")
            percentCompatible = 100;
        else if(userBResp[0]==true && userBResp[1]=="no")
            percentCompatible = 50;
        else if(userBResp[0]==false && userBResp[1]=="no")
            percentCompatible = 50;
        else if(userBResp[0]==false && userBResp[1]=="dc")
            percentCompatible = 100;
        else if(userBResp[0]==false && userBResp[1]=="yes")
            percentCompatible = 100;
    }
    // User answers "true" but wants a roommate who is the opposite:
    else if(userAResp[0]==true && userAResp[1]=="no"){
        if(userBResp[0]==true && userBResp[1]=="yes")
            percentCompatible = 50;
        else if(userBResp[0]==true && userBResp[1]=="dc")
            percentCompatible = 50;
        else if(userBResp[0]==true && userBResp[1]=="no")
            percentCompatible = 0;
        else if(userBResp[0]==false && userBResp[1]=="no")
            percentCompatible = 50;
        else if(userBResp[0]==false && userBResp[1]=="dc")
            percentCompatible = 100;
        else if(userBResp[0]==false && userBResp[1]=="yes")
            percentCompatible = 100;
    }
    // User answers "false" AND wants a roommate who is the same:
    else if(userAResp[0]==false && userAResp[1]=="no"){
        if(userBResp[0]==true && userBResp[1]=="yes")
            percentCompatible = 0;
        else if(userBResp[0]==true && userBResp[1]=="dc")
            percentCompatible = 50;
        else if(userBResp[0]==true && userBResp[1]=="no")
            percentCompatible = 50;
        else if(userBResp[0]==false && userBResp[1]=="no")
            percentCompatible = 100;
        else if(userBResp[0]==false && userBResp[1]=="dc")
            percentCompatible = 100;
        else if(userBResp[0]==false && userBResp[1]=="yes")
            percentCompatible = 50;
    }
    // User answers "false" and doesn't care how the roommate answered:
    else if(userAResp[0]==false && userAResp[1]=="dc"){
        if(userBResp[0]==true && userBResp[1]=="yes")
            percentCompatible = 50;
        else if(userBResp[0]==true && userBResp[1]=="dc")
            percentCompatible = 100;
        else if(userBResp[0]==true && userBResp[1]=="no")
            percentCompatible = 100;
        else if(userBResp[0]==false && userBResp[1]=="no")
            percentCompatible = 100;
        else if(userBResp[0]==false && userBResp[1]=="dc")
            percentCompatible = 100;
        else if(userBResp[0]==false && userBResp[1]=="yes")
            percentCompatible = 50;
    }
    // User answers "false" but wants a roommate who is the opposite:
    else if(userAResp[0]==false && userAResp[1]=="yes"){
        if(userBResp[0]==true && userBResp[1]=="yes")
            percentCompatible = 50;
        else if(userBResp[0]==true && userBResp[1]=="dc")
            percentCompatible = 100;
        else if(userBResp[0]==true && userBResp[1]=="no")
            percentCompatible = 100;
        else if(userBResp[0]==false && userBResp[1]=="no")
            percentCompatible = 50;
        else if(userBResp[0]==false && userBResp[1]=="dc")
            percentCompatible = 50;
        else if(userBResp[0]==false && userBResp[1]=="yes")
            percentCompatible = 0;
    }

    return percentCompatible;
};

// Function for rounding:
var roundedAverage = function(arr){
    var sum = 0;

    for(var i=0;i<arr.length;i++)
        sum += arr[i];

    return Math.round(sum/arr.length);
};

// Function finds the compatibility between 2 users: userAIndex and userBIndex:
var totalCompatibility = function(userAIndex,userBIndex,friends){
    if(friends[userAIndex].scores.length == friends[userBIndex].scores.length){
        var compatibilityByQuestion = [];

        for(var i=0;i<friends[userAIndex].scores.length;i++){
            var tempCompatible = evaluateQuestion(userAIndex,userBIndex,i,friends);
            compatibilityByQuestion.push(tempCompatible);
        }

        return roundedAverage(compatibilityByQuestion);
    }
    else
        console.log("Users have answered a different number of questions, so cannot evaluate compatibility.");
}

module.exports = function(user_id,friends){

    // In the command line, write "node matchingAlgorithm.js [user_id]" ex: colinm.
    var thisUser = user_id;
    // For now, current user is set by what you enter into the command line as the 3rd argument.
    var currentUser;
    var x; //this is the index of current user.

    // Stores the current user:
    for (var i=0; i<friends.length; i++){
        if (friends[i].user_id == thisUser) {
            currentUser = friends[i];
            x = i; // Stores the index of current user.
        }
    }

    var matchArray = [];

    // Gets compatibility of current user and all other users.
    for (var i=0; i<friends.length; i++){
        if (friends[i] == currentUser){
            continue;
        }else {
            matchArray.push({"friendData": friends[i], "compat": totalCompatibility(x, i,friends)});
        }
    }

    // Sorts array from highest to lowest compatibility:
    matchArray.sort(function(low, high) {
        return parseFloat(high.compat) - parseFloat(low.compat);
    });

    return matchArray;
}