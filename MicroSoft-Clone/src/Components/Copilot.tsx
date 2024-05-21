import Container from './Container'

function Copilot() {
  return (
    <section className='my-10'>
        <Container>
            <div className='w-full relative'>
                <img src="/Highlight-MultiCanvas-Microsoft-Copilot-App-3screens_VP5-1596x600.avif" alt="Microdoft Copilot" />
                <div className='absolute max-w-[20%] top-1/3 left-32 '>
                    <h1 className='text-4xl font-semibold text-left my-2'>Unlock Potential with Microsoft Copilot</h1>
                    <p className='text-md my-2'>Get things done faster and unleash your creativity with the power of AI anywhere you go.</p>
                    <button className='px-4 py-2 font-semibold bg-[#0067B8] text-white my-2'>Download the Copilot App</button>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default Copilot;