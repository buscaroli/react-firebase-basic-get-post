import Navbar from './components/Navbar'
import styles from './App.module.scss'
import Container from './components/Container'

function App() {
  return (
    <div className={styles.app}>
      <Navbar />
      <Container />
    </div>
  )
}

export default App
