import React from 'react'
import { useParams } from 'react-router-dom'
import Carrousel from '../components/carrousel'
import useCallOne from '../hook/useCallOneLogement'
import Tag from '../components/tag'
import Star from '../components/star'
import Collapse from '../components/collapse'


/* Page Logement */
function Logement() {
    /* Call id with useParams and call data with useCallOne */
    const { id } = useParams()
    const { data } = useCallOne(id)

    /* With data, generate page logement and all children component */
    return (
        <div className='Container ctnLogement'>
            <div>
                <Carrousel slides={data?.pictures} key={data?.id} />
            </div>
            <div className='CtnProfils'>
                <div className="ctnTitle">
                    <h1 className="title">{data.title}</h1>
                    <h2 className="localisation">{data.location}</h2>
                    <Tag tag={data.tags} />
                </div>
                <div className="ctnpstar">
                    <div className="ctnProfil">
                        <p>{data.host?.name}</p>
                        <img
                            alt="profilImg"
                            className="imgProfil"
                            src={data.host?.picture}
                        ></img>
                    </div>
                    <Star rating={data.rating} />
                </div>
            </div>
            <div className='CtnCollapses'>
                <Collapse titre="Description" texte={data.description} />
                <Collapse
                    titre="Equipements"
                    texte={data.equipments?.map((item, index) => {
                        return (
                            <div key={index}>
                                <p>{item}</p>
                            </div>
                        )
                    })}
                />
            </div>
        </div>
    )
}

export default Logement
