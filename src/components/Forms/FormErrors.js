import React from 'react';
import styled  from 'styled-components';

const FormErrors = ({formErrors}) => {
    return(
        <ErrorsStyling className='formErrors'>
    {Object.keys(formErrors).map((fieldName, i) => {
      if(formErrors[fieldName].length > 0){
        return (
          <p key={i}> - {formErrors[fieldName]}</p>
        )        
      } else {
        return '';
      }
    })}
  </ErrorsStyling>
    )
}

export default FormErrors;


const ErrorsStyling = styled.div`
   margin: 48px -16px 48px 44px;
       p{
            color:#EC5757;
            font-size: 10px;
            line-height: 15px;
            letter-spacing: -0.21px;
            font-weight: 500;
       }
   `
   