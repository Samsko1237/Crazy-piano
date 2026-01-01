import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";

const images = [
  {
    src: "/images/restauration-1.jpg",
    caption: "Restauration complète int/ext des piano",
  },
  {
    src: "/images/restauration-2.jpg",
    caption: "Retouches et finitions avant remontage",
  },
  {
    src: "/images/atelier-main.jpg",
    caption: "Atelier de réparation et remise en état",
  },
  {
    src: "/images/atelier-1.jpg",
    caption: "Restauration et renouvellement de pianos",
  },
  {
    src: "/images/atelier-2.jpg",
    caption: "Mastiquage, ponçage et laquage",
  },
];

const Restauration = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-purple">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-4">
              Restauration
            </h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Notre atelier de 400m² est dédié à la restauration et la réparation 
              de vos pianos, quelle que soit leur marque.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {images.slice(0, 2).map((image, index) => (
              <motion.div
                key={image.src}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="overflow-hidden rounded-lg shadow-card">
                  <img
                    src={image.src}
                    alt={image.caption}
                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <p className="text-primary mt-4 text-center font-medium">
                  {image.caption}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Main atelier image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="overflow-hidden rounded-lg shadow-elegant">
              <img
                src={images[2].src}
                alt={images[2].caption}
                className="w-full h-96 object-cover"
              />
            </div>
            <p className="text-primary mt-4 text-center font-medium text-lg">
              {images[2].caption}
            </p>
          </motion.div>

          {/* More images */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {images.slice(3).map((image, index) => (
              <motion.div
                key={image.src}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="overflow-hidden rounded-lg shadow-card">
                  <img
                    src={image.src}
                    alt={image.caption}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <p className="text-muted-foreground mt-4 text-center">
                  {image.caption}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-muted-foreground mb-8">
              Si vous souhaitez en savoir plus sur nos services de restauration, 
              n'hésitez pas à nous contacter !
            </p>
            <Link to="/contact" className="btn-purple rounded-lg inline-block">
              Nous contacter
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Restauration;
