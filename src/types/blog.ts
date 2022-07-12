import {ContentDataBasic} from './pages';

export type BlogContentData = ContentDataBasic<'Blog_ContentData'>;

export type BlogCategoryContentData = ContentDataBasic<'BlogCategory_ContentData'>;

export type BlogPostContentData = ContentDataBasic<'BlogPost_ContentData'> & {
    blogText: string;
    featuredImgUrl: string;
    referencingPostIds?: Array<number>;
};
