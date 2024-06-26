import React,{useEffect} from 'react'
import { Container ,Box,Text,TabList,Tabs,Tab,TabPanels,TabPanel} from '@chakra-ui/react'
import Login from './Authentication/Login'
import Signup from './Authentication/Signup'
import { useHistory } from 'react-router-dom'

const Home = () => {
    let history = useHistory()

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("userInfo"));
    
        if (user) {history.push("/chats")};
      }, [history]);
  return (
   
    <div>
      <Container maxW="xl" centerContent>
      <Box
        d="flex"
        justifyContent="center"
        p={3}
        bg="white"
        w="100%"
        m="40px 0 15px 0"
        borderRadius="lg"
        borderWidth="1px"
      >
        <Text fontSize="4xl" fontFamily="Work sans">
          Stay Connected Here
        </Text>
      </Box>
      <Box bg="white" w="100%" p={4} borderRadius="lg" borderWidth="1px">
        <Tabs isFitted variant="soft-rounded">
          <TabList mb="1em">
            <Tab width="50%">Login</Tab>
            <Tab width="50%">Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
    </div>
  )
}

export default Home