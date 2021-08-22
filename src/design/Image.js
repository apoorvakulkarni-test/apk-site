const Image = (props) => {
    const { src, ...rest } = props
    return <img src={require(`../assets/images/${src}`)} {...rest} />
}

export default Image