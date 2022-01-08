import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { ToastContainer } from 'react-toastify';
import { injectStyle } from 'react-toastify/dist/inject-style';
import { NavigationBar } from '../components';

const Layout = () => {
  useEffect(() => injectStyle(), []);

  return (
    <div>
      <NavigationBar />
      <BodyLayout>
        <Outlet />
      </BodyLayout>
      <StyledToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar
        pauseOnHover={false}
        draggable
        theme="light"
      />
    </div>
  );
};

const BodyLayout = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
`;

const StyledToastContainer = styled(ToastContainer).attrs({})`
  .Toastify__toast {
    top: 70px;
    font-weight: 700;

    @media screen and (max-width: 480px) {
      top: 0px;
    }
  }
`;

export default Layout;
