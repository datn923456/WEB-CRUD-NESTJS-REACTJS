//import { useContext } from "react";
//import { GlobalContext } from "./context/GlobalWrapper";
import {Container,Box,FormControl,Input,Button,Text,TableContainer,Th,Tr,Thead,Table,Tbody} from '@chakra-ui/react'
import {AiOutlinePlus, AiOutlineSearch} from 'react-icons/ai'
import Row from './components/Row';
import { useContext, useEffect, useState } from 'react';
import { GlobalContext } from './context/GlobalWrapper';
import DrawerExample from './components/DrawerExample';
//import {FetchUsers} from './context/GlobalWrapper';


function App() {
  const { FetchUsers,Search,users, onOpen} = useContext(GlobalContext);
  const[query, setQuery] = useState('');
  useEffect(() => {
    FetchUsers();
  }, []);

  const SearchHandler = () =>{
    Search(query)
  }

  const onChangeHandler = (e) =>{
    setQuery(e.target.value)
  }
  return (
    <div className="App">
      <Container maxW={'full'} p="4" fontSize={'30px'}>
        <Box rounded="lg" boxShadow="base" p="4">
            <Box mt="2" gap={'2'} mb="4" display={'flex'}>
              <FormControl>
                <Input type='text' onChange={onChangeHandler}/>
              </FormControl>   
              <Button leftIcon={<AiOutlineSearch />} colorScheme='teal' variant='outline' maxW="300px" minW="150px" onClick={()=> SearchHandler()}>
                Search
              </Button>
            </Box>
        </Box>
        <Box mt="5" rounded={'lg'} boxShadow="base">
          <Box p="4" display={'flex'} justifyContent="space-between">
            <Text fontSize="xl" fontWeight="bold">
              List User
            </Text>
            <Button colorScheme="teal" variant="outline" maxW="300px" minW="150px" leftIcon={<AiOutlinePlus fontSize={'20px'} />} onClick={onOpen}>
              Add User
            </Button>
          </Box>
          <TableContainer>
            <Table variant='simple'>
              <Thead>
                <Tr>
                  <Th>Avatar</Th>
                  <Th>Fullname</Th>
                  <Th>Email</Th>
                  <Th>Age</Th>
                  <Th>Country</Th>
                  <Th>Actions</Th>
                </Tr>
              </Thead>
              <Tbody>
                {
                  users?.map(({_id, fullname, email, age, country})=>{
                    return (
                    <Row
                      id ={_id}
                      fullname={fullname}
                      email={email}
                      age={age}
                      country={country}
                    />
                    );
                  })
                }
              </Tbody>
              
            </Table>
          </TableContainer>
        </Box>
        <DrawerExample/>
      </Container>
    </div>
  );
}

export default App;
