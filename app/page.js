'use client'

import {Footer, Navbar} from '../components';
import {About, Explore, Feedback, GetStarted, Hero, Insights, WhatsNew, World} from '../sections';

const Page = () => {

        return (
            <div className='bg-primary-black overflow-hidden'>
                <Navbar/>
                <Hero/>
                <div className='relative'>
                    <About/>
                    <div className='gradient-03'></div>
                    <Explore/>
                </div>
                <div className='relative'>
                    <GetStarted/>
                    <div className='gradient-04'></div>
                    <WhatsNew/>
                </div>
                <World/>
                <div className='relative'>
                    <Insights/>
                </div>
                <Footer/>
            </div>
        )
    }
;

export default Page;
