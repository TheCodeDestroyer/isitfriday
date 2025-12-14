export interface GiphyImage {
  url: string;
  width: number;
  height: number;
}

export interface GiphyResponse {
  data: {
    images: {
      downsized: GiphyImage;
    };
    url: string;
  };
}
