function convertTemp(temp, unit) {
    if (unit === 'C') {
        const fehrenheit = (temp * 9/5) + 32;
        return `${temp}°C is equal to ${fehrenheit}°F`;
    } else if (unit === 'F') {
        const celsius = (temp - 32) * 5/9;
        return `${temp}°F is equal to ${celsius}°C`;
    }else {
        return 'Invalid unit. Please use "C" for Celsius or "F" for Fahrenheit.';
    }
}

const result1 = convertTemp(100, 'C'); // Returns 212
const result2 = convertTemp(212, 'F'); // Returns 100

console.log(convertTemp(90, 'C')); // Output: 212
console.log(convertTemp(130, 'F')); // Output: 100

console.log(result1); // Output: 100°C is equal to 212°F
console.log(result2); // Output: 212°F is equal to 100°C
