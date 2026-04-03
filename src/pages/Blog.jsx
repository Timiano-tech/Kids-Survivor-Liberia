import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import {
  FiCalendar,
  FiUser,
  FiArrowRight,
  FiPlay,
  FiX
} from 'react-icons/fi';
import NoToDrugs from '../assets/Say no to drugs.jpeg'
import HeaderImage from '../assets/Talking to children.jpeg';
import BlogImage1 from '../assets/Students Impacted.jpeg';
import BlogImage2 from '../assets/Youth_Community_Outreach.jpeg';
import BlogImage3 from '../assets/Helping Children.jpeg';
import BlogImage4 from '../assets/Students_Latest.jpeg';
import Thumbnail from '../assets/Campaign_Thumbnail.png';
import THumbnail2 from '../assets/Thumbnail2.png';

const Blog = () => {
  const [playingVideoId, setPlayingVideoId] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const blogPosts = [
    {
      id: 1,
      title: 'NADAP 2025-2030: Community-Based Drug Prevention Initiatives',
      excerpt: "Educating Students on the dangers of drug abuse through school and community programs aligned with Liberia's National Anti-Drugs Action Plan.",
      author: 'KSL Team',
      date: 'Jan 19, 2026',
      category: 'Drug Prevention',
      image: BlogImage1,
    },
    {
      id: 2,
      title: 'Youth Leadership Development Through YTEI Framework',
      excerpt: 'Empowering young people as agents of change through life skills training, civic engagement, and positive youth development programs.',
      author: 'KSL Team',
      date: 'Jan 19, 2026',
      category: 'Youth Empowerment',
      image: BlogImage2,
    },
    {
      id: 3,
      title: 'Community Engagement for Gender Protection & Social Inclusion',
      excerpt: 'Feeding children and supporting vulnerable groups through targeted interventions that promote social reintegration and community resilience.',
      author: 'KSL Team',
      date: 'Jan 19, 2026',
      category: 'Community',
      image: BlogImage3,
    },
    {
      id: 4,
      title: 'Protecting Your Future: The Dangers of Drug Abuse',
      excerpt: 'An enlightening guide for students on the physical and social risks of substance use and why staying drug-free is the key to success.',
      author: 'KSL Team',
      date: 'Jan 19, 2026',
      category: 'Drug Prevention',
      image: BlogImage4,
    }
  ];

  const videoPosts = [
    {
      id: 'video1',
      title: 'Enlightening Students on Drug Abuse Risks',
      description: 'Watch how we educate students about the dangers of drug abuse and promote a drug-free lifestyle.',
      date: 'Jan 19, 2026',
      duration: '0:52',
      thumbnail: NoToDrugs,
      videoSrc: '/videos/KSL_video.mp4',
    },
    {
      id: 'video2',
      title: 'Youth Community Outreach Success Story',
      description: 'Watch this inspiring story of youth-led community outreach and empowerment in Liberia.',
      date: 'Jan 19, 2026',
      duration: '2:27',
      thumbnail: BlogImage2,
      videoSrc: '/videos/Succes_story.mp4',
    },
    {
      id: 'video3',
      title: 'Say No to Drugs Campaign Highlights',
      description: 'Kids Survivor Liberia leads a powerful "Say No to Drugs" campaign in schools and communities.',
      date: 'Jan 19, 2026',
      duration: '0:51',
      thumbnail: Thumbnail,
      videoSrc: '/videos/Blog_Video_4.mp4',
    },
    {
      id: 'video4',
      title: 'Kids Survivor Liberia Sensitization Drive 2026',
      description: 'Highlights from our 2026 sensitization drive educating people of liberia on drug abuse prevention and healthy living.',
      date: 'Jan 19, 2026',
      duration: '2:16',
      thumbnail: THumbnail2,
      videoSrc: '/videos/Blog_Video_5.mp4',
    }
  ];


  const handleVideoPlay = (videoId) => {
    setPlayingVideoId(videoId);
  };

  const handleVideoClose = () => {
    setPlayingVideoId(null);
  };

  return (
    <>
      <div className="min-h-screen bg-white">
        {/* Main Header Section */}
        <header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden rounded-b-[3rem] shadow-xl border-b border-slate-100">
          <div className="absolute inset-0 z-0">
            <img
              src={HeaderImage}
              alt="Media & Resources"
              className="w-full h-full object-cover"
              fetchPriority="high"
            />
            <div className="absolute inset-0 bg-blue-900/80 mix-blend-multiply"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
          </div>

          <div className="relative z-10 container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto"
            >
              <span className="text-yellow-400 font-bold tracking-widest uppercase text-sm mb-4 block drop-shadow-md">Media & Resources</span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 tracking-tight drop-shadow-xl">
                Blog & Media
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 font-light leading-relaxed max-w-3xl mx-auto border-l-4 border-yellow-400 pl-6 text-left md:text-center md:border-l-0 md:pl-0">
                Stay updated with the latest articles and videos on our drug prevention and youth empowerment initiatives.
              </p>
            </motion.div>
          </div>
        </header>

        <main className="py-12">
          <div className="container mx-auto px-4 max-w-6xl">

            {/* Videos Section - Premium */}
            <div className="mb-24">
              <div className="text-center mb-16">
                <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm mb-3 block">Media Updates</span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
                  Featured Videos
                </h2>
              </div>
              <div className="grid md:grid-cols-2 gap-10">
                {videoPosts.map((video) => (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    key={video.id}
                    className="bg-white rounded-xl border border-slate-100 overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.1)] transition-all duration-500 group"
                  >
                    <div className="relative h-72 overflow-hidden bg-slate-900">
                      {playingVideoId === video.id ? (
                        <div className="relative w-full h-full">
                          <video
                            autoPlay
                            controls
                            playsInline
                            className="w-full h-full object-contain"
                            onEnded={handleVideoClose}
                          >
                            <source src={video.videoSrc} type="video/mp4" />
                            Your browser does not support the video tag.
                          </video>
                          <button
                            onClick={handleVideoClose}
                            className="absolute top-4 right-4 bg-black/60 backdrop-blur-md text-white p-2 rounded-full hover:bg-red-500 transition-colors z-20 border border-white/20"
                            aria-label="Close video"
                          >
                            <FiX size={20} />
                          </button>
                        </div>
                      ) : (
                        <>
                          <img
                            src={video.thumbnail}
                            alt={video.title}
                            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent flex items-center justify-center">
                            <button
                              onClick={() => handleVideoPlay(video.id)}
                              className="w-20 h-20 bg-white/20 backdrop-blur-md hover:bg-yellow-400 hover:text-blue-900 text-white rounded-full flex items-center justify-center transition-all duration-300 transform group-hover:scale-110 shadow-[0_8px_30px_rgb(0,0,0,0.2)] border border-white/30"
                              aria-label="Play video"
                            >
                              <FiPlay size={32} className="ml-1" />
                            </button>
                          </div>
                          <div className="absolute bottom-4 right-4 bg-slate-900/70 backdrop-blur-md text-white font-medium text-xs px-3 py-1.5 rounded-lg border border-white/10">
                            {video.duration}
                          </div>
                        </>
                      )}
                    </div>

                    <div className="p-8">
                      <div className="flex items-center text-sm font-semibold text-blue-600 mb-4 tracking-wide">
                        <FiCalendar className="mr-2" size={16} />
                        {video.date}
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
                        {video.title}
                      </h3>
                      <p className="text-slate-600 text-lg mb-6 leading-relaxed line-clamp-2">
                        {video.description}
                      </p>
                      <button
                        onClick={() => handleVideoPlay(video.id)}
                        className={`inline-flex items-center font-bold text-sm uppercase tracking-wider group/btn ${playingVideoId === video.id ? 'text-emerald-500' : 'text-slate-900 hover:text-blue-600'
                          } transition-colors duration-300`}
                        disabled={playingVideoId === video.id}
                      >
                        {playingVideoId === video.id ? 'Now Playing' : 'Watch Video'}
                        {playingVideoId !== video.id && (
                          <FiArrowRight className="ml-2 group-hover/btn:translate-x-2 transition-transform duration-300" />
                        )}
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Articles Section - Premium */}
            <div className="mb-24">
              <div className="text-center mb-16">
                <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm mb-3 block">Latest Insights</span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
                  Recent Articles
                </h2>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-10">
                {blogPosts.map((post, index) => (
                  <motion.article
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    key={post.id}
                    className="bg-white rounded-xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-2 group flex flex-col h-full"
                  >
                    <div className="h-72 overflow-hidden relative">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="inline-block px-4 py-1.5 bg-white/90 backdrop-blur-sm text-blue-700 rounded-full text-xs font-bold tracking-widest uppercase shadow-sm">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-8 flex flex-col flex-grow">
                      <div className="flex flex-wrap items-center justify-between text-sm font-medium text-slate-500 mb-4 gap-2">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center">
                            <FiCalendar className="mr-2 text-blue-500" size={16} />
                            {post.date}
                          </div>
                          <div className="flex items-center">
                            <FiUser className="mr-2 text-blue-500" size={16} />
                            {post.author}
                          </div>
                        </div>
                        <span className="text-slate-400 bg-slate-50 px-2 py-1 rounded-md">{post.readTime}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-slate-600 text-lg mb-8 leading-relaxed line-clamp-3 flex-grow">
                        {post.excerpt}
                      </p>
                      <button className="inline-flex items-center font-bold text-sm uppercase tracking-wider text-slate-900 group-hover:text-blue-600 transition-colors duration-300 self-start mt-auto">
                        Read Article
                        <FiArrowRight className="ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                      </button>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>

            {/* Newsletter - Premium */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-700 to-indigo-800 rounded-xl p-10 sm:p-16 text-center text-white shadow-2xl relative overflow-hidden mb-10"
            >
              <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10 mix-blend-overlay"></div>
              <div className="relative z-10">
                <span className="inline-block px-4 py-1.5 bg-white/10 text-yellow-300 rounded-full text-xs font-bold tracking-widest uppercase mb-6 backdrop-blur-sm border border-white/10">
                  Stay Informed
                </span>
                <h3 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Subscribe for Updates</h3>
                <p className="text-blue-100 text-lg md:text-xl mb-10 max-w-2xl mx-auto font-light leading-relaxed">
                  Join our newsletter to receive the latest news on our drug prevention and youth empowerment work across Liberia.
                </p>
                <form className="max-w-xl mx-auto" onSubmit={(e) => e.preventDefault()}>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <input
                      type="email"
                      placeholder="Your email address..."
                      className="flex-1 px-6 py-4 bg-white/10 border border-white/20 rounded-full focus:outline-none focus:bg-white/20 focus:border-white/40 text-white placeholder-blue-200 transition-all font-medium"
                      required
                    />
                    <button
                      type="submit"
                      className="px-8 py-4 bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-bold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 whitespace-nowrap"
                    >
                      Subscribe Now
                    </button>
                  </div>
                  <p className="text-blue-200/60 text-xs mt-4 font-medium">We respect your privacy. Unsubscribe at any time.</p>
                </form>
              </div>
            </motion.div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Blog;