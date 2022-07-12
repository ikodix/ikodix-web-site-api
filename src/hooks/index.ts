import {
    BlogCategoryContentData,
    BlogContentData,
    BlogPostContentData,
    ContentData,
    HomeContentData,
    LandingViewQueryType,
    SiteNavigationData,
    SiteNavigationDrawer
} from '../types';

type FakeFunc<T> = () => T;
const fakeFuncInst: FakeFunc<any> = () => {};

export const usePageContentData: FakeFunc<ContentData> = fakeFuncInst;
export const useLandingViewQuery: FakeFunc<LandingViewQueryType> = fakeFuncInst;
export const useSiteNavigationData: FakeFunc<SiteNavigationData> = fakeFuncInst;
export const useSiteNavigationDrawer: FakeFunc<SiteNavigationDrawer> = fakeFuncInst;
export const useBlogCategoryContentData: FakeFunc<BlogCategoryContentData> = fakeFuncInst;
export const useBlogContentData: FakeFunc<BlogContentData> = fakeFuncInst;
export const useBlogPostContentData: FakeFunc<BlogPostContentData> = fakeFuncInst;
export const useHomeContentData: FakeFunc<HomeContentData> = fakeFuncInst;

