import './Footer.css'
import Facebook from '../../public/facebook.svg'
import Instagram from '../../public/instagram.svg'
import Twitter from '../../public/twitter.svg'
import Linkedin from '../../public/linkedin.svg'

export const Footer = () => {
    return (
        <footer>
            <div className="max-w940 footer-section">
                <img src="../../public/logo-rodape.webp" title='logo_rodape.webp' alt="rodape_logo" />
                <div className="social-media-icons">
                    <img src={Facebook} alt="facebook.svg" title='facebook.svg' />
                    <img src={Instagram} alt="instagram.svg" title='instagram.svg' />
                    <img src={Twitter} alt="twitter.svg" title='twitter.svg' />
                    <img src={Linkedin} alt="facebook.svg" title='linkedin.svg' />
                </div>
                <div className="phone-number">
                    <h2>
                        (81) 9999-9999
                    </h2>
                </div>
                <div className="opening-hours">
                    <p>
                        Segunda a Sábado: 8h às 20h
                    </p>
                    <p>
                        Domingos e Feriados: 9h às 18h
                    </p>
                </div>
                <div className="copyright">
                    <p>
                        &copy;2024, farmhouse
                    </p>
                </div>
            </div>
        </footer>
    )
}
