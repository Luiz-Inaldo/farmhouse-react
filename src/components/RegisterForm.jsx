import './RegisterForm.css'
import { Button } from './Button'

export const RegisterForm = () => {
    return (
        <div className="home-form-section">
            <div className="max-w940 home-form-container">
                <div className="home-form-text">
                    <h3>inscreva-se</h3>
                    <p>inscreva seu endereço de e-mail e receba novidades e dicas</p>
                </div>
                <form>
                    <label htmlFor="name">
                        <input type="text" name='name' id='name'
                            placeholder='seu nome completo... *' required />
                    </label>
                    <label htmlFor="city">
                        <input type="text" name='city' id='city'
                            placeholder='seu cidade... *' required />
                    </label>
                    <label htmlFor="email">
                        <input type="email" name='email' id='email'
                            placeholder='seu melhor e-mail... *' required />
                    </label>
                    <Button value='se inscrever' />
                </form>
            </div>
        </div>
    )
}
