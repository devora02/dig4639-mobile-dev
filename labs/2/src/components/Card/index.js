import "./index.css";

class Card {
    constructor(props) {
        // Stores the argument in this.props
        this.props = props;
        // Creates a new HTML DIV element
        this.element = document.createElement("div");
        span.innerHTML = this.props.content;
        this.element.className = "Card";
    }

    render(){
        return this.element
    }
}

export default Card;