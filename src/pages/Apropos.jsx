import Banner from '../components/banner'
import image from '../asset/Apropos.png'
import Collapse from '../components/collapse'

/* Generate data  */
const titre = ['Fiablité', 'Respect', 'Service', 'Responsabilité']
const text =
    'Ex turba vero imae sortis et paupertinae in tabernis aliqui pernoctant vinariis, non nulli velariis umbraculorum theatralium latent, quae Campanam imitatus lasciviam Catulus in aedilitate sua suspendit omnium primus; aut pugnaciter aleis certant turpi sono fragosis naribus introrsum reducto spiritu concrepantes; aut quod est studiorum omnium maximum ab ortu lucis ad vesperam sole fatiscunt vel pluviis, per minutias aurigarum equorumque praecipua vel delicta scrutantes.'

/* Return page Apropos and data for collapse */
function Apropos() {
    return (
        <div className="Container">
            <Banner image={image} />
            <div className="CtnCollapse">
                {titre.map((item, index) => (
                    <Collapse titre={item} texte={text} key={index} />
                ))}
            </div>
        </div>
    )
}

export default Apropos
