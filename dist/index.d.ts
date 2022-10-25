/// <reference types="react" />
interface TypographyProps {
    label?: string;
    type?: 'headline-1' | 'headline-2' | 'headline-3' | 'headline-4' | 'headline-5' | 'headline-6' | 'subheadline' | 'base' | 'label';
    weight?: 'regular' | 'bold';
}
declare function Typography({ label, type, weight, }: TypographyProps): JSX.Element;
declare namespace Typography {
    var defaultProps: {
        label: string;
        type: string;
        weight: string;
    };
}

export { Typography };
