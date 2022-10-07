import create from 'zustand';

export type BreadcrumbType = {
  label: string;
  to: string;
};

type BreadcrumbStoreType = {
  breadcrumbs: BreadcrumbType[];
  addBreadcrumbs: (breadcrumbs: BreadcrumbType[]) => void;
  clearBreadcrumbs: () => void;
};

export const useBreadcrombs = create<BreadcrumbStoreType>((set) => ({
  breadcrumbs: [],
  addBreadcrumbs: (breadcrumbs) => {
    set({
      breadcrumbs: breadcrumbs,
    });
  },
  clearBreadcrumbs: () => {
    set({ breadcrumbs: [] });
  },
}));

export const addBreadcrumbs = useBreadcrombs.getState().addBreadcrumbs;
