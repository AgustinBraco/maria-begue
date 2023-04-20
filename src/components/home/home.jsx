import { Link } from "react-router-dom";

function Home() {

  // const title = document.querySelector("#title");

  // window.addEventListener("scroll", () => {
  //   let scroll = window.scrollY

  //   mountainBig.style.left = scroll * 0.4 + "px";
  //   mountainSmall.style.left = scroll * 0.5 + "px";
  //   treesLeft.style.bottom = scroll * -0.4 + "px";
  //   treesBottom.style.left = scroll * 0.8 + "px";
  //   man.style.right = scroll * 0.5 + "px";
  //   plants.style.right = scroll * 1 + "px";
  //   title.style.fontSize = scroll * 0.3 + "px";
  // });


  return (
    <main>
      <section className="section-banner">
        <div className="home-banner-container">
          <img src="assets/images/banner.jpg" alt="baner-maria" className="home-banner-image"/>

          <div className="home-texts-container">
            <span className="home-banner-text">Este </span>
            <span className="home-banner-text-lblue">curso </span>
            <span className="home-banner-text">no te va a cambiar la </span>
            <span className="home-banner-text-lblue">vida</span>
            <span className="home-banner-text">.</span>
          </div>

          <div className="home-link-container">
            <Link className="home-link">Empieza hoy</Link>
          </div>

        </div>
      </section>

      <section className="section-introduction">
        <h2 className="introduction-h2">¡Hola!</h2>

        <div className="introduction-p-container">
          <p className="introduction-p">Soy María Begué, autora y creadora de contenido sobre desarrollo personal. Mi objetivo es ayudarte a crear la vida que quieres para ti mismo.</p>
          <p className="introduction-p">Adicionalmente, trabajo en la empresa HubSpot liderando un equipo de Estrategia Comercial. Nací en la ciudad de la paella (Valencia, España) y ahora mismo vivo del otro lado del mundo, en Bogotá, Colombia.</p>
          <p className="introduction-p">En mi newsletter "Desata tu Potencial", comparto píldoras de conocimiento que te ayudarán a ser un mejor profesional y una mejor persona. Suscríbete abajo si quieres hacer parte de una comunidad de miles de personas como tú.</p>
        </div>

        <img src="assets/images/maria.jpg" alt="maria-image" className="introduction-image"/>

        <div>
          <form className="form">
            <input type="email" required placeholder="Email" minLength={7} maxLength={50} className="input-email"/>
            <input type="submit" value="Suscribirse" className="input-submit"/>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Home;