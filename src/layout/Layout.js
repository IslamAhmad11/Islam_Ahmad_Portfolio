import React,{useState} from 'react'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import { Container } from './LayoutStyles'
import Dropdown from '../components/Dropdown/Dropdown'

export const Layout = ({children}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }

  return (
    <Container id="cont">
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Header toggle={toggle} />
      <main>{children}</main> 
      <Footer/>
    </Container>
  )
}
