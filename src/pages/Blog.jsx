import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FiCalendar,
  FiUser,
  FiTag,
  FiArrowRight,
  FiSearch,
  FiChevronLeft,
  FiChevronRight
} from 'react-icons/fi';
import CallToAction from '../components/CallToAction';
import ScrollToTopButton from '../components/ScrollToTop';
import HeaderImage from '../assets/Talking to children.jpeg';
import BlogImage1 from '../assets/Students Impacted.jpeg';
import BlogImage2 from '../assets/Helping Children.jpeg';
import BlogImage3 from '../assets/ChildrenImpact.jpeg';

const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  // Blog posts data
  const blogPosts = [
    {
      id: 1,
      title: 'Empowering Youth Through Prevention Education',
      excerpt: 'How our school programs transform young lives against substance abuse.',
      author: 'John Doe',
      date: 'Jan 15, 2024',
      category: 'Prevention',
      tags: ['Education', 'Youth'],
      image: BlogImage1,
    },
    {
      id: 2,
      title: 'Building Child Protection Systems',
      excerpt: 'Our approach to safeguarding children in vulnerable communities.',
      author: 'Jane Smith',
      date: 'Jan 10, 2024',
      category: 'Protection',
      tags: ['Children', 'Safety'],
      image: BlogImage2,
    },
    {
      id: 3,
      title: 'Skills Training for Reintegration',
      excerpt: 'Vocational programs helping youth transition to productive lives.',
      author: 'Robert Johnson',
      date: 'Jan 5, 2024',
      category: 'Empowerment',
      tags: ['Training', 'Employment'],
      image: BlogImage3,
    },
    {
      id: 4,
      title: 'Community Engagement for Change',
      excerpt: 'How community involvement drives successful prevention programs.',
      author: 'Sarah Williams',
      date: 'Dec 20, 2023',
      category: 'Community',
      tags: ['Engagement', 'Development'],
      image: BlogImage1,
    },
    {
      id: 5,
      title: 'Aligning with NADAP 2025-2030',
      excerpt: 'Supporting Liberia\'s National Drug Abuse Prevention Strategy.',
      author: 'Michael Brown',
      date: 'Dec 15, 2023',
      category: 'Policy',
      tags: ['Strategy', 'National'],
      image: BlogImage2,
    },
    {
      id: 6,
      title: 'Family Support in Recovery',
      excerpt: 'How caregiver support contributes to successful outcomes.',
      author: 'Lisa Davis',
      date: 'Dec 10, 2023',
      category: 'Support',
      tags: ['Family', 'Recovery'],
      image: BlogImage3,
    },
    {
      id: 7,
      title: 'Youth Leadership Development',
      excerpt: 'Training young leaders to drive community change.',
      author: 'David Wilson',
      date: 'Dec 5, 2023',
      category: 'Leadership',
      tags: ['Youth', 'Leadership'],
      image: BlogImage1,
    },
    {
      id: 8,
      title: 'Economic Empowerment Programs',
      excerpt: 'Creating sustainable livelihoods for vulnerable youth.',
      author: 'Maria Garcia',
      date: 'Nov 30, 2023',
      category: 'Empowerment',
      tags: ['Economy', 'Livelihood'],
      image: BlogImage2,
    },
  ];

  // Filter posts based on search
  const filteredPosts = blogPosts.filter(post => {
    if (!searchQuery) return true;
    
    const query = searchQuery.toLowerCase();
    return (
      post.title.toLowerCase().includes(query) ||
      post.excerpt.toLowerCase().includes(query) ||
      post.category.toLowerCase().includes(query) ||
      post.tags.some(tag => tag.toLowerCase().includes(query))
    );
  });

  // Calculate pagination
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  const categories = ['All', 'Prevention', 'Protection', 'Empowerment', 'Community', 'Policy', 'Support', 'Leadership'];

  return (
    <>
      <div className="min-h-screen bg-white">
        {/* Header Section */}
        <header className="relative">
          <div className="absolute inset-0 bg-blue-900/70">
            <img 
              src={HeaderImage} 
              alt="Blog Background" 
              className="w-full h-full object-cover opacity-20"
            />
          </div>

          <div className="relative py-24 text-center">
            <div className="container mx-auto px-4">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-5xl font-bold text-white mb-4"
              >
                Insights & Stories
              </motion.h1>
              <p className="text-white/80 text-lg">
                Updates on youth empowerment and drug prevention
              </p>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="py-12">
          <div className="container mx-auto px-4 max-w-6xl">
            {/* Search Section */}
            <div className="mb-12">
              <div className="relative max-w-xl mx-auto mb-8">
                <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search articles..."
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              {/* Categories */}
              <div className="flex flex-wrap justify-center gap-2 mb-8">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => {
                      if (category === 'All') setSearchQuery('');
                      else setSearchQuery(category);
                    }}
                    className={`px-4 py-2 rounded-full transition-colors ${
                      searchQuery === category || (category === 'All' && !searchQuery)
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Blog Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {currentPosts.map((post) => (
                <article key={post.id} className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <FiCalendar className="mr-1" />
                      {post.date}
                      <span className="mx-2">•</span>
                      <FiUser className="mr-1" />
                      {post.author}
                    </div>
                    
                    <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                        {post.category}
                      </span>
                      {post.tags.map((tag, index) => (
                        <span key={index} className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <button className="flex items-center text-blue-600 hover:text-blue-800 font-medium text-sm">
                      Read More
                      <FiArrowRight className="ml-2" />
                    </button>
                  </div>
                </article>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center space-x-2 mb-12">
                <button
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className="p-2 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-50 disabled:opacity-50"
                >
                  <FiChevronLeft className="w-5 h-5" />
                </button>
                
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`px-4 py-2 rounded-lg transition-colors ${
                      currentPage === page
                        ? 'bg-blue-600 text-white'
                        : 'border border-gray-300 text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    {page}
                  </button>
                ))}
                
                <button
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className="p-2 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-50 disabled:opacity-50"
                >
                  <FiChevronRight className="w-5 h-5" />
                </button>
              </div>
            )}

            {/* Video Section */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Video Insights</h2>
              <div className="space-y-6">
                {/* Video Placeholder 1 */}
                <div className="bg-gray-100 rounded-lg p-4 border border-gray-300">
                  <div className="aspect-video bg-gray-300 rounded-lg mb-4 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-gray-400 rounded-full flex items-center justify-center mx-auto mb-2">
                        <span className="text-white text-xl">▶</span>
                      </div>
                      <p className="text-gray-600 text-sm">Video 1: Education Program</p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm">Add your video embed code here</p>
                </div>

                {/* Video Placeholder 2 */}
                <div className="bg-gray-100 rounded-lg p-4 border border-gray-300">
                  <div className="aspect-video bg-gray-300 rounded-lg mb-4 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-gray-400 rounded-full flex items-center justify-center mx-auto mb-2">
                        <span className="text-white text-xl">▶</span>
                      </div>
                      <p className="text-gray-600 text-sm">Video 2: Community Impact</p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm">Add your video embed code here</p>
                </div>

                {/* Video Placeholder 3 */}
                <div className="bg-gray-100 rounded-lg p-4 border border-gray-300">
                  <div className="aspect-video bg-gray-300 rounded-lg mb-4 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-gray-400 rounded-full flex items-center justify-center mx-auto mb-2">
                        <span className="text-white text-xl">▶</span>
                      </div>
                      <p className="text-gray-600 text-sm">Video 3: Success Stories</p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm">Add your video embed code here</p>
                </div>
              </div>
            </div>

            {/* Newsletter */}
            <div className="bg-blue-50 rounded-xl p-8 text-center border border-blue-100">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Stay Updated</h3>
              <p className="text-gray-600 mb-6 max-w-md mx-auto">
                Subscribe to our newsletter for latest insights and updates
              </p>
              <form className="max-w-md mx-auto">
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700"
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