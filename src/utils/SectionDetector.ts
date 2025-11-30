import type { SectionDetectorOptions, SectionInfo } from "../types/types";

class SectionDetector {
    private sections: HTMLElement[] = [];
    private currentSectionId: string | null = null;
    private observer: IntersectionObserver | null = null;
    private options: Required<SectionDetectorOptions>;

    constructor(options: SectionDetectorOptions = {}) {
        this.options = {
            offset: options.offset ?? 100,
            threshold: options.threshold ?? 0.5,
            onSectionChange: options.onSectionChange ?? (() => { }),
        };
    }

    /**
     * Inicializa el detector con las secciones de la página
     */
    init = (): void => {
        this.sections = Array.from(document.querySelectorAll('section[id]'));

        if (this.sections.length === 0) {
            console.warn('No se encontraron secciones con id en la página');
            return;
        }

        this.setupIntersectionObserver();
        this.setupScrollListener();

        // Detectar sección inicial
        this.detectCurrentSection();
    };

    /**
     * Configura el Intersection Observer para mejor performance
     */
    private setupIntersectionObserver = (): void => {
        const observerOptions = {
            root: null,
            rootMargin: `-${this.options.offset}px 0px 0px 0px`,
            threshold: [0, 0.25, 0.5, 0.75, 1],
        };

        this.observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting && entry.intersectionRatio >= this.options.threshold) {
                    const sectionId = entry.target.getAttribute('id');
                    if (sectionId) {
                        this.updateCurrentSection(sectionId);
                    }
                }
            });
        }, observerOptions);

        this.sections.forEach((section) => {
            this.observer?.observe(section);
        });
    };

    /**
     * Listener de scroll como fallback y para casos edge
     */
    private setupScrollListener = (): void => {
        let ticking = false;

        window.addEventListener('scroll', () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    this.detectCurrentSection();
                    ticking = false;
                });
                ticking = true;
            }
        });
    };

    /**
     * Detecta la sección actual basándose en la posición del scroll
     */
    private detectCurrentSection = (): void => {
        const scrollPosition = window.scrollY + this.options.offset;
        let newSectionId: string | null = null;
        let maxVisibility = 0;

        this.sections.forEach((section) => {
            const rect = section.getBoundingClientRect();
            const sectionTop = window.scrollY + rect.top;
            const sectionBottom = sectionTop + rect.height;
            const sectionId = section.getAttribute('id');

            if (!sectionId) return;

            // Calcular qué tan visible está la sección
            const viewportTop = window.scrollY + this.options.offset;
            const viewportBottom = window.scrollY + window.innerHeight;

            const visibleTop = Math.max(viewportTop, sectionTop);
            const visibleBottom = Math.min(viewportBottom, sectionBottom);
            const visibleHeight = Math.max(0, visibleBottom - visibleTop);
            const visibilityPercentage = visibleHeight / rect.height;

            // La sección con mayor visibilidad es la activa
            if (visibilityPercentage > maxVisibility) {
                maxVisibility = visibilityPercentage;
                newSectionId = sectionId;
            }
        });

        if (newSectionId && newSectionId !== this.currentSectionId) {
            this.updateCurrentSection(newSectionId);
        }
    };

    /**
     * Actualiza la sección actual y ejecuta el callback
     */
    private updateCurrentSection = (sectionId: string): void => {
        if (this.currentSectionId !== sectionId) {
            this.currentSectionId = sectionId;
            this.options.onSectionChange(sectionId);
        }
    };

    /**
     * Obtiene el ID de la sección actual
     */
    getCurrentSectionId = (): string | null => {
        return this.currentSectionId;
    };

    /**
     * Obtiene información detallada de todas las secciones
     */
    getSectionsInfo = (): SectionInfo[] => {
        const scrollPosition = window.scrollY;
        const viewportHeight = window.innerHeight;

        return this.sections.map((section) => {
            const rect = section.getBoundingClientRect();
            const sectionTop = scrollPosition + rect.top;
            const sectionBottom = sectionTop + rect.height;
            const sectionId = section.getAttribute('id') || '';

            // Calcular visibilidad
            const viewportTop = scrollPosition + this.options.offset;
            const viewportBottom = scrollPosition + viewportHeight;
            const visibleTop = Math.max(viewportTop, sectionTop);
            const visibleBottom = Math.min(viewportBottom, sectionBottom);
            const visibleHeight = Math.max(0, visibleBottom - visibleTop);
            const visibilityPercentage = visibleHeight / rect.height;

            return {
                id: sectionId,
                element: section,
                top: sectionTop,
                bottom: sectionBottom,
                height: rect.height,
                isVisible: visibilityPercentage > 0,
                visibilityPercentage: Math.round(visibilityPercentage * 100) / 100,
            };
        });
    };

    /**
     * Verifica si una sección específica está visible
     */
    isSectionVisible = (sectionId: string): boolean => {
        const section = this.sections.find((s) => s.getAttribute('id') === sectionId);
        if (!section) return false;

        const rect = section.getBoundingClientRect();
        const viewportHeight = window.innerHeight;

        return rect.top < viewportHeight && rect.bottom > this.options.offset;
    };

    /**
     * Limpia los listeners y observers
     */
    destroy = (): void => {
        this.observer?.disconnect();
        this.observer = null;
        this.sections = [];
        this.currentSectionId = null;
    };
}

/**
 * Función helper para uso rápido
 */
export const createSectionDetector = (options?: SectionDetectorOptions): SectionDetector => {
    const detector = new SectionDetector(options);
    detector.init();
    return detector;
};

/**
 * Hook simple para obtener la sección actual
 */
export const getCurrentSection = (): string | null => {
    const sections = Array.from(document.querySelectorAll('section[id]'));
    const scrollPosition = window.scrollY + 100;

    for (const section of sections) {
        const rect = section.getBoundingClientRect();
        const sectionTop = window.scrollY + rect.top;
        const sectionBottom = sectionTop + rect.height;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            return section.getAttribute('id');
        }
    }

    return sections[0]?.getAttribute('id') || null;
};

export default SectionDetector;