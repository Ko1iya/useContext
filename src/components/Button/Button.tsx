import { useContext } from "react"
import styles from "./button.module.css"
import { AppContext } from "../../CountContext"

interface ButtonProps {
  text: string
}

function Button({ text }: ButtonProps) {
  const { count, mySetCount } = useContext(AppContext)

  return (
    <div className={styles.button} onClick={() => mySetCount()}>
      {text}
    </div>
  )
}

export default Button
