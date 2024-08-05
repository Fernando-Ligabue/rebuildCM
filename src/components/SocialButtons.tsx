import { icons } from '@/lib/constants'

import { MdOutlineCalendarMonth } from "react-icons/md";


const SocialButtons = () => {

    return (
        <div className='fixed top-[15%] right-0 z-10'>
            <div className='flex flex-col justify-end items-end overflow-hidden'>
                <div className='flex flex-col justify-end items-end'>
                    <a href="#reuniao" className='w-10 lg:w-36 h-10 px-2 cursor-pointer flex items-center justify-between bg-black hover:bg-zinc-900 mb-1 rounded-[4px]'>
                        <MdOutlineCalendarMonth className='text-white text-[16px] bg-transparent ml-1' /><span className='text-white text-center text-[10px] bg-transparent hidden lg:block'> AGENDAR REUNIÃO</span>
                    </a>
                    <div className='w-fit flex flex-col justify-end items-end gap-1'>
                    {icons.map((icon) => (
                        <a href={icon.href} target="_blank" key={icon.name} className='w-10 h-10 p-2 cursor-pointer flex justify-center items-center bg-black hover:bg-zinc-900 rounded-[4px]'>
                            {icon.icon}
                        </a>
                    ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SocialButtons