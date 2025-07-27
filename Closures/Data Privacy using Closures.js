function createCounter(){
    let count = 0;

    return {
        increment : function(){
            count ++;
            return count
        },
        getCount : function(){
            console.log(count)
        }
    }
}

const counter = createCounter();

console.log(counter.increment());
console.log(counter.increment());
console.log(counter.increment());

counter.getCount();