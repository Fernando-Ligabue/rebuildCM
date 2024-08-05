import Contacts from "@/components/Contacts"
import { performancePage } from "@/lib/constants"
import { Helmet } from "react-helmet-async"

const Performance = () => {
  return (
    <>
      <Helmet>
        <title>Creative Minds | Departamento de Design</title>
        <meta property="og:title" content="Creative Minds | Departamento de Mutimédia" />
        <meta name="description" content="No nosso Departamento de Performance utilizamos análises avançadas e estratégias de otimização para garantir que as suas campanhas digitais atingem o máximo potencial e geram o maior retorno sobre o investimento. Saiba mais sobre os nossos serviços de Performance." />
        <meta property="og:description" content="No nosso Departamento de Performance utilizamos análises avançadas e estratégias de otimização para garantir que as suas campanhas digitais atingem o máximo potencial e geram o maior retorno sobre o investimento. Saiba mais sobre os nossos serviços de Performance." />
      </Helmet>
      <section id="about" className="w-full h-full px-5 py-10 bg-white">
        <div className='w-full h-full flex justify-center items-center'>
          {performancePage.map((design, index) => (
            <div key={index} className="max-w-[1200px] flex flex-col justify-center gap-6">
              <h2 className='text-4xl text-left font-semibold text-[#396C46] md:mb-2 mb-3 py-5'>{design.title}</h2>
              <p className='font-light text-[1rem] md:text-[1.1rem] mb-2'
                dangerouslySetInnerHTML={{ __html: design.intro }}></p>
              <h4 className='font-light text-[2rem] md:text-[2.1rem] mb-2'>{design.subtitle}</h4>
              <div className='about-columns md:columns-3 sm:columns-2'>
                <p className='font-light text-[1rem] md:text-[1.1rem]'
                  dangerouslySetInnerHTML={{ __html: design.content }}></p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Contacts />
    </>
  )
}

export default Performance