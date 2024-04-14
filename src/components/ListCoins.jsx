import styles from "./styles.module.scss"

const ListCoins = ({ coins, setCoins }) => {
  return (
    <div className={styles.listContainer}>
      <ul>
        {coins.map((coin, index) => {
          return (
            <li key={index}>
              <img src={coin.image} />
              <span>{coin.name}</span>
              <span>{`$ ${coin.current_price}`}</span>
              <span>{coin.market_cap}</span>
              <span>{coin.total_supply}</span>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
export { ListCoins }
