import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { Business, Menu } from '@material-ui/icons';
import { CAPALogo, CAPALogoColor } from '../assets/images';

type MenuSliderProps = {
  menuOpen: boolean;
};

const NavigationBar = () => {
  const [fakeLogin, setFakeLogin] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogin = useCallback(() => setFakeLogin((status) => !status), []);
  const handleMenuOpen = useCallback(() => setMenuOpen(true), []);
  const handleMenuClose = useCallback(() => setMenuOpen(false), []);

  return (
    <Nav>
      <MenuButton onClick={handleMenuOpen}>
        <Menu color="disabled" />
      </MenuButton>
      <HomeLink to="/">
        <img src={CAPALogo} alt="company-logo" />
      </HomeLink>
      <SideMenu>
        <li>
          <BusinessLink to="/">
            <Business color="disabled" />
            <span>A 가공 업체</span>
          </BusinessLink>
        </li>
        <Divider />
        <li>
          <Link to="/" onClick={handleLogin}>
            {fakeLogin ? '로그아웃' : '로그인'}
          </Link>
        </li>
      </SideMenu>
      {menuOpen && <BgOveray onClick={handleMenuClose} />}
      <MenuSlider menuOpen={menuOpen}>
        <div>
          <img src={CAPALogoColor} alt="company-logo" />
        </div>
        <ul>
          <li>
            <BusinessLink to="/">
              <Business color="disabled" />
              <span>파트너정밀가공</span>
            </BusinessLink>
          </li>
          <li>
            <Link to="/" onClick={handleLogin}>
              {fakeLogin ? '로그아웃' : '로그인'}
            </Link>
          </li>
        </ul>
      </MenuSlider>
    </Nav>
  );
};

const Nav = styled.nav`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: 70px;
  background-color: #1565c0;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.24);
  z-index: 999;

  @media screen and (max-width: 480px) {
    height: 44px;
    justify-content: flex-start;
  }
`;

const MobileLogoSize = css`
  width: 91.8px;
  height: 12px;
`;

const HomeLink = styled(Link)`
  margin-left: 40px;

  > img {
    width: 153px;
    height: 20px;
  }

  @media screen and (max-width: 480px) {
    margin-left: 16px;

    > img {
      ${MobileLogoSize}
    }
  }
`;

const MenuLink = css`
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
  color: #ffffff;
  line-height: 20px;

  @media screen and (max-width: 480px) {
    font-weight: 600;
    color: #323d45;
  }
`;

const SideMenu = styled.ul`
  display: flex;
  justify-content: space-between;
  margin-right: 40px;

  > li > a {
    ${MenuLink}
  }

  @media screen and (max-width: 480px) {
    display: none;
  }
`;

const BusinessLink = styled(Link)`
  > svg {
    color: #ffffff;
    height: 20px;
  }

  > span {
    margin-left: 8px;
  }

  @media screen and (max-width: 480px) {
    > svg {
      color: #323d45;
    }
  }
`;

const Divider = styled.li`
  width: 2px;
  height: 16px;
  margin: 2px 32px;
  background-color: #ffffff;
`;

const MenuButton = styled.button`
  display: none;

  @media screen and (max-width: 480px) {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    display: flex;
    align-items: center;
    margin-left: 20px;
    background-color: transparent;
    outline: 0;
    border: 0;
    cursor: pointer;

    > svg {
      color: #ffffff;
    }
  }
`;

const BgOveray = styled.div`
  position: absolute;
  top: 0;
  width: 100vw;
  height: 100vh;
  background: #323d457f;
  z-index: 9998;
`;

const MenuSlider = styled.div<MenuSliderProps>`
  display: none;
  position: absolute;
  top: 0;
  width: 77vw;
  height: 100vh;
  background: #ffffff;
  transform: translateX(-100%);
  z-index: 9999;

  > div:first-child {
    height: 44px;
    border-bottom: 1px solid #e5e5e5;

    > img {
      ${MobileLogoSize}
      margin: 16px 20px;
    }
  }

  > ul {
    margin: 36px 32px;

    > li + li {
      margin-top: 24px;
    }

    > li > a {
      ${MenuLink}
    }
  }

  @media screen and (max-width: 480px) {
    display: block;
    transform: ${(props) => props.menuOpen && 'translateX(0px)'};
    transition: 300ms ease-in-out transform;
  }
`;

export default NavigationBar;
