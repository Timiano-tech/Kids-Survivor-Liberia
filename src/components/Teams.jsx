import React from 'react'
import Mr_Steve from '../assets/team/Mr_Steve.png';
import Mrs_Fiona from '../assets/team/Mrs_Fiona.png';
import Mrs_Silvia from '../assets/team/Mrs_Silvia2.png';
import CEO from '../assets/team/CEO.png';

const Teams = () => {

    // Team Members
         const teamMembers = [
           {
             name: "Mr. Billy Jones",
             teamImage: CEO,
             position: "Chief Executive Officer (CEO)",
             bio: "Provides visionary leadership and strategic oversight for KSL's national initiatives, including NADAP-aligned drug abuse prevention, child protection, and youth empowerment programs. Champions child safeguarding, ethical governance, and inclusive development across Liberia."
           },
           {
             name: "Mr. Steve Darwin Wald",
             teamImage: Mr_Steve,
             position: "Director of Countries Operations",
             bio: "Leads operational coordination and implementation oversight across KSL's areas of intervention. Translates strategic objectives into effective community-responsive programs, ensuring consistent delivery of drug demand reduction, prevention, and rehabilitation initiatives."
           },
           {
             name: "Mrs. Fiona A. Etong",
             teamImage: Mrs_Fiona,
             position: "Nigeria Representative & Social Media Manager",
             bio: "Leads digital communications and regional representation, amplifying KSL's mission through innovative online outreach. Strengthens public engagement for drug abuse prevention, youth empowerment, and child protection across borders."
           },
           {
             name: "Mrs. Silvia T. Willie Dongon",
             teamImage: Mrs_Silvia,
             position: "Operational Advisor",
             bio: "Provides strategic guidance for gender-sensitive protection programs targeting adolescent girls, widows, and vulnerable elderly men. Supports operational planning and integration of best practices in social inclusion and community engagement."
           }
         ];     
  return (
    <>
      {/* Meet Our Team Section */}
          <section className='px-8 mx-auto bg-white py-20'>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="mb-20"
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Leadership & Team</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Committed professionals driving NADAP and YTEI-aligned interventions
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {teamMembers.map((member, index) => (
                  <div 
                    key={index}
                    className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="h-auto bg-gray-100 flex items-center justify-center">
                      <img 
                        src={member.teamImage}
                        alt={member.name}
                        className="w-full h-full object-cover"
                        loading='lazy'
                      />
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-800 mb-1">{member.name}</h3>
                      <p className="text-blue-600 font-medium mb-3">{member.position}</p>
                      <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Team Page Navigation Button */}
              <div className="flex justify-center mt-12">
                 <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Link to="/team">
              <button className="inline-flex items-center px-6 py-3 bg-white text-blue-600 border-2 border-blue-600 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 hover:scale-105">
                <span>View All Members</span>
                <FiArrowRight className="ml-2" />
              </button>
            </Link>
          </motion.div>
              </div>
            </motion.div>
          </section>
    </>
  )
}

export default Teams
