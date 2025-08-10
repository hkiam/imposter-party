import * as React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export function Input({ ...props }: InputProps): React.ReactElement {
  return <input className="border rounded px-2 py-1 w-full" {...props} />;
}
