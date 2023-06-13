import Box from './components/Box';
import Clients from './components/Clients';
import Form from './components/Form';
import NavbarUpdate from './components/NavbarUpdate';
import Services from './components/Services';
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
    </div>
  );
}

export default App;
