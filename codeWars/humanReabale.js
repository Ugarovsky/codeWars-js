const humanReadable = (seconds) => {
    let hours =  Math.trunc(seconds / 3600);
    let minutes = Math.trunc(((seconds - (hours * 3600)) / 60));
    let sec = seconds - (hours * 3600) - (minutes * 60);

    hours > 9 ? hours : hours = `0${hours}`;
    minutes > 9 ? minutes : minutes = `0${minutes}`;
    sec > 9 ? sec : sec = `0${sec}`;
    
   return(`${hours}:${minutes}:${sec}`);
}

humanReadable(5);
humanReadable(86399) //23:59:59
humanReadable(359999) //99:59:59