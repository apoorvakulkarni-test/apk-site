import React from 'react'
import { BODY_MARGIN } from '@consts'

const classMappings = {
    "black": "black-bg-white-text",
    "white": "white-bg-black-text"
}

const Container = (props) => {
    let classes = "design-container "
    classes += classMappings[props.color]
    return (
        <div className={classes}>
            {props.children}
            <style jsx local>{`
                .black-bg-white-text {
                    background-color: black;
                    color: white;
                }
                .white-bg-black-text {
                    background-color: white;
                    color: black;
                }
                .design-container {
                    box-sizing: border-box;
                    padding: ${BODY_MARGIN};
                    width: 100%;
                }
            `}</style>
        </div>
    )
}

export default Container