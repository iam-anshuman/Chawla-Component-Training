import Container from "./Container"

function Footer() {
  return (
    <footer className="bg-[#f2f2f2] py-10">
        <Container>

        <div className="flex justify-between">
            <div>
                <div className="my-2 font-bold">What's new</div>
                <div className="footer-navigation">Games</div>
                <div className="footer-navigation">Surface Pro 9</div>
                <div className="footer-navigation">Surface Laptop 5</div>
                <div className="footer-navigation">Surface Laptop Go 2</div>
                <div className="footer-navigation">Microsoft Copilot</div>
                <div className="footer-navigation">Microsoft 365</div>
                <div className="footer-navigation">Windows 11 apps</div>
            </div>
            <div>
                <div className="py-2 font-bold">Microsoft Store</div>
                <div className="footer-navigation">Account profile</div>
                <div className="footer-navigation">Download Center</div>
                <div className="footer-navigation">Microsoft Store Support</div>
                <div className="footer-navigation">Returns</div>
                <div className="footer-navigation">Order tracking</div>
            </div>
            <div>
                <div className="py-2 font-bold">Education</div>
                <div className="footer-navigation">Microsoft in education</div>
                <div className="footer-navigation">Devices for education</div>
                <div className="footer-navigation">Microsoft Teams for Education</div>
                <div className="footer-navigation">Microsoft 365 Education</div>
                <div className="footer-navigation">Office Education</div>
                <div className="footer-navigation">Educator training and development</div>
                <div className="footer-navigation">Deals for students and parents</div>
                <div className="footer-navigation">Azure for students</div>
            </div>
            <div>
                <div className="py-2 font-bold">Business</div>
                <div className="footer-navigation">Microsoft Cloud</div>
                <div className="footer-navigation">Microsoft Security</div>
                <div className="footer-navigation">Azure</div>
                <div className="footer-navigation">Dynamics 365</div>
                <div className="footer-navigation">Microsoft 365</div>
                <div className="footer-navigation">Microsoft Advertising</div>
                <div className="footer-navigation">Copilot for Microsoft 365</div>
                <div className="footer-navigation">Microsoft Teams</div>
            </div>
            <div>
                <div className="py-2 font-bold">Developer & IT</div>
                <div className="footer-navigation">Developer Center</div>
                <div className="footer-navigation">Documentation</div>
                <div className="footer-navigation">Microsoft Learn</div>
                <div className="footer-navigation">Microsoft Tech Community</div>
                <div className="footer-navigation">Azure Marketplace</div>
                <div className="footer-navigation">AppSource</div>
                <div className="footer-navigation">Microsoft Power Platform</div>
                <div className="footer-navigation">Visual Studio</div>
            </div>
            <div>
                <div className="py-2 font-bold">Company</div>
                <div className="footer-navigation">Careers</div>
                <div className="footer-navigation">About Microsoft</div>
                <div className="footer-navigation">Company news</div>
                <div className="footer-navigation">Privacy at Microsoft</div>
                <div className="footer-navigation">Investors</div>
                <div className="footer-navigation">Security</div>
                <div className="footer-navigation">Sustainability</div>
            </div>
        </div>
        <div className="basis-1/2 flex justify-between my-2">
            <div className="flex justify-between">
                <div className="text-black/60 text-sm">English (India)</div>
                <div className="footer-privacy">Your Privacy Choices</div>
                <div className="footer-privacy">Consumer Health Privacy</div>
            </div>
            <div className="basis-1/2 flex justify-between">
                <div className="footer-privacy">Contact Microsoft</div>
                <div className="footer-privacy">Privacy</div>
                <div className="footer-privacy">Terms of use</div>
                <div className="footer-privacy">Trademarks</div>
                <div className="footer-privacy">About our Ads</div>
                <div className="footer-privacy">© Microsoft 2024</div>
            </div>
        </div>
        </Container>
    </footer>
  )
}

export default Footer