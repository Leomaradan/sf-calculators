export interface IGroup<TCategory = unknown> {
  groupId: number;
  items: number[];
  name: keyof TCategory;
}

export interface IAlbum<TCategory = unknown> {
  groups: IGroup<TCategory>[];
  page: number;
}
