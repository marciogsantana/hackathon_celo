import icon from "../../img/logo.png";
import "./style.css";

const header = () => {
  return (
    <div id="header">
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container">
          <img className="logo" src={icon} />
          <a
            className="navbar-brand"
            onClick={(e) => {
              e.preventDefault();
              window.open("https://celo.org/pt", "_self");
            }}
          >
            CELO
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <a className="nav-link" href="/"></a>
              </li>

              <li className="nav-item active">
                <a className="nav-link" href="/"></a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/"></a>
              </li>
            </ul>
            <span className="navbar-text float-right">
              <ul className="navbar-nav me-auto">
                <li className="nav-item">
                  <a
                  
                    className="nav-link"
                  
                    onClick={(e) => {
                      e.preventDefault();
                      window.open(
                        "https://www.gov.br/economia/pt-br/acesso-a-informacao/institucional/planejamento/unidades/spu",
                        "_blank"
                      );
                    }}
                    
                  >
                    SPU
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                  
                    onClick={(e) => {
                      e.preventDefault();
                      window.open(
                        "https://www.serpro.gov.br/",
                        "_blank"
                      );
                    }}
                  
                  >
                    SERPRO
                  </a>
                </li>

                <li className="nav-item">
                  <a
                    className="nav-link"
                  
                    onClick={(e) => {
                      e.preventDefault();
                      window.open("https://enap.gov.br/pt/", "_blank");
                    }}
                  
                  >
                    ENAP
                  </a>
                </li>
              </ul>
            </span>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default header;
