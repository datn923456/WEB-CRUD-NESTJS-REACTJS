import {Tr,Td,Box,Button,Avatar} from '@chakra-ui/react'
import { AiFillEdit,AiFillDelete } from 'react-icons/ai'
import React, { useContext } from "react";
import { GlobalContext } from '../context/GlobalWrapper';

const Row = ({id, fullname, email, age, country}) => {
    const { onOpen, Delete, FindOne} = useContext(GlobalContext);
    return (
    
    <Tr>
        <Td>
            <Avatar name={fullname}/>
        </Td>
        <Td>{fullname}</Td>
        <Td>{email}</Td>
        <Td>{age}</Td>
        <Td>{country}</Td>
        <Td>
            <Box display="flex" gap="1">
                <Button colorScheme={"blue"} onClick={() => {onOpen(); FindOne(id);}}>
                    <AiFillEdit />
                </Button>
                <Button colorScheme={"red"} onClick={() => Delete(id)}>
                    <AiFillDelete />
                </Button>
            </Box>
        </Td>
    </Tr>
    );
};

export default Row