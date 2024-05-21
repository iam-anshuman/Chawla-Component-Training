import Container from "./Container";

type ForBusinessProps = {
    badge?: string;
    imgSrc: string;
    title: string;
    description: string;
    buttonTxt: string;

}

function ForBusiness() {
    const BusinessProduct:ForBusinessProps[] = [
        {
            imgSrc:"gldn-Surf-CP-SurfaceFamilyForBusiness.avif",
            title:"Surface for business",
            description:"No matter what you do, there’s a Surface to help you do it.",
            buttonTxt:"Shop now"
        },
        {
            imgSrc:"gldn-CP-Microsoft-Teams-Commercial.webp",
            title:"Get Microsoft Teams for free",
            description:"Online meetings, chat and shared cloud storage – all in one place.",
            buttonTxt:"Sign Up for Free"
        },
        {
            badge:"New",
            imgSrc:"Content-Card-Copilot-Commercial.avif",
            title:"Copilot for Microsoft 365",
            description:"Save time and focus on the things that matter most with AI in Microsoft 365 for business.",
            buttonTxt:"Learn more"
        },
        {
            imgSrc:"Content-Card-Windows-11-Business.jpeg",
            title:"Windows 11 for business",
            description:"Designed for hybrid work. Powerful for employees. Consistent for IT. Secure for all.",
            buttonTxt:"Learn More"
        }

    ]


  return (
    <>
    <Container>

        <h1 className="text-5xl font-semibold my-4 mx-5">For Business</h1>
        <div className=" flex justify-between">
        {
            
            BusinessProduct.map((product) => (
                <div key={product.title} className='rounded-lg mx-5 basis-[30%] flex flex-col items-start min-h-[55vh] shadow-sm shadow-black/40 relative'>
                    <img className='rounded-lg' src={product.imgSrc} alt="Product image" />
                    <div className="px-4 flex-grow">
                        {product.badge && <div className="text-black bg-[#ffb900] px-2 py-1 w-14 my-2 font-semibold">{product.badge}</div>}
                        <h1 className=' text-2xl font-semibold text-left'>{product.title}</h1>
                        <p className=' text-lg text-left'>{product.description}</p>
                    </div>
                    <div className='w-full px-4'>
                        <button className='absolute bottom-4 left-4 bg-[#0067B8] text-white px-4 py-3 font-semibold'>{product.buttonTxt}</button>
                    </div>
                </div>
            ))
        }
        </div>
    </Container>
    </>
  )
}

export default ForBusiness