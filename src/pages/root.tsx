import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Projects from '@/components/Projects';
import Team from '@/components/Team';
import Clients from '@/components/Clients';
import Contacts from '@/components/Contacts';
import { Suspense } from 'react';
import LoadingHero from '@/components/LoadingHero';
const Root = () => {
    return (
        <>
            <Suspense fallback={<LoadingHero />}>
                <Hero />
            </Suspense>
            <About />
            <Services />
            <Projects />
            <Clients />
            <Team />
            <Contacts />
        </>
    )
}

export default Root