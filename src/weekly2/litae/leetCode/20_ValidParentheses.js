var isValid = function(s) {
    let array = [];
    
    let par = {
        ")": "(",
        "]": "[",
        "}": "{"
    }

    for(let i = 0; i < s.length; i ++){
        if(s[i] === "(" || s[i] === "[" || s[i] === "{") {
            array.push(s[i]);
        } else{
            if(array[array.length - 1] === par[s[i]]) {
                array.pop();
            }
            else {
                return false;
            }
        }
    }
    
    if(array.length === 0) {
        return true
    } else {
        return false
    }
};