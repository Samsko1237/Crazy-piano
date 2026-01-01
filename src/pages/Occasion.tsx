import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";

const pianos = [
  {
    id: 1,
    name: "Irmler Blanc",
    category: "Professionnel",
    image: "/images/piano-blanc.jpg",
  },
  {
    id: 2,
    name: "Irmler Noir - Queue",
    category: "Professionnel",
    image: "/images/piano-queue-noir.jpg",
  },
];

const Occasion = () => {
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
              Pianos d'Occasion
            </h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Découvrez tous les modèles de pianos d'occasion et accessoires que 
              nous vendons actuellement chez Crazy-Piano.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-6">
          {/* Images showcase */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {pianos.map((piano, index) => (
              <motion.div
                key={piano.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="overflow-hidden rounded-lg bg-card border border-border shadow-card">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={piano.image}
                      alt={piano.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <span className="text-primary text-sm font-medium">{piano.category}</span>
                    <h3 className="font-display text-xl text-foreground mt-1">{piano.name}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex items-center justify-center"
            >
              <div className="text-center p-8">
                <p className="text-6xl mb-4">🎹</p>
                <p className="text-muted-foreground">Voir également notre rubrique promotions</p>
              </div>
            </motion.div>
          </div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <p className="text-lg text-foreground mb-6">
              <strong>Pianos droits</strong>, <strong>à queue</strong>, 
              <strong> numériques</strong>, <strong>accessoires</strong>, vous 
              trouverez tout ce dont vous avez besoin chez Crazy-Piano.
            </p>
            <p className="text-muted-foreground mb-8">
              Si vous souhaitez en savoir plus sur Crazy-Piano, n'hésitez pas à nous contacter !
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

export default Occasion;
