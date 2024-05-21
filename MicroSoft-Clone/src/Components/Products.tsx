import Container from './Container'

type Product = {
    imgSrc: string,
    title: string,
    description?: string,
    buttonText?: string,
    secondButtonText?: string

}

function Products() {
    const products:Product[] = [
        {
            imgSrc:"/Content-Card-Microsoft-365-Lifestyle-Sandstone-Icon-Toss.avif",
            title:"Maximise the everyday with Microsoft 365",
            description:"Get online protection, secure cloud storage and innovative apps designed to fit your needs – all in one plan.",
            buttonText:"For one Person",
            secondButtonText:"For up to six people"
        },
        {
            imgSrc:"/gldn-XSX-CP-Xbox-Series-X.webp",
            title:"Xbox Series X",
            description:"The fastest, most powerful Xbox ever.",
            buttonText:"Shop Xbox Series X"
        },
        {
            imgSrc:"/gldn-XSS-CP-Xbox-Series-S-Evergreen.webp",
            title:"Xbox Series S",
            description:"Next-gen performance in the smallest Xbox ever.",
            buttonText:"Learn More"
        },
        {
            imgSrc:"/Content-Card-Game-Pass-Ultimate.avif",
            title:"Xbox Game Pass Ultimate",
            description:"Play new games on day one. Plus, enjoy hundreds of high-quality games with friends on console and PC.",
            buttonText:"Learn More"
        },
    ]

  return (
    <>
    <Container>

        <div className='flex justify-between'>
            {
                products.map((product) => (
                    <div key={product.title} className='rounded-lg mx-5 basis-[30%] flex flex-col items-start min-h-[55vh] shadow-sm shadow-black/40 relative'>
                        <img className='rounded-lg' src={product.imgSrc} alt="Product image" />
                        <div className='px-4 flex-grow'>
                            <h1 className='mt-10 text-2xl font-semibold text-left'>{product.title}</h1>
                            <p className='text-lg text-left'>{product.description}</p>
                        </div>
                        <div className='w-full px-4 py-4'>
                            <button className='bg-[#0067B8] text-white px-4 py-3 font-semibold'>{product.buttonText}</button>
                            {product.secondButtonText && <a href='#' className='block mt-2 text-[#0067B8]'>{product.secondButtonText}</a>}
                        </div>
                    </div>
                ))
            }
        </div>
    </Container>
    </>
  )
}

export default Products