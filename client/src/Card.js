import './App.css';

function Card(props) {
    return (
        <div className="Card">
            <h3>{props.switch.brand}</h3>
            <h4>{props.switch.name}</h4>

        </div>
    );
  }

export default Card;