import { useContext } from 'react';
import { LayoutConfiguration, LayoutContext } from './LayoutContext';

export const useLayout = (): LayoutConfiguration => useContext(LayoutContext);
