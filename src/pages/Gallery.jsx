import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FiChevronLeft, FiChevronRight, FiX, FiDownload } from 'react-icons/fi';
import HeaderImage from '../assets/Talking to children.jpeg';
import ScrollToTopButton from '../components/ScrollToTop';
import CallToAction from '../components/CallToAction';
import Education1 from '../assets/Students2.jpeg';
import Community from '../assets/Treatment_of_wounds.jpeg';
import Education2 from '../assets/Students.jpeg';
import Education3 from '../assets/Students Impacted.jpeg';
import Education4 from '../assets/Children on the assembly.jpeg';
import Community2 from '../assets/Community_Outreach_Children.jpeg';
import Community3 from '../assets/Feeding_CHildren.jpeg';
import Community4 from '../assets/Community_Outreach.jpeg';
import CommunityLeaders from '../assets/Community Leaders.jpeg';
import Community5 from '../assets/Community_Children_outreach.jpeg';
import KSL from '../assets/KSL_Team3.jpeg';
import Campeign from '../assets/Campeign.jpeg';
import Campeign2 from '../assets/Against_drug_abuse.jpeg';
import KSL_Team from '../assets/KSL_Team2.jpeg';
import Youth_Barbing from '../assets/Youth_Barbing.jpeg';
import Youth2 from '../assets/Youth2.jpeg';
import Youth3 from '../assets/Youth_Community_Outreach.jpeg';
import Team_Discussion from '../assets/Team_discussion.jpeg';
import Sharing_Food from '../assets/Children.jpeg';
import Sharing_Food2 from '../assets/Food_sharing2.jpeg';




const Gallery = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState('all');

  // Sample gallery categories and images - Replace with your actual images
  const galleryCategories = [
    { id: 'all', name: 'All Photos' },
    { id: 'education', name: 'Education' },
    { id: 'community', name: 'Community Outreach' },
    { id: 'teams', name: 'Teams' },
  ];

  // Sample gallery images - Replace these with your actual images
  const galleryImages = [
    { id: 1, src: Education1, category: 'education', title: 'School Support Program', description: 'Providing educational materials to local schools' },
    { id: 2, src: Community, category: 'community', title: 'Community Health Day', description: 'Free health checkups in rural communities' },
    { id: 3, src: KSL, category: 'teams', title: 'Kids Survivor Liberia Team', description: 'Raising awareness for children rights' },
    { id: 4, src: Community5, category: 'community', title: 'Feeding Children', description: 'Providing Meals for all the children in the Community' },
    { id: 5, src: CommunityLeaders, category: 'community', title: 'Community Leaders', description: 'Meeting with the Community Leaders' },
    { id: 6, src: Education2, category: 'education', title: 'Enlightening Students', description: 'Enlightening Students on the Danger of Drug Abuse' },
    { id: 7, src: Community2, category: 'community', title: 'Food Distribution', description: 'Providing nutritious meals to families' },
    { id: 8, src: Youth2, category: 'community', title: 'Community Youth', description: 'Encouraging youth in the community' },
    { id: 9, src: Youth3, category: 'community', title: 'Youth Encouragement', description: 'Encouraging youth in the community' },
    { id: 10, src: Youth_Barbing, category: 'community', title: 'Youth', description: 'Barbing Youth' },
    { id: 11, src: Education4, category: 'education', title: 'Encouraging Students', description: 'Encouraging Students to focus on their studies' },
    { id: 12, src: Community3, category: 'community', title: 'Food Distribution', description: 'Providing nutritious meals to families' },
    { id: 13, src: Campeign2, category: 'community', title: 'Campaign', description: 'A Larger Campaign' },
    { id: 14, src: Team_Discussion, category: 'teams', title: 'Project Planning', description: 'Team working together on how to execute projects' },
    { id: 15, src: Sharing_Food2, category: 'community', title: 'Food Distribution', description: 'Providing nutritious meals to families' },
    { id: 16, src: Education3, category: 'education', title: 'Encouraging Students', description: 'Encouraging Students to focus on their studies' },
    { id: 17, src: Community4 , category: 'community', title: 'Feeding Children', description: 'Providing Meals for all the children in the Community' },
    { id: 18, src: Sharing_Food, category: 'community', title: 'Food Distribution', description: 'Providing nutritious meals to families' },
    { id: 19, src: KSL_Team, category: 'teams', title: 'Kids Survivor Liberia Team', description: 'Gathering of the KSL Team' },
    { id: 20, src: Campeign, category: 'community', title: 'Fundraising and Community Outreach', description: 'Raising of awareness in the Community' },
  ];

  const filteredImages = activeCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  const handleImageClick = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % filteredImages.length;
    setSelectedImage(filteredImages[nextIndex]);
    setCurrentIndex(nextIndex);
  };

  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    setSelectedImage(filteredImages[prevIndex]);
    setCurrentIndex(prevIndex);
  };

  const handleDownload = (imageUrl) => {
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = `ksl-gallery-${Date.now()}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <header className="relative">
        {/* Background Image */}
        <div className="absolute inset-0 bg-linear-to-r from-blue-800 to-yellow-900/70">
          <img 
            src={HeaderImage} 
            alt="Gallery Background" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>

        {/* Page Header */}
        <div className="relative z-10 py-30 text-center">
          <div className="container mx-auto px-4">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-6xl font-bold text-white"
            >
              Photo Gallery
            </motion.h1>
            <p className="text-white/80 text-lg mt-4 max-w-2xl mx-auto">
              Capturing moments of hope, transformation, and impact
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-16">
        <div className="container mx-auto px-4">
          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <div className="flex flex-wrap justify-center gap-2 md:gap-4">
              {galleryCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm md:text-base font-medium transition-all ${
                    activeCategory === category.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Gallery Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          >
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="relative group cursor-pointer overflow-hidden rounded-xl shadow-lg"
                onClick={() => handleImageClick(image, index)}
              >
                {/* Image Container */}
                <div className="aspect-square bg-gray-100 overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="font-bold text-lg mb-1">{image.title}</h3>
                    <p className="text-sm text-gray-200">{image.description}</p>
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-xs font-medium rounded-full text-gray-800">
                    {galleryCategories.find(c => c.id === image.category)?.name}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* No Images Message */}
          {filteredImages.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">No images found in this category.</p>
            </div>
          )}
        </div>
      </main>

      {/* Lightbox Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
        >
          <div className="relative w-full max-w-6xl mx-4">
            {/* Close Button */}
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 z-10 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
            >
              <FiX size={24} />
            </button>

            {/* Download Button */}
            <button
              onClick={() => handleDownload(selectedImage.src)}
              className="absolute top-4 left-4 z-10 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
            >
              <FiDownload size={24} />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
            >
              <FiChevronLeft size={24} />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
            >
              <FiChevronRight size={24} />
            </button>

            {/* Image Display */}
            <div className="relative">
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full max-h-[80vh] object-contain rounded-lg"
              />
            </div>

            {/* Image Info */}
            <div className="mt-4 text-white">
              <h3 className="text-2xl font-bold mb-2">{selectedImage.title}</h3>
              <p className="text-gray-200 mb-2">{selectedImage.description}</p>
              <div className="flex justify-between items-center">
                <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm">
                  {galleryCategories.find(c => c.id === selectedImage.category)?.name}
                </span>
                <span className="text-sm text-gray-300">
                  {currentIndex + 1} / {filteredImages.length}
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      <ScrollToTopButton />
      <CallToAction/>
    </div>
  );
};

export default Gallery;