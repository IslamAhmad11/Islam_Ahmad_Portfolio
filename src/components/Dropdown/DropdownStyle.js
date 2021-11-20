import styled from 'styled-components';
import Link from 'next/link';
import { FaTimes } from 'react-icons/fa';

export const DropdownContainer = styled.div`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background-color: #182547;
    display: grid;
    align-items: center;
    top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
    transition: 1s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
    @media screen and (min-width: 768px){ display: none; }
`;

export const Icon = styled.div`
display: block;
background-size: contain;
height: 40px;
width: 40px;
cursor: pointer;
position: fixed;
top: 0;
right: 0;
z-index: 999;
transform: translate(-50%, 25%);
`;

export const CloseIcon = styled(FaTimes)`color: #fff; `;

export const DropdownWrapper = styled.div``;

export const DropdownMenu = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 80px);
    text-align: center;
    margin-bottom: 4rem;
    font-size: 2.5rem;


    @media screen and (max-width: 480px) {grid-template-rows: repeat(4, 60px); }
`;

export const DropdownLink = styled(Link)`
    dispaly: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    list-style: none;
    cursor: pointer;
`;

export const BtnWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  padding-bottom: 0;
  margin-bottom: 2rem; 
`;
