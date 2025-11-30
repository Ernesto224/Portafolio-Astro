export interface AccordionItemsProps {
  title: string;
  text: string;
  icon: string;
}

export interface IconButtonProps {
  href?: string;
  label?: string;
  ariaLabel?: string;
}

export interface TechIconProps {
  icon?: string;
  label?: string;
  ariaLabel?: string;
}

export interface TechCarruselProps {
  technologies: TechIconProps[];
}

export interface ActiveSection {
  currentSection: string;
}

export interface SectionDetectorOptions {
  offset?: number;
  threshold?: number;
  onSectionChange?: (sectionId: string) => void;
}

export interface SectionInfo {
  id: string;
  element: HTMLElement;
  top: number;
  bottom: number;
  height: number;
  isVisible: boolean;
  visibilityPercentage: number;
}

export interface InputInfo {
  id: string;
  label: string;
  placeholder?: string;
  type?: string;
  value: string;
  error?: string;
  required?: boolean;
  validation?: ( value: string ) => boolean;
  onChange: (value: string, isValid: boolean) => void;
}
