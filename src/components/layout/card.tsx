import { mergeClasses } from '@/lib/utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

const Card = ({ className, children, ...props }: CardProps) => {
  return (
    <div
      className={mergeClasses(
        'rounded-xl shadow-md ',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
