import { PropsWithChildren } from 'react';
import { LayoutConfiguration, LayoutContext } from './LayoutContext';

export type LayoutProviderProperties = PropsWithChildren<{
    configuration: LayoutConfiguration;
}>;

export const LayoutProvider = ({ children, configuration }: LayoutProviderProperties) => {
    return (
        <LayoutContext.Provider value={configuration}>
            {children}
        </LayoutContext.Provider>
    );
}
