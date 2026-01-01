import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block">
              <span className="font-display text-2xl text-gradient-purple">
                Crazy-Piano
              </span>
            </Link>
            <p className="mt-4 text-muted-foreground text-sm leading-relaxed">
              L'univers du piano en Belgique depuis 1986. 
              Vente, restauration et services de qualité.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg text-foreground mb-6">Navigation</h4>
            <ul className="space-y-3">
              {[
                { href: "/neufs", label: "Pianos Neufs" },
                { href: "/occasion", label: "Occasion" },
                { href: "/services", label: "Nos Services" },
                { href: "/restauration", label: "Restauration" },
                { href: "/historique", label: "Notre Histoire" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground text-sm hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-lg text-foreground mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground text-sm">
                  Rue de l'Obusstraat, 58<br />
                  1070 Anderlecht (Bruxelles)
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="tel:0475492360" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                  0475 492 360
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="mailto:info@crazy-piano.be" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                  info@crazy-piano.be
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-display text-lg text-foreground mb-6">Horaires</h4>
            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <div className="text-muted-foreground text-sm space-y-1">
                <p>Sur rendez-vous</p>
                <p>Showroom de 600m²</p>
                <p>Atelier de 400m²</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} Crazy-Piano. Tous droits réservés.
            </p>
            <p className="text-muted-foreground text-sm">
              Division of Infor-mail
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
