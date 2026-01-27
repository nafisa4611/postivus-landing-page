import Image from "next/image";
import Logo from "../public/logo/logo-white-2.svg";


export default function NavBar() {
  return (
    <div>
        <Image
          src={Logo}
          alt="Logo"
          width={100}
          height={100}
        />
    </div>
  )
}
