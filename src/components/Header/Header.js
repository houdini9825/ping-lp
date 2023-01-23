import { useState } from 'react';
import Button from '../Button/Button';
import InputField from '../InputField/InputField';
import styles from './Header.module.css'

function Header() {
  const [email, setEmail] = useState('')
  const [validEmail, setValidEmail] = useState(true)

  const handleChange = (e) => {
    setEmail(e.target.value)
    setValidEmail(true)
  }

  const handleSubmit = (e) => {
    e.preventDefault() 
    if (email.length < 10) {
      setValidEmail(false)
      return
    }
    setEmail('')
  }

	return (
		<div className={styles.container}>
      <h1 className={styles.h1}>Ping.</h1>
      <p className={styles.launch}>We are launching <span className={styles.span}>soon!</span></p>
      <p className={styles.subscribe}>Subscribe and get notified</p>
      <form className={styles.form} onSubmit={handleSubmit}>
        <InputField placeholder="Your email address" value={email} onChange={handleChange} />
        {validEmail ? null : <p>Please enter valid email.</p>}
			<Button>
				Notify Me
			</Button>
      </form>
		</div>
	);
}

export default Header;
