import { useOutletContext } from 'react-router-dom'
import styles from './Cart.module.css'

function Cart () {
    const { cartItems } = useOutletContext()
    const cartItemKeys = Object.keys(cartItems)
    return (
        <>
            <h1>Im the shopping Cart</h1>
            <ul className={styles.container}>

                {cartItemKeys.length > 0 ? cartItemKeys.map(key => {
                    return <li key={key}>{cartItems[key].title}, {cartItems[key].quantity}</li>
                }) : <div>empty</div>}
                
            </ul>
        </>
    )
}

export default Cart