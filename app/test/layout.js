'use client'
import React, {useEffect, useState} from 'react';

const TestPageLayout = ({children}) => {
   const [overScrolled, setOverScrolled] = useState(false);

   useEffect(() => {
      window.addEventListener('scroll', handleScroll)
      return ()=>{
         window.removeEventListener('scroll', handleScroll)
      }
   }, []);

   const handleScroll = (e)=>{
      console.log(e.target, window.scrollY > 300)
      setOverScrolled(window.scrollY > 300)
   }

   const overScrolledStyles = {position: 'fixed', top: 0, left: 0, right: 0,}
const styles = {height: '72px', backgroundColor: 'coral'}

   return (<div style={{minHeight: '200vh'}}>
          <header className={overScrolled ? 'slide-top-bottom' : ''} style={overScrolled ? {...overScrolledStyles, ...styles} : styles} />
          {children}
       </div>
   );
};

export default TestPageLayout;