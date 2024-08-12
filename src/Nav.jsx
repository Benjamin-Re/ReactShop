import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import styles from './Nav.module.css'

function Nav (props) {
    return (
        <div className={styles.container}>
            <div className={styles.linkgroup}>
                <Link className={styles.link} to='/'><h1>Home</h1></Link>
                <Link className={styles.link} to='/shop'>Shop</Link>
            </div>
            <div className={styles.cartgroup}>
                <Link className={styles.link} to='/cart'><FontAwesomeIcon icon={faShoppingCart} /></Link>
                <p>Num items: {props.numCartItems}</p>
            </div>
        </div>
    )
}

export default Nav