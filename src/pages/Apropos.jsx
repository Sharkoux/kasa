import Banner from '../components/banner'
import image from '../asset/Apropos.png'
import Collapse from '../components/collapse'
import styled from 'styled-components'

const DivApropos = styled.div`
    padding: 20px;
    .CtnCollapse {
        margin-left: 100px;
        margin-right: 100px;
    }
`
const titre = ['Fiablité', 'Respect', 'Service', 'Responsabilité']
const text =
    'Ex turba vero imae sortis et paupertinae in tabernis aliqui pernoctant vinariis, non nulli velariis umbraculorum theatralium latent, quae Campanam imitatus lasciviam Catulus in aedilitate sua suspendit omnium primus; aut pugnaciter aleis certant turpi sono fragosis naribus introrsum reducto spiritu concrepantes; aut quod est studiorum omnium maximum ab ortu lucis ad vesperam sole fatiscunt vel pluviis, per minutias aurigarum equorumque praecipua vel delicta scrutantes.'

function Apropos() {
    return (
        <DivApropos>
            <Banner image={image} />
            <div className="CtnCollapse">
                {titre.map((item) => (
                    <Collapse titre={item} texte={text} />
                ))}
            </div>
        </DivApropos>
    )
}

export default Apropos
