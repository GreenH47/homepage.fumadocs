import { Copyright } from 'lucide-react';

import Typography from '@/components/general/typography';
import Link from '@/components/navigation/link';
import { EXTERNAL_LINKS } from '@/lib/data';

const Footer = () => {
  return (
    <footer className="w-full bg-gray-50 py-6">
      <div className="flex items-center justify-center gap-1">
        <Typography className="flex items-center" variant="body3">
          <Copyright className="mr-1 inline-block h-4 w-4" />
          {new Date().getFullYear()} |&nbsp;

          Forked from  &nbsp;
          <Link
              noCustomization
              externalLink
              withUnderline
              href={EXTERNAL_LINKS.sagarshah_dev}
          >
            sagarshah.dev.
          </Link>

          &nbsp;Redesign️ by Green Huang.

          Blog page powered by&nbsp;
          <Link
              noCustomization
              externalLink
              withUnderline
              href={EXTERNAL_LINKS.fumadocs}
          >
            fumadocs
          </Link>

        </Typography>
      </div>
    </footer>
  );
};

export default Footer;
