import React from 'react';

export interface TypographyProps {
  label?: string;
  type?: 'headline-1' | 'headline-2' | 'headline-3' | 'headline-4' | 'headline-5' | 'headline-6' | 'subheadline' | 'base' | 'label';
  weight?: 'regular' | 'bold';
}

function Typography({
  label,
  type,
  weight,
}: TypographyProps) {
  const className = `${type}${
    weight === 'bold' ? ` ${type}--${weight}` : ''
  }`.toLowerCase();

  return (
    <div className={className}>
      {label}
    </div>
  );
}

Typography.defaultProps = {
  label: '',
  type: 'base',
  weight: 'regular',
};

export default Typography;
