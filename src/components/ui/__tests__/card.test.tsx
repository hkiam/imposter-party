import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Card, CardContent } from '../card';

describe('Card Component', () => {
  it('should render card with children', () => {
    render(
      <Card>
        <p>Card content</p>
      </Card>
    );
    expect(screen.getByText('Card content')).toBeInTheDocument();
  });

  it('should apply default CSS classes', () => {
    render(<Card data-testid="card">Content</Card>);
    const card = screen.getByTestId('card');
    expect(card).toHaveClass('border', 'rounded-xl', 'shadow', 'bg-white');
  });

  it('should apply custom className when provided', () => {
    render(
      <Card className="custom-class" data-testid="card">
        Content
      </Card>
    );
    const card = screen.getByTestId('card');
    expect(card).toHaveClass('custom-class');
    expect(card).toHaveClass('border', 'rounded-xl', 'shadow', 'bg-white'); // Should still have default classes
  });

  it('should handle empty className prop', () => {
    render(
      <Card className="" data-testid="card">
        Content
      </Card>
    );
    const card = screen.getByTestId('card');
    expect(card).toHaveClass('border', 'rounded-xl', 'shadow', 'bg-white');
  });

  it('should render complex children', () => {
    render(
      <Card>
        <div>
          <h2>Title</h2>
          <p>Description</p>
        </div>
      </Card>
    );
    expect(screen.getByText('Title')).toBeInTheDocument();
    expect(screen.getByText('Description')).toBeInTheDocument();
  });
});

describe('CardContent Component', () => {
  it('should render card content with children', () => {
    render(
      <CardContent>
        <p>Card content text</p>
      </CardContent>
    );
    expect(screen.getByText('Card content text')).toBeInTheDocument();
  });

  it('should apply default CSS classes', () => {
    render(<CardContent data-testid="card-content">Content</CardContent>);
    const cardContent = screen.getByTestId('card-content');
    expect(cardContent).toHaveClass('p-4');
  });

  it('should render within Card component', () => {
    render(
      <Card data-testid="card">
        <CardContent data-testid="card-content">Nested content</CardContent>
      </Card>
    );

    const card = screen.getByTestId('card');
    const cardContent = screen.getByTestId('card-content');

    expect(card).toBeInTheDocument();
    expect(cardContent).toBeInTheDocument();
    expect(screen.getByText('Nested content')).toBeInTheDocument();
  });

  it('should handle complex nested content', () => {
    render(
      <CardContent>
        <div>
          <h3>Heading</h3>
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
          </ul>
        </div>
      </CardContent>
    );

    expect(screen.getByText('Heading')).toBeInTheDocument();
    expect(screen.getByText('Item 1')).toBeInTheDocument();
    expect(screen.getByText('Item 2')).toBeInTheDocument();
  });
});
