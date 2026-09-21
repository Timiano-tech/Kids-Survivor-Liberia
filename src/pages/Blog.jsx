import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import PageHeader from '../components/PageHeader';
import SectionHeading from '../components/SectionHeading';
import CTABanner from '../components/CTABanner';
import RelatedContent from '../components/RelatedContent';
import {
  FiCalendar,
  FiUser,
  FiArrowRight,
  FiPlay,
  FiX
} from 'react-icons/fi';
import NoToDrugs from '../assets/Say no to drugs.jpeg'
import HeaderImage from '../assets/Team_discussion2.jpeg';
import BlogImage1 from '../assets/Students Impacted.jpeg';
import BlogImage2 from '../assets/Youth_Community_Outreach.jpeg';
import BlogImage3 from '../assets/Helping Children.jpeg';
import CampaignImage from '../assets/Campaign3.jpeg';
import MedicalImage from '../assets/Free_Medicals9.jpeg';
import KSL_School_Img from '../assets/KSL_School.jpeg';
import BlogImage4 from '../assets/Students_Latest.jpeg';
import Thumbnail from '../assets/Campaign_Thumbnail.png';
import THumbnail2 from '../assets/Thumbnail2.png';
import SuccessStoryThumb from '../assets/Success_Story.jpeg';

const Blog = () => {
  const [playingVideoId, setPlayingVideoId] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const blogPosts = [
    {
      id: 1,
      title: 'Meaningful Awareness Campaign in Gbarnga, Bong County',
      excerpt: "Kids Survivor Liberia (KSL) recently conducted a high impact awareness campaign in Gbarnga, Bong County, focusing on the fundamental rights and safety of children. The initiative featured a series of interactive town hall meetings and school based workshops that reached hundreds of families. By addressing critical issues like substance abuse, educational barriers, and community protection, the team fostered a culture of vigilance and support.",
      author: 'KSL Team',
      date: 'Apr 15, 2026',
      category: 'Community Outreach',
      image: CampaignImage,
    },
    {
      id: 2,
      title: 'Free Medical Outreach Serving At-Risk Youth in Buchanan',
      excerpt: "In a collaborative effort with The Mary Hand Organization, Kids Survivor Liberia successfully executed a comprehensive free medical outreach program in Buchanan City, Grand Bassa County. This vital mission targeted at-risk youth, including those residing in cemetery communities who often lack access to basic healthcare. A total of 175 young individuals received medical consultations and treatment for prevalent conditions such as malaria, typhoid, and various skin infections.",
      author: 'KSL Team',
      date: 'Apr 15, 2026',
      category: 'Health & Wellbeing',
      image: MedicalImage,
    },
    {
      id: 3,
      title: 'KIDS SURVIVOR LIBERIA PRIMARY & ELEMENTARY SCHOOL (KSL)',
      excerpt: "KIDS SURVIVOR LIBERIA Primary & Elementary School (KSL) is located in Wee Statutory District, Compound #3, Grand Bassa County, Liberia. In alignment with our mission, KSL provides free educational opportunities for children from marginalized communities, especially those from low-income families who cannot afford the high cost of school fees. Through our program, we aim to bridge this gap by offering free learning opportunities, giving every child a chance to learn and grow.",
      author: 'KSL Team',
      date: 'Apr 04, 2026',
      category: 'Education',
      image: KSL_School_Img,
    },
    {
      id: 4,
      title: 'Protecting Your Future: The Dangers of Drug Abuse',
      excerpt: 'An enlightening guide for students on the physical and social risks of substance use and why staying drug free is the key to success.',
      author: 'KSL Team',
      date: 'Jan 19, 2026',
      category: 'Drug Prevention',
      image: BlogImage4,
    },
    {
      id: 5,
      title: 'Empowering Liberia’s Future: A Look at Our School Program',
      excerpt: 'Discover how Kids Survivor Liberia is transforming lives through education, providing free schooling and essential support to children in need.',
      author: 'KSL Team',
      date: 'Jan 19, 2026',
      category: 'Education',
      image: BlogImage1,
    },
    {
      id: 6,
      title: 'Youth-Led Community Outreach: Making a Difference Together',
      excerpt: 'Witness the power of youth empowerment as our dedicated team leads impactful outreach programs across communities in Liberia.',
      author: 'KSL Team',
      date: 'Jan 19, 2026',
      category: 'Community Outreach',
      image: BlogImage2,
    },
    {
      id: 7,
      title: 'Supporting Children’s Well-being: Our Ongoing Commitment',
      excerpt: 'Learn about our continuous efforts to provide care, protection, and support to vulnerable children, ensuring their safety and brighter future.',
      author: 'KSL Team',
      date: 'Jan 19, 2026',
      category: 'Health & Wellbeing',
      image: BlogImage3,
    }
  ];

  const videoPosts = [
    {
      id: 'video1',
      title: 'Enlightening Students on Drug Abuse Risks',
      description: 'Watch how we educate students about the dangers of drug abuse and promote a drug free lifestyle.',
      date: 'Jan 19, 2026',
      duration: '0:52',
      thumbnail: NoToDrugs,
      videoSrc: '/videos/KSL_video.mp4',
    },
    {
      id: 'video2',
      title: 'Youth Community Outreach Success Story',
      description: 'Watch this inspiring story of youth led community outreach and empowerment in Liberia.',
      date: 'Jan 19, 2026',
      duration: '2:27',
      thumbnail: SuccessStoryThumb,
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
      <SEO
        title="KSL News & Articles — Stories of Hope in Liberia"
        description="Stay updated with news, articles, and video stories on Kids Survivor Liberia drug abuse prevention, community outreach, and youth empowerment campaigns across Liberia."
        canonical="/blog"
        keywords={[
          'Kids Survivor Liberia news',
          'KSL blog',
          'Liberia youth news',
          'drug prevention news Liberia',
          'community outreach stories Liberia',
          'Gbarnga outreach KSL',
          'Buchanan medical outreach',
          'Liberia NGO blog',
          'child protection news Liberia',
        ]}
        breadcrumbs={[{ name: 'Blog & Media', url: '/blog' }]}
      />
      <div className="min-h-screen bg-white">
        <PageHeader
          eyebrow="Media & Resources"
          title="Blog & Media"
          description="Stay updated with the latest articles and videos on our drug prevention and youth empowerment initiatives."
          image={HeaderImage}
          alt="Kids Survivor Liberia media and resources"
        />
        <main className="py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Videos Section */}
            <section className="mb-20">
              <SectionHeading
                eyebrow="Media Updates"
                title="Featured Videos"
              />
              <div className="mt-12 grid md:grid-cols-2 gap-8">
                {videoPosts.map((video) => (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    key={video.id}
                    className="bg-white border border-slate-200 hover:border-blue-300 transition-colors overflow-hidden shadow-sm group flex flex-col h-full"
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
                            className="absolute top-4 right-4 bg-slate-950/80 text-white p-2 hover:bg-slate-900 transition-colors z-20 border border-white/20"
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
                            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-slate-950/70 flex items-center justify-center">
                            <button
                              onClick={() => handleVideoPlay(video.id)}
                              className="w-16 h-16 bg-yellow-500 hover:bg-yellow-400 text-slate-900 flex items-center justify-center transition-colors"
                              aria-label="Play video"
                            >
                              <FiPlay size={28} className="ml-1" />
                            </button>
                          </div>
                          <div className="absolute bottom-4 right-4 bg-slate-950/80 text-white text-xs font-medium px-3 py-1.5 border border-white/20">
                            {video.duration}
                          </div>
                        </>
                      )}
                    </div>

                    <div className="p-8 flex flex-col flex-grow">
                      <div className="flex items-center text-sm font-semibold text-blue-600 mb-4 tracking-wide">
                        <FiCalendar className="mr-2" size={16} />
                        {video.date}
                      </div>
                      <h3 className="text-2xl font-semibold text-slate-900 mb-4 tracking-tight group-hover:text-blue-600 transition-colors line-clamp-2">
                        {video.title}
                      </h3>
                      <p className="text-slate-600 text-lg mb-6 leading-relaxed line-clamp-2">
                        {video.description}
                      </p>
                      <button
                        onClick={() => handleVideoPlay(video.id)}
                        className={`inline-flex items-center font-semibold text-sm uppercase tracking-wider mt-auto ${playingVideoId === video.id ? 'text-blue-600' : 'text-slate-900 hover:text-blue-600'
                          } transition-colors`}
                        disabled={playingVideoId === video.id}
                      >
                        {playingVideoId === video.id ? 'Now Playing' : 'Watch Video'}
                        {playingVideoId !== video.id && (
                          <FiArrowRight className="ml-2" />
                        )}
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Articles Section */}
            <section>
              <SectionHeading
                eyebrow="Latest Insights"
                title="Recent Articles"
              />
              <div className="mt-12 grid md:grid-cols-2 gap-8">
                {blogPosts.map((post, index) => (
                  <motion.article
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05, duration: 0.4 }}
                    key={post.id}
                    className="bg-white border border-slate-200 hover:border-blue-300 transition-colors overflow-hidden shadow-sm group flex flex-col h-full"
                  >
                    <div className="h-72 overflow-hidden relative">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="inline-block bg-blue-700 text-white px-3 py-1 text-xs font-semibold tracking-widest uppercase">
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
                        <span className="bg-slate-100 px-2 py-1 text-xs font-medium text-slate-500">{post.readTime}</span>
                      </div>
                      <h3 className="text-2xl font-semibold text-slate-900 mb-4 tracking-tight group-hover:text-blue-600 transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-slate-600 text-lg mb-8 leading-relaxed line-clamp-3 flex-grow">
                        {post.excerpt}
                      </p>
                    </div>
                  </motion.article>
                ))}
              </div>
            </section>
          </div>
        </main>
        <CTABanner
          title="Help us reach more young people"
          description="Your support keeps KSL's drug prevention education, school programs, and community outreach growing across Liberia."
          primaryLabel="Donate Now"
          secondaryLabel="Explore Our Programs"
          secondaryTo="/programs"
        />
        <RelatedContent />
      </div>
    </>
  );
};

export default Blog;