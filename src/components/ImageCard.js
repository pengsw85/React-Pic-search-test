import React from "react";

class ImageCard extends React.Component {
    constructor(props) {
        super(props);

        this.state = { spans: 0 };
        this.imageRef = React.createRef();
    }

    componentDidMount() {
        // we do this because if we setSpan(imageRef), we cant, coz
        // imageRef have not been loaded yet
        this.imageRef.current.addEventListener("load", this.setSpan);
    }

    setSpan = () => {
        const height = this.imageRef.current.clientHeight;
        const spans = Math.ceil(height / 10);

        this.setState({ spans: spans });
    };

    render() {
        const image = this.props.image;
        return (
            <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
                <img
                    ref={this.imageRef}
                    alt={image.description}
                    src={image.urls.regular}
                />
            </div>
        );
    }
}

export default ImageCard;
