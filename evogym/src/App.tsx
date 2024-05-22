import Navbar from '@/Scenes/Navbar/Index';
import { useEffect, useState } from 'react';
import { SelectedPage } from '@/Shared/types';
import Home from '@/Scenes/Home/Index';
import Benefits from "@/Scenes/Benefits/index";
import OurClasses from "@/Scenes/OurClasses/index";
import ContactUs from "@/Scenes/ContactUs/index";
import Footer from "@/Scenes/Footer/index"

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY === 0){
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      else{
        setIsTopOfPage(false);
      }
    }
    window.addEventListener('scroll',handleScroll);
    return () => window.removeEventListener('scroll',handleScroll);
  },[])

  return (
    <>
    <div className="app bg-gray-20">
      <Navbar isTopOfPage={isTopOfPage} selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
      <Home setSelectedPage={setSelectedPage}/>
      <Benefits setSelectedPage={setSelectedPage}/>
      <OurClasses setSelectedPage={setSelectedPage}/>
      <ContactUs setSelectedPage={setSelectedPage}/>
      <Footer/>
    </div>
    </>
  )
}

export default App
