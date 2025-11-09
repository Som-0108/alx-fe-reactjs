// src/App.jsx
import WelcomeMessage from './components/WelcomeMessage';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      {/* Display the welcome message */}
      <WelcomeMessage />

      {/* Display the city components */}
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
