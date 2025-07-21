'use client';
import Image from 'next/image';
import { SOCIAL_LINKS } from '@/lib/data';
import IconButton from '@/components/general/icon-button';

const SocialIcons = () => (
    <div className="flex gap-2">
      {SOCIAL_LINKS.map((link) => (
          <IconButton key={link.url} onClick={() => window.open(link.url, '_blank')}>
            {link.icon && <link.icon />}
            {link.img && (
                <Image
                    src={link.img}
                    alt="social-logo"
                    width={30}
                    height={30}
                    priority
                    className="h-6 w-6"
                />
            )}
          </IconButton>
      ))}
    </div>
);

export default SocialIcons;
