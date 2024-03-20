// code your solution here
function saturdayFun(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`
}


function mondayWork(plan = "go to the office"){
    return `This Monday, I will ${plan}.`
}

function wrapAdjective(flair = "*"){
    return function(adjective) {
        return `You are ${flair}${adjective}${flair}!`
    }
        
    }
    

