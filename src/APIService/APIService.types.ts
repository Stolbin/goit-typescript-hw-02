export interface UnsplashPhoto {
  id: string;
  description: string;
  urls: {
    full: string;
    regular: string;
    small: string;
  };
  likes: number;
  user: {
    name: string;
  };
}

export interface UnsplashResponse {
  results: UnsplashPhoto[];
  total: number;
  total_pages: number;
}

export interface ModalPhoto {
  url: string;
  alt: string;
}
