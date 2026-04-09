import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FiChevronLeft, FiChevronRight, FiX, FiDownload } from 'react-icons/fi';
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
import The_CEO from '../assets/The_Ceo2.jpeg';
import CEO2 from '../assets/The_Ceo.jpeg';
import CEO3 from '../assets/The_Ceo3.jpeg';
import CEO4 from '../assets/The_Ceo4.jpeg';
import CEO_IN_ANOTHER_COUNTY from '../assets/CEO_IN_ANOTHER_COUNTY.jpeg';
import CEO_IN_ANOTHER_COUNTY2 from '../assets/CEO_IN_ANOTHER_COUNTY2.jpeg';
import Zwedru from '../assets/Zwedru_City.jpeg';
import Community_Children from '../assets/Community_Children.jpeg';
import Community_Children2 from '../assets/Community_Children2.jpeg';
import Women_in_community from '../assets/Women_in_community.jpeg';
import Women_in_community2 from '../assets/Women_in_community2.jpeg';
import Women_in_community3 from '../assets/Women_in_community3.jpeg';
import Women_in_community4 from '../assets/Women_in_community4.jpeg';
import Women_in_community5 from '../assets/Women_in_community5.jpeg';
import KSL_School from '../assets/KSL_School.jpeg';
import KSL_School2 from '../assets/KSL_School2.jpeg';
import KSL_School3 from '../assets/KSL_School3.jpeg';
import KSL_School4 from '../assets/KSL_School4.jpeg';
import KSL_School5 from '../assets/KSL_School5.jpeg';
import KSL_School6 from '../assets/KSL_School6.jpeg';
import KSL_School7 from '../assets/KSL_School7.jpeg';
import KSL_School8 from '../assets/KSL_School8.jpeg';
import KSL_School9 from '../assets/KSL_School9.jpeg';
import KSL_School10 from '../assets/KSL_School10.jpeg';
import KSL_School11 from '../assets/KSL_School11.jpeg';
import KSL_School12 from '../assets/KSL_School12.jpeg';
import KSL_Team1 from '../assets/KSL_Team.jpeg';
import KSL_Company from '../assets/KSL Company.jpeg';
import KSL_Company2 from '../assets/KSL Company 2.jpeg';
import Team_Discussion2 from '../assets/Team_discussion2.jpeg';
import Team_Meeting from '../assets/Team_meeting.jpeg';
import Team_Full from '../assets/Team.jpeg';
import Children2 from '../assets/Children2.jpeg';
import Children3 from '../assets/Children3.jpeg';
import Children4 from '../assets/Children4.jpeg';
import Children5 from '../assets/Children5.jpeg';
import ClassRoom from '../assets/Class Room.jpeg';
import Community_Speech from '../assets/Community_Speech.jpeg';
import Community_Speech2 from '../assets/Community_Speech2.jpeg';
import Community_Speech3 from '../assets/Community_Speech3.jpeg';
import Community_Speech4 from '../assets/Community_Speech4.jpeg';
import Community_Speech5 from '../assets/Community_Speech5.jpeg';
import Drug_Recovered from '../assets/Drug_Recovered.jpeg';
import Feedin_Children from "../assets/Feedin Children.jpeg";
import Helping_Children from "../assets/Helping Children.jpeg";
import SayNoDrugs from "../assets/Say no to drugs.jpeg";
import SchoolAssembly from "../assets/School assembly.jpeg";
import Students3 from '../assets/Students3.jpeg';
import TalkingToChildren from "../assets/Talking to children.jpeg";
import Treatment from '../assets/Treatment.jpeg';
import School_Student from '../assets/School_Students.jpeg';




const Gallery = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState('all');

  // Sample gallery categories and images 
  const galleryCategories = [
    { id: 'all', name: 'All Photos' },
    { id: 'education', name: 'Education' },
    { id: 'community', name: 'Community Outreach' },
    { id: 'teams', name: 'Teams' },
  ];

  // Gallery images
  const galleryImages = [
    // --- Education ---
    { id: 1, src: Education1, category: 'education', title: 'School Support Program', description: 'Providing educational materials to local schools' },
    { id: 6, src: Education2, category: 'education', title: 'Enlightening Students', description: 'Enlightening Students on the Danger of Drug Abuse' },
    { id: 11, src: Education4, category: 'education', title: 'Encouraging Students', description: 'Encouraging Students to focus on their studies' },
    { id: 16, src: Education3, category: 'education', title: 'Students Impacted', description: 'Encouraging Students to focus on their studies' },
    { id: 21, src: KSL_School, category: 'education', title: 'KSL School', description: 'Kids Survivor Liberia Primary & Elementary School' },
    { id: 22, src: KSL_School2, category: 'education', title: 'KSL School', description: 'Kids Survivor Liberia Primary & Elementary School' },
    { id: 23, src: KSL_School3, category: 'education', title: 'KSL School', description: 'Kids Survivor Liberia Primary & Elementary School' },
    { id: 24, src: KSL_School4, category: 'education', title: 'KSL School', description: 'Kids Survivor Liberia Primary & Elementary School' },
    { id: 25, src: KSL_School5, category: 'education', title: 'KSL School', description: 'Kids Survivor Liberia Primary & Elementary School' },
    { id: 26, src: KSL_School6, category: 'education', title: 'KSL School', description: 'Kids Survivor Liberia Primary & Elementary School' },
    { id: 27, src: KSL_School7, category: 'education', title: 'KSL School', description: 'Kids Survivor Liberia Primary & Elementary School' },
    { id: 28, src: KSL_School8, category: 'education', title: 'KSL School', description: 'Kids Survivor Liberia Primary & Elementary School' },
    { id: 29, src: KSL_School9, category: 'education', title: 'KSL School', description: 'Kids Survivor Liberia Primary & Elementary School' },
    { id: 30, src: KSL_School10, category: 'education', title: 'KSL School', description: 'Kids Survivor Liberia Primary & Elementary School' },
    { id: 31, src: KSL_School11, category: 'education', title: 'KSL School', description: 'Kids Survivor Liberia Primary & Elementary School' },
    { id: 32, src: KSL_School12, category: 'education', title: 'KSL School', description: 'Kids Survivor Liberia Primary & Elementary School' },
    { id: 33, src: ClassRoom, category: 'education', title: 'Classroom', description: 'Students learning in a KSL classroom' },
    { id: 34, src: SchoolAssembly, category: 'education', title: 'School Assembly', description: 'Students gathered for morning assembly' },
    { id: 38, src: School_Student, category: 'education', title: 'School Students', description: 'Students gathering together' },
    { id: 35, src: Students3, category: 'education', title: 'Students', description: 'Students at the KSL school program' },
    { id: 36, src: TalkingToChildren, category: 'education', title: 'Talking to Children', description: 'Educators engaging with young children' },
    { id: 37, src: SayNoDrugs, category: 'education', title: 'Say No to Drugs', description: 'Awareness campaign on the dangers of drug abuse' },

    // --- Community ---
    { id: 2, src: Community, category: 'community', title: 'Community Health Day', description: 'Free health checkups in rural communities' },
    { id: 4, src: Community5, category: 'community', title: 'Feeding Children', description: 'Providing Meals for all the children in the Community' },
    { id: 5, src: CommunityLeaders, category: 'community', title: 'Community Leaders', description: 'Meeting with the Community Leaders' },
    { id: 7, src: Community2, category: 'community', title: 'Food Distribution', description: 'Providing nutritious meals to families' },
    { id: 8, src: Youth2, category: 'community', title: 'Community Youth', description: 'Encouraging youth in the community' },
    { id: 9, src: Youth3, category: 'community', title: 'Youth Encouragement', description: 'Encouraging youth in the community' },
    { id: 10, src: Youth_Barbing, category: 'community', title: 'Youth Barbing', description: 'Barbing Youth in the community' },
    { id: 12, src: Community3, category: 'community', title: 'Food Distribution', description: 'Providing nutritious meals to families' },
    { id: 13, src: Campeign2, category: 'community', title: 'Anti-Drug Campaign', description: 'Campaign against drug abuse' },
    { id: 15, src: Sharing_Food2, category: 'community', title: 'Food Sharing', description: 'Providing nutritious meals to families' },
    { id: 17, src: Community4, category: 'community', title: 'Community Outreach', description: 'Outreach activities in the community' },
    { id: 18, src: Sharing_Food, category: 'community', title: 'Food Distribution', description: 'Providing nutritious meals to families' },
    { id: 20, src: Campeign, category: 'community', title: 'Fundraising & Community Outreach', description: 'Raising awareness in the Community' },
    { id: 38, src: Community_Children, category: 'community', title: 'Community Children', description: 'Children in community outreach' },
    { id: 39, src: Community_Children2, category: 'community', title: 'Community Children', description: 'Children in community outreach' },
    { id: 43, src: Women_in_community, category: 'community', title: 'Women in Community', description: 'Empowering women in the community' },
    { id: 44, src: Women_in_community2, category: 'community', title: 'Women in Community', description: 'Empowering women in the community' },
    { id: 45, src: Women_in_community3, category: 'community', title: 'Women in Community', description: 'Empowering women in the community' },
    { id: 46, src: Women_in_community4, category: 'community', title: 'Women in Community', description: 'Empowering women in the community' },
    { id: 47, src: Women_in_community5, category: 'community', title: 'Women in Community', description: 'Empowering women in the community' },
    { id: 48, src: Community_Speech, category: 'community', title: 'Community Speech', description: 'Addressing community members during outreach' },
    { id: 49, src: Community_Speech2, category: 'community', title: 'Community Speech', description: 'Addressing community members during outreach' },
    { id: 50, src: Community_Speech3, category: 'community', title: 'Community Speech', description: 'Addressing community members during outreach' },
    { id: 51, src: Community_Speech4, category: 'community', title: 'Community Speech', description: 'Addressing community members during outreach' },
    { id: 52, src: Community_Speech5, category: 'community', title: 'Community Speech', description: 'Addressing community members during outreach' },
    { id: 53, src: Drug_Recovered, category: 'community', title: 'Drug Recovery', description: 'Recovered drugs from anti-abuse campaigns' },
    { id: 54, src: Feedin_Children, category: 'community', title: 'Feeding Children', description: 'Providing nutritious meals to children in the community' },
    { id: 55, src: Helping_Children, category: 'community', title: 'Helping Children', description: 'Supporting children in need' },
    { id: 56, src: Children2, category: 'community', title: 'Community Children', description: 'Children benefitting from KSL programs' },
    { id: 57, src: Children3, category: 'community', title: 'Community Children', description: 'Children benefitting from KSL programs' },
    { id: 58, src: Children4, category: 'community', title: 'Community Children', description: 'Children benefitting from KSL programs' },
    { id: 59, src: Children5, category: 'community', title: 'Community Children', description: 'Children benefitting from KSL programs' },
    { id: 60, src: Treatment, category: 'community', title: 'Medical Treatment', description: 'Providing medical care to community members' },
    { id: 61, src: Zwedru, category: 'community', title: 'Zwedru City', description: 'Outreach activities in Zwedru, Grand Gedeh County' },

    // --- Teams ---
    { id: 3, src: KSL, category: 'teams', title: 'KSL Team', description: 'Raising awareness for children rights' },
    { id: 14, src: Team_Discussion, category: 'teams', title: 'Project Planning', description: 'Team working together on how to execute projects' },
    { id: 19, src: KSL_Team, category: 'teams', title: 'Kids Survivor Liberia Team', description: 'Gathering of the KSL Team' },
    { id: 62, src: KSL_Team1, category: 'teams', title: 'KSL Team', description: 'The Kids Survivor Liberia team in action' },
    { id: 63, src: KSL_Company, category: 'teams', title: 'KSL Company', description: 'The KSL team together' },
    { id: 64, src: KSL_Company2, category: 'teams', title: 'KSL Company', description: 'The KSL team together' },
    { id: 65, src: Team_Discussion2, category: 'teams', title: 'Team Discussion', description: 'KSL team members in a planning discussion' },
    { id: 66, src: Team_Meeting, category: 'teams', title: 'Team Meeting', description: 'Full team meeting to plan upcoming activities' },
    { id: 67, src: Team_Full, category: 'teams', title: 'Full Team', description: 'The complete KSL team gathered together' },
    { id: 68, src: The_CEO, category: 'teams', title: 'The CEO', description: 'Kids Survivor Liberia CEO leading by example' },
    { id: 69, src: CEO2, category: 'teams', title: 'The CEO', description: 'Kids Survivor Liberia CEO' },
    { id: 70, src: CEO3, category: 'teams', title: 'The CEO', description: 'Kids Survivor Liberia CEO on field visit' },
    { id: 71, src: CEO4, category: 'teams', title: 'The CEO', description: 'Kids Survivor Liberia CEO on outreach' },
    { id: 72, src: CEO_IN_ANOTHER_COUNTY, category: 'teams', title: 'CEO in Another County', description: 'CEO expanding KSL reach to other counties' },
    { id: 73, src: CEO_IN_ANOTHER_COUNTY2, category: 'teams', title: 'CEO in Another County', description: 'CEO expanding KSL reach to other counties' },
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
      {/* Main Header Section - Premium Redesign */}
      <header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden rounded-b-[3rem] shadow-xl border-b border-slate-100">
        <div className="absolute inset-0 z-0">
          <img
            src={KSL}
            alt="KSL Background"
            className="w-full h-full object-cover"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-blue-900/50 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/30 to-transparent"></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <span className="text-yellow-400 font-bold tracking-widest uppercase text-sm mb-4 block drop-shadow-md">Our Visual Journey</span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight drop-shadow-xl">
              Photo Gallery
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 font-light leading-relaxed max-w-3xl mx-auto border-l-4 border-yellow-400 pl-6 text-left md:text-center md:border-l-0 md:pl-0">
              A collection of moments capturing our impact on children and communities in Liberia.
            </p>
          </motion.div>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-16">
        <div className="container mx-auto px-4">
          {/* Category Filter - Premium Redesign */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16 flex justify-center"
          >
            <div className="inline-flex flex-wrap justify-center gap-3 bg-slate-50 p-2 rounded-xl border border-slate-200 shadow-sm max-w-full">
              {galleryCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-6 py-3 rounded-full text-sm font-bold tracking-wide transition-all duration-300 whitespace-nowrap ${activeCategory === category.id
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-500/30 -translate-y-0.5'
                    : 'bg-transparent text-slate-600 hover:bg-white hover:text-blue-600 hover:shadow-sm'
                    }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Gallery Grid - Premium */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8"
          >
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -8 }}
                className="relative group cursor-pointer overflow-hidden rounded-xl shadow-sm hover:shadow-md bg-white border border-slate-100"
                onClick={() => handleImageClick(image, index)}
              >
                {/* Image Container */}
                <div className="aspect-[4/5] bg-slate-100 overflow-hidden relative">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  {/* Premium Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* Content Reveal Overlay */}
                <div className="absolute inset-x-0 bottom-0 p-6 text-white transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 z-20">
                  <h3 className="font-bold text-xl mb-2 tracking-tight drop-shadow-md">{image.title}</h3>
                  <p className="text-sm text-blue-100 font-medium line-clamp-2">{image.description}</p>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4 z-20">
                  <span className="px-4 py-1.5 bg-white/90 backdrop-blur-md shadow-sm text-xs font-bold tracking-widest uppercase rounded-full text-blue-900 border border-white/20">
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

      {/* Lightbox Modal - Premium */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/95 backdrop-blur-xl p-4 sm:p-8"
        >
          <div className="relative w-full max-w-6xl mx-auto flex flex-col items-center">
            {/* Top Bar Navigation */}
            <div className="absolute top-0 right-0 left-0 flex justify-between items-center p-4 z-20 pointer-events-none">
              <button
                onClick={() => handleDownload(selectedImage.src)}
                className="p-3 bg-white/10 hover:bg-white/20 text-white rounded-full backdrop-blur-md transition-all duration-300 pointer-events-auto border border-white/10 hover:scale-110"
                aria-label="Download image"
              >
                <FiDownload size={22} />
              </button>
              <button
                onClick={handleCloseModal}
                className="p-3 bg-white/10 hover:bg-red-500/80 text-white rounded-full backdrop-blur-md transition-all duration-300 pointer-events-auto border border-white/10 hover:scale-110"
                aria-label="Close modal"
              >
                <FiX size={24} />
              </button>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={(e) => { e.stopPropagation(); handlePrev(); }}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 p-4 bg-white/5 hover:bg-white/20 text-white rounded-full backdrop-blur-md transition-all duration-300 z-20 border border-white/10 hover:scale-110 group hidden sm:flex"
            >
              <FiChevronLeft size={32} className="group-hover:-translate-x-1 transition-transform" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); handleNext(); }}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 p-4 bg-white/5 hover:bg-white/20 text-white rounded-full backdrop-blur-md transition-all duration-300 z-20 border border-white/10 hover:scale-110 group hidden sm:flex"
            >
              <FiChevronRight size={32} className="group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Image Display */}
            <div className="relative mt-16 sm:mt-0 max-h-[75vh] w-full flex justify-center items-center">
              <motion.img
                key={selectedImage.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                src={selectedImage.src}
                alt={selectedImage.title}
                className="max-w-full max-h-[75vh] object-contain rounded-xl shadow-2xl ring-1 ring-white/10"
              />
            </div>

            {/* Image Info Panel */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-8 text-center w-full max-w-2xl bg-slate-800/50 backdrop-blur-md rounded-xl p-6 border border-white/10"
            >
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3 tracking-tight">{selectedImage.title}</h3>
              <p className="text-blue-100 text-lg mb-4 font-light leading-relaxed">{selectedImage.description}</p>

              <div className="flex justify-center items-center space-x-6">
                <span className="px-4 py-1.5 bg-yellow-400/20 text-yellow-300 border border-yellow-400/30 backdrop-blur-sm rounded-full text-sm font-bold uppercase tracking-widest">
                  {galleryCategories.find(c => c.id === selectedImage.category)?.name}
                </span>
                <span className="text-sm font-medium text-slate-400 tracking-widest">
                  {currentIndex + 1} <span className="text-slate-600 mx-1">/</span> {filteredImages.length}
                </span>
              </div>

              {/* Mobile Navigation */}
              <div className="flex justify-center gap-6 mt-6 sm:hidden">
                <button
                  onClick={handlePrev}
                  className="p-3 bg-white/10 text-white rounded-full"
                >
                  <FiChevronLeft size={24} />
                </button>
                <button
                  onClick={handleNext}
                  className="p-3 bg-white/10 text-white rounded-full"
                >
                  <FiChevronRight size={24} />
                </button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Gallery;