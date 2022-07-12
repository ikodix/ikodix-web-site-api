import {QueryError} from './commons';

export interface LandingViewQueryType {
    refetch: () => void;
    landingData?: any;
    isLoadingLandingData?: boolean;
    isFetchingLandingData?: boolean;
    isErrorLandingData?: boolean,
    error?: QueryError;
}