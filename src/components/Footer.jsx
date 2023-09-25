import React from 'react'
import "./styles/footer.css"

export const Footer = () => {
  return (

    <footer className="footer bg-primary bg-lighten-xl text-center text-white">

    <div className="container p-4">
      
      <div className="row">
        
        <div className="ft-content col-lg-6 col-md-12 mb-4 mb-md-0">
          <h5 className="text-uppercase">Footer Content </h5>
          <p className='lorem'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis
            molestias. Fugiat pariatur maxime quis culpa corporis vitae repudiandae
            aliquam voluptatem veniam, est atque cumque eum delectus sint! 
          </p>
        </div>
      
        <div className="col-lg-3 col-md-6 mb-4 mb-md-">
          <h5 className="text-uppercase">Links</h5>

          <ul className="list-unstyled mb-10">
            <li>
              <a href="#!" className="text-white">Link 1</a>
            </li>
            <li>
              <a href="#!" className="text-white">Link 2</a>
            </li>
            <li>
              <a href="#!" className="text-white">Link 3</a>
            </li>
            <li>
              <a href="#!" className="text-white">Link 4</a>
            </li>
          </ul>
        </div>
        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 className="text-uppercase mb-0">Contacto</h5>

          <ul className="list-unstyled">
            <li>
              <a href="#!" className="text-white">Link 1</a>
            </li>
            <li>
              <a href="#!" className="text-white">Link 2</a>
            </li>
            <li>
              <a href="#!" className="text-white">Link 3</a>
            </li>
            <li>
              <a href="#!" className="text-white">Link 4</a>
            </li>
          </ul>
        </div>
    
      </div>
    
    </div>
    

    <div className="container p-4 pb-0">
      <section className="mb-4">
  
        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
          ><i className="fab fa-facebook-f"></i ></a>

        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
          ><i className="fab fa-instagram"></i></a>
  

        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
          ><i className="fab fa-linkedin-in"></i></a>
  
        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
          ><i className="fab fa-github"></i></a>
      </section>
    </div>
 
  

    <div className="text-center">
      © 2023 Copyright:
    </div>
      <p className="text-white m-0" >Equipo 1 Fundacion Empujar</p>
    
  </footer>
  )
}
    