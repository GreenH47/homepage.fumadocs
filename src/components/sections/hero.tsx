// src/components/sections/hero.tsx
import Image from 'next/image';
import { MapPin } from 'lucide-react';

import GreenFullPose from '../../../public/images/green-full-pose.jpg'; // relative path, no leading slash
import SocialIcons from '@/components/data-display/social-icons';
import Typography from '@/components/general/typography';
import Container from '@/components/layout/container';
import DownloadCV from "@/components/general/download-cv";


const HeroSection = () => (
    <Container id="hero">
      <div className="flex flex-col gap-12 md:flex-row">
        {/* Image block */}
        <div className="flex items-center justify-center md:order-last md:flex-grow md:justify-end">
          <div className="relative h-[300px] w-[280px] md:h-[360px] md:w-[320px]">
            <Image
                src={GreenFullPose}
                alt="Headshot of Green Huang"
                className="absolute z-10 h-[280px] w-[240px] border-8 border-gray-200 max-md:left-5 md:left-0 md:top-0 md:h-[320px] md:w-[280px]"
                style={{ objectFit: 'cover' }}
            />
            <div className="absolute h-[280px] w-[280px] border-8 border-transparent bg-gray-100 max-md:top-5 md:bottom-0 md:right-0 md:h-[320px] md:w-[280px]" />
          </div>
        </div>

        {/* Content block */}
        <div className="flex max-w-3xl flex-grow flex-col justify-center gap-8 md:order-first 2xl:gap-12">
          <div className="flex flex-col gap-2">
            <Typography variant="h1">
              Hi, I&apos;m Green Huang{' '}
              <span className="inline-block animate-waving-hand">👋</span>
            </Typography>
            <Typography>
              IT Support Engineer delivering deskside and remote support across
              multi-site SMB environments. Hands-on with Windows 10/11 builds,
              hardware break/fix, Microsoft 365/Entra ID, and on-prem AD sync.
              Comfortable juggling L1–L2 tickets, site visits, and small implementations
              (PC rollouts, network patching, basic PBX). Known for clear customer comms,
              accurate documentation, and steady, methodical troubleshooting.


            </Typography>
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex gap-2">
              <MapPin className="stroke-gray-700" />
              <Typography>Melbourne, Australia</Typography>
            </div>

            <div className="flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center">
              <span className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500" />
              </span>
              </div>
              <Typography>Available for new projects</Typography>
            </div>
          </div>

          <div className="flex items-center gap-4">
           <DownloadCV />

            <SocialIcons />
          </div>

          {/*<SocialIcons />*/}
        </div>
      </div>
    </Container>
);

export default HeroSection;
