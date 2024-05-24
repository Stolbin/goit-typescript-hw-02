import "./App.css";
import { useState, useEffect } from "react";
import { LoadMoreBtn } from "../LoadMoreBtn/LoadMoreBtn";
import { ErrorMessage } from "../ErrorMessage/ErrorMessage";
import { SearchBar } from "../SearchBar/SearchBar";
import { ImageGallery } from "../ImageGallery/ImageGallery";
import { Loader } from "../Loader/Loader";
import ImageModal from "../ImageModal/ImageModal";
import { getPhotos } from "../../APIService/APIService";
import { Toaster } from "react-hot-toast";
import { ModalPhoto, UnsplashPhoto } from "../../APIService/APIService.types";

export default function App() {
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState<number>(1);
  const [images, setImages] = useState<UnsplashPhoto[]>([]);
  const [totalResults, setTotalResults] = useState<number>(0);
  const [query, setQuery] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<ModalPhoto>({
    url: "",
    alt: "",
  });

  useEffect(() => {
    if (!query) return;
    setLoading(true);
    getPhotos(query, page)
      .then(({ results, total_pages }) => {
        setImages((prev) => [...prev, ...results]);
        setTotalResults(total_pages);
      })
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false));
  }, [query, page]);

  function handleSubmit(query: string) {
    setImages([]);
    setPage(1);
    setError(null);
    setTotalResults(0);
    setQuery(query);
  }
  function handleLoadMore() {
    setPage(page + 1);
  }
  const handleImageClick = (imageUrl: string, imageAlt: string): void => {
    setSelectedImage({ url: imageUrl, alt: imageAlt });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    //setSelectedImage(null);
    setIsModalOpen(false);
  };

  return (
    <>
      <SearchBar onSubmit={handleSubmit} />
      {loading && <Loader />}
      {error ? (
        <ErrorMessage />
      ) : (
        <ImageGallery images={images} onClick={handleImageClick} />
      )}
      {totalResults > 0 && images.length < totalResults && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}

      <ImageModal
        images={selectedImage}
        isOpen={isModalOpen}
        onRequestClose={closeModal}
      />

      <Toaster />
    </>
  );
}
