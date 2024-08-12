import styles from './Card.module.css'

function Card (props) {

    
    function handleClick(item) {
        console.log(`clicked on ${item.title}`)
        props.setCartItems((prevCartItems) => {
            // Check if the item is already in the cart
            if (prevCartItems[item.id]) {
              // If the item exists, increment its quantity
              return {
                ...prevCartItems,
                [item.id]: {
                  ...prevCartItems[item.id],
                  quantity: prevCartItems[item.id].quantity + 1,
                },
              };
            } else {
              // If the item does not exist, add it with quantity 1
              return {
                ...prevCartItems,
                [item.id]: { ...item, quantity: 1 },
              };
            }
          });
    }

    return (
        <div className={styles.card}>
            <img className={styles.image} src={props.item.image} alt={props.item.title} />
            <h4>Product: {props.item.title}</h4>
            <h4>price: {props.item.price}</h4>
            <button type='button' onClick={()=> { handleClick(props.item) }}>Add to cart</button>
        </div>
    )
}

export default Card