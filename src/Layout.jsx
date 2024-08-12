import Nav from './Nav'
import { Outlet } from 'react-router-dom'
import { useState, useEffect } from 'react'

function Layout () {
    const [items, setItems] = useState([])
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(true)
    const [cartItems, setCartItems] = useState({})
    let cartItemsQuantity = Object.keys(cartItems).map(key => {
        return cartItems[key].quantity
    }).reduce((curr,acc) => {
        return curr + acc
    }, 0)

    useEffect(() => {
        fetch('https://fakestoreapi.com/products?limit=5')
        .then(res => {
            if(res.status >= 400) {
                throw new Error('server error')
            }
            return res.json()
        })
        .then(data => {
            setItems(data)
            console.log(data)
        })
        .catch(error => setError(error))
        .finally(()=> setLoading(false))
    }, [])

    return (
        <>
            <Nav numCartItems={cartItemsQuantity}/>
            <Outlet context={{ items, error, loading, cartItems, setCartItems }} />
        </>
    )
}

export default Layout