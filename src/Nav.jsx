import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

function Nav (props) {
    return (
        <>
            <h2>This is NAVBAR</h2>
            <Link to='/cart'><FontAwesomeIcon icon={faShoppingCart} /></Link>
            <p>Num items: {props.numCartItems}</p>
            <Link to='/'>Home</Link>
            <Link to='/shop'>Shop</Link>
        </>
    )
}

export default Nav