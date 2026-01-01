import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Music, Wrench, Award, MapPin } from "lucide-react";
import Layout from "@/components/Layout";
import heroPiano from "@/assets/hero-piano.jpg";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={heroPiano}
            alt="Piano à queue dans un showroom élégant"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/60 to-background" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl text-foreground mb-6">
              Bienvenue chez{" "}
              <span className="text-gradient-purple">Crazy-Piano</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display text-xl md:text-2xl lg:text-3xl text-primary mb-8"
          >
            L'univers du piano en Belgique
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg text-foreground/80 max-w-2xl mx-auto mb-12"
          >
            Depuis plus de 30 ans, nous offrons des services de qualité pour que 
            votre piano donne toujours le meilleur de lui-même.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/neufs" className="btn-purple rounded-lg inline-flex items-center justify-center gap-2">
              Découvrir nos pianos
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/contact" className="btn-outline-purple rounded-lg inline-flex items-center justify-center">
              Nous contacter
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-6 h-10 rounded-full border-2 border-primary/50 flex items-start justify-center p-2"
          >
            <div className="w-1 h-2 bg-primary rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
                Un espace de{" "}
                <span className="text-gradient-purple">1.000 m²</span>{" "}
                dédié au piano
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Située à <strong className="text-foreground">Bruxelles</strong>, 
                Crazy-Piano c'est tout l'univers du piano qui vous est offert pour 
                le plaisir de vos yeux et de vos oreilles dans un espace exceptionnel.
              </p>
              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-2xl font-display text-foreground">600 m²</p>
                    <p className="text-muted-foreground text-sm">de showroom</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Wrench className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-2xl font-display text-foreground">400 m²</p>
                    <p className="text-muted-foreground text-sm">d'atelier</p>
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                C'est dans son atelier de 400m² que Crazy-Piano chouchoute les pianos 
                pour leur permettre de toujours donner le meilleur d'eux-mêmes pour 
                votre plaisir à vous musicien mais aussi à vous spectateur qui appréciez 
                le son agréable et mélodieux que dégage ce merveilleux instrument.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-2 gap-4"
            >
              <img
                src="/images/showroom-main.jpg"
                alt="Showroom Crazy-Piano"
                className="col-span-2 rounded-lg shadow-elegant object-cover w-full h-64"
              />
              <img
                src="/images/showroom-2.jpg"
                alt="Collection de pianos"
                className="rounded-lg shadow-card object-cover w-full h-48"
              />
              <img
                src="/images/showroom-3.jpg"
                alt="Piano blanc"
                className="rounded-lg shadow-card object-cover w-full h-48"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-secondary">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
              Nos <span className="text-gradient-purple">Services</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Grâce à nos 30 années d'expérience, nous vous offrons des services 
              de qualité pour que votre piano donne toujours le meilleur de lui-même.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Music,
                title: "Vente",
                description: "Pianos neufs ou d'occasion, droits ou à queue, nous avons le piano parfait pour vous.",
                link: "/neufs",
              },
              {
                icon: Wrench,
                title: "Restauration",
                description: "Restauration complète intérieure et extérieure de vos pianos anciens.",
                link: "/restauration",
              },
              {
                icon: Award,
                title: "Accordage",
                description: "Préparation et accordage des pianos par notre équipe d'experts passionnés.",
                link: "/services",
              },
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={service.link}
                  className="block p-8 rounded-lg bg-card border border-border hover-lift group shadow-card"
                >
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-display text-xl text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <span className="text-primary font-medium inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                    En savoir plus
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
              Notre <span className="text-gradient-purple">Showroom</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Découvrez notre collection de pianos dans un espace de 600m² dédié à la passion de la musique.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { src: "/images/showroom-4.jpg", alt: "Intérieur du magasin" },
              { src: "/images/yamaha-kawai.jpg", alt: "Pianos Yamaha et Kawai" },
              { src: "/images/showroom-2.jpg", alt: "Collection de pianos" },
              { src: "/images/showroom-3.jpg", alt: "Piano blanc" },
            ].map((image, index) => (
              <motion.div
                key={image.src}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="overflow-hidden rounded-lg group shadow-card"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-purple relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-white/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-white/10 rounded-full blur-2xl" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-white mb-6">
              Bonne visite à tous !
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Si vous souhaitez en savoir plus sur Crazy-Piano, n'hésitez pas à nous contacter. 
              Notre équipe d'experts passionnés sera ravie de vous accueillir.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-3 bg-white text-primary font-medium rounded-lg hover:bg-white/90 transition-colors">
              Nous contacter
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
