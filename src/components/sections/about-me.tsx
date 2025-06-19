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
                    I&apos;m a passionate&nbsp;
                    <Link
                        noCustomization
                        externalLink
                        withUnderline
                        href={EXTERNAL_LINKS.GITHUB}
                    >
                        self-proclaimed programmer
                    </Link>
                    &nbsp;who specialises in full-stack development (React.js &amp; C#).
                    I’m enthusiastic about bringing the technical and visual aspects of
                    digital products to life. User experience, pixel-perfect design and
                    writing clear, readable, highly-performant code all matter to me.
                </Typography>

                <Typography>
                    I began my journey as a web developer in 2021; since then I’ve
                    continued to grow, taking on new challenges and learning the latest
                    technologies. Now, three years in, I’m building cutting-edge web apps
                    with Next.js, TypeScript, NestJS and more.
                </Typography>

                <Typography>
                    I’m very much a progressive thinker and enjoy working on products
                    end-to-end, from ideation all the way to delivery.
                </Typography>
            </div>
        </div>
    </Container>
);

export default AboutMeSection;
