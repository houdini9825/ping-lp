import styles from './InputField.module.css'

function InputField({onChange, value, ...rest}) {
  return <input {...rest} className={styles.input} value={value} onChange={onChange} />
}

export default InputField