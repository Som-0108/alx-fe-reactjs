// src/App.jsx
import WelcomeMessage from './components/WelcomeMessage';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile'; // ✅ import the new component
import Counter from "./components/Counter"
function App() {
  return (
    <div>
      {/* Display the welcome message */}
      <WelcomeMessage />

      {/* Display the city components */}
      <Header />
      <MainContent />
      <Footer />

      {/* ✅ Display the user profile */}
      <UserProfile 
        name="Alice" 
        age="25" 
        bio="Loves hiking and photography" 
      />
    </div>
  );
}

export default App;
