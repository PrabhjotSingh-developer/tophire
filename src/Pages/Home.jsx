import React from 'react'
import Navbar from '../component/navbar/Navbar';
import Herosec from '../component/herosection/Herosec';
import Companies from '../component/companies/Companies';
import Companyhire from '../component/hirecompany/Companyhire';
import Built from '../component/BuiltSec/Built';
import Footer from '../component/footer/Footer';


const Home = () => {
    return (
        <>
            <Navbar />
            <Herosec />
            <Companies />
            <Companyhire />
            <Built />
            <Footer />
        </>
    )
}

export default Home

