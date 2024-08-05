import { clientsContent } from "@/lib/constants";
import { X } from "lucide-react";
import { useState } from "react";
const Clients = () => {

  const [openModalIndex, setOpenModalIndex] = useState<number | null>(null);
  const openClient = clientsContent.find(client => client.id === openModalIndex);
  const [mainImage, setMainImage] = useState<string | null>(null);

  const handleModalOpen = (id: number) => {
    const client = clientsContent.find(client => client.id === id);
    if (client) {
      setOpenModalIndex(id);
      setMainImage(client.image);
    }
  };

  const handleModalClose = () => {
    setOpenModalIndex(null);
    setMainImage(null);
  };

  return (
    <section id="clients" className='bg-black w-full h-full py-28 flex flex-col justify-center items-center'>
      <h2
        data-aos="fade-up" data-aos-duration="1500"
        className='text-4xl font-semibold text-white py-8'>CLIENTES</h2>
      <div
        data-aos="fade-right" data-aos-delay="100" data-aos-duration="1800"
        className="w-full max-w-[1200px] h-full mx-auto flex flex-wrap justify-center items-stretch gap-2">
        {clientsContent.map((client) => (
          <div key={client.id} onClick={() => handleModalOpen(client.id)} className='w-full max-w-[150px] md:max-w-[225px] min-h-[98px] flex items-center cursor-pointer border border-white transition-all hover:bg-white group'>
            <p className='w-full text-md text-white text-center px-2 py-6 transition-all group-hover:text-black'
            >{client.name}
            </p>
          </div>
        ))}
      </div>

      {openModalIndex !== null && openClient && mainImage && (
        <div className="fixed top-0 left-0 w-full h-full p-5 flex justify-center items-center bg-black bg-opacity-75 z-50">
          <div className="bg-transparent p-5 rounded-md flex justify-center items-center w-full max-w-[650px] xl:max-w-[1080px] h-screen">
            <div className="flex flex-col flex-wrap justify-center items-center gap-2">
              <span className='w-full flex justify-end absolute top-5 right-6'> <X size={40} className="text-white cursor-pointer text-right" onClick={handleModalClose} /></span>
              <img src={mainImage} alt={openClient.name} className="w-full rounded-lg shadow-xl object-cover" />
            </div>
          </div>
        </div>
      )}

    </section>
  );
};

export default Clients;