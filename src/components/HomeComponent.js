import React from "react";

function Home(){
    return(
      <div>
          <div className="jumbotron" style={{fontSize: "20px"}}>
              <div className="row row-content d-flex justify-content-center">
                  <div className="col-12 bg-image-jumb">
                  </div>
              </div>
              <div className="row d-flex justify-content-center">
                  <div className="col-12 col-md-6 text-center">
                      <h2>Bienvenidos a mi Portafolio</h2>
                      <p>
                          Hola, mi nombre es Nicolas Alvarez Triana, un
                          estudiante de Ciencias de la Computación, el cual por medio de
                          esta pagina quiere presentarse un poco, dar a conocer sus proyectos
                          y lo que hace.
                      </p>
                  </div>
              </div>
          </div>
      </div>
    );
}
export default Home;