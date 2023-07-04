import styles from "./counter.module.css"
import Button from "../Button/Button"
import { ReactNode, useContext } from "react"
import { AppContext, AppState } from "../../CountContext"

interface CounterProps {}

function Counter(props: CounterProps) {
  const { count, mySetCount } = useContext(AppContext)

  return (
    <div className={styles.counter}>
      <p>{count}</p>
      <Button text='Click me!' />
    </div>
  )
}

export default Counter
