
export const getImagePath = (imagePath?: string, fullSize?: boolean) => {
  return imagePath
    ? `http://image.tmdb.org/t/p/${
        fullSize ? "original" : "w500"
      }/${imagePath}`
    : "https://www.syfy.com/sites/syfy/files/styles/hero_image__large__computer__alt/public/2019/05/john-wick-2017-image-3840x2400.jpg"
};

