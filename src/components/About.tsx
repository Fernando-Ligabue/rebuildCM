import { aboutContent } from '@/lib/constants';
import Counter from './Counter';

const About = () => {

  return (
    <section id="about" className="w-full h-full px-5 py-10 bg-white">
      <div className='w-full h-full flex justify-center items-center'>
        {aboutContent.map((ab, index) => (
          <div key={index} className="max-w-[1200px] flex flex-col justify-center items-center gap-6">
            <h2
              data-aos="fade-up" data-aos-duration="1500"
              className='text-4xl text-center font-semibold md:mb-5 mb-3 pt-14 pb-5'>{ab.title}</h2>
            <div
              data-aos="fade-right" data-aos-delay="100" data-aos-duration="1800"
              className='about-columns md:columns-3 sm:columns-2'>
              <p className='font-light text-[0.9rem] md:text-[1.1rem]'
                dangerouslySetInnerHTML={{ __html: ab.content }}></p>
            </div>
          </div>
        ))}
      </div>
      <Counter />
    </section>
  )
}

export default About;
