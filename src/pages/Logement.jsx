import React from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import Carrousel from '../components/carrousel'
import useCallOne from '../components/useCallOneLogement'
import Tag from '../components/tag'
import Star from '../components/star'
import Collapse from '../components/collapse'

const CtnLogement = styled.div`
    padding: 20px;
    margin-bottom: 100px;
    color: #ff6060;
    .title {
        font-size: 36px;
        margin-bottom: 15px;
    }
    .localisation {
        font-size: 18px;
        font-weight: 500;
        margin-top: 0px;
    }
`
const CtnProfils = styled.div`
    display: flex;
    flex-wrap: wrap;
    @media only screen and (max-width: 768px) {
        flex-direction: column;
    }
    .ctnTitle {
        width: 50%;
        @media only screen and (max-width: 768px) {
            width: 100%;
        }
    }
    .ctnpstar {
        width: 50%;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        @media only screen and (max-width: 768px) {
            width: 100%;
            flex-direction: row-reverse;
            justify-content: space-between;
            align-items: center;
        }
    }
    .ctnProfil {
        display: flex;
        align-items: center;
        @media only screen and (max-width: 425px) {
            font-size: 20px;
        }
    }
    .imgProfil {
        border-radius: 50%;
        margin: 10px;
        @media only screen and (max-width: 768px) {
            height: 100px;
        }
        @media only screen and (max-width: 425px) {
            height: 80px;
        }
    }
`

const CtnCollapse = styled.div`
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    gap: 200px;
    @media only screen and (max-width: 768px) {
        gap: 40px;
        flex-direction: column;
    }
`
/* Page Logement */
function Logement() {
    /* Call id with useParams and call data with useCallOne */
    const { id } = useParams()
    const { data } = useCallOne(id)

    /* With data, generate page logement and all children component */
    return (
        <CtnLogement>
            <div>
                <Carrousel slides={data?.pictures} key={data?.id} />
            </div>
            <CtnProfils>
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
            </CtnProfils>
            <CtnCollapse>
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
            </CtnCollapse>
        </CtnLogement>
    )
}

export default Logement
