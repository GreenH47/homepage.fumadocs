// src/components/layout/container.tsx
import * as React from 'react';
import { mergeClasses } from '@/lib/utils';

interface ContainerProps extends React.HTMLAttributes<HTMLElement> {}

const Container = React.forwardRef<HTMLElement, ContainerProps>(
    ({ className, children, ...props }, ref) => {
        return (
            <section
                ref={ref}
                {...props}
                className={mergeClasses(
                    // spacing only — no colour utilities here
                    'w-full py-16 md:py-20 2xl:py-24',
                    className,
                )}
            >
                <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 md:gap-12 md:px-8">
                    {children}
                </div>
            </section>
        );
    },
);

Container.displayName = 'Container';
export default Container;
