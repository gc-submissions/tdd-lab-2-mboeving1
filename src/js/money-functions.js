const formatCurrency = (amount) => {
    let abs = Math.abs(amount);
    return amount >= 0 ? "$" + abs.toFixed(2) : "-$" + abs.toFixed(2);
    
}

const getCoins = (cents) => {
    let change = cents;
    let quarters = Math.floor(change/25);
    change -= quarters*25;
    let dimes = Math.floor(change/10);//dime is a number e.g. 3
    change -= dimes*10;
    let nickels = Math.floor(change/5);
    change -= nickels*5;
    let pennies = Math.floor(change/1);

    return {
        quarters: quarters,
        dimes: dimes,
        nickels: nickels,
        pennies: pennies
    }
}

module.exports = {
    formatCurrency, getCoins
}