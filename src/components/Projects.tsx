import { useState } from 'react'
import { projectsContent } from '../lib/constants'
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
const Projects = () => {

    const [openModalIndex, setOpenModalIndex] = useState<number | null>(null);
    const openProject = projectsContent.find(project => project.id === openModalIndex);
    const [mainImage, setMainImage] = useState<string | null>(null);

    const handleModalOpen = (id: number) => {
        const project = projectsContent.find(project => project.id === id);
        if (project) {
            setOpenModalIndex(id);
            setMainImage(project.images[0]);
        }
    };

    const handleModalClose = () => {
        setOpenModalIndex(null);
        setMainImage(null);
    };

    const handleNextImage = () => {
        if (openProject && mainImage) {
            const currentIndex = openProject.images.indexOf(mainImage);
            const nextIndex = (currentIndex + 1) % openProject.images.length;
            setMainImage(openProject.images[nextIndex]);
        }
    }

    const handlePrevImage = () => {
        if (openProject && mainImage) {
            const currentIndex = openProject.images.indexOf(mainImage);
            const prevIndex = (currentIndex - 1) % openProject.images.length;
            setMainImage(openProject.images[prevIndex]);
        }
    }

    return (
        <section id="projects" className="relative w-full h-full px-5 py-10 bg-white">
            <div className='w-full h-full flex justify-center items-center'>
                <div className="max-w-[1200px] flex flex-col justify-center items-center gap-6">
                    <h2
                        data-aos="fade-up" data-aos-duration="1500"
                        className='text-4xl font-semibold md:mb-5 mb-3 py-14'>PROJETOS</h2>
                    <div
                        data-aos="fade-right" data-aos-delay="100" data-aos-duration="1800"
                        className='w-full flex justify-center xl:justify-start items-center flex-wrap gap-1'>
                        {projectsContent.map((project) => (

                            <div key={project.id} onClick={() => handleModalOpen(project.id)} className='relative w-full min-w-[290px] max-w-[290px] h-full cursor-pointer transition-all group'>
                                <img className="object-cover" src={project.capa} alt={project.title} />
                                <span
                                    className='absolute hidden bottom-0 left-0 bg-zinc-600 bg-opacity-60 w-full text-lg text-white font-semibold px-2 py-8 transition-all group-hover:block'
                                >
                                    {project.title}
                                </span>
                            </div>
                        ))}
                    </div>

                    {openModalIndex !== null && openProject && mainImage && (
                        <div className="fixed top-0 left-0 w-full h-full p-5 flex justify-center items-center bg-black bg-opacity-75 z-50">
                            <div className="bg-transparent p-5 rounded-md flex justify-center items-center w-full max-w-[650px] xl:max-w-[850px] h-screen">
                                <div className="flex flex-col flex-wrap justify-center items-center gap-2">
                                    <span className='w-full flex justify-end absolute top-5 right-6'> <X size={40} className="text-white cursor-pointer text-right" onClick={handleModalClose} /></span>
                                    <div className="relative w-full flex justify-center items-center">
                                        <ChevronLeft size={40} className="text-zinc-950 cursor-pointer absolute left-2" onClick={handlePrevImage} />
                                        <img src={mainImage} alt={openProject.title} className="w-full rounded-lg shadow-xl object-cover" />
                                        <ChevronRight size={40} className="text-zinc-950 cursor-pointer absolute right-2" onClick={handleNextImage} />
                                    </div>
                                    <div className='flex gap-1 mt-4 mb-2 overflow-x-auto'>
                                        {openProject.images.map((image, index) => (

                                            <img
                                                key={index}
                                                src={image}
                                                height={200}
                                                width={200}
                                                alt={`Image ${index + 1}`}
                                                className={`w-20 h-20 rounded-lg object-cover cursor-pointer ${mainImage === image ? "border-2 border-black" : ""}`}
                                                onClick={() => setMainImage(image)}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}

export default Projects