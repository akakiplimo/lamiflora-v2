import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-forest text-white hover:bg-forest-600 hover:shadow-medium',
        rose: 'border-2 rounded-md text-black cursor-pointer hover:text-white hover:border-blue-700 hover:bg-blue-700 hover:shadow-rose',
        peach: 'bg-peach text-forest hover:bg-peach-400 hover:shadow-petal',
        outline:
          'border-2 rounded-md border-forest text-forest hover:bg-forest hover:text-gray-500 cursor-pointer',
        outlineRose:
          'border-2 rounded-md border-rose text-rose hover:bg-rose hover:text-white',
        outlineWhite:
          'border-2 rounded-md border-white text-white hover:bg-white hover:text-forest',
        ghost: 'text-forest hover:bg-forest/10',
        link: 'text-rose underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-12 px-6 py-3',
        sm: 'h-10 px-4 py-2 text-sm',
        lg: 'h-14 px-8 py-4 text-lg',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
