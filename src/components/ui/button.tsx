import * as React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: string;
  size?: string;
}

export function Button({
  children,
  ...props
}: ButtonProps): React.ReactElement {
  return (
    <button
      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
      {...props}
    >
      {children}
    </button>
  );
}
