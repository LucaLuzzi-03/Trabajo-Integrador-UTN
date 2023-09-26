import "./styles/footer.css"
import visa from "../assets/visa-logo.png"
import master from "../assets/masterlogo.png"
import mercadoP from "../assets/mplogo.png"
import pagofacil from "../assets/pagofacilpng.png"

    export const Footer = () => {
      return (
        <footer id="footerlol" className="footer-distributed ">
    
        <div className="footer-left">
            <h3>X<span>Store</span></h3>
    
            <p className="footer-links">
                
                <a className="footer-item">Home</a>
                |
                <a className="footer-item">Products</a>
                |
                <a className="footer-item">Contact</a>
            </p>
    
            <p className="footer-company-name">Copyright © 2023 All rigths reserved</p>
        </div>
    
        
        <div className="footer-right">
            <p className="footer-company-about" data-section="footer" data-value="call">
            Xstore is a clothing store located in Wyoming, United States. All use of this page if the use of its authors is totally prohibited.
            </p>
            <div className="footer-icons">
                <h6 className='white'>Payment Methods</h6>
                <img src={visa} alt="" />
                <img src={mercadoP} alt="" />
                <img src={master} alt="" />
                <img src={pagofacil} alt="" />
            </div>
        </div>
    </footer>
      )
    }
    
    