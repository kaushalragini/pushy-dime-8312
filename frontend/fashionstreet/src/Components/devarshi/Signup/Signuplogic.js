

 export const isAllPresent=(str)=> {
    // Regex to check if a string
    // contains uppercase, lowercase
    // special character & numeric value
    var pattern = new RegExp(
      "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[-+_!@#$%^&*.,?]).+$"
    );
  
    // If the string is empty
    // then print No
    if (!str || str.length === 0) {
      return false
      
    }
  
    
    if (pattern.test(str)) {
      return true
    } else {
      return false
    }
    
  }
  
  
 