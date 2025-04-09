import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { Toaster } from 'react-hot-toast';


function App() {
  return (
    <div className="min-h-screen flex flex-col transition-colors">
       <Toaster position="top-center" reverseOrder={false} />
      <Navbar />
      <main className="flex-grow">
        <section id="home"><Home /></section>
        <section id="about"><About /></section>
        <section id="projects"><Projects /></section>
        <section id="contact"><Contact /></section>
      </main>
    </div>
  );
}

export default App;
