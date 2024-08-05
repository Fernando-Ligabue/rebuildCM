import Contacts from '@/components/Contacts'
import { consultoriaPage } from '@/lib/constants'
import { Helmet } from 'react-helmet-async'

const Consultoria = () => {
  return (
    <>
      <Helmet>
        <title>Creative Minds | Departamento de Consultoria</title>
        <meta property="og:title" content="Creative Minds | Departamento de Consultoria" />
        <meta name="description" content="O nosso Departamento de Consultoria em Comunicação e Marketing oferece uma gama completa de serviços que asseguram que a sua marca irá destacar-se e atingirá os seus objetivos de forma eficaz e inovadora. A nossa equipa de consultores irá acompanhar de forma ativa todas as vertentes do seu negócio. Saiba mais sobre os nossos Consultoria em Comunicação e Marketing." />
        <meta property="og:description" content="O nosso Departamento de Consultoria em Comunicação e Marketing oferece uma gama completa de serviços que asseguram que a sua marca irá destacar-se e atingirá os seus objetivos de forma eficaz e inovadora. A nossa equipa de consultores irá acompanhar de forma ativa todas as vertentes do seu negócio. Saiba mais sobre os nossos Consultoria em Comunicação e Marketing." />
      </Helmet>
      <section id="about" className="w-full h-full px-5 py-10 bg-white">
        <div className='w-full h-full flex justify-center items-center'>
          {consultoriaPage.map((consult, index) => (
            <div key={index} className="max-w-[1200px] flex flex-col justify-center gap-6">
              <h2 className='text-4xl text-left font-semibold text-[#147686] md:mb-2 mb-3 py-5'>{consult.title}</h2>
              <p className='font-light text-[1rem] md:text-[1.1rem] mb-5'
                dangerouslySetInnerHTML={{ __html: consult.intro }}></p>
              <h4 className='font-light text-[2rem] md:text-[2.1rem] mb-2'>{consult.subtitle}</h4>
              <div className='about-columns md:columns-3 sm:columns-2'>
                <p className='font-light text-[1rem] md:text-[1.1rem]'
                  dangerouslySetInnerHTML={{ __html: consult.content }}></p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Contacts />
    </>
  )
}

export default Consultoria