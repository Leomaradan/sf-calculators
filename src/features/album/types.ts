export interface IAlbumItem {
  group: number;
  id: number;
  page: number;
}

export interface IAlbumState {
  items: IAlbumItem[];
  mages: IAlbumItem[];
  monsters: IAlbumItem[];
  scouts: IAlbumItem[];
  warriors: IAlbumItem[];
}

export type IAlbumType = keyof IAlbumState;

export type Payload = { payload: { category: IAlbumType; item: IAlbumItem } };
