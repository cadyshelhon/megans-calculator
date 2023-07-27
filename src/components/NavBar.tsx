import {HStack, Image, Text} from '@chakra-ui/react'
import logo from '../assets/tablet.png';

const NavBar = () => {
  return (
    <HStack p={1}>
        <Image src={logo} boxSize="60px"/>
        <Text>Megan's Calculator</Text>
    </HStack>
  )
}

export default NavBar