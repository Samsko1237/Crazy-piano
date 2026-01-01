import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";

const Historique = () => {
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
              Notre Histoire
            </h1>
            <p className="text-white/80 text-xl font-display">
              Une passion qui dure depuis 1986
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {/* Historique */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="font-display text-2xl md:text-3xl text-primary mb-6 purple-underline inline-block">
                Historique
              </h2>
              <p className="text-foreground leading-relaxed">
                Gérant de la maison <strong>« CRAZY-PIANO »</strong>, étant passionné 
                du monde de la musique et jouant du clavier depuis ma plus jeune enfance, 
                mon ambition était de gérer un commerce de piano, ce qui est aujourd'hui 
                chose faite.
              </p>
            </motion.div>

            {/* La Maison */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="font-display text-2xl md:text-3xl text-primary mb-6 purple-underline inline-block">
                La Maison Crazy-Piano
              </h2>
              <p className="text-foreground leading-relaxed mb-6">
                Côtoyant un beau monde de pianistes avertis et étant moi-même 
                <strong> pianiste passionné</strong>, je suis convaincu que l'écoute 
                et la pratique du piano reste un <strong>éveil culturel</strong> et 
                un <strong>bonheur intense</strong>.
              </p>
              <p className="text-foreground leading-relaxed">
                Nous sommes convaincus que l'arrivée d'un piano dans votre foyer 
                doit-être un évènement joyeux, c'est pourquoi, nous vous invitons 
                à venir découvrir notre show room avec une <strong>vaste gamme de 
                pianos</strong> et les conseils de notre personnel expérimenté.
              </p>
            </motion.div>

            {/* Mon Histoire */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="font-display text-2xl md:text-3xl text-primary mb-6 purple-underline inline-block">
                Mon Histoire
              </h2>
              <p className="text-foreground leading-relaxed mb-6">
                Afin de pouvoir acheter mon premier instrument, je me suis lancé 
                dans le monde de l'industrie et du travail très jeune. Dès le premier 
                salaire, j'ai acheté le premier orgue d'occasion à 2 claviers. Avec 
                toujours l'envie d'aller plus haut et d'avoir mieux, j'ai investi 
                beaucoup de ma personne pour travailler et gagner ma vie pour pouvoir 
                satisfaire à mes caprices auxquels mes parents ne savaient faire face.
              </p>
              <p className="text-foreground leading-relaxed mb-6">
                A la tête d'une société de mailing que j'ai nommé « INFOR-MAIL » et 
                ce depuis 1986, j'ai voulu me diversifier et c'est ainsi qu'il m'est 
                venue l'idée de scinder en 2 parties mes activités professionnelles, 
                le mailing et la musique.
              </p>
              <p className="text-foreground leading-relaxed mb-6">
                Aujourd'hui et au fil du temps ayant su m'être entouré de personnel 
                capable, j'ai acquis certaines <strong>expériences</strong> dans le 
                <strong> domaine de la restauration du piano</strong>.
              </p>
              <p className="text-foreground leading-relaxed">
                De ce fait, notre <strong>entreprise familiale</strong> « fils, neveu, 
                épouse » et moi-même ne cessons d'accroître notre expérience dans le 
                domaine de la musique et particulièrement celle du piano. La transmission 
                d'un <strong>savoir-faire familial</strong> nous a permis de fidéliser 
                une clientèle non négligeable.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <p className="text-muted-foreground mb-8">
                Si vous souhaitez en savoir plus sur notre boutique, n'hésitez pas à nous contacter !
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

export default Historique;
