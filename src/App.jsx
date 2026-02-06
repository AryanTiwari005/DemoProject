import './App.css'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
// import Registration from './components/Registration';

export default function App() {
      const arr= [1,2,3,4,5];
    const c = {
        name: "KIET",
        location: "Ghaziabad",
        established: 1998,
        students: 10000
    }
    
  
  return (
    
    <>
     <Header title="My First React App"/>
     <Header title="Welcome User"/>
     <Footer year={arr} company={c} />
    </>
  );
}



