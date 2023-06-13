import Box from './components/Box';
import Clients from './components/Clients';
import DownloadApp from './components/DownloadApp';
import Faq from './components/Faq';
import Footer from './components/Footer';
import Form from './components/Form';
import NavbarUpdate from './components/NavbarUpdate';
import Services from './components/Services';
import WhyService from './components/WhyService';
import Works from './components/Works';


function App() {
 
  return (
    <div>
      <NavbarUpdate />
      <div className='flex w-full justify-center md:hidden lg:hidden xl:hidden'>
        <Form  />
      </div>
      <Services/>
      <Works/>
      <Clients/>
      <WhyService/>
      <DownloadApp/>
      <Faq/>
      <Footer/>
    </div>
  );
}

export default App;
