import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Artist = () => {
  return (<section id="artist">
    <motion.div
      className="py-20 bg-gray-50"
      variants={fadeIn("right")}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.6 }}
    >
      <div className="container mx-auto px-6 md:px-12 xl:px-32">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-center text-5xl lg:text-6xl xl:text-7xl text-gray-900 font-bold">
          Artistas Ink-ON
          </h2>
        </div>
        <div className="grid gap-12 items-center md:grid-cols-3">
          <div className="space-y-4 text-center">
            <img
              className="w-64 h-64 mx-auto object-cover rounded-xl md:w-40 md:h-40 lg:w-64 lg:h-64"
              src="../src/assets/img/artist/a1.jpg"
              alt="man"
              loading="lazy"
              width="1000"
              height="667"
            />
            <div>
              <h4 className="text-2xl">Hentoni Doe</h4>
              <span className="block text-sm text-gray-500">Tattoo Artist</span>
            </div>
          </div>
          <div className="space-y-4 text-center">
            <img
              className="w-64 h-64 mx-auto object-cover rounded-xl md:w-40 md:h-40 lg:w-64 lg:h-64"
              src="../src/assets/img/artist/a2.jpg"
              alt="man"
              loading="lazy"
              width="1000"
              height="667"
            />
            <div>
              <h4 className="text-2xl">Jonathan Doe</h4>
              <span className="block text-sm text-gray-500">
                Tattoo Artist
              </span>
            </div>
          </div>
          <div className="space-y-4 text-center">
            <img
              className="w-64 h-64 mx-auto object-cover rounded-xl md:w-40 md:h-40 lg:w-64 lg:h-64"
              src="../src/assets/img/artist/a3.jpg"
              alt="woman"
              loading="lazy"
              width="1000"
              height="667"
            />
            <div>
              <h4 className="text-2xl">Anabelle Doe</h4>
              <span className="block text-sm text-gray-500">
                Piercing Artist
              </span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
    </section>
  );
};

export default Artist;
