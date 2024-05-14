import { Link } from 'react-router-dom'
import { Button } from '../components/Button'
import { Carousel } from '../components/Carousel'
import "./Services.css"

export const Services = () => {
    return (
        <>
            <div className="banner services-top-bg parallax">
                <div className="max-w940 banner-info">
                    <h2>100% orgânico</h2>
                    <p>
                        trabalhamos apenas com matéria prima orgânica produzida
                    </p>
                    <Link to='/sobre'>
                        saiba mais
                    </Link>
                </div>
            </div>

            <div className="max-w940 products-show-container">
                <h2>nossos <strong>produtos</strong></h2>
                <div className="products-box">
                    <div className="product-card">
                        <div className="product-card-img">
                            <img src="../../public/hort.webp" alt="hort" title='horti' />
                        </div>
                        <h2 className="product-card-title">
                            horta
                        </h2>
                        <p className="produtc-card-description">
                            Produzimos legumes e vegetais com processos orgânicos naturais, respeitando as fases de crescimento natural e estações do ano. Sem adições de conservantes ou químicas nocivas ao consumidor ou ao solo.
                        </p>
                    </div>
                    <div className="product-card">
                        <div className="product-card-img">
                            <img src="../../public/fruta.webp" alt="fruta" title='fruta' />
                        </div>
                        <h2 className="product-card-title">
                            frutas
                        </h2>
                        <p className="produtc-card-description">
                            Nossas frutas são plantadas e colhidas com carinho, sempre respeitando seu tempo de colheita. São tratadas, selecionadas e cristalizadas e utilizadas como matéria-prima de alguns de nossos produtos totoalmente caseiros.
                        </p>
                    </div>
                    <div className="product-card">
                        <div className="product-card-img">
                            <img src="../../public/trigo.webp" alt="trigo" title='trigo' />
                        </div>
                        <h2 className="product-card-title">
                            trigo
                        </h2>
                        <p className="produtc-card-description">
                            Também trabalhamos com nossa íncrivel plantação de trigo, de onde extraímos materia-prima para nossos pães caseiros e para nossos parceiros produtores e padarias.
                        </p>
                    </div>
                </div>
            </div>

            <div className="banner services-bottom-bg parallax">
                <div className="banner-info maxw-940">
                    <h2>agende sua visita</h2>
                    <p>venha nos conhecer</p>
                    <Button value='agendar visita' />
                </div>
            </div>
            <div className="max-w940 gallery-section">
                <h2>conheça a farmhouse</h2>
                <Carousel />
            </div>
        </>
    )
}
