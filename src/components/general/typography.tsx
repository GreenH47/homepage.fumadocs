import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { mergeClasses } from '@/lib/utils';

const typographyVariants = cva('text-gray-600 text-normal', {
  variants: {
    variant: {
      h1: 'mb-4 text-4xl font-bold',
      h2: 'text-lg md:text-4xl font-semibold tracking-[-0.02em] font-bold',
      h3: 'text-2xl md:text-3xl font-semibold tracking-[-0.02em] font-bold',
      subtitle: 'text-lg md:text-xl font-bold',
      body1: 'text-fd-muted-foreground',
      body2: 'text-fd-muted-foreground',
      body3: 'text-fd-muted-foreground',
    },
  },
  defaultVariants: {
    variant: 'body2',
  },
});

interface TypographyProps
  extends React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLHeadingElement>,
      HTMLHeadingElement
    >,
    VariantProps<typeof typographyVariants> {
  component?: React.ElementType;
}

let elementMapping = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  subtitle: 'p',
  body1: 'p',
  body2: 'p',
  body3: 'p',
};

type ComponentElement = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';

const Typography = React.forwardRef<
  HTMLHeadingElement | HTMLParagraphElement,
  TypographyProps
>(
  (
    { component, className = '', variant, children, ...props }: TypographyProps,
    ref
  ) => {
    const Comp = (
      component ? component : variant ? elementMapping[variant] : 'p'
    ) as ComponentElement;

    return (
      <Comp
        className={mergeClasses(typographyVariants({ variant }), className)}
        ref={ref}
        {...props}
      >
        {children}
      </Comp>
    );
  }
);

Typography.displayName = 'Typography';

export default Typography;
