/**
 * injection token in order to use var windows and
 * sp that can determine the url currently running
 */
import { InjectionToken, FactoryProvider } from '@angular/core';

export const WINDOW = new InjectionToken<Window>('window');

const windowProvider: FactoryProvider = {
  provide: WINDOW,
  useFactory: () => window
};

export const WINDOW_PROVIDERS = [
    windowProvider
]