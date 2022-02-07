import { LandingViewQueryProps, LogoData, PageNavigationItemProps, SiteHeroData, Toggle } from '../types';

type FakeFunc<T> = () => T;
const fakeFuncInst: FakeFunc<any> = () => {};

export const useLandingViewQuery: FakeFunc<LandingViewQueryProps> = fakeFuncInst;

export const useLogoData: FakeFunc<LogoData> = fakeFuncInst;

export type UsePageNavigationItemsTypes = {
    pageNavigationItems: Array<PageNavigationItemProps>;
};
export const usePageNavigationItems: FakeFunc<UsePageNavigationItemsTypes> = fakeFuncInst;

export const useSiteHeroData: FakeFunc<SiteHeroData> = fakeFuncInst;

export const useToggle: FakeFunc<Toggle> = fakeFuncInst;
