'use client';

import Button from '@/components/general/button';

const resumeUrl = 'https://download.greenhuang.com/GreenHuang-IT-Support.pdf';

const DownloadCV = () => {
  return (
    <Button onClick={() => window?.open(resumeUrl, '_blank')}>
      Download Resume
    </Button>
  );
};

export default DownloadCV;
