import './Cart.css';
import { RemoveCircleOutline, DeleteOutline, AddCircleOutline } from '@mui/icons-material';


export default function Cart ({ cart, setCart, addToCart }) {

    const reduceItemQuantity = (name) => {
        const item = cart.find(item => item.name === name);
        if (item && item.quantity > 1) {
            setCart([...cart.filter(item => item.name !== name), { name, price: item.price, quantity: item.quantity - 1 }]);
        }
        else {
            setCart(cart.filter(item => item.name !== name));
        }
    };

    const removeItem = (name) => {
        setCart(cart.filter(item => item.name !== name));
    };

    const emptyCart = () => {
        setCart([]);
    };

    return (
        <div className="cart-items">
            <div className='header-and-button'>
                <h2>Cart</h2>
                {
                    cart.length > 0 && <button className='empty-cart-button' onClick={emptyCart}>Empty cart</button>
                }
            </div>
            {cart.map(item =>
                <div className="cart-item">
                    <p>{`${item.quantity}x ${item.name}`}</p>
                    <div className='item-right'>
                        {/* <div> */}

                        <div className='logo-button' onClick={() => removeItem(item.name)}>
                            <DeleteOutline />
                        </div>
                        <div className='logo-button' onClick={() => reduceItemQuantity(item.name)}>
                            <RemoveCircleOutline />
                        </div>
                        <div className='logo-button' onClick={() => addToCart(item.name, item.price)}>
                            <AddCircleOutline />
                        </div>
                        {/* </div> */}
                        <p>{`$${item.price} each`}</p>

                    </div>
                </div>
            )}
            <h3>Total: ${cart.reduce(
                (acc, item) => acc + item.price * item.quantity,
                0,
            ).toFixed(2)}</h3>
        </div>
    );
}