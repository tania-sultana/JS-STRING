function maxArray(number){
    let largest = number[0];
    for(let i = 0; i<number.length; i++){
        
        const index = i;
        const element = number[index];
        if(element > largest){
            largest = element;
        }
        
    }
    return largest;

}
const height = [12, 123, 32, 54,440, 77];
const tallest = maxArray(height);
console.log('tallest person is:', tallest);