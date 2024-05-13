import { Link } from 'react-router-dom'
import './Home.css'

export const Home = () => {
    return (
        <>
            <div className="banner home-bg">
                <div className="max-w940 banner-info">
                    <h2>seja bem vindo</h2>
                    <p>
                        aqui você encontra a maior variedade de produtos orgânicos
                    </p>
                    <Link to='/sobre'>
                        saiba mais
                    </Link>
                </div>
            </div>
            <div className="max-w940 home-info">
                <div className="home-info-text">
                    <h3>aqui começa</h3>
                    <h3>
                        <strong>a farmhouse</strong>
                    </h3>
                    <p>
                        Começamos a Farmhouse Organic Store apenas com produtos orgânicos vindos
                        diretamente de fazendas locais. O ano era 2014. Foi a melhor colheita de
                        todos os tempos. Até hoje é lembrada como uma grande safra. Nosso objetivo
                        é fornecer um serviço onde as fazendas locais são priorizadas e os membros
                        podem acessar os itens orgânicos mais frescos disponíveis a um preço justo
                        e acessível. Nós gastamos os últimos anos construindo um negócio e um serviço
                        que nós amamos. E distribur esse amor pelas mesas de consumidores também é parte
                        do nosso objetivo.
                    </p>
                </div>
                <div className="home-info-img">
                    <img src="../../public/frutas-slices.webp" alt="frutas.webp" />
                </div>
            </div>
            <div className="max-w940 home-info">
                <div className="home-info-img">
                    <img src="../../public/cesta.webp" alt="frutas.webp" />
                </div>
                <div className="home-info-text">
                    <h3>conheça a</h3>
                    <h3>
                        <strong>farmhouse</strong>
                    </h3>
                    <p>
                        A quinta é maravilhosa típica italiana, rodeada pela natureza na aldeia,
                        perto de uma cidade. A casa é uma antiga residência onde você pode experimentar
                        momentos de puro relaxamento.
                    </p>
                </div>
            </div>
        </>
    )
}
