import Header from './components/Header';
import ProfileCard from './components/ProfileCard';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div>
      <Header name="Akbota Nurshat" role="Aspiring Web Developer" />
      <ProfileCard name="Akbota Nurshat" role="Aspiring Web Developer" />
      <Footer email="botanurrr@gmail.com" />
    </div>
  );
}

export default App;