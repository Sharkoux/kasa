import React from 'react'

/* Generate simple tag component*/
function Tag({ tag }) {
    return (
        <div className="CtnTag">
            {tag?.map((item, index) => (
                <p className="tag" key={index}>
                    {item}
                </p>
            ))}
        </div>
    )
}

export default Tag
