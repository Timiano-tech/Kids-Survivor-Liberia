import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FiCalendar,
  FiUser,
  FiArrowRight,
  FiPlay,
  FiX
} from 'react-icons/fi';
import CallToAction from '../components/CallToAction';
import ScrollToTopButton from '../components/ScrollToTop';
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
                <header className="relative">
                  <div className="absolute inset-0 bg-linear-to-r from-blue-800 to-blue-900/70 z-10">
                    <img 
                      src={HeaderImage} 
                      alt="KSL_Background" 
                      className="w-full h-full object-cover opacity-20"
                    />
                  </div>
        
                  <div className="relative z-10 py-30 text-center">
                    <div className="container mx-auto px-4">
                      <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-6xl font-bold text-white"
                      >
                        Blog & Media
                      </motion.h1>
                      <p className="text-white/80 text-lg mt-4 max-w-3xl mx-auto">
                        Stay updated with the latest articles and videos on our drug prevention and youth empowerment initiatives.
                      </p>
                    </div>
                  </div>
                </header>

        <main className="py-12">
          <div className="container mx-auto px-4 max-w-6xl">
            
            {/* Videos Section */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">
                Featured Videos
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {videoPosts.map((video) => (
                  <div 
                    key={video.id} 
                    className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300"
                  >
                    <div className="relative h-64 overflow-hidden bg-black">
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
                            className="absolute top-3 right-3 bg-black/70 text-white p-2 rounded-full hover:bg-red-600 transition-colors z-20"
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
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                            <button
                              onClick={() => handleVideoPlay(video.id)}
                              className="bg-red-600 hover:bg-red-700 text-white p-5 rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg"
                              aria-label="Play video"
                            >
                              <FiPlay size={28} />
                            </button>
                          </div>
                          <div className="absolute bottom-3 right-3 bg-black/80 text-white text-xs px-3 py-1.5 rounded">
                            {video.duration}
                          </div>
                        </>
                      )}
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center text-sm text-gray-500 mb-3">
                        <FiCalendar className="mr-2" size={14} />
                        {video.date}
                      </div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-3">
                        {video.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-5">
                        {video.description}
                      </p>
                      <button
                        onClick={() => handleVideoPlay(video.id)}
                        className={`flex items-center font-medium text-sm group ${
                          playingVideoId === video.id ? 'text-green-600' : 'text-red-600 hover:text-red-800'
                        }`}
                        disabled={playingVideoId === video.id}
                      >
                        {playingVideoId === video.id ? 'Now Playing' : 'Watch Video'}
                        {playingVideoId !== video.id && (
                          <FiArrowRight className="ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                        )}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Articles Section */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">
                Latest Articles
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {blogPosts.map((post) => (
                  <article 
                    key={post.id} 
                    className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="h-62 overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                        <div className="flex items-center">
                          <FiCalendar className="mr-2" size={14} />
                          {post.date}
                          <span className="mx-3">•</span>
                          <FiUser className="mr-2" size={14} />
                          {post.author}
                        </div>
                        <span className="text-gray-400">{post.readTime}</span>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-3">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="mb-5">
                        <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
                          {post.category}
                        </span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div className="bg-blue-50 rounded-xl p-8 text-center border border-blue-100">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Stay Informed</h3>
              <p className="text-gray-600 mb-8 max-w-md mx-auto">
                Subscribe to receive updates on our drug prevention and youth empowerment work.
              </p>
              <form className="max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-5 py-3.5 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                    required
                  />
                  <button
                    type="submit"
                    className="px-8 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-300"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
        </main>
      </div>
      
      <ScrollToTopButton />
      <CallToAction />
    </>
  );
};

export default Blog;