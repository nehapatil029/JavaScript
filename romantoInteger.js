var romanToInt = function(s) {
    const romanMap = {
        'I': 1, 'V': 5, 'X': 10, 'L': 50, 
        'C': 100, 'D': 500, 'M': 1000
    };

    let total = 0;
    let prevValue = 0;

    for (let i = s.length - 1; i >= 0; i--) {
        let value = romanMap[s[i]];
        if (value < prevValue) {
            total -= value; // Subtract if a smaller value precedes a larger one
        } else {
            total += value;
        }
        prevValue = value;
    }

    return total;
};
