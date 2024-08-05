import { contactContent } from '@/lib/constants'
import ContactForm from './ContactForm';

const Contacts = () => {
  const [data] = contactContent;

  return (
    <section id="contacts" className='bg-black w-full h-full p-28 pb-0 flex flex-col justify-center items-center'>
      <h2
        data-aos="fade-up" data-aos-delay="100" data-aos-duration="1500"
        className='text-4xl font-semibold text-white py-8'>CONTACTOS</h2>
      <div
        data-aos="fade-right" data-aos-delay="100" data-aos-duration="1800"
        className="w-full max-w-[1200px] h-full mx-auto flex flex-wrap justify-evenly items-stretch gap-2 mt-5">
        {data.offices.map((office) => (
          <div key={office.id} className='w-full max-w-[222px] flex flex-col justify-between items-center gap-1'>
            <p className='mb-5'>{office.icon}</p>
            <div className='flex flex-col justify-between items-center'>
              <span className='w-full text-md text-white text-center font-light'>{office.city}</span>
              <span className='w-full text-md text-white text-center font-light'>{office.address}</span>
              <span className='w-full text-md text-white text-center font-light'>{office.zipcode}</span>
            </div>
            <span className='w-full text-md text-white text-center font-light mt-5'>Tel: <a className='w-full text-md hover:text-white text-center font-light' href={`tel:${office.phone}`}> {office.phone}</a>*</span>
          </div>
        ))}
        <div className='w-full flex flex-col justify-center items-center cursor-pointer gap-1 mt-10'>
          {data.emails.map((email) => (
            <p key={email.id} className='w-full text-md text-white text-center font-light'>{email.setor}:
              <a className='w-full text-md text-zinc-300 hover:text-white text-center font-light' href={`mailto:${email.email}`}> {email.email}</a>
            </p>
          ))}
        </div>
      </div>
      <ContactForm />
    </section>

  )
}

export default Contacts