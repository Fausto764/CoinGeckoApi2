import { ListCoins } from "./ListCoins"
import styles from "./styles.module.scss"
import { useState, useEffect } from "react"
import axios from "axios"

const BasicTable = () => {
  const [coins, setCoins] = useState([])

  function fetchData() {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((response) => {
        console.log(response.data)
        setCoins(response.data)
      })
      .catch((error) => console.error("Error fetching data:", error))
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <main className={styles.appContainer}>
      <header className={styles.headerContainer}>
        <ul>
          <li>Logo</li>
          <li>Nombre</li>
          <li>Precio</li>
          <li>Capitalizacion de Mercado</li>
          <li>Cantidad Total</li>
          <button onClick={fetchData}>Reload ↻</button>
        </ul>
      </header>
      <ListCoins coins={coins} setCoins={setCoins} />
    </main>
  )
}
export { BasicTable }
