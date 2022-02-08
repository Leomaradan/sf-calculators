export interface IAlbumItem {
  group: number;
  id: number;
  page: number;
}

export interface IAlbumState {
  commonItems: IAlbumItem[];
  mageItems: IAlbumItem[];
  monsters: IAlbumItem[];
  scoutItems: IAlbumItem[];
  warriorItems: IAlbumItem[];
}

export type IAlbumType = keyof IAlbumState;

export type Payload = { payload: { category: IAlbumType; item: IAlbumItem } };
