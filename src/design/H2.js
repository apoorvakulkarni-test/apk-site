const H2 = (props) => {
    return (
        <div className="design-subheading">
            <h2 className="design-subheading-top">{props.top}</h2>
            <h2 className="design-subheading-bottom">{props.bottom}</h2>
            <style jsx>{`
                .design-subheading {
                    display: flex;
                    flex-direction: column;
                }
                .design-subheading-top {
                    color: #828282;
                    font-size: 14px;
                }
                .design-subheading-bottom {
                    font-size: 32px;
                    margin: 0;
                    margin-bottom: 15px;
                }            
            `}</style>
        </div>
    )
}

export default H2