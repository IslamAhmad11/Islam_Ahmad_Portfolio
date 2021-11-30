import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiFillCodepenCircle } from 'react-icons/ai';
import {FaBars} from 'react-icons/fa';
import { DiCode } from 'react-icons/di';

import { Container, Div1, MenuBars, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = ({toggle}) => {
  
        return(
          <Container>
            <MenuBars id="icn" onClick={() => toggle}>
            <FaBars size="3rem" />
          </MenuBars>
              <Div1>
                <Link href="/">
                  <a style={{ display: "flex", alignItems: "center", color: 'white', marginBottom: '20px' }}>
                    <DiCode size="4rem" /> <Span>Islam Ahmad</Span>
                  </a>
                </Link>
              </Div1>
              <Div2>
                <li>
                  <Link href="/#projects">
                    <NavLink>Projects</NavLink>
                  </Link>
                </li>
                <li>
                  <Link href="/#tech">
                    <NavLink>Technologies</NavLink>
                  </Link>
                </li>
                <li>
                  <Link href="/#about">
                    <NavLink>About</NavLink>
                  </Link>
                </li>
              </Div2>
              <Div3>
                <SocialIcons href="https://github.com/IslamAhmad11" target="_blank">
                  <AiFillGithub size="3rem" />
                </SocialIcons>
                <SocialIcons href="https://www.linkedin.com/in/islam-ahmad-0692861b4" target="_blank">
                  <AiFillLinkedin size="3rem" />
                </SocialIcons>
                <SocialIcons href="https://codepen.io/islamahmad11" target="_blank">
                  <AiFillCodepenCircle size="3rem" />
                </SocialIcons>
              </Div3>
            </Container>
        )
  };

export default Header;
