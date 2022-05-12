// call function only if the delay expires
// or if new input is provided
export function debounce(fn: () => {}, delay: number) {
    let timer: ReturnType<typeof setTimeout>;
    return () => {
        clearTimeout(timer);
        timer = setTimeout(() => fn(), delay);
    }
}

// throttle function similar to debounce is called
// once in the given time, but it doesnt reset if
// continuous input is provided.
export function throttle(fn:() => {}, delay: number){
    let timerId;

    // return if input provided but timer hasnt expired
    if (timerId)
        return;
    
    timerId = setTimeout(() => {
        fn();
        timerId = undefined;
    }, delay)
}