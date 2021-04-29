import { InjectionToken } from '@angular/core';
import { INavigation } from './inavigation';

export const NAVIGATION = new InjectionToken <Array<INavigation>>('navigation')