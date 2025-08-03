function timer(duration, onComplete){
    setTimeout(() => {
        onComplete("timer completed");
    }, duration)
}

timer(5000, (message) => {
    console.log(message);
});