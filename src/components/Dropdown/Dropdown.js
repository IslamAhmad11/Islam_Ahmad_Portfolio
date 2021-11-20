import Link from 'next/link';
import { DropdownData } from '../../data/DropdownData';
import Button from '../../styles/GlobalComponents/Button';
import { DropdownContainer, Icon, DropdownWrapper, DropdownMenu, DropdownLink, BtnWrap} from './DropdownStyle';
import { MenuBars } from '../Header/HeaderStyles';
import {FaTimes} from 'react-icons/fa';
const Dropdown = ({isOpen, toggle}) => {
    
    return (
        <DropdownContainer id = "drop-Down" isOpen={isOpen} onClick={toggle}>
            <DropdownWrapper>
                <Icon >
                    <FaTimes size="3rem" />
                </Icon>
                <DropdownMenu>
                    {DropdownData.map((item, index) => (
                        <DropdownLink href={item.link} key={index}>
                            {item.title}
                        </DropdownLink>
                    ))} 
                </DropdownMenu>
                <BtnWrap>
                    <Link href="#footer">
                        <Button>Contact Me</Button>
                    </Link>
                </BtnWrap>
            </DropdownWrapper>
        </DropdownContainer>
    );
};

export default Dropdown
