import image from '../../static/images/illustration-dashboard.png'
import styles from './MainImg.module.css'

console.log(image)

function MainImg() {
  return <img className={styles.image} src={image} />
}

export default MainImg