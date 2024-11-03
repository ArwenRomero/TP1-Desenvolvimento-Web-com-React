import Footer from "../../Layout/Footer";
import Header from '../../Layout/Header/index';
import "../../styles/views/home.scss";
import Botau from '../Dashboard/index';

export default function Home() {
    return (
        <div className="Home">
            <Header />
            <Botau/>
            <Footer />
        </div>
    );
}