import * as React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

interface CardContentProps {
  children: React.ReactNode;
}

export function Card({
  children,
  className = '',
}: CardProps): React.ReactElement {
  return (
    <div className={`border rounded-xl shadow bg-white ${className}`}>
      {children}
    </div>
  );
}

export function CardContent({
  children,
}: CardContentProps): React.ReactElement {
  return <div className="p-4">{children}</div>;
}
