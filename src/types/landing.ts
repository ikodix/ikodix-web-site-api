import {ContentDataBasic} from './pages';

export type HomeContentData = ContentDataBasic<'Home_ContentData'> & {
    description: string;
};