export const formValidation = ( fieldRefs) =>{
    
    let fieldValidationErrors = [];
    let emptyFieldsErrors = [];
    for(let i=0; i < 13; i++){      
        console.log(fieldRefs[i].current.name)   
        switch(fieldRefs[i].current.name) {
          case 'clientName':
            let nameValid = (fieldRefs[i].current.value.match(/^[a-z ,.'-]+$/i) 
            && fieldRefs[i].current.value !=="");
            if(!nameValid) {
                fieldValidationErrors.push(" Client name is not valid!");
                fieldRefs[i].current.parentElement.className = "error";
                }
            break;
           case 'clientEmail':
            let emailValid = (fieldRefs[i].current.value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) 
            && fieldRefs[i].current.value !=="");
            if(!emailValid) {
                    fieldValidationErrors.push(" Client email is invalid!");
                    fieldRefs[i].current.parentElement.className = "error";
                }
            break;
          default:
              let fieldValid = (fieldRefs[i].current.value !== '');
              if(!fieldValid) {
                  emptyFieldsErrors.push(fieldRefs[i].current.name + "cannot be empty!")
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
