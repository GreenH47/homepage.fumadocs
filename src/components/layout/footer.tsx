import { Copyright } from 'lucide-react';

import Typography from '@/components/general/typography';
import Link from '@/components/navigation/link';
import { EXTERNAL_LINKS } from '@/lib/data';

const Footer = () => {
  return (
      <footer className="w-full py-6">
        <div className="flex flex-wrap items-center justify-center gap-x-1 gap-y-2 text-center">
          <Typography
              variant="body3"
              className="flex flex-wrap items-center justify-center gap-x-1 gap-y-2"
          >
            {/* copyright + year */}
            <span className="flex items-center whitespace-nowrap">
            <Copyright className="mr-1 inline-block h-4 w-4" />
              {new Date().getFullYear()}
          </span>

            {/* separator */}
            <span aria-hidden="true">|</span>

            {/* fork attribution */}
            <span className="whitespace-nowrap">
            Forked from{' '}
              <Link
                  noCustomization
                  externalLink
                  withUnderline
                  href={EXTERNAL_LINKS.sagarshah_dev}
              >
              sagarshah.dev
            </Link>
          </span>

            {/* redesign credit */}
            <span className="whitespace-nowrap">Redesign by Green Huang</span>

            {/* blog engine */}
            <span className="whitespace-nowrap">
            Blog powered by{' '}
              <Link
                  noCustomization
                  externalLink
                  withUnderline
                  href={EXTERNAL_LINKS.fumadocs}
              >
              Fumadocs
            </Link>
          </span>
          </Typography>
        </div>
      </footer>
  );
};

export default Footer;
