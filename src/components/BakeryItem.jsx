import "./BakeryItem.css";

// TODO: add categories used by filter, fields that sort uses
export default function BakeryItem ({ img, name, price, description, type, allergens, calories, onAddToCart }) {
    return (
        <div className="bakery-item">
            <img src={img} alt={name} />
            <div className="bakery-item-info">
                <h3>{name}</h3>
                <div className="item-category-info">
                    <p>{`Type: ${type}`}</p>
                    <p>{`Allergens: ${allergens.join(", ")}`}</p>
                    <p>{`Calories: ${calories}`}</p>
                </div>
                <p>{description}</p>
            </div>
            <div className="bottom-bar">
                <p>{`$${price}`}</p>
                <button className="add-cart-button" onClick={() => onAddToCart(name, price)}>Add to Cart</button>
            </div>
        </div>
    );
};

