import "./index.css"
import React from 'react'

class Card extends React.Component {
    render() {
        return (
        <div className = "card">
            <span className="close" onClick={() => this.props.pressMe()}>&times;</span>
            <p>{this.props.name}</p>
        <p>{this.props.temperature}{this.props.temperatureUnit}</p>
        <p>{this.props.detailedForecast}</p>
        </div>
        )
    }
    
}
export default Card;


