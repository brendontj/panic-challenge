module.exports = {

    calculateYears : (birthdate) => {
        var currentYear = new Date().getFullYear();
        return currentYear - birthdate.split('-')[0];
    }
}