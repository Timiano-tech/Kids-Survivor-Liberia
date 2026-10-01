import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FiChevronLeft, FiChevronRight, FiX, FiDownload } from 'react-icons/fi';
import SEO from '../components/SEO';
import PageHeader from '../components/PageHeader';
import SectionHeading from '../components/SectionHeading';
import CTABanner from '../components/CTABanner';
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
import GirlsEmp from '../assets/Girls_Emp.png';
import Campaign1 from '../assets/Campaign.jpeg';
import Campaign2_new from '../assets/Campaign2.jpeg';
import Campaign3 from '../assets/Campaign3.jpeg';
import Campaign4 from '../assets/Campaign4.jpeg';
import Campaign5 from '../assets/Campaign5.jpeg';
import Campaign6 from '../assets/Campaign6.jpeg';
import Campaign7 from '../assets/Campaign7.jpeg';
import Campaign8 from '../assets/Campaign8.jpeg';
import FreeMedical1 from '../assets/Free_Medicals.jpeg';
import FreeMedical2 from '../assets/Free_Medicals2.jpeg';
import FreeMedical3 from '../assets/Free_Medicals3.jpeg';
import FreeMedical4 from '../assets/Free_Medicals4.jpeg';
import FreeMedical5 from '../assets/Free_Medicals5.jpeg';
import FreeMedical6 from '../assets/Free_Medicals6.jpeg';
import FreeMedical7 from '../assets/Free_Medicals7.jpeg';
import FreeMedical8 from '../assets/Free_Medicals8.jpeg';
import FreeMedical9 from '../assets/Free_Medicals9.jpeg';
import FreeMedical10 from '../assets/Free_Medicals10.jpeg';
import FreeMedical11 from '../assets/Free_Medicals11.jpeg';
import StudentsLatest from '../assets/Students_Latest.jpeg';
import ChildrenImpact from '../assets/ChildrenImpact.jpg';




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
    { id: 'health', name: 'Health & Medical' },
    { id: 'campaigns', name: 'Awareness Campaigns' },
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

    // --- Health & Medical ---
    { id: 74, src: FreeMedical1, category: 'health', title: 'Medical Outreach', description: 'Providing essential health services' },
    { id: 75, src: FreeMedical2, category: 'health', title: 'Health Screening', description: 'Mobile clinic activities in rural areas' },
    { id: 76, src: FreeMedical3, category: 'health', title: 'Community Wellness', description: 'Supporting community health and recovery' },
    { id: 77, src: FreeMedical4, category: 'health', title: 'Medical Support', description: 'Targeted medical intervention for youth' },
    { id: 78, src: FreeMedical5, category: 'health', title: 'Health Education', description: 'Teaching basic health and hygiene' },
    { id: 79, src: FreeMedical6, category: 'health', title: 'Medical Team', description: 'KSL medical team in the field' },
    { id: 80, src: FreeMedical7, category: 'health', title: 'Outreach Clinic', description: 'Providing care in hard-to-reach zones' },
    { id: 81, src: FreeMedical8, category: 'health', title: 'Patient Care', description: 'Personalized care for vulnerable individuals' },
    { id: 82, src: FreeMedical9, category: 'health', title: 'Medical Mission', description: 'Consolidated health outreach success' },
    { id: 83, src: FreeMedical10, category: 'health', title: 'Healthcare Access', description: 'Bridging the gap in medical services' },
    { id: 84, src: FreeMedical11, category: 'health', title: 'Medical Supplies', description: 'Providing necessary medicine and tools' },

    // --- Awareness Campaigns ---
    { id: 85, src: Campaign1, category: 'campaigns', title: 'Action Campaign', description: 'Urban awareness for children rights' },
    { id: 86, src: Campaign2_new, category: 'campaigns', title: 'Community Dialogue', description: 'Engaging communities on key issues' },
    { id: 87, src: Campaign3, category: 'campaigns', title: 'Awareness Walk', description: 'Public advocacy for social change' },
    { id: 88, src: Campaign4, category: 'campaigns', title: 'Mobilization', description: 'Youth-led community transformation' },
    { id: 89, src: Campaign5, category: 'campaigns', title: 'Advocacy Day', description: 'Speaking up for vulnerable populations' },
    { id: 90, src: Campaign6, category: 'campaigns', title: 'Public Education', description: 'Widespread awareness through sessions' },
    { id: 91, src: Campaign7, category: 'campaigns', title: 'Strategic Outreach', description: 'Coordinated awareness campaigns' },
    { id: 92, src: Campaign8, category: 'campaigns', title: 'Impact Drive', description: 'Finalizing major campaign efforts' },

    // --- Additional Impact ---
    { id: 93, src: GirlsEmp, category: 'community', title: 'Girls Empowerment', description: 'Empowering adolescent girls through skills' },
    { id: 94, src: StudentsLatest, category: 'education', title: 'Recent Students', description: 'Lates group of students in KSL programs' },
    { id: 95, src: ChildrenImpact, category: 'community', title: 'Children Impact', description: 'Children thriving under KSL protection' },
    { id: 96, src: ChildrenImpact, category: 'community', title: 'Direct Support', description: 'Mobilizing direct care for children' },
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
    <>
      <SEO
        title="Photo Gallery — Kids Survivor Liberia in Action"
        description="Browse photos of Kids Survivor Liberia community outreach, drug prevention campaigns, education programs, and child protection activities across Liberia."
        canonical="/gallery"
        keywords={[
          'KSL photo gallery',
          'Liberia NGO photos',
          'child protection pictures Liberia',
          'community outreach gallery',
          'drug prevention campaign photos',
          'KSL youth programs images',
          'Liberia charity photos',
          'Gbarnga outreach gallery',
        ]}
        breadcrumbs={[{ name: 'Gallery', url: '/gallery' }]}
      />
      <div className="min-h-screen bg-white">
      <PageHeader
        eyebrow="Our Visual Journey"
        title="Photo gallery"
        description="A collection of moments capturing our impact on children and communities in Liberia."
        image={KSL}
        meta={[
          { value: galleryImages.length, label: 'Photographs' },
          { value: galleryCategories.length - 1, label: 'Categories' },
          { value: 7, label: 'Counties Documented' },
        ]}
      />

      {/* Main Content */}
      <main className="py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Intro */}
          <SectionHeading
            eyebrow="Gallery"
            title="Moments from the field"
            description="Photographs from education, community outreach, health, and awareness campaign work across Liberia."
            className="mb-10"
          />

          {/* Category Filter */}
          <div className="mb-14 border-b border-slate-200">
            <div className="flex flex-wrap gap-x-8 gap-y-2">
              {galleryCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`-mb-px border-b-2 pb-4 text-caption uppercase tracking-widest transition-colors whitespace-nowrap ${
                    activeCategory === category.id
                      ? 'border-yellow-500 text-slate-900'
                      : 'border-transparent text-slate-500 hover:text-slate-900'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Gallery Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4"
          >
            {filteredImages.map((image, index) => (
              <motion.button
                key={image.id}
                type="button"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: Math.min(index * 0.03, 0.4), duration: 0.4 }}
                className="group relative block w-full overflow-hidden bg-slate-100 text-left"
                onClick={() => handleImageClick(image, index)}
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="h-full w-full object-cover transition-transform duration-[900ms] group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="absolute inset-x-0 bottom-0 translate-y-3 p-5 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <span className="text-[10px] uppercase tracking-[0.18em] text-yellow-400">
                    {galleryCategories.find(c => c.id === image.category)?.name}
                  </span>
                  <h3 className="mt-2 text-heading-md text-white">{image.title}</h3>
                </div>
              </motion.button>
            ))}
          </motion.div>

          {/* No Images Message */}
          {filteredImages.length === 0 && (
            <div className="text-center py-16">
              <p className="text-slate-500 text-lg">No images found in this category.</p>
            </div>
          )}
        </div>
      </main>
      <CTABanner
        title="See more impact in person"
        description="Every photo represents a real life changed. Join us in expanding education, health, and protection programs across Liberia."
        primaryLabel="Donate Now"
        secondaryLabel="Volunteer With Us"
        secondaryTo="/volunteer"
      />

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/95 p-4 sm:p-8">
          <div className="relative w-full max-w-6xl mx-auto flex flex-col items-center">
            {/* Top Bar Navigation */}
            <div className="absolute top-0 right-0 left-0 z-20 flex items-center justify-between p-4">
              <button
                onClick={() => handleDownload(selectedImage.src)}
                className="inline-flex items-center gap-2 p-3 text-white/80 transition-colors hover:text-white"
                aria-label="Download image"
              >
                <FiDownload size={20} />
              </button>
              <button
                onClick={handleCloseModal}
                className="inline-flex items-center gap-2 p-3 text-white/80 transition-colors hover:text-white"
                aria-label="Close modal"
              >
                <FiX size={24} />
              </button>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={(e) => { e.stopPropagation(); handlePrev(); }}
              className="absolute left-2 top-1/2 z-20 hidden -translate-y-1/2 p-3 text-white/70 transition-colors hover:text-white sm:flex"
              aria-label="Previous image"
            >
              <FiChevronLeft size={36} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); handleNext(); }}
              className="absolute right-2 top-1/2 z-20 hidden -translate-y-1/2 p-3 text-white/70 transition-colors hover:text-white sm:flex"
              aria-label="Next image"
            >
              <FiChevronRight size={36} />
            </button>

            {/* Image Display */}
            <div className="relative mt-16 flex max-h-[75vh] w-full items-center justify-center sm:mt-0">
              <img
                key={selectedImage.id}
                src={selectedImage.src}
                alt={selectedImage.title}
                className="max-h-[75vh] max-w-full object-contain"
              />
            </div>

            {/* Image Info Panel */}
            <div className="mt-8 w-full max-w-2xl text-center">
              <h3 className="text-heading-lg text-white">{selectedImage.title}</h3>
              <p className="mx-auto mt-3 max-w-xl text-body-sm leading-relaxed text-slate-400">
                {selectedImage.description}
              </p>

              <div className="mt-6 flex items-center justify-center gap-6">
                <span className="text-caption uppercase tracking-[0.18em] text-yellow-400">
                  {galleryCategories.find(c => c.id === selectedImage.category)?.name}
                </span>
                <span className="text-caption tracking-widest text-slate-500">
                  {currentIndex + 1} <span className="mx-1 text-slate-600">/</span> {filteredImages.length}
                </span>
              </div>

              {/* Mobile Navigation */}
              <div className="mt-6 flex justify-center gap-8 sm:hidden">
                <button
                  onClick={handlePrev}
                  className="p-3 text-white/80"
                  aria-label="Previous image"
                >
                  <FiChevronLeft size={24} />
                </button>
                <button
                  onClick={handleNext}
                  className="p-3 text-white/80"
                  aria-label="Next image"
                >
                  <FiChevronRight size={24} />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  </>
);
};

export default Gallery;