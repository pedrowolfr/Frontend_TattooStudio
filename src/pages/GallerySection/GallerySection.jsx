import { galleryData } from "../../data";
import { PhotoAlbum } from "react-photo-album";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

export default function GallerySection() {
  const { title, images } = galleryData;

  return (
    <div
      id="GallerySection"
      className="relative bg-[#f9f9f9] section mt-[40px]"
    >
      {/* title */}
      <motion.div
        className="container mx-auto"
        variants={fadeIn("up")}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.6 }}
      >
        <h2 className="h2 max-w-[370px]">{title}</h2>
      </motion.div>
      {/* gallery */}
      <motion.div
        className="mb-8 lg:mb-20"
        variants={fadeIn("up")}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.2 }}
      >
        <PhotoAlbum photos={images} layout="rows" />
      </motion.div>
    </div>
  );
}
