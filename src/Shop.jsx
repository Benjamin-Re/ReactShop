
import Card from './Card'
import { useOutletContext } from 'react-router-dom'
import styles from './Shop.module.css'

function Shop () {
    const { items, error, loading, cartItems, setCartItems } = useOutletContext()


    return (
        <div>
            
            {error && <div className="text-red-700">{error}</div>}
            {loading ? (
               <p>Loading...</p>
            ) : (
                <div className={styles.container}>
                    {items.map(i => {
                        return <Card
                            item={i} 
                            key={i.id}
                            setCartItems={setCartItems}
                            cartItems={cartItems}
                            ></Card>
                    })}
                </div>
            )}
        </div>
    )
}

export default Shop