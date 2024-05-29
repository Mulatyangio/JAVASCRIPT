//Write a function `validateEmail(email)` that takes an email address `email` and returns true if it is a valid email address format, false otherwise.


function validateEmail(email){
    //check for empty or undefined email
    if(!email){
        return "invalid email";
    }
    
    //split email into local part and domain part
    const parts= email.split('@')
    if(parts.length <2){
        return "your email must include the @ symbol";
    }
    else if(parts.length>2){
        return "your email cannot contain more than one @ symbol"
    }
    else {
        if (parts[1].includes(".")){
            return "valid email"
        }
        else {return "your TLD is invalid"}
    }
 
    //
}
console.log(validateEmail("Boaz@gmail.com"));
console.log(validateEmail("Boaz@gmailcom"));
console.log(validateEmail("Boaz@gmail@com"));
console.log(validateEmail("Boazgmail@com"));
console.log(validateEmail("Boaz@gmailcom."));