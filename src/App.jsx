import './App.css'
import perfil from './assets/perfil.jpeg'

function App() {
  return (
    // Contenedor principal que envuelve todo el currículum con diseño centrado y sombras
    <div className="contenedor-principal">

      {/* HEADER / CABECERA: Contiene la foto, nombre, puesto y datos de contacto */}
      <header className="header">
        <img
          src={perfil}
          alt="Mi foto"
          className="foto-perfil"
        />
        <div className="header-info">
          <h1>Adrián Celestrín Corrales</h1>
          <h2>Ingeniero de Datos</h2>
          <p className="contacto">
            <span>📧 celestrincorralesadrian@gmail.com</span> | 
            <span>📱 624574046</span> | 
            <span>📍 Zaragoza</span>
          </p>
        </div>
      </header>

      {/* CUERPO DEL CV: Organizado en un diseño de dos columnas (Rejilla / Grid) */}
      <div className="cuerpo-cv">
        
        {/* ================= COLUMNA IZQUIERDA ================= */}
        <div className="columna-izquierda">
          
          {/* SECCIÓN SOBRE MÍ: Breve descripción profesional */}
          <section className="seccion">
            <h2 className="titulo-seccion">Sobre Mí</h2>
            <p className="texto-secundario">
              Profesional en Ingeniería de Datos y Desarrollo de Software,
              con 1 año de experiencia en el desarrollo de soluciones
              tecnológicas para empresas de distintos sectores.
            </p>
          </section>

          {/* SECCIÓN HABILIDADES: Tecnologías y herramientas dominadas */}
          <section className="seccion">
            <h2 className="titulo-seccion">Habilidades</h2>
            <div className="lista-habilidades">
              <span className="habilidad">Python</span>
              <span className="habilidad">SQL</span>
              <span className="habilidad">Java</span>
              <span className="habilidad">JavaScript</span>
              <span className="habilidad">Microsoft Fabric</span>
              <span className="habilidad">Power BI</span>
              <span className="habilidad">Spark</span>
            </div>
          </section>

          {/* SECCIÓN APTITUDES: Competencias blandas o transversales */}
          <section className="seccion">
            <h2 className="titulo-seccion">Aptitudes</h2>
            <div className="lista-habilidades">
              <span className="habilidad">Adaptabilidad</span>
              <span className="habilidad">Responsabilidad</span>
              <span className="habilidad">Autonomía</span>
              <span className="habilidad">Predisposición</span>
              
            </div>
          </section>

        </div>

        {/* ================= COLUMNA DERECHA ================= */}
        <div className="columna-derecha">
          
          {/* SECCIÓN EXPERIENCIA PROFESIONAL: Historial laboral alineado correctamente */}
          <section className="seccion">
            <h2 className="titulo-seccion">Experiencia Profesional</h2>

            {/* Empleo 1: Ingeniero de Datos */}
            <div className="item-experiencia">
              <h3>Ingeniero de Datos</h3>
              <div className="sub-cabecera">
                <span className="empresa">Integra</span>
                <span className="periodo">2026 - Actualidad</span>
              </div>
              <p className="texto-secundario">
                Formación profesional Dual. Diseño de arquitectura de datos con Microsoft Fabric.
              </p>
            </div>

            {/* Empleo 2: Asesor Inmobiliario */}
            <div className="item-experiencia">
              <h3>Asesor Inmobiliario</h3>
              <div className="sub-cabecera">
                <span className="empresa">Tecnocasa</span>
                <span className="periodo">2024 - 2026</span>
              </div>
              <p className="texto-secundario">
                Gestión de venta y alquiler de viviendas en empresa líder del sector.
              </p>
            </div>
          </section>

          {/* SECCIÓN EDUCACIÓN: Historial formativo */}
          <section className="seccion">
            <h2 className="titulo-seccion">Educación</h2>

            {/* Estudio 1: Grado Superior */}
            <div className="item-experiencia">
              <h3>Grado Superior en Desarrollo de Aplicaciones Multiplataforma</h3>
              <div className="sub-cabecera">
                <span className="centro">CPIFP Los Enlaces</span>
                <span className="periodo">2025 - Actualidad</span>
              </div>
            </div>

            {/* Estudio 2: Bachillerato */}
            <div className="item-experiencia">
              <h3>Bachillerato de Ciencias</h3>
              <div className="sub-cabecera">
                <span className="centro">IPVCE Karl Marx</span>
                <span className="periodo">2017-2020</span>
              </div>
            </div>
          </section>

        </div>

      </div>

      {/* FOOTER INFERIOR: Barra final con estados y disponibilidad */}
      <footer className="footer-inferior">
        <span>Disponible para nuevas oportunidades</span> | 
        <span>Respuesta en 24h</span> | 
        <span>Apasionado por el código limpio</span>
      </footer>

    </div>
  )
}

export default App