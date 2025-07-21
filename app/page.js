// Remember to install dependencies: npm install lucide-react

import { Mail, Github, Linkedin, Twitter, ArrowRight, Code, Brush, Smartphone, Download, MapPin, Palette } from 'lucide-react';

// --- Reusable Components ---

const Button = ({ href, children, variant = 'primary', className = '' }) => {
  const baseClasses = "px-8 py-3 rounded-full font-semibold transition-all duration-300 ease-in-out flex items-center justify-center space-x-2 text-sm";
  const variants = {
    primary: "bg-gray-900 text-white hover:bg-gray-700 shadow-md hover:shadow-lg",
    secondary: "border border-gray-300 text-gray-700 hover:bg-gray-100",
  };
  return (
    <a href={href} className={`${baseClasses} ${variants[variant]} ${className}`}>
      {children}
    </a>
  );
};

// Updated ServiceCard to always have the highlighted style
const ServiceCard = ({ icon, title, description }) => (
  <div className="p-8 rounded-2xl transition-all duration-300 bg-white shadow-2xl border border-purple-300 transform hover:-translate-y-2">
    <div className="w-12 h-12 flex items-center justify-center rounded-lg mb-4 bg-purple-100 text-purple-600">
      {icon}
    </div>
    <h3 className="text-lg font-bold mb-2 text-gray-900">{title}</h3>
    <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
  </div>
);

const ProjectCard = ({ image, title, category }) => (
    <div className="group relative overflow-hidden rounded-2xl h-full">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent transition-all duration-300"></div>
        <div className="absolute bottom-0 left-0 p-6 w-full">
            <div className="flex justify-between items-end">
                <div>
                    <p className="text-white/80 text-sm">{category}</p>
                    <h3 className="text-white text-xl font-bold">{title}</h3>
                </div>
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                    <ArrowRight className="w-5 h-5 text-white" />
                </div>
            </div>
        </div>
    </div>
);


// --- Page Sections ---

const Header = () => (
  <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md">
    <div className="container mx-auto px-4 h-20 flex justify-between items-center">
      <a href="#home" className="text-2xl font-bold text-gray-900">Md Gufran.</a>
      <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-500">
        <a href="#home" className="hover:text-gray-900 transition-colors">Home</a>
        <a href="#about" className="hover:text-gray-900 transition-colors">About</a>
        <a href="#services" className="hover:text-gray-900 transition-colors">Services</a>
        <a href="#work" className="hover:text-gray-900 transition-colors">Work</a>
      </nav>
      <Button href="#contact" variant="primary" className="hidden md:flex">Contact Me</Button>
    </div>
  </header>
);

const HeroSection = () => (
  <section id="home" className="min-h-screen flex flex-col justify-center items-center text-center pt-24 pb-12 px-4 relative">
     <div className="absolute top-0 inset-x-0 h-64 bg-gradient-to-b from-purple-50 via-white to-white z-0"></div>
     <div className="relative z-10">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
            src="https://placehold.co/80x80/000000/FFFFFF?text=MG"
            alt="Md Gufran"
            className="w-20 h-20 rounded-full mx-auto mb-6 border-4 border-white shadow-lg"
        />
        <h1 className="text-4xl md:text-6xl font-light text-gray-800 mb-2 tracking-wide">
            Mobile App developer
        </h1>
        <h2 className="text-4xl md:text-6xl font-light text-gray-800 mb-6 tracking-wide flex items-center justify-center gap-3">
            based in 
            <span className="flex items-center gap-2 bg-gray-100 px-4 py-1 rounded-full font-normal">
                <MapPin className="w-5 h-5 text-gray-500" />
                Delhi.
            </span>
        </h2>
        <p className="max-w-xl mx-auto text-gray-600 mb-8">
            I&apos;m a passionate and creative developer with a love for crafting beautiful and functional web experiences.
        </p>
        <div className="flex justify-center space-x-4">
            <Button href="#contact">HIRE ME</Button>
            <Button href="#" variant="secondary">
                <Download size={16} />
                <span>Download CV</span>
            </Button>
        </div>
     </div>
  </section>
);

const AboutSection = () => (
  <section id="about" className="py-20 md:py-28 bg-white">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-light text-center mb-16 text-gray-800">About me</h2>
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-20">
        <div className="md:w-1/3 flex justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
                src="https://placehold.co/400x500/F3F4F6/374151?text=Md+Gufran" 
                alt="Md Gufran profile"
                className="rounded-2xl shadow-xl w-full max-w-xs object-cover"
            />
        </div>
        <div className="md:w-2/3 text-center md:text-left">
            <p className="text-gray-600 leading-relaxed mb-6">
                Hey there! I&apos;m MD Gufran, a B.Tech student majoring in Computer Science & Engineering. My tech journey started in high school with a fascination for HTML, CSS, and JavaScript, which has since grown into a full-blown passion for both web and Android development.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
                I love building things that not only work but feel intuitive, blending logic with a strong sense of design. Whether I&apos;m crafting pixel-perfect websites or developing user-focused mobile apps with Kotlin and Jetpack Compose, my goal is always to turn great ideas into clean, scalable, and engaging products.
            </p>
            <div className="grid grid-cols-2 gap-6 mb-10 text-left">
                <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-500">Status</p>
                    <p className="font-bold text-gray-800">B.Tech Student</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-500">Major</p>
                    <p className="font-bold text-gray-800">Computer Science</p>
                </div>
            </div>
            <div className="flex justify-center md:justify-start items-center space-x-4">
                <p className="text-gray-600 font-medium">My Skills:</p>
                <div className="flex items-center space-x-3">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="https://www.vectorlogo.zone/logos/kotlinlang/kotlinlang-icon.svg" alt="Kotlin" className="w-7 h-7"/>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="https://www.vectorlogo.zone/logos/android/android-icon.svg" alt="Android" className="w-7 h-7"/>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg" alt="React" className="w-7 h-7"/>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg" alt="Node.js" className="w-7 h-7"/>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" alt="Tailwind CSS" className="w-7 h-7"/>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" alt="Firebase" className="w-7 h-7"/>
                </div>
            </div>
        </div>
      </div>
    </div>
  </section>
);


// Updated ServicesSection to use the new card style for all items
const ServicesSection = () => (
    <section id="services" className="py-20 md:py-28 bg-gray-50/50">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-light text-center mb-4 text-gray-800">My services</h2>
            <p className="max-w-2xl mx-auto text-center text-gray-600 mb-16">
                I provide a wide range of services to help you build and grow your digital presence.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <ServiceCard icon={<Brush size={24}/>} title="Web Design" description="Crafting visually stunning and user-friendly website designs." />
                <ServiceCard icon={<Palette size={24}/>} title="UI/UX Design" description="Creating intuitive and engaging user interfaces and experiences." />
                <ServiceCard icon={<Smartphone size={24}/>} title="Mobile Apps" description="Building responsive and performant mobile applications." />
                <ServiceCard icon={<Code size={24}/>} title="Web Development" description="Turning designs into clean, efficient, and scalable code." />
            </div>
        </div>
    </section>
);

const WorkSection = () => {
    const projects = [
        { title: "Fintech App", category: "Mobile Design", image: "https://images.unsplash.com/photo-1554224155-1696413565d3?q=80&w=2070&auto=format&fit=crop" },
        { title: "E-commerce Site", category: "Web Development", image: "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?q=80&w=2072&auto=format&fit=crop" },
        { title: "SaaS Dashboard", category: "Web Design", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" },
        { title: "Branding Project", category: "Branding", image: "https://images.unsplash.com/photo-1542370285-b8eb8317691c?q=80&w=1974&auto=format&fit=crop" },
    ];
    return (
        <section id="work" className="py-20 md:py-28 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-light text-center mb-4 text-gray-800">My latest work</h2>
                <p className="max-w-2xl mx-auto text-center text-gray-600 mb-16">
                    Here&apos;s a selection of my recent projects. I&apos;m proud of every single one of them.
                </p>
                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map(p => <ProjectCard key={p.title} {...p} />)}
                </div>
            </div>
        </section>
    );
};

const ContactSection = () => (
    <section id="contact" className="py-20 md:py-28 bg-gray-50/50">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-light text-center mb-4 text-gray-800">Get in touch</h2>
            <p className="max-w-2xl mx-auto text-center text-gray-600 mb-12">
                Have a project in mind? I&apos;d love to hear from you.
            </p>
            <div className="max-w-xl mx-auto">
                <div className="bg-white p-8 sm:p-12 rounded-2xl shadow-lg">
                    <form className="space-y-6">
                        <div>
                            <label htmlFor="name" className="sr-only">Name</label>
                            <input type="text" id="name" name="name" placeholder="Your Name" className="w-full bg-gray-100 border-transparent rounded-lg px-5 py-3 text-gray-700 focus:ring-2 focus:ring-purple-500 focus:outline-none transition" />
                        </div>
                        <div>
                            <label htmlFor="email" className="sr-only">Email</label>
                            <input type="email" id="email" name="email" placeholder="Your Email" className="w-full bg-gray-100 border-transparent rounded-lg px-5 py-3 text-gray-700 focus:ring-2 focus:ring-purple-500 focus:outline-none transition" />
                        </div>
                        <div>
                            <label htmlFor="message" className="sr-only">Message</label>
                            <textarea id="message" name="message" rows="5" placeholder="Your Message" className="w-full bg-gray-100 border-transparent rounded-lg px-5 py-3 text-gray-700 focus:ring-2 focus:ring-purple-500 focus:outline-none transition"></textarea>
                        </div>
                        <div className="text-center pt-2">
                           <button type="submit" className="w-full px-8 py-3 rounded-full font-semibold transition-all duration-300 ease-in-out flex items-center justify-center space-x-2 text-sm bg-gray-900 text-white hover:bg-gray-700 shadow-md hover:shadow-lg">
                                SEND MESSAGE
                           </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
);

const Footer = () => (
    <footer className="bg-white text-gray-600 py-8">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
            <a href="#home" className="text-2xl font-bold text-gray-900 mb-4 md:mb-0">Md Gufran.</a>
            <p className="text-sm mb-4 md:mb-0">&copy; {new Date().getFullYear()} Md Gufran. All Rights Reserved.</p>
            <div className="flex space-x-6">
                <a href="#" className="hover:text-gray-900 transition-colors"><Twitter /></a>
                <a href="#" className="hover:text-gray-900 transition-colors"><Github /></a>
                <a href="#" className="hover:text-gray-900 transition-colors"><Linkedin /></a>
            </div>
        </div>
    </footer>
);

// --- Main App Component ---

export default function App() {
  return (
    <div className="bg-white">
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
        html {
          scroll-behavior: smooth;
        }
        body {
          font-family: 'Poppins', sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
      `}} />
      
      <Header />
      
      <main className="pt-20">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <WorkSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
