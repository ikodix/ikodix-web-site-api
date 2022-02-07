import { ViewQueryError } from './ViewQueryError';
import { LandingViewData } from './LandingViewData';

export interface LandingViewQueryProps {
    landingData?: LandingViewData;
    isLoadingLandingData?: boolean;
    isFetchingLandingData?: boolean;
    isErrorLandingData?: boolean,
    error?: ViewQueryError;
}
