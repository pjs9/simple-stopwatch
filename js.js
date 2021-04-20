let startWatch, endWatch, runnin, duration = 0;

function begin() {
    if (runnin)
        document.getElementById("begin").innerHTML = 'Stopwatch has already started!';
    runnin = true;
    startWatch = new Date();
}

function stop() {
    if (!runnin)
        document.getElementById("end").innerHTML = "Stopwatch is not started yet!";
    else {
        runnin = false;
        endWatch = new Date();
        const seconds = (endWatch.getTime() - startWatch.getTime()) / 1000;
        duration += seconds;
        document.getElementById("duration").innerHTML = "Total duration of stopwatch is : " + duration;
    }
}

function reset() {
    startWatch = null;
    endWatch = null;
    runnin = false;
    duration = 0;
}