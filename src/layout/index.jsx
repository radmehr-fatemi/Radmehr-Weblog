import React from 'react';

//Component
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            { children }
            <Footer />
        </>
    );
};

export default Layout;