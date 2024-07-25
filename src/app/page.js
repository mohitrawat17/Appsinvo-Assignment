import Header from "./_components/header";
import Professional_training from "./_components/professional_training";
import { DataProvider } from "./assets/globalContext";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Venues from "./_components/venues";
import Footer from "./_components/footer";
import Success_and_achievements from "./_components/success_and_achievements";
import Online_sessions from "./_components/online_sessions";
import Why_choose_us from "./_components/why_choose_us";


export default function Home() {
  return (
      <DataProvider>
        <Header />
        <Professional_training />
        <Venues/>
        <Online_sessions/>
        <Why_choose_us/>
        <Success_and_achievements/>
        <Footer/>
      </DataProvider>
  );
}
