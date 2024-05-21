import { useState } from "react"
import Container from "./Container"

function Navbar() {
  const [isOpened, setIsOpened] = useState(false);
  const toggleMenu = () => {
    setIsOpened(!isOpened);
  }

  return (
    <header>
        <Container>
            <nav className="flex justify-between py-4 bg-white relative">
                <a href="#"><img className="w-32 mr-10" src="/RE1Mu3b.png" alt="Microsoft Icon" /></a>
                <ul className="basis-3/5 flex justify-start">
                    <li className="mx-2 hover:border-black hover:border-b-2 "><a href="#">Microsoft 365</a></li>
                    <li className="mx-2 hover:border-black hover:border-b-2 "><a href="#">Teams</a></li>
                    <li className="mx-2 hover:border-black hover:border-b-2 "><a href="#">Copilot</a> </li>
                    <li className="mx-2 hover:border-black hover:border-b-2 "><a href="#">Windows</a> </li>
                    <li className="mx-2 hover:border-black hover:border-b-2 "><a href="#">Surface</a> </li>
                    <li className="mx-2 hover:border-black hover:border-b-2 "><a href="#">Xbox</a> </li>
                    <li className="mx-2 hover:border-black hover:border-b-2 "><a href="#">Support</a></li>
                </ul>
                <ul className="basis-2/5 flex justify-end">

                    <li className="mx-2 flex cursor-pointer " onClick={()=>{toggleMenu()}}><a className="hover:border-black hover:border-b-2" href="#" >All Microsoft</a> <img  className="w-6 mx-1" src="/arrow-down.svg" alt=""  /></li>
                    <li className="mx-2 flex cursor-pointer "><a className="hover:border-black hover:border-b-2" href="#">Search</a> <img  className="w-6 mx-1" src="/search-icon.svg" alt="" /> </li>
                    <li className="mx-2 flex cursor-pointer "><a className="hover:border-black hover:border-b-2" href="#">Cart</a> <img  className="w-5 mx-2" src="/cart-shopping.svg" alt="" /></li>
                    <li className="mx-2 flex cursor-pointer "><a className="hover:border-black hover:border-b-2" href="#">Sign in</a> <img  className="w-8 p-1 mx-2 border-black border rounded-full" src="/person-line-drawing-add.svg" alt="" /></li>

                </ul>

                <div className={`absolute top-16 right-10 bg-[#f2f2f2] shadow-lg w-[80vw] p-4 z-20 ${isOpened ? "block" : "hidden"}`}>
                  <div className="flex justify-between">
                    <div>
                      <div className="my-4 font-semibold">Software</div>
                      <div className="all-product-navigation">Windows Apps</div>
                      <div className="all-product-navigation">AI</div>
                      <div className="all-product-navigation">Onedrive</div>
                      <div className="all-product-navigation">Outlook</div>
                      <div className="all-product-navigation">Skype</div>
                      <div className="all-product-navigation">OneNote</div>
                      <div className="all-product-navigation">Microsoft Teams</div>
                    </div>
                    <div>
                      <div className="my-4 font-semibold">PC & Devices</div>
                        <div className="all-product-navigation">Shop Xbox</div>
                        <div className="all-product-navigation">Accessories</div>
                    </div>
                    <div>
                      <div className="my-4 font-semibold">PC & Devices</div>
                        <div className="all-product-navigation">Shop Xbox</div>
                        <div className="all-product-navigation">Accessories</div>
                      </div>
                      <div>
                        <div className="font-semibold my-4">Entertainment</div>
                        <div className="all-product-navigation">Xbox Game Pass Ultimate</div>
                        <div className="all-product-navigation">Xbox Live Gold</div>
                        <div className="all-product-navigation">Xbox games</div>
                        <div className="all-product-navigation">PC games</div>
                        <div className="all-product-navigation">Windows digital games</div>
                      </div>
                      <div>
                        <div className="my-4 font-semibold">Business</div>
                        <div className="all-product-navigation">Microsoft Cloud</div>
                        <div className="all-product-navigation">Microsoft Security</div>
                        <div className="all-product-navigation">Azure</div>
                        <div className="all-product-navigation">Dynamics 365</div>
                        <div className="all-product-navigation">Microsoft 365 for business</div>
                        <div className="all-product-navigation">Microsoft Industry</div>
                        <div className="all-product-navigation">Microsoft Power Platform</div>
                        <div className="all-product-navigation">Windows 365</div>
                      </div>
                      <div>
                          <div className="my-4 font-semibold">Developer & IT</div>
                          <div className="all-product-navigation">Developer Center</div>
                          <div className="all-product-navigation">Documentation</div>
                          <div className="all-product-navigation">Microsoft Learn</div>
                          <div className="all-product-navigation">Microsoft Tech Community</div>
                          <div className="all-product-navigation">Azure Marketplace</div>
                          <div className="all-product-navigation">AppSource</div>
                          <div className="all-product-navigation">Visual Studio</div>
                      </div>
                      <div>
                        <div className="my-4 font-semibold">Other</div>
                        <div className="all-product-navigation">Free downloads & security</div>
                        <div className="all-product-navigation">Education</div>
                        <div className="all-product-navigation">Gift Cards</div>
                        <div className="all-product-navigation">Licensing</div>
                      </div>
                    </div>
                </div>
            </nav>
            </Container>
    </header>
  )
}

export default Navbar