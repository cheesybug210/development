// TODO: create a component that displays a single bakery item
export default function BakeryItem ({ img, name, price, description, cart, onAddToCart }) {
    return (
        <div className="bakery-item">
            <img src={img} alt={name} />
            <div className="bakery-item-info">
                <h3>{name}</h3>
                <p>{description}</p>
            </div>
            <div className="bottom-bar">
                <p>{`$${price}`}</p>
                <button className="add-cart-button" onClick={() => onAddToCart(name, price)}>Add to Cart</button>
            </div>
        </div>
    );
};

