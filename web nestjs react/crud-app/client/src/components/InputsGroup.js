import {FormControl,FormLabel,Input,FormErrorMessage} from '@chakra-ui/react'
import React from "react";

const InputsGroup = ({name, onChangeHandler, errors, value}) => {
    
    return (
    <FormControl isInvalid={errors}>
        <FormLabel>{name}</FormLabel>
        <Input type='text' name={name} onChange={onChangeHandler} value={value}/>
        {
            errors && errors?.map((err) =>{
                return <FormErrorMessage>{err}</FormErrorMessage>
            })
        }
    </FormControl>
    );
};

export default InputsGroup;