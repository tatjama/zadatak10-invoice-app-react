export const formValidation = (formValues, fieldNames, fieldRefs) =>{
    
    let fieldValidationErrors = [];
    let emptyFieldsErrors = [];
    for(let i=0; i < 13; i++){         
        switch(fieldNames[i]) {
          case 'clientName':
            let nameValid = (formValues[i].match(/^[a-z ,.'-]+$/i) 
            && formValues[i] !=="");
            if(!nameValid) {
                fieldValidationErrors.push(" Client name is not valid!");
                fieldRefs[i].current.parentElement.className = "error";
                }
            break;
           case 'clientEmail':
            let emailValid = (formValues[i].match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) 
            && formValues[i] !=="");
            if(!emailValid) {
                    fieldValidationErrors.push(" Client email is invalid!");
                    fieldRefs[i].current.parentElement.className = "error";
                }
            break;
          default:
              let fieldValid = (formValues[i] !== '');
              if(!fieldValid) {
                  emptyFieldsErrors.push(fieldNames[i] + " cannot be empty!")
                  fieldRefs[i].current.parentElement.className = "error";
              }   
            break;
        }
     }
     if(emptyFieldsErrors.length > 0){
         fieldValidationErrors.push(" All fields must be added")
     }
     return fieldValidationErrors;       
}     
