import React, { useState } from 'react'; // Importar useState para manejar el estado del menú
import './assets/styles/style.css'; 
import logo from './assets/trd-logo.svg'; 
import fotoProvisoria from './assets/images/fotoProvisoria.jpg'; 

function App() {
  // Estado para manejar la visibilidad del menú desplegable
  const [menuOpen, setMenuOpen] = useState(false);

  // Función para manejar el toggle del menú
  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="App">
      {/* Header */}
      <header>
        <div className="logo">
          <img src={logo} alt="Logo TRD" width="250" height="100" />
        </div>
        
        {/* Menú hamburguesa en pantallas pequeñas */}
        <div className="menu-hamburger" onClick={handleMenuToggle}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      

        {/* Navbar (botones) */}
        <nav className={`header-nav ${menuOpen ? 'show' : ''}`}>
          <button>Botón 1</button>
          <button>Botón 2</button>
          <button>Botón 3</button>
          <div className="dropdown">
            <button className="dropbtn">Botón Desplegable</button>
            <div className="dropdown-content">
              <a href="#">Opción 1</a>
              <a href="#">Opción 2</a>
              <a href="#">Opción 3</a>
            </div>
          </div>
        </nav>
      </header>

      {/* Contenedor principal */}
      <main>
        <div className="main-background"></div> {/* Círculo de fondo */}

        <div className="container">
          {/* Columna izquierda */}
          <div className="left-column">
            <div className="text-box text-box-1">Caja de texto 1</div>
            <div className="text-box text-box-2">Caja de texto 2</div>
            <div className="text-box text-box-3">Caja de texto 3</div>
            <div className="text-box text-box-4">
              <div className="block-buttons">
                <button>Test</button>
                <button>Sesiones</button>
              </div>
            </div>
            <div className="text-box text-box-5">Caja de texto 5</div>
          </div>

          {/* Columna derecha */}
          <div className="right-column">
            <div className="Foto">
              <img src={fotoProvisoria} alt="Foto TRD" />
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer>
        <p>&copy; 2025 TRD. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default App;
