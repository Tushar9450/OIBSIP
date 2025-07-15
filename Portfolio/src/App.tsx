import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  Download,
  ExternalLink,
  Code,
  Palette,
  Database,
  Globe,
  Briefcase,
  GraduationCap,
  Award,
  ChevronRight,
  Menu,
  X
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skills = [
    { name: 'JavaScript', level: 90, icon: Code },
    { name: 'React', level: 85, icon: Code },
    { name: 'CSS/Tailwind', level: 88, icon: Palette },
    { name: 'Node.js', level: 80, icon: Database },
    { name: 'TypeScript', level: 75, icon: Code },
    { name: 'UI/UX Design', level: 82, icon: Palette },
  ];

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment integration, and admin dashboard.',
      image: 'https://images.pexels.com/photos/34577/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=400',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=400',
      technologies: ['React', 'Firebase', 'Material-UI', 'WebSockets'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Weather Dashboard',
      description: 'Interactive weather dashboard with location-based forecasts, charts, and personalized weather alerts using modern APIs.',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=400',
      technologies: ['Vue.js', 'Chart.js', 'OpenWeather API', 'PWA'],
      liveUrl: '#',
      githubUrl: '#'
    }
  ];

  const experiences = [
    {
      title: 'Senior Frontend Developer',
      company: 'Tech Innovators Inc.',
      period: '2022 - Present',
      description: 'Leading frontend development team, architecting scalable React applications, and mentoring junior developers.',
      achievements: [
        'Reduced page load time by 40% through optimization',
        'Led migration from legacy codebase to modern React',
        'Implemented automated testing reducing bugs by 60%'
      ]
    },
    {
      title: 'Full Stack Developer',
      company: 'Digital Solutions Co.',
      period: '2020 - 2022',
      description: 'Developed and maintained web applications using modern technologies, collaborated with cross-functional teams.',
      achievements: [
        'Built 15+ responsive web applications',
        'Integrated third-party APIs and payment systems',
        'Improved code quality through peer reviews'
      ]
    },
    {
      title: 'Frontend Developer',
      company: 'Startup Labs',
      period: '2019 - 2020',
      description: 'Created user interfaces for startup products, focused on user experience and responsive design.',
      achievements: [
        'Designed and developed company website',
        'Implemented mobile-first responsive design',
        'Collaborated with UX team on user research'
      ]
    }
  ];

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrollY > 50 ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold text-slate-800">
              Portfolio
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['home', 'skills', 'projects', 'experience', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="text-slate-600 hover:text-amber-600 transition-colors duration-200 capitalize font-medium"
                >
                  {section}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md text-slate-600 hover:text-amber-600 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['home', 'skills', 'projects', 'experience', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block px-3 py-2 text-slate-600 hover:text-amber-600 transition-colors duration-200 capitalize font-medium w-full text-left"
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8 relative">
            <div className="w-48 h-48 mx-auto rounded-full overflow-hidden shadow-2xl ring-4 ring-white/50">
              <img 
                src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400" 
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center shadow-lg">
              <Award className="w-6 h-6 text-white" />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-slate-800 mb-6 leading-tight">
            Hello, I'm <span className="text-amber-600">Alex Johnson</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Full-Stack Developer & UI/UX Designer passionate about creating beautiful, 
            functional web experiences that make a difference.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button 
              onClick={() => scrollToSection('projects')}
              className="px-8 py-4 bg-amber-600 text-white rounded-lg font-semibold hover:bg-amber-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              View My Work
              <ChevronRight size={20} />
            </button>
            
            <button className="px-8 py-4 border-2 border-slate-300 text-slate-700 rounded-lg font-semibold hover:border-amber-600 hover:text-amber-600 transition-all duration-200 flex items-center justify-center gap-2">
              <Download size={20} />
              Download Resume
            </button>
          </div>
          
          <div className="flex justify-center space-x-6">
            <a href="#" className="p-3 text-slate-600 hover:text-amber-600 transition-colors duration-200 hover:scale-110 transform">
              <Github size={24} />
            </a>
            <a href="#" className="p-3 text-slate-600 hover:text-amber-600 transition-colors duration-200 hover:scale-110 transform">
              <Linkedin size={24} />
            </a>
            <a href="#" className="p-3 text-slate-600 hover:text-amber-600 transition-colors duration-200 hover:scale-110 transform">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
              Skills & Expertise
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Proficient in modern web technologies with a focus on creating 
              exceptional user experiences and scalable applications.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-amber-100 rounded-lg mr-4">
                    <skill.icon className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-800">{skill.name}</h3>
                    <p className="text-slate-600">{skill.level}% Proficiency</p>
                  </div>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-amber-500 to-amber-600 h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              A showcase of my recent work, demonstrating problem-solving skills 
              and technical expertise across various domains.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">{project.title}</h3>
                  <p className="text-slate-600 mb-4 leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    <a 
                      href={project.liveUrl}
                      className="flex items-center gap-2 text-amber-600 hover:text-amber-700 font-medium transition-colors"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                    <a 
                      href={project.githubUrl}
                      className="flex items-center gap-2 text-slate-600 hover:text-slate-800 font-medium transition-colors"
                    >
                      <Github size={16} />
                      Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
              Professional Experience
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              A journey through my career, highlighting key achievements and 
              the growth in my technical and leadership skills.
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-amber-600"></div>
            
            {experiences.map((experience, index) => (
              <div key={index} className={`relative mb-12 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8 md:ml-auto'}`}>
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 ml-12 md:ml-0">
                    <div className="flex items-center mb-4">
                      <div className="p-3 bg-amber-100 rounded-lg mr-4">
                        <Briefcase className="w-6 h-6 text-amber-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-slate-800">{experience.title}</h3>
                        <p className="text-amber-600 font-medium">{experience.company}</p>
                        <p className="text-slate-500 text-sm">{experience.period}</p>
                      </div>
                    </div>
                    
                    <p className="text-slate-600 mb-4 leading-relaxed">{experience.description}</p>
                    
                    <ul className="space-y-2">
                      {experience.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start gap-2 text-slate-600">
                          <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center shadow-lg">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
              Let's Work Together
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              I'm always open to discussing new opportunities, creative ideas, 
              or potential collaborations. Let's create something amazing together!
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-center gap-4 p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg">
                <div className="p-4 bg-amber-100 rounded-lg">
                  <Mail className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-800">Email</h3>
                  <p className="text-slate-600">alex.johnson@email.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg">
                <div className="p-4 bg-amber-100 rounded-lg">
                  <Phone className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-800">Phone</h3>
                  <p className="text-slate-600">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg">
                <div className="p-4 bg-amber-100 rounded-lg">
                  <MapPin className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-800">Location</h3>
                  <p className="text-slate-600">San Francisco, CA</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
                    placeholder="Enter your name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
                    placeholder="Enter your email"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200 resize-none"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-amber-600 text-white rounded-lg font-semibold hover:bg-amber-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-lg mb-4">
            © 2024 Alex Johnson. All rights reserved.
          </p>
          <p className="text-slate-400">
            Built with React, TypeScript, and Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;