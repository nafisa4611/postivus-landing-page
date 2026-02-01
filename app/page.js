import Header from "@/components/Header";
import Icon from "@/components/Icon";
import NavBar from "@/components/NavBar";
import Services from "@/components/Services";

export default function Home() {
  return (
    <div className="m-0 px-16">
      <NavBar />
      <Header />
      <Icon />
      <Services />
    </div>
  )
}