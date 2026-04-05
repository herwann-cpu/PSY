import { motion } from 'motion/react';
import { BookOpen, Headphones, PlayCircle, Library } from 'lucide-react';
import { themesData, resourcesIntro } from '../resourcesContent';

export default function Resources() {
  return (
    <div className="pt-24 pb-20 bg-stone-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Introduction */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center p-3 bg-yellow-100 rounded-full mb-6">
            <Library className="h-8 w-8 text-yellow-600" />
          </div>
          <h1 className="text-4xl font-serif text-stone-800 mb-6">Pour aller plus loin</h1>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto leading-relaxed">
            {resourcesIntro}
          </p>
        </motion.div>

        {/* Navigation par thèmes */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-20"
        >
          {themesData.map((theme) => (
            <a 
              key={`nav-${theme.id}`}
              href={`#${theme.id}`}
              className="px-5 py-2.5 bg-white border border-stone-200 rounded-full text-stone-600 hover:border-yellow-500 hover:text-yellow-700 hover:shadow-sm transition-all text-sm font-medium"
            >
              {theme.title}
            </a>
          ))}
        </motion.div>

        {/* Thèmes */}
        {themesData.map((theme, themeIndex) => (
          <div key={theme.id} id={theme.id} className="mb-24 scroll-mt-32">
            <div className="border-b-2 border-yellow-200 pb-4 mb-10">
              <h2 className="text-3xl font-serif text-stone-800">{theme.title}</h2>
            </div>

            {/* Livres & Essais */}
            {theme.resources.books.length > 0 && (
              <section className="mb-12">
                <div className="flex items-center mb-6">
                  <BookOpen className="h-6 w-6 text-yellow-500 mr-3" />
                  <h3 className="text-2xl font-serif text-stone-700">Livres & Essais</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {theme.resources.books.map((book, index) => (
                    <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-stone-100 flex flex-col sm:flex-row gap-6">
                      {book.image && (
                        <div className="w-24 h-32 flex-shrink-0 bg-stone-200 rounded-lg overflow-hidden">
                          <img src={book.image} alt={book.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                        </div>
                      )}
                      <div>
                        <h4 className="text-lg font-bold text-stone-800 mb-1">{book.title}</h4>
                        {book.author && <p className="text-stone-500 text-sm mb-4">de {book.author}</p>}
                        <p className="text-stone-600 text-sm">
                          <strong className="text-stone-800">Pourquoi je le recommande :</strong> {book.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Bandes Dessinées */}
            {theme.resources.comics.length > 0 && (
              <section className="mb-12">
                <div className="flex items-center mb-6">
                  <BookOpen className="h-6 w-6 text-yellow-500 mr-3" />
                  <h3 className="text-2xl font-serif text-stone-700">Bandes Dessinées</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {theme.resources.comics.map((comic, index) => (
                    <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-stone-100 flex flex-col sm:flex-row gap-6">
                      {comic.image && (
                        <div className="w-24 h-32 flex-shrink-0 bg-stone-200 rounded-lg overflow-hidden">
                          <img src={comic.image} alt={comic.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                        </div>
                      )}
                      <div>
                        <h4 className="text-lg font-bold text-stone-800 mb-1">{comic.title}</h4>
                        {comic.author && <p className="text-stone-500 text-sm mb-4">de {comic.author}</p>}
                        <p className="text-stone-600 text-sm">
                          <strong className="text-stone-800">Pourquoi je le recommande :</strong> {comic.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Podcasts */}
            {theme.resources.podcasts.length > 0 && (
              <section className="mb-12">
                <div className="flex items-center mb-6">
                  <Headphones className="h-6 w-6 text-yellow-500 mr-3" />
                  <h3 className="text-2xl font-serif text-stone-700">Podcasts à écouter</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {theme.resources.podcasts.map((podcast, index) => (
                    <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-stone-100">
                      <h4 className="text-lg font-bold text-stone-800 mb-1">{podcast.title}</h4>
                      {podcast.host && <p className="text-stone-500 text-sm mb-4">Animé par {podcast.host}</p>}
                      <div className="bg-stone-50 p-4 rounded-xl mb-6">
                        <p className="text-stone-800 font-medium mb-2">Épisode recommandé :</p>
                        {podcast.episode && <p className="text-stone-600 text-sm italic mb-3">"{podcast.episode}"</p>}
                        <p className="text-stone-600 text-sm">{podcast.description}</p>
                      </div>
                      {podcast.link && (
                        <a 
                          href={podcast.link}
                          className="inline-flex items-center text-yellow-600 hover:text-yellow-700 font-medium transition-colors"
                        >
                          <PlayCircle className="h-5 w-5 mr-2" />
                          Écouter l'épisode
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Vidéos */}
            {theme.resources.videos.length > 0 && (
              <section className="mb-12">
                <div className="flex items-center mb-6">
                  <PlayCircle className="h-6 w-6 text-yellow-500 mr-3" />
                  <h3 className="text-2xl font-serif text-stone-700">Vidéos & Conférences</h3>
                </div>
                <div className="grid grid-cols-1 gap-6">
                  {theme.resources.videos.map((video, index) => (
                    <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-stone-100">
                      <h4 className="text-lg font-bold text-stone-800 mb-2">{video.title}</h4>
                      <p className="text-stone-600 mb-6">{video.description}</p>
                      <div className="aspect-video bg-stone-200 rounded-xl overflow-hidden relative">
                        {video.videoId ? (
                          <iframe 
                            width="100%" 
                            height="100%" 
                            src={`https://www.youtube.com/embed/${video.videoId}`} 
                            title={video.title} 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen
                            className="absolute inset-0"
                          ></iframe>
                        ) : (
                          <div className="absolute inset-0 flex items-center justify-center flex-col text-stone-500">
                            <PlayCircle className="h-12 w-12 mb-2 opacity-50" />
                            <p className="text-sm">Vidéo YouTube (à intégrer)</p>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Empty State */}
            {theme.resources.books.length === 0 && 
             theme.resources.comics.length === 0 && 
             theme.resources.podcasts.length === 0 && 
             theme.resources.videos.length === 0 && (
              <div className="text-center py-12 bg-stone-100/50 rounded-2xl border border-stone-200 border-dashed">
                <p className="text-stone-500 italic">Ressources à venir pour cette thématique.</p>
              </div>
            )}
          </div>
        ))}

        {/* Disclaimer */}
        <div className="mt-12 pt-8 border-t border-stone-200 text-center">
          <p className="text-stone-500 text-sm italic max-w-3xl mx-auto">
            Note : Ces ressources sont proposées à titre informatif et d'enrichissement personnel. Elles ne remplacent en aucun cas un suivi psychologique ou un avis médical.
          </p>
        </div>

      </div>
    </div>
  );
}
