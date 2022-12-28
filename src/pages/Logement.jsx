import React from 'react'
import { useEffect, useState } from 'react'
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
    .ctnTitle {
        width: 50%;
    }
    .ctnpstar {
        width: 50%;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
    }
    .ctnProfil {
        display: flex;
        align-items: center;
    }
    .imgProfil {
        border-radius: 50%;
        margin: 10px;
    }
`

const CtnCollapse = styled.div`
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    gap: 200px;
`

function Logement() {
    const { id } = useParams()
    const { data, error } = useCallOne(id)
    console.log(id)
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
                    texte={data.equipments?.map((item) => {
                        return <p>{item}</p>
                    })}
                />
            </CtnCollapse>
        </CtnLogement>
    )
}

export default Logement
