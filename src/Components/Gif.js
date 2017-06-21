import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

class Gif extends React.Component {
    constructor(props) {
        super(props);
        this.dayOfWeek = props.weekday;
        this.gifUrl = 'http://media4.giphy.com/media/N256GFy1u6M6Y/giphy.gif';
        this.giphyApiKey = 'not gonna put that here ofc';
    }

    componentDidMount() {
        axios.get(`https://api.giphy.com/v1/gifs/random?api_key=${this.giphyApiKey}&rating=G&tag=${this.dayOfWeek}`)
            .then((response) => {
                this.gifUrl = response.data.data.image_url;
                setTimeout(() => {
                    this.forceUpdate();
                }, 500);
            });
    }

    shouldComponentUpdate() {
        return false;
    }

    render() {
        return (
            <div className="iff-gif">
                <img src={this.gifUrl} alt="Gif" title="Gif" />
                <br/>
            </div>
        );
    }
}

Gif.propTypes = { weekday: PropTypes.string };
Gif.defaultProps = { weekday: 'Unknown day' };

export default Gif;
