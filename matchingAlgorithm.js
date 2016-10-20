var evaluateQuestion = function(userAIndex,userBIndex,qIndex,friends){
    var percentCompatible;
    var userAResp = friends[userAIndex].scores[qIndex];
    var userBResp = friends[userBIndex].scores[qIndex];

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

//function for rounding
var roundedAverage = function(arr){
    var sum = 0;

    for(var i=0;i<arr.length;i++)
        sum += arr[i];

    return Math.round(sum/arr.length);
};

//function finds the compatibility between 2 users: userAIndex and userBIndex
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

    //in the command line you write "node matchingAlgorithm.js [user_id]" ex: colinm
    var thisUser = user_id;
    //for now current user is set by what you enter into the command line as the 3rd argument
    var currentUser;
    var x; //this is the index of current user

    //stores the current user
    for (var i=0; i<friends.length; i++){
        if (friends[i].user_id == thisUser) {
            currentUser = friends[i];
            x = i; //storing the index of current user  
        }
    }

    //console.log("ME: "+currentUser.name);
    var matchArray = [];

    //goes through and gets compatibility of current user and each other friend
    for (var i=0; i<friends.length; i++){
        if (friends[i] == currentUser){
            continue;
        }else {
            matchArray.push({"friendData": friends[i], "compat": totalCompatibility(x, i,friends)});
            //console.log("Roommate: "+friends[i].user_id);
            //console.log("Our compatibility: "+totalCompatibility(x, i)+"%");
        }
    }

    //sorts the array from highest to lowest compatibility
    matchArray.sort(function(low, high) {
        return parseFloat(high.compat) - parseFloat(low.compat);
    });

    // console.log(matchArray);

    // console.log(currentUser.name+"'s top matches:");
    // for (i=0; i<matchArray.length; i++){
    //     console.log((i+1)+". "+matchArray[i].friendData.name+": "+matchArray[i].compat+"% compatible");
    // }

    return matchArray;
}