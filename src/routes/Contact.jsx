import { Button } from '../components/Button'
import './Contact.css'

export const Contact = () => {
    return (
        <>
            <div className="contact-section">
                <h2>entre em contato</h2>
                <p>
                    quer ser nosso parceiro, conhecer nossa fazenda e
                </p>
                <p>
                    adquirir alguns de nossos
                    produtos caseiros?
                </p>
                <div className="max-w940 contact-container">
                    <div className="contact-form">
                        <form>
                            <label htmlFor="name">
                                <input type="text" name='name' id='name'
                                    placeholder='Nome *' required />
                            </label>
                            <label htmlFor="email">
                                <input type="email" name='email' id='email'
                                    placeholder='E-mail *' required />
                            </label>
                            <label htmlFor="subject">
                                <input type="text" name='subject' id='subject'
                                    placeholder='Assunto *' required />
                            </label>
                            <textarea name="comment" id="comment"></textarea>
                            <Button value={'enviar mensagem'} />
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
