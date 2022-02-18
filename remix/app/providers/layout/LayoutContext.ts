import { createContext, PropsWithChildren } from 'react';

export interface LayoutConfiguration {
    reset: () => void;
    setShowFooter: (value: boolean) => void;
    setShowNavigation: (value: boolean) => void;
    showFooter: boolean;
    showNavigation: boolean;
}

const defaultValue: LayoutConfiguration = {
    reset: () => {},
    setShowFooter: () => {},
    setShowNavigation: () => {},
    showFooter: true,
    showNavigation: true
};

export const LayoutContext = createContext<LayoutConfiguration>(defaultValue);

export const LayoutConsumer = LayoutContext.Consumer;
