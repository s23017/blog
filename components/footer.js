import Container from 'components/container'
import Logo from 'components/logo'
import styles from 'styles/footer.module.css'
const Footer = () => (
  <footer className={styles.wrapper}>
    <Container>
      <div className={styles.flexContainer}>
        <Logo />
        [ソーシャル]
      </div>
    </Container>
  </footer>
)
// const Footer = () => <footer>FOOTER</footer>

export default Footer
