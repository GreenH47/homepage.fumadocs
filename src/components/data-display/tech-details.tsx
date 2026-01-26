'use client';

import type { TechDetails as TechDetailsType } from '@/lib/types';
import Typography from '@/components/general/typography';
import Link from '@/components/navigation/link';
import ImageWrapper from '@/components/data-display/image-wrapper';

type Props = TechDetailsType;

const TechDetails = ({ url, logo, darkModeLogo, label }: Props) => {
    return (
        <div className="flex flex-col items-center gap-2">
            <Link noCustomization href={url} externalLink>
                <div className="relative h-[65px] w-[65px] shrink-0">
                    <ImageWrapper
                        src={logo}
                        srcForDarkMode={darkModeLogo ?? logo}
                        alt={label}
                        className="h-full w-full object-contain transition-transform duration-300 md:hover:scale-110"
                    />
                </div>
            </Link>

            <Typography variant="body1">{label}</Typography>
        </div>
    );
};

export default TechDetails;
