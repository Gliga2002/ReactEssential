import logoImg from '../../assets/react-core-concepts.png';
import './Header.css';

function Header() {
  return (
    <header>
      <img src={logoImg} alt="Logo img" />
      <h1>React essentials</h1>
      <p>
        Crucial React concepts you will need for almost any app you are going to
        build!
      </p>
    </header>
  );
}

export default Header;
