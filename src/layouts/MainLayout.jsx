import React from 'react'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
import BackToTop from '../components/common/BackToTop'
import ChatSupport from '../components/common/ChatSupport'

const MainLayout = ({ children }) => {
    return (
        <>
            <Header />
            <main>{children}</main>
            <Footer />
            <BackToTop />
            <ChatSupport />
        </>
    )
}

export default MainLayout