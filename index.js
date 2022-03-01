const returnFirstTwoDrivers = function(drivers){
    return [drivers[0],drivers[1]];
}

const returnLastTwoDrivers = function(drivers){
    return drivers.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiplier){
    return function(fare){
        return fare * multiplier;
    }
}

function fareDoubler(fare) {
   return createFareMultiplier(2)(fare);
}

function fareTripler(fare){
    return createFareMultiplier(3)(fare);
}

function selectDifferentDrivers(drivers,action){
    return action(drivers);
}