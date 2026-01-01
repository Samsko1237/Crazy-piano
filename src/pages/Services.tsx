import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Smile, 
  Music, 
  MessageCircle, 
  Settings, 
  Truck, 
  HeadphonesIcon, 
  RefreshCw, 
  Hammer, 
  Wrench 
} from "lucide-react";
import Layout from "@/components/Layout";

const services = [
  { icon: Smile, text: "Un accueil souriant" },
  { icon: Music, text: "Un grand choix de piano à budget divers" },
  { icon: MessageCircle, text: "Les conseils d'un personnel expérimenté" },
  { icon: Settings, text: "La préparation et l'accordage des pianos en vente dans notre propre atelier" },
  { icon: Truck, text: "Le transport, la livraison et l'installation en toute sécurité à l'endroit où vous le désirez" },
  { icon: HeadphonesIcon, text: "Un service après-vente dans les plus brefs délais" },
  { icon: RefreshCw, text: "Un suivi dans la vente ou la reprise de votre piano" },
  { icon: Hammer, text: "La restauration d'anciens pianos" },
  { icon: Wrench, text: "La réparation de pianos toutes marques" },
];

const Services = () => {
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
              Nos Services
            </h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Pour que la qualité de notre service soit optimale, chez Crazy-Piano 
              nous nous fixons des engagements à suivre vis-à-vis de notre clientèle.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-2xl md:text-3xl text-foreground mb-12 text-center"
            >
              Nos <span className="text-gradient-purple">Engagements</span>
            </motion.h2>

            <div className="space-y-4">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center gap-4 p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors shadow-card"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-foreground">{service.text}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <p className="text-muted-foreground mb-8">
                Si vous souhaitez en savoir plus sur Crazy-Piano, n'hésitez pas à nous contacter !
              </p>
              <Link to="/contact" className="btn-purple rounded-lg inline-block">
                Nous contacter
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
