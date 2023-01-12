import React from 'react'
import StarON from '../asset/StarOn.png'
import StarOff from '../asset/star.png'

/*  Component star, generate star with rating data */
function Star({ rating }) {
    const totalStar = 5
    const actStar = rating

    return (
        <div className="CtnStar">
            {[...new Array(totalStar)].map((item, index) => {
                return index < actStar ? (
                    <img
                        className="ImgStar"
                        src={StarON}
                        key={index}
                        alt="ImageStar"
                    ></img>
                ) : (
                    <img
                        className="ImgStar"
                        src={StarOff}
                        key={index}
                        alt="ImageStar"
                    ></img>
                )
            })}
        </div>
    )
}

export default Star
