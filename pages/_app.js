import '../styles/globals.css'
import Main from '../components/layout/main'
import { TodoProvider } from '../context/todoContext'

function MyApp({ Component, pageProps }) {
  return (
    <Main>
      <TodoProvider>
        <Component {...pageProps} />
      </TodoProvider>
    </Main>
  )
}

export default MyApp
