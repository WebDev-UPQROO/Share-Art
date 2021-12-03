import { useEffect, useState } from "react";

const useCarousel = (images = []) => {
  const [actualImage, setActualImage] = useState(null);

  useEffect(() => {
    if (images?.length > 0)
      setActualImage({
        url: images[0]?.url,
        index: 0,
      });
  }, [images?.length]);// eslint-disable-line react-hooks/exhaustive-deps

  const nextImage = () => {
    actualImage?.index < images?.length - 1
      ? setActualImage({
          url: images[actualImage?.index + 1]?.url,
          index: actualImage?.index + 1,
        })
      : setActualImage({
          url: images[0]?.url,
          index: 0,
        });
  };

  return [actualImage, nextImage];
};

export default useCarousel;
