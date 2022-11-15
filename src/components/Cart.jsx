export default function Cart ({ cart }) {
    return (
        <div className="cart-items">
            <h2>Cart</h2>
            {cart.map(item =>
                <div className="cart-item">
                    <p>{`${item.quantity}x ${item.name}`}</p>
                    <p>{`$${item.price} each`}</p>
                </div>
            )}
            <h3>Total: ${cart.reduce(
                (acc, item) => acc + item.price * item.quantity,
                0,
            ).toFixed(2)}</h3>
        </div>
    );
}