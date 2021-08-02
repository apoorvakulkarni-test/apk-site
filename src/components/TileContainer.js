import React, { useRef, useState } from 'react'
import PlaceHolder from '@images/placeholder.png'
import useVisibilitySensor from "@rooks/use-visibility-sensor"

const TileContainer = (props) => {
    const rootNode = useRef(null)
    const { isVisible } = useVisibilitySensor(rootNode, {
        shouldCheckOnMount: false,
        scrollCheck: true,
        partialVisibility: true,
        scrollThrottle: 0,
        minTopValue: 120
  
      })
    let titleContainerClasses = "tile-container"
    if(isVisible) {
        titleContainerClasses += " tile-container-visible"
    }
    return (
        <div ref={rootNode} className={titleContainerClasses}>
            <h2 className="tile-title">{props.title}</h2>
            <div className="tile-body">
                {props.tiles.map(() => (
                    <div className="tile-image-container">
                        <img className="tile-image" src={PlaceHolder} />
                        <div className="tile-image-info">
                            <h3 className="tile-image-info-title">Placeholder Title</h3>
                            <p>Placeholder description</p>
                        </div>
                    </div>
                ))}
            </div>
            <style jsx>{`
                .tile-container {
                    margin: 15px 0;
                    display: flex;
                    flex-direction: column;
                    background-color: black;
                    padding: 0 48px;
                    padding-bottom: 15px;
                    opacity: 0.3;
                    transform: scale(0.93);
                    transition: 0.3s;
                }
                .tile-container-visible {
                    opacity: 1;
                    transform: none;
                }
                .tile-body {
                    display: flex;
                    flex-direction: row;
                    flex-wrap: wrap;
                    justify-content: space-between;

                }
                .tile-image-container {
                    position: relative;
                    margin: 10px;
                    width: 45%;
                    min-width: 250px;
                }
                .tile-image-container:hover {
                    cursor: pointer;
                }
                .tile-image-container:hover > .tile-image-info {
                    opacity: 1;
                }
                .tile-image {
                    width: 100%;
                    height: 100%;
                    object-fit: contain;

                }
                .tile-image-info {
                    top: 0;
                    left: 0;
                    transition: 0.5s ease-in;
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    opacity: 0;
                    background-color: white;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-direction: column;
                    font-family: SecondaryFont;
                }
                .tile-image-info-title {
                    margin: 0;
                }
                .tile-title {
                    font-family: PrimaryFont;
                    color: white;
                    font-weight: 100;
                    font-size: 45px;
                    margin-top: 60px;
                    margin-bottom: 20px;
                }
                .tile {

                }
            `}    
            </style>
        </div>
    )
}

export default TileContainer

