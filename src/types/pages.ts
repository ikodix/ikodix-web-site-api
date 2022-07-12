import {
    BlogContentData,
    BlogCategoryContentData,
    BlogPostContentData
} from './blog';
import {HomeContentData} from './landing';
import {SiteConfig, SiteNavigationData} from './site';

export type PagesEntryConfig = {
    pagePathList: Array<Array<string>>;
    locale: string;
};

export type PagesConfig = {
    pagesEntryConfigList: Array<PagesEntryConfig>;
};

export type PagesEntryData = {
    localId: number;
    slug: string;
    title: string;
    text: string;
    languageCode: string;
    pagesEntryConfig: PagesEntryConfig;
    contentData: ContentData;
};

export type PageDataBasic = {
    title: string;
    siteNavigationData: SiteConfig['siteNavigationData'];
    languageCode: string;
};

export type ContentDataClass = 'BlogCategory_ContentData'
    | 'Blog_ContentData'
    | 'BlogPost_ContentData'
    | 'Home_ContentData';

export type ContentDataBasic<T extends ContentDataClass> = {
    '@class': T;
};

export type ContentData = BlogPostContentData
    | BlogCategoryContentData
    | BlogContentData
    | HomeContentData;

export type PageData = PageDataBasic & {
    contentData: ContentData;
};

