import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import MainImg from './components/MainImg/MainImg';
import styles from './App.module.css'

function App() {
	return (
		<div className={styles.container}>
			<Header />
      <MainImg/>
      <Footer/>
		</div>
	);
}

export default App;
