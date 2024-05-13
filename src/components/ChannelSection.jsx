import { Button } from "./Button"
import './ChannelSection.css'

export const ChannelSection = () => {
    return (
        <div className="max-w940 yt-channel-section">
            <div className="yt-channel-text">
                <h3>nosso canal</h3>
                <p>
                    Conheça os processos de produção, separação e distribuição de nossa fazenda.. Saiba também o que a experiência de uma visita pode proporcionar pra você e sua família. Confira isso e muito mais em nosso canal do Youtube (video ilustrativo).
                </p>
                <Button value='clique e confira' />
            </div>
            <div className="yt-channel-frame">
                <iframe width="450" height="248" src="https://www.youtube.com/embed/Kw9yHtqC2pA?si=HOqWQqnwtXYwdjLc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
        </div>
    )
}
