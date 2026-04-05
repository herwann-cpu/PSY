import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Link, useLocation, Routes, Route } from 'react-router-dom';
import Resources from './pages/Resources';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Brain, 
  Heart, 
  Shield, 
  Menu, 
  X, 
  ChevronRight,
  ArrowRight,
  CheckCircle2,
  Activity,
  GraduationCap,
  BadgeCheck,
  Calendar,
  Lock
} from 'lucide-react';
import { siteContent } from './content';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Accueil', href: '/#accueil' },
    { name: 'Mon Approche', href: '/#approche' },
    { name: 'Thérapie EMDR', href: '/#emdr' },
    { name: 'Mon Parcours', href: '/#parcours' },
    { name: 'Pour aller plus loin', href: '/ressources' },
    { name: 'Contact', href: '/#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled || location.pathname !== '/' ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 flex items-center">
            <a href="/#accueil" className="text-2xl font-serif text-yellow-800 font-semibold tracking-tight">
              {siteContent.global.name}
              <span className="block text-xs font-sans text-yellow-600/80 uppercase tracking-widest mt-0.5">{siteContent.global.title}</span>
            </a>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-6 items-center">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-stone-600 hover:text-yellow-700 font-medium text-sm transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="/#contact"
              className="bg-yellow-500 hover:bg-yellow-600 text-white px-5 py-2.5 rounded-full text-sm font-medium transition-colors shadow-sm"
            >
              Prendre rendez-vous
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-stone-600 hover:text-yellow-700 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="lg:hidden bg-white border-b border-stone-100 shadow-lg absolute w-full"
        >
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-3 text-base font-medium text-stone-700 hover:text-yellow-700 hover:bg-stone-50 rounded-md"
              >
                {link.name}
              </a>
            ))}
            <a
              href="/#contact"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center mt-4 bg-yellow-500 hover:bg-yellow-600 text-white px-5 py-3 rounded-lg text-base font-medium transition-colors"
            >
              Prendre rendez-vous
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
};;

const Hero = () => {
  return (
    <section id="accueil" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-stone-50">
      <div className="absolute inset-0 z-0">
        <img 
          src={siteContent.hero.image} 
          alt="Paysage apaisant" 
          className="w-full h-full object-cover opacity-60"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-50/90 via-stone-50/60 to-transparent"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-orange-500 text-white text-sm font-medium mb-6 shadow-sm">
              {siteContent.hero.badge}
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-4xl font-serif text-stone-800 leading-relaxed mb-6">
              {siteContent.hero.title}
            </h1>
            <div className="text-lg md:text-xl text-stone-600 mb-8 leading-relaxed">
              <span className="italic">« {siteContent.hero.subtitle.replace(/^«\s*/, '').replace(/\s*»\s*—.*$/, '').replace(/\s*»\s*-\s*.*$/, '').replace(/\.\s*»$/, '.')} »</span>
              <span className="block text-base md:text-lg text-stone-500 mt-2 font-sans">— Boris Cyrulnik</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#contact" 
                className="inline-flex justify-center items-center px-6 py-3.5 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-yellow-500 hover:bg-yellow-600 transition-colors"
              >
                Prendre rendez-vous
              </a>
              <a 
                href="#approche" 
                className="inline-flex justify-center items-center px-6 py-3.5 border border-stone-300 text-base font-medium rounded-full text-stone-700 bg-white hover:bg-stone-50 transition-colors"
              >
                Mon approche
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const PourquoiConsulter = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif text-stone-800 mb-6">{siteContent.pourquoiConsulter.title}</h2>
            <p className="text-lg text-stone-600 leading-relaxed mb-8">
              {siteContent.pourquoiConsulter.description}
            </p>
            <div className="bg-yellow-50/50 p-6 rounded-2xl border border-yellow-100">
              <p className="text-yellow-800 font-medium leading-relaxed">
                {siteContent.pourquoiConsulter.symptoms}
              </p>
            </div>
          </div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl"
          >
            <img 
              src={siteContent.pourquoiConsulter.image} 
              alt="Pourquoi consulter" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {siteContent.pourquoiConsulter.pillars.map((pillar, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto bg-stone-50 rounded-full flex items-center justify-center mb-6 border border-stone-100 shadow-sm">
                {index === 0 && <Heart className="h-7 w-7 text-yellow-600" />}
                {index === 1 && <Activity className="h-7 w-7 text-yellow-600" />}
                {index === 2 && <Shield className="h-7 w-7 text-yellow-600" />}
              </div>
              <h3 className="text-xl font-medium text-stone-800 mb-3">{pillar.title}</h3>
              <p className="text-stone-600">{pillar.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Approche = () => {
  return (
    <section id="approche" className="py-20 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src={siteContent.approche.image} 
                  alt={siteContent.global.name} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2 lg:pl-8"
          >
            <h2 className="text-3xl md:text-4xl font-serif text-stone-800 mb-6">{siteContent.approche.title}</h2>
            <div className="space-y-4 text-stone-600 text-lg leading-relaxed">
              {siteContent.approche.content.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const EMDRSection = () => {
  return (
    <section id="emdr" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1 relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl"
          >
            <img 
              src={siteContent.emdr.image} 
              alt="Thérapie EMDR" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-serif text-stone-800 mb-6">{siteContent.emdr.title}</h2>
            <div className="space-y-4 text-stone-600 text-lg leading-relaxed">
              {siteContent.emdr.definition.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-yellow-50/50 rounded-3xl p-8 md:p-12 border border-yellow-100">
          <div className="flex items-center mb-8">
            <Brain className="h-8 w-8 text-yellow-600 mr-4" />
            <h3 className="text-2xl md:text-3xl font-serif text-stone-800">{siteContent.emdr.consultation.title}</h3>
          </div>
          
          <p className="text-lg text-stone-700 mb-6">{siteContent.emdr.consultation.intro}</p>
          
          <ul className="space-y-4 mb-8">
            {siteContent.emdr.consultation.steps.map((step, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle2 className="h-6 w-6 text-yellow-600 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-stone-700">{step}</span>
              </li>
            ))}
          </ul>
          
          <div className="space-y-4 text-stone-600">
            {siteContent.emdr.consultation.outro.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Parcours = () => {
  return (
    <section id="parcours" className="py-20 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-serif text-stone-800 mb-12 text-center">{siteContent.parcours.title}</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative aspect-[3/4] rounded-2xl overflow-hidden shadow-xl"
          >
            <img 
              src={siteContent.parcours.image} 
              alt="Mon parcours" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          
          <div className="lg:col-span-7 space-y-12">
            <div className="space-y-4 text-stone-600 text-lg leading-relaxed">
              {siteContent.parcours.content.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
            
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-stone-100">
              <div className="flex items-center mb-6">
                <BadgeCheck className="h-6 w-6 text-yellow-600 mr-3" />
                <h3 className="text-xl font-medium text-stone-800">Associations</h3>
              </div>
              <ul className="space-y-4">
                {siteContent.parcours.associations.map((association, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-yellow-500 mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-stone-600">{association}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-stone-100">
              <div className="flex items-center mb-6">
                <GraduationCap className="h-6 w-6 text-yellow-600 mr-3" />
                <h3 className="text-xl font-medium text-stone-800">Formations</h3>
              </div>
              <ul className="space-y-4">
                {siteContent.parcours.formations.map((formation, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-yellow-500 mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-stone-600">{formation}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = ({ onOpenBooking }: { onOpenBooking: () => void }) => {
  return (
    <section id="contact" className="py-20 bg-stone-900 text-stone-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <div className="relative h-48 sm:h-64 rounded-2xl overflow-hidden shadow-lg mb-8">
              <img 
                src={siteContent.infosPratiques.image} 
                alt="Cabinet de consultation" 
                className="w-full h-full object-cover opacity-80"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-stone-900/20"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">{siteContent.infosPratiques.title}</h2>
            <div className="text-lg mb-10 text-stone-400 whitespace-pre-line">
              {siteContent.infosPratiques.appointment}
            </div>
            
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-stone-800 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <MapPin className="h-5 w-5 text-yellow-400" />
                </div>
                <div className="ml-4">
                  <p className="text-sm text-stone-400 uppercase tracking-wider">Cabinet</p>
                  <p className="text-lg text-white font-medium whitespace-pre-line">{siteContent.global.address}</p>
                  <p className="mt-1 text-sm text-stone-400">{siteContent.global.addressDetails}</p>
                  <a 
                    href={siteContent.global.googleMapsUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center mt-2 text-sm text-yellow-500 hover:text-yellow-400 transition-colors"
                  >
                    Voir sur Google Maps <ArrowRight className="ml-1 h-3 w-3" />
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-stone-800 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Clock className="h-5 w-5 text-yellow-400" />
                </div>
                <div className="ml-4">
                  <p className="text-sm text-stone-400 uppercase tracking-wider">{siteContent.infosPratiques.tarifs.title}</p>
                  <p className="text-base text-white whitespace-pre-line">{siteContent.infosPratiques.tarifs.content}</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-stone-800 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Shield className="h-5 w-5 text-yellow-400" />
                </div>
                <div className="ml-4">
                  <p className="text-sm text-stone-400 uppercase tracking-wider">{siteContent.infosPratiques.remboursement.title}</p>
                  <p className="text-base text-stone-400 whitespace-pre-line">{siteContent.infosPratiques.remboursement.content}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-stone-800 p-8 rounded-3xl">
            <h3 className="text-2xl font-serif text-white mb-6">Envoyer un message</h3>
            <form 
              className="space-y-4" 
              onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                const name = formData.get('name');
                const email = formData.get('email');
                const phone = formData.get('phone');
                const consultationType = formData.get('consultationType');
                const message = formData.get('message');
                const body = `Nom: ${name}\nEmail: ${email}\nTéléphone: ${phone}\nType de consultation: ${consultationType}\n\nMessage:\n${message}`;
                window.location.href = `mailto:${siteContent.global.email}?subject=Demande de rendez-vous - ${name}&body=${encodeURIComponent(body)}`;
              }}
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-stone-400 mb-1">Nom complet</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name"
                  required
                  className="w-full bg-stone-900 border border-stone-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-colors"
                  placeholder="Votre nom"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-stone-400 mb-1">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  required
                  className="w-full bg-stone-900 border border-stone-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-colors"
                  placeholder="votre@email.com"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-stone-400 mb-1">Téléphone</label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone"
                  className="w-full bg-stone-900 border border-stone-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-colors"
                  placeholder="Votre numéro"
                />
              </div>
              <div>
                <label htmlFor="consultationType" className="block text-sm font-medium text-stone-400 mb-1">Type de consultation</label>
                <select 
                  id="consultationType" 
                  name="consultationType"
                  className="w-full bg-stone-900 border border-stone-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-colors appearance-none"
                >
                  <option value="En cabinet (Présentiel)">En cabinet (Présentiel)</option>
                  <option value="En visioconférence (Google Meet)">En visioconférence (Google Meet)</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-stone-400 mb-1">Message</label>
                <textarea 
                  id="message" 
                  name="message"
                  required
                  rows={4} 
                  className="w-full bg-stone-900 border border-stone-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-colors resize-none"
                  placeholder="Comment puis-je vous aider ?"
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-3 px-4 rounded-lg transition-colors flex justify-center items-center"
              >
                Envoyer la demande <ChevronRight className="ml-2 h-4 w-4" />
              </button>
            </form>

            {/* Pour réactiver la réservation en ligne, passez ENABLE_ONLINE_BOOKING à true */}
            {false && (
              <button 
                onClick={onOpenBooking}
                className="mt-6 w-full p-4 bg-stone-900/50 border border-stone-700/50 hover:bg-stone-800/80 rounded-xl text-left transition-colors group"
              >
                <div className="flex items-start">
                  <Calendar className="h-5 w-5 text-stone-500 group-hover:text-yellow-500 mr-3 flex-shrink-0 mt-0.5 transition-colors" />
                  <div>
                    <strong className="text-stone-300 group-hover:text-white transition-colors flex items-center">
                      Réservation en ligne <Lock className="h-3 w-3 ml-2 text-stone-500" />
                    </strong>
                    <p className="text-sm text-stone-400 mt-1">
                      Accès privé par mot de passe pour tester l'intégration Google Agenda.
                    </p>
                  </div>
                </div>
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-stone-950 py-12 text-center text-stone-500 text-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-6 flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-6 text-stone-400">
          <span>N° ADELI : {siteContent.global.adeli}</span>
          <span className="hidden md:inline">•</span>
          <span>N° RPPS : {siteContent.global.rpps}</span>
          <span className="hidden md:inline">•</span>
          <span>N° SIRET : {siteContent.global.siret}</span>
        </div>
        <p>&copy; {new Date().getFullYear()} {siteContent.global.name} - {siteContent.global.title}. Tous droits réservés.</p>
        <div className="mt-4 space-x-4">
          <a href="#" className="hover:text-stone-300 transition-colors">Mentions légales</a>
          <a href="#" className="hover:text-stone-300 transition-colors">Politique de confidentialité</a>
        </div>
      </div>
    </footer>
  );
};

const Home = ({ onOpenBooking }: { onOpenBooking: () => void }) => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  return (
    <main>
      <Hero />
      <PourquoiConsulter />
      <Approche />
      <EMDRSection />
      <Parcours />
      <Contact onOpenBooking={onOpenBooking} />
    </main>
  );
};

export default function App() {
  const [showBooking, setShowBooking] = useState(false);
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleUnlock = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'emdr2026') {
      setIsUnlocked(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <div className="min-h-screen bg-stone-50 font-sans selection:bg-yellow-200 selection:text-yellow-900">
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home onOpenBooking={() => setShowBooking(true)} />} />
        <Route path="/ressources" element={<Resources />} />
      </Routes>

      <Footer />

      {showBooking && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/80 backdrop-blur-sm">
          <div className="bg-white rounded-3xl w-full max-w-3xl overflow-hidden shadow-2xl relative">
            <button 
              onClick={() => setShowBooking(false)} 
              className="absolute top-4 right-4 p-2 bg-stone-100 rounded-full hover:bg-stone-200 transition-colors z-10"
            >
              <X className="h-5 w-5 text-stone-600" />
            </button>
            
            {!isUnlocked ? (
              <div className="p-12 text-center">
                <div className="w-16 h-16 bg-stone-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Lock className="h-8 w-8 text-stone-400" />
                </div>
                <h3 className="text-2xl font-serif text-stone-800 mb-2">Accès restreint</h3>
                <p className="text-stone-500 mb-8">La réservation en ligne est actuellement en phase de test.</p>
                <form onSubmit={handleUnlock} className="max-w-xs mx-auto">
                  <input 
                    type="password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Mot de passe" 
                    className="w-full border border-stone-300 rounded-lg px-4 py-3 mb-4 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  />
                  {error && <p className="text-red-500 text-sm mb-4">Mot de passe incorrect</p>}
                  <button type="submit" className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-3 px-4 rounded-lg transition-colors">
                    Accéder au planning
                  </button>
                </form>
              </div>
            ) : (
              <div className="h-[600px] w-full bg-stone-50 flex flex-col">
                <div className="p-6 border-b border-stone-200 bg-white">
                  <h3 className="text-xl font-serif text-stone-800">Réservation en ligne</h3>
                  <p className="text-sm text-stone-500">Choisissez votre créneau pour une consultation en cabinet ou en visioconférence.</p>
                </div>
                <div className="flex-grow relative w-full h-full">
                  <iframe 
                    src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ2g-ov72Q8rj-hEWaO0yKZTzeZsAcHs6_S5K3PPRUi28ERN0ic7zp7idgphyCporptZdv-EYgB0?gv=true" 
                    style={{ border: 0 }} 
                    width="100%" 
                    height="100%" 
                    frameBorder="0"
                    title="Réservation Google Agenda"
                  ></iframe>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
