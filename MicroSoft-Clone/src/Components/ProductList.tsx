
function ProductList() {
    const product = [
    {
        imgSrc:"/Link-List-Icons-Microsoft-365.svg",
        title:"Choose your Microsoft 365"
    },
    {
        imgSrc:"/Link-List-Icons-Xbox-Games-Consoles.svg",
        title: "Shop Xbox"
    },
    {
        imgSrc:"/Link-List-Icons-Microsoft-365 (1).svg",
        title:"Get Windows 11"
    },
    {
        imgSrc:"/Link-List-Icons-Surface-Devices.svg",
        title:"Explore Surface devices"
    }
    ]

  return (
    <>
        <div className='flex justify-center'>
            {
                product.map((item, index) => (
                    <div key={index} className="flex flex-col items-center justify-center p-4">
                        <img src={item.imgSrc} alt={item.title} className="w-16 h-16" />
                        <a href='#' className="text-[#0067b8] cursor-pointer underline mt-2">{item.title}</a>
                    </div>
                ))
            }

        </div>
    </>
  )
}

export default ProductList