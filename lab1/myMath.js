module.exports = {
    isEven: function(num){
        var res = num % 2;
        return (res == 0);
    },
    sum: function (num1, num2){
        return num1 = num2;
    },
    greater: function(num1, num2){
        if(num1 > num2){
            return num1;
        }
    
            return num2;
        
    },
    smaller: function(num1, num2){
        if(num1 < num2)
            return num1;

            return num2;

    },
    divide: function(num1, num2){
        //if division by 0:
        if(num2 ==0){
        //show an error
        console.log("Error, should not divide by 0");
        return 0;
        //return 0

        //return result
        return num1 / num2;
    }
}