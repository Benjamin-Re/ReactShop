import { Link } from 'react-router-dom'
import styles from './App.module.css'

function App() {

  return (
    <div className={styles.root}>
      <h1>Welcome to XYZ Shop</h1>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic nihil corporis ratione ex magnam placeat accusantium tenetur odit fuga tempore architecto sapiente commodi soluta mollitia, ipsa neque minima odio libero?
      <Link to='/shop'><button type="button">Shop Now</button></Link>
    </div>
  )
}

export default App
