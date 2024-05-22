import { SelectedPage } from '@/Shared/types'
import { motion } from 'framer-motion'

type Props = {
    icon: JSX.Element,
    title: string,
    description: string,
    setSelectedPage: (value: SelectedPage) => void
}

const childVariants = {
    hidden:{opacity:0, scale:0.9},
    visible:{opacity:1, scale:1}
}

const Benefit = ({icon , title , description , setSelectedPage}: Props) => {
  return (
    <motion.div 
        variants={childVariants}
        className='mt-5 rounded-md border-2 border-gray-100 px-5 py-16 text-center'
    >
        <div className='mb-4 flex justify-center'>
            <div className=' rounded-full border-2 border-gray-100 bg-primary-100 p-4'>
                {icon}
            </div>
        </div>
        <h4 className="font-bold">{title}</h4>
        <p className='my-3'>{description}</p>
        <a className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
                        onClick={()=>{setSelectedPage(SelectedPage.Benefits)}}
                        href={`#${SelectedPage.Benefits}`}
                    >
        <p>Learn More</p>
        </a>
    </motion.div>
  )
}

export default Benefit