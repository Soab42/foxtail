import Hero from "./components/blog/Hero";
import SectionTwo from "./components/blog/SectionTwo";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import { useQueryPosts } from "./hooks";

function App() {
	const postData = useQueryPosts();
	return (
		<>
			<Header />
			<Hero />
			<SectionTwo />
			<Footer />
		</>
	);
}

export default App;
