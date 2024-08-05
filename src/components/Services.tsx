import { services } from '../lib/constants';
import { ArrowRight } from 'lucide-react';


const Services = () => {
  return (
    <section id="services" className='bg-black w-full h-full py-28 flex flex-col justify-center items-center'>
      <h2
        data-aos="fade-up" data-aos-duration="1500"
        className='text-4xl font-semibold text-white py-8'>SERVIÇOS</h2>
      <div
        data-aos="fade-right" data-aos-delay="100" data-aos-duration="1800"
        className="w-[100%] max-w-[950px] h-full mx-auto flex flex-wrap justify-center items-center gap-5 mt-12">
        {services.map((service, index) => {
          const backgroundColor = service.color;
          const hoverColor = service.hoverColor;

          return (
            <div
              key={index}
              className='flex flex-col justify-center items-center w-[285px] h-[285px] cursor-pointer rounded-full group'
              style={{
                backgroundColor: backgroundColor,
                border: `2px solid ${backgroundColor}`,
                transition: 'background-color 0.3s ease',
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = hoverColor}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = backgroundColor}
            >
              <a href={service.url} className='w-full h-full flex flex-col gap-3 justify-center items-center p-6 text-center'>
                <h4 className='text-[1.2rem] text-white font-semibold group-hover:hidden'>{service.title}</h4>
                <h6 className='text-[0.8rem] text-white group-hover:hidden'>{service.subtitle}</h6>
                <span className='hidden text-sm group-hover:block'>{service.description}</span>
                <span className='hidden text-sm text-white px-3 py-2 rounded-full group-hover:flex gap-2'
                  style={{
                    backgroundColor: backgroundColor,
                    transition: 'background-color 0.3s ease',
                  }}
                >Descubra mais <ArrowRight className='size-5' /></span>
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
