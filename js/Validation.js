class Validation {
    isValidFirstName(firstName) {
        if(!this.isValidMessage(firstName)) { 
            return false;
        }
        if(firstName.length < 2){
            return false;
        }
        if (firstName[0].toLowerCase() === firstName[0]){
            return false;
        }
        if (firstName.slice(1).toLowerCase() !== firstName.slice(1)){
            return false;
        }
        return true;
    }

    isValidLastName(lastName) {
        if(!this.isValidMessage(lastName)) {
            return false;
        }
        if(lastName.length < 2) {
            return false;
        }
        return true;
    }

    isValidEmail() {
        return true;
    }

    isValidMessage(message) {
        if (typeof message !== 'string' || message === '') { 
            return false;
        }
        if(lastName.length < 2) {
            return false;
        }
        return true; 
    }
    
    isValidPhoneNumber(phoneNumber) {
        return true;
    }

    isValidMonthName() {
        return true;
    }

    isValidWeekdayName() {
        return true;
    }

    isValidPersonID() {
        return true;
    }
}

module.exports = Validation;