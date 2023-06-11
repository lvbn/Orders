import styles from './Sidebar.module.css'
import home from "../../assets/home.svg";
import orders from "../../assets/orders.svg";
import logout from "../../assets/logout.svg";

import { useNavigate } from 'react-router-dom'

export default function Sidebar() {

  let navigate = useNavigate()

  const routeChange = (path) => {
    // query delectr all is not working
    const menuItems = document.querySelectorAll('.menuItem')
    // console.log(menuItems)
    menuItems.forEach(i => {
      if (i.innerText === size) i.classList.add('selected')
      else i.classList.remove('selected')
    })
    navigate(path)
  }

  const handleLogout = async () => {
    fetch('http://127.0.0.1:3000/logout', {
      method: "GET",
        headers: {
          "Content-type": "application/json"
        },
        credentials: 'include'
    }).then(() => {
      navigate('/')
    })
  }

  // for svg color correction read stackoverflow:
  // https://stackoverflow.com/questions/22252472/how-can-i-change-the-color-of-an-svg-element
  return (
    <div className={styles.container}>
      <div
        className={styles.menuItem}
        onClick={() => routeChange('/')}
      >
        <img src={home} alt="home" />
        <p>HOME</p>
      </div>

      <div
        className={styles.menuItem}
        onClick={() => routeChange('/orders')}
      >
        <img src={orders} alt="orders" />
        <p>ORDERS</p>
      </div>

      <div className={`${styles.menuItem} ${styles.logout}`} onClick={handleLogout}>
        <img src={logout} alt="logout" />
        <p>Logout</p>
      </div>
    </div>
  )
}
