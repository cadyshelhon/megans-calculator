import {HStack, Image, Heading} from '@chakra-ui/react'
import logo from '../assets/tablet.png';

const NavBar = () => {
  return (
    <HStack p={1}>
        <Image src={logo} boxSize="60px"/>
        <Heading size="lg">Megan's Calculator</Heading>
    </HStack>
  )
}

export default NavBar