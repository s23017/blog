import Container from 'components/container'
import Logo from 'components/logo.js'
import Nav from 'components/nav.js'
import styles from 'styles/header.module.css'
// const Header = () => <header>HEADER</header>
const Header = () => (
  <header>
    <Container large>
      <div className={styles.flexContainer}>
        <Logo boxOn />
        <Nav />
      </div>
    </Container>
  </header>
)

export default Header
