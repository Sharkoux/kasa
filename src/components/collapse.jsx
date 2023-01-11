import arrow from '../asset/arrow.png'
import React, { useState } from 'react'

/* Create Collapse component (toggle open/notopen) */
function Collapse({ titre, texte }) {
    const [open, setOpen] = useState(false)

    const toggle = () => {
        setOpen(!open)
    }

    return (
        <div className="DivCollapse">
            <button className="BtnCollapse" onClick={toggle}>
                {titre}
                {open ? (
                    <img
                        className="ArrowCollapse"
                        src={arrow}
                        open={open}
                    ></img>
                ) : (
                    <img src={arrow} open={open}></img>
                )}
            </button>
            {open && (
                <div className="DivTxt">
                    <div className="TxtCollapse">{texte}</div>
                </div>
            )}
        </div>
    )
}

export default Collapse
