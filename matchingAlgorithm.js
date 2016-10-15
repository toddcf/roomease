var friends = [
{
	name: "Colin",
	scores: [
		[true,"same"],
		[true,"same"],
		[true,"same"]
	]
},
{
	name: "Stephanie",
	scores: [
		[true,"same"],
		[false,"same"],
		[false,"same"]
	]
}];

var evaluateQuestion = function(userAIndex,userBIndex,qIndex){
    var percentCompatible;
    var userAResp = friends[userAIndex].scores[qIndex];
    var userBResp = friends[userBIndex].scores[qIndex];

    if(userAResp[0]==true && userAResp[1]=="same"){
        if(userBResp[0]==true && userBResp[1]=="same")
            percentCompatible = 100;
        else if(userBResp[0]==true && userBResp[1]=="dgaf")
            percentCompatible = 100;
        else if(userBResp[0]==true && userBResp[1]=="opposite")
            percentCompatible = 50;
        else if(userBResp[0]==false && userBResp[1]=="same")
            percentCompatible = 0;
        else if(userBResp[0]==false && userBResp[1]=="dgaf")
            percentCompatible = 50;
        else if(userBResp[0]==false && userBResp[1]=="opposite")
            percentCompatible = 50;
    }
    else if(userAResp[0]==true && userAResp[1]=="dgaf"){
        if(userBResp[0]==true && userBResp[1]=="same")
            percentCompatible = 100;
        else if(userBResp[0]==true && userBResp[1]=="dgaf")
            percentCompatible = 100;
        else if(userBResp[0]==true && userBResp[1]=="opposite")
            percentCompatible = 50;
        else if(userBResp[0]==false && userBResp[1]=="same")
            percentCompatible = 50;
        else if(userBResp[0]==false && userBResp[1]=="dgaf")
            percentCompatible = 100;
        else if(userBResp[0]==false && userBResp[1]=="opposite")
            percentCompatible = 100;
    }
    else if(userAResp[0]==true && userAResp[1]=="opposite"){
        if(userBResp[0]==true && userBResp[1]=="same")
            percentCompatible = 50;
        else if(userBResp[0]==true && userBResp[1]=="dgaf")
            percentCompatible = 50;
        else if(userBResp[0]==true && userBResp[1]=="opposite")
            percentCompatible = 0;
        else if(userBResp[0]==false && userBResp[1]=="same")
            percentCompatible = 50;
        else if(userBResp[0]==false && userBResp[1]=="dgaf")
            percentCompatible = 100;
        else if(userBResp[0]==false && userBResp[1]=="opposite")
            percentCompatible = 100;
    }
    else if(userAResp[0]==false && userAResp[1]=="same"){
        if(userBResp[0]==true && userBResp[1]=="same")
            percentCompatible = 0;
        else if(userBResp[0]==true && userBResp[1]=="dgaf")
            percentCompatible = 50;
        else if(userBResp[0]==true && userBResp[1]=="opposite")
            percentCompatible = 50;
        else if(userBResp[0]==false && userBResp[1]=="same")
            percentCompatible = 100;
        else if(userBResp[0]==false && userBResp[1]=="dgaf")
            percentCompatible = 100;
        else if(userBResp[0]==false && userBResp[1]=="opposite")
            percentCompatible = 50;
    }
    else if(userAResp[0]==false && userAResp[1]=="dgaf"){
        if(userBResp[0]==true && userBResp[1]=="same")
            percentCompatible = 50;
        else if(userBResp[0]==true && userBResp[1]=="dgaf")
            percentCompatible = 100;
        else if(userBResp[0]==true && userBResp[1]=="opposite")
            percentCompatible = 100;
        else if(userBResp[0]==false && userBResp[1]=="same")
            percentCompatible = 100;
        else if(userBResp[0]==false && userBResp[1]=="dgaf")
            percentCompatible = 100;
        else if(userBResp[0]==false && userBResp[1]=="opposite")
            percentCompatible = 50;
    }
    else if(userAResp[0]==false && userAResp[1]=="opposite"){
        if(userBResp[0]==true && userBResp[1]=="same")
            percentCompatible = 50;
        else if(userBResp[0]==true && userBResp[1]=="dgaf")
            percentCompatible = 100;
        else if(userBResp[0]==true && userBResp[1]=="opposite")
            percentCompatible = 100;
        else if(userBResp[0]==false && userBResp[1]=="same")
            percentCompatible = 50;
        else if(userBResp[0]==false && userBResp[1]=="dgaf")
            percentCompatible = 50;
        else if(userBResp[0]==false && userBResp[1]=="opposite")
            percentCompatible = 0;
    }

    return percentCompatible;
};

var roundedAverage = function(arr){
    var sum = 0;

    for(var i=0;i<arr.length;i++)
        sum += arr[i];

    return Math.round(sum/arr.length);
};

var totalCompatibility = function(userAIndex,userBIndex){
    if(friends[userAIndex].scores.length == friends[userBIndex].scores.length){
        var compatibilityByQuestion = [];

        for(var i=0;i<friends[userAIndex].scores.length;i++){
            var tempCompatible = evaluateQuestion(userAIndex,userBIndex,i);
            compatibilityByQuestion.push(tempCompatible);
        }

        return roundedAverage(compatibilityByQuestion);
    }
    else
        console.log("Users have answered a different number of questions, so cannot evaluate compatibility.");
}


console.log(totalCompatibility(0,1));