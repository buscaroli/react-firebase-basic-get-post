import Navbar from './components/Navbar'
import styles from './App.module.scss'
import Container from './components/Container'
import { DatabaseProvider } from './contexts/DatabaseContext'

function App() {
  return (
    <DatabaseProvider>
      <div className={styles.app}>
        <Navbar />
        <Container />
      </div>
    </DatabaseProvider>
  )
}

export default App
