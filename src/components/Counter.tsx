import CountUp from 'react-countup'
import { counter } from '../lib/constants'
const Counter = () => {
    return (
        <div className='px-10 py-10 w-full max-w-[1280px] mx-auto'>
            <div
                data-aos="fade-up" data-aos-duration="2000"
                className="flex justify-between items-center max-lg:flex-wrap gap-10 text-center py-10">
                {counter.map((c, index) => (
                    <div key={index} className='w-full max-w-[250px] flex justify-between md:justify-center items-center gap-2 '>
                        <div>
                            {c.icon}
                        </div>
                        <div className='flex flex-col justify-end items-end'>
                            <h3 className='text-4xl font-bold'>
                                <CountUp start={0} end={c.number} duration={8} delay={0.5} /></h3>
                            <p className='text-lg'>{c.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Counter