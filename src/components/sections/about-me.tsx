// src/components/sections/about-me.tsx
import Image from 'next/image';

import GreenPose from '../../../public/images/green-pose.jpg';   // ← relative path
import Tag from '@/components/data-display/tag';
import Container from '@/components/layout/container';
import Typography from '@/components/general/typography';
import Link from '@/components/navigation/link';
import { EXTERNAL_LINKS } from '@/lib/data';

const AboutMeSection = () => (
    <Container id="about">
        {/* Section label */}
        <div className="self-center">
            <Tag label="About me" />
        </div>

        <div className="flex w-full flex-col justify-between gap-12 md:flex-row">
            {/* ----- Image block ----- */}
            <div className="flex justify-center md:order-first md:justify-end">
                <div className="relative h-[380px] w-[320px] md:h-[460px] md:w-[380px] lg:h-[520px] lg:w-[440px]">
                    <Image
                        src={GreenPose}
                        alt="Full-pose of Green"
                        className="absolute z-10 h-[360px] w-[280px] border-8 border-current max-md:left-5 md:right-0 md:top-0 md:h-[420px] md:w-[340px] lg:h-[480px] lg:w-[400px]"
                        style={{ objectFit: 'cover' }}
                    />
                    <div className="absolute h-[360px] w-[320px] border-8 border-transparent max-md:top-5 md:bottom-0 md:left-0 md:h-[420px] md:w-[340px] lg:h-[480px] lg:w-[400px]" />
                </div>
            </div>

            {/* ----- Content block ----- */}
            <div className="flex max-w-xl flex-col gap-6">
                <Typography variant="h3">Curious about me? Here you have it:</Typography>

                <Typography>
                    I'm a curious and dedicated IT support engineer with a background
                    in full-stack development. After starting my career building web applications,
                    I discovered that my true passion lies in IT infrastructure and support.
                    I find great satisfaction in resolving technical issues—whether
                    I'm imaging a fleet of new Windows 11 laptops or troubleshooting a tricky network
                    outage—and helping people stay productive.
                </Typography>

                <Typography>
                    In my work I emphasize clear communication and documentation,
                    writing knowledge base articles and keeping tickets up to date
                    so solutions are shared with the whole team. I also enjoy the challenge
                    of learning new technologies and refining processes to make IT support more efficient.
                    At home, I experiment with new tools in my lab, setting up switches and VLANs or even running a
                    Kubernetes cluster to broaden my skills beyond the helpdesk.
                </Typography>

                <Typography>
                    As an aspiring network engineer, I'm continuously building on my IT support foundation to take
                    on larger network projects. I thrive on hands-on problem solving and never stop
                    learning—whether it's earning new certifications or exploring the latest cloud services.
                </Typography>
            </div>
        </div>
    </Container>
);

export default AboutMeSection;
