export type SiteNavigationDrawer = {
    isSiteNavigationDrawerOpen: boolean;
    closeSiteNavigationDrawer: () => void,
    openSiteNavigationDrawer: () => void,
};

export type SiteNavigationItemData = {
    title: string;
    urls: Array<string>;
    navigationItems?: Array<SiteNavigationItemData>;
};

export type SiteNavigationData = {
    blogNavigation?: SiteNavigationItemData;
    mainPageNavigation: SiteNavigationItemData;
};

export type SiteConfig = {
    siteNavigationData: SiteNavigationData;
};
