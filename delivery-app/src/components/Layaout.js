import React from "react";
import burger from'../img/burger.png';

const Layout = () => {
  return (
    <>
      <div className="container">
      <br/><br/><br/><br/><br/>
        <div className="row">
          <div className="col-6 banner">
            <h1 className='banner--text'>Un nuevo sabor esta en la ciudad</h1>
            <p>
                Estamos a punto de descubrir un 
                mundo lleno de sabores y de emocionoes inigualables
                </p>
          </div>
          <div className="col-6 text-info">
           <img src={burger} alt=""/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
