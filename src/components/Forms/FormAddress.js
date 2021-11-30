import React from 'react';
import { FlexWrapper } from './FormAddressStyle';


const FormAddress = ({address, street, city, postCode, country, type}) => {
    return(
        <>
        <label htmlFor = { type + "Street" }>Street Address
                    <span>can't be empty</span> 
                        <input type="text" 
                        onFocus = {(e) => (e).target.parentElement.className = ""}
                        defaultValue = {address.street} 
                        name={type + "Street"}  ref={street}/>
                    </label>                    
                    <FlexWrapper>                        
                        <label htmlFor={ type + "City"}>City
                        <span>can't be empty</span> 
                            <input type="text"
                            onFocus = {(e) => (e).target.parentElement.className = ""}
                            defaultValue = {address.city} 
                            name={ type + "City" } ref={city}/>
                        </label>
                        <label htmlFor={type + "PostCode"} >Post Code
                        <span>can't be empty</span>
                            <input type="text"  
                            onFocus = {(e) => (e).target.parentElement.className = ""}
                            defaultValue = {address.postCode} 
                            ref = {postCode}
                            name = {type + "PostCode"}/>
                        </label>
                        <label htmlFor={ type + "Country" }>Country
                        <span>can't be empty</span>
                            <input type="text" 
                            onFocus = {(e) => (e).target.parentElement.className = ""} 
                            defaultValue = {address.country} 
                            ref = {country}
                            name = { type + "Country" }/> 
                        </label>
                    </FlexWrapper>            
        </>
    )
}

export default FormAddress;