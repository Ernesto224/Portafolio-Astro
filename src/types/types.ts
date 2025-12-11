import { string } from "astro:schema";

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

export interface CardProjectProps {
  title: string;
  state?: string;
  imageSrc?: string;
  deployHref?: string;
  gitHref?: string;
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
  maxLength?: number;
  validation?: (value: string) => boolean;
  onChange: (value: string, isValid: boolean) => void;
}

export interface ImportSchemaEmailJsEnv {
  readonly EMAIL_JS_API_REST_URL: string;
  readonly USER_ID: string;
  readonly ACCESS_TOKEN: string;
  readonly SERVICE_ID: string;
  readonly TEMPLATE_ID: string;
}

export interface EmailTemplateParams {
  title: string;
  name: string;
  email: string;
  message: string;
  time: string;
}

export interface ApiResponse<T = any> {
  success: string;
  message: string;
  data?: T
}
