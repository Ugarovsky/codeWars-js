const number = function(busStops){
    var value = 0;
    
    busStops.map(item => { 
        value += item[0] - item[1];
    })

    return value;
}

number([[10,0],[3,5],[5,8]]);