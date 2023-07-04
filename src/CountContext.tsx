// Этот файл содержит определение контекста и компонент для управления состоянием контекста.
// Контекст используется для передачи данных между компонентами без необходимости явно прокидывать пропсы через каждый уровень иерархии компонентов.

import { createContext, useState } from "react"

// Определение интерфейса контекста
interface IAppContext {
  count: number
  mySetCount: () => void // Функция для установки значения count
}

// Создание контекста
export const AppContext = createContext<IAppContext>({
  count: 0,
  mySetCount: () => {}, // Пустая функция по умолчанию
})

// Компонент, обеспечивающий состояние контекста
export function AppState({ children }: { children: React.ReactNode }) {
  const [count, setCount] = useState(0)

  // Функция для установки значения count
  const mySetCount = () => {
    setCount(count + 1)
  }

  return (
    <AppContext.Provider value={{ count, mySetCount }}>
      {children}
    </AppContext.Provider>
  )
}
// Здесь мы создаем контекст помощью AppContext, поэтому оборачиваем в return "AppState" его children
// Далее для использования этого контекста в дочерних элементов мы будем использовать "Обертку" <AppState><AppState/>
//
