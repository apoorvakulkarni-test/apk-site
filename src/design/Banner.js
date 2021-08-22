import React from 'react'

const Banner = (props) => {
    return (
        <div>
            <img alt="Banner" className="banner-pic" src={props.pic} />
            <style jsx>{`
                .banner-pic {
                    width: 100%;
                    object-fit: cover;
                    height: 370px;
                    margin-bottom: 40px;
                }
            `}</style>
        </div>

    )
}

export default Banner