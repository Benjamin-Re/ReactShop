
import Card from './Card'
import { useOutletContext } from 'react-router-dom'

function Shop () {
    const { items, error, loading, cartItems, setCartItems } = useOutletContext()


    return (
        <>
            <h2>This is the SHOP</h2>
            {error && <div className="text-red-700">{error}</div>}
            {loading ? (
               <p>Loading...</p>
            ) : (
                <div>
                    {items.map(i => {
                        return <Card
                            item={i} 
                            title={i.title} 
                            price={i.price} 
                            key={i.id}
                            setCartItems={setCartItems}
                            cartItems={cartItems}
                            ></Card>
                    })}
                </div>
            )}
        </>
    )
}

export default Shop