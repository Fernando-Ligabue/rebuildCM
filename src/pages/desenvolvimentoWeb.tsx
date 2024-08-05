import Contacts from '@/components/Contacts'
import { devwebPage } from '@/lib/constants'
import { Helmet } from 'react-helmet-async'

const DesenvolvimentoWeb = () => {
  return (
    <>
      <Helmet>
        <title>Creative Minds | Departamento de Design</title>
        <meta property="og:title" content="Creative Minds | Departamento de Mutimédia" />
        <meta name="description" content="No nosso Departamento de Desenvolvimento Web, combinamos tecnologia com design inovador para criar websites e aplicações que não só impressionam, mas também proporcionam uma experiência de utilizador excecional. Saiba mais sobre os nossos serviços de Desenvolvimento Web." />
        <meta property="og:description" content="No nosso Departamento de Desenvolvimento Web, combinamos tecnologia com design inovador para criar websites e aplicações que não só impressionam, mas também proporcionam uma experiência de utilizador excecional. Saiba mais sobre os nossos serviços de Desenvolvimento Web." />
      </Helmet>
      <section id="about" className="w-full h-full px-5 py-10 bg-white">
        <div className='w-full h-full flex justify-center items-center'>
          {devwebPage.map((dev, index) => (
            <div key={index} className="max-w-[1200px] flex flex-col justify-center gap-6">
              <h2 className='text-4xl text-left font-semibold text-[#AD3043] md:mb-2 mb-3 py-5'>{dev.title}</h2>
              <p className='font-light text-[1rem] md:text-[1.1rem] mb-2'
                dangerouslySetInnerHTML={{ __html: dev.intro }}></p>
              <h4 className='font-light text-[2rem] md:text-[2.1rem] mb-2'>{dev.subtitle}</h4>
              <div className='about-columns md:columns-3 sm:columns-2'>
                <p className='font-light text-[1rem] md:text-[1.1rem]'
                  dangerouslySetInnerHTML={{ __html: dev.content }}></p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Contacts />
    </>

  )
}

export default DesenvolvimentoWeb