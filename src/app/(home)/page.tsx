// import Link from 'next/link';
import HeroSection from '@/components/sections/hero';
import ContactSection from '@/components/sections/contact';
import AboutMeSection from '@/components/sections/about-me';
import SkillsSection from '@/components/sections/skills';
import ExperienceSection from '@/components/sections/experiences';
import TestimonialsSection from '@/components/sections/testimonials';
import WorkSection from '@/components/sections/work';
import FooterSection from '@/components/layout/footer';


export default function HomePage() {
    return (
        <>
            {/*<h1 className="text-3xl text-emerald-600">Tailwind OK!</h1>*/}
            <HeroSection/>
            <AboutMeSection/>
            <SkillsSection/>
            <ExperienceSection/>
            <WorkSection/>
            <TestimonialsSection/>
            <ContactSection/>
            <FooterSection/>
        </>
    );
}
