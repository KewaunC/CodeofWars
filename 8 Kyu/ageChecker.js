
function checkAge(ageChecker){
    if(ageChecker < 16){
        return 'they can not drive'
    }else if(age < 18){
        return 'they can\'t hate from outside the club, because they can\'t even get in'
    }else if( age < 21){
        return `tell them they can not drink`
    }else if( age < 25){
        return `they can not rent cars affordably`
    }else if(age < 30){
        return `they can not rent fancy cars affordably`
    }else if(age > 30){
        return `tell them there is nothing left to look forward too`
    }else{
        return ageChecker
    }
}