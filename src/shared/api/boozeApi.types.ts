export interface BoozeItemVolumeApi {
  value: number;
  unit: string;
}

export interface BoozeItemApi {
  id: number;
  name: string;
  image_url: string;
  ph: number;
  volume: BoozeItemVolumeApi;
  srm: number;
}
