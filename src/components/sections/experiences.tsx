"use client"
import { useState } from 'react';
import { EXPERIENCES } from '@/lib/data';
import ExperienceDetails from '@/components/data-display/experience-details';
import Tag from '@/components/data-display/tag';
import Typography from '@/components/general/typography';
import Container from '@/components/layout/container';

const MAX_VISIBLE = 3;

const ExperienceSection = () => {
  const [showAll, setShowAll] = useState(false);

  const visibleExperiences = showAll ? EXPERIENCES : EXPERIENCES.slice(0, MAX_VISIBLE);

  return (
      <Container className="" id="employment">
        <div className="flex flex-col items-center gap-4">
          <div className="self-center">
            <Tag label="Employment Experience" />
          </div>
          <Typography variant="subtitle" className="max-w-xl text-center">
            Here is a quick summary of my most recent EMPLOYMENT experiences:
          </Typography>
        </div>

        {visibleExperiences.map((experience, index) => (
            <ExperienceDetails {...experience} key={index} />
        ))}

        {EXPERIENCES.length > MAX_VISIBLE && (
            <div className="mt-6 flex justify-center">
              <button
                  onClick={() => setShowAll((prev) => !prev)}
                  className="rounded-lg px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                {showAll ? 'See less' : 'See more'}
              </button>
            </div>
        )}
      </Container>
  );
};

export default ExperienceSection;
