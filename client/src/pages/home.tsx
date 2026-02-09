import { motion } from "framer-motion";
import { useState } from "react";
import { 
  Github, 
  Linkedin, 
  FileText, 
  Download, 
  Code2, 
  Trophy, 
  GraduationCap, 
  Mail,
  ExternalLink,
  Phone,
  MapPin,
  Zap,
  Play,
  Heart,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import hacknuthonCert from "@assets/hacknuthoncerti_1766076845531.jpeg";
import intellihackCert from "@assets/intellihackcerti_1766078015035.jpeg";
import intellihackVideo from "@assets/videoCobraOS_(1)_(1)_1770644910052.mp4";
import profileImage from "@assets/IMG_6680_1766081047371.jpg";

export default function Home() {
  const [intelliSlide, setIntelliSlide] = useState(0);
  const [hacknuSlide, setHacknuSlide] = useState(0);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/20 selection:text-primary">
      {/* Navigation / Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/40">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-heading font-bold text-xl tracking-tight">Krina Shah</span>
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#skills" className="hover:text-primary transition-colors">Skills</a>
            <a href="#achievements" className="hover:text-primary transition-colors">Achievements</a>
            <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
            <Separator orientation="vertical" className="h-5 bg-border/40" />
            <a href="https://github.com/Krina317" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              <Github className="w-4 h-4" />
            </a>
            <a href="https://www.linkedin.com/in/krina-shah-a4b386318/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="mailto:krinabr2007@gmail.com" className="hover:text-primary transition-colors">
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>
      </nav>

      {/* Floating Contact Button - Mobile */}
      <div className="fixed bottom-8 right-8 z-40 md:hidden">
        <Button size="icon" className="h-14 w-14 rounded-full shadow-lg bg-primary hover:bg-primary/90" asChild>
          <a href="mailto:krinabr2007@gmail.com">
            <Mail className="w-6 h-6" />
          </a>
        </Button>
      </div>

      <main className="container mx-auto px-6 pt-20 pb-20">
        {/* Hero Section */}
        <motion.section 
          variants={container}
          initial="hidden"
          animate="show"
          className="mb-16"
        >
          <div className="max-w-5xl">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <motion.div variants={item} className="flex-1">
                <h1 className="text-4xl md:text-5xl font-bold leading-[1.1] mb-4">
                  Krina <br/>
                  <span className="text-accent-cyan">Shah</span>
                </h1>
                <p className="text-base text-muted-foreground max-w-2xl leading-relaxed mb-2">
                  Hi, I'm Krina Shah.
                </p>
                <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed mb-4">
                  2nd Year B.Tech CSE Student at <span className="font-semibold text-foreground">Nirma University</span>. 
                  AI enthusiast passionate about solving real-world problems through intelligent systems.
                </p>

                <motion.div variants={item} className="flex flex-col sm:flex-row flex-wrap gap-3 pt-3 mb-4">
                  <Button size="sm" className="h-10 px-6 text-sm" asChild>
                    <a href="https://github.com/Krina317" target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 w-4 h-4" /> GitHub
                    </a>
                  </Button>
                  <Button size="sm" variant="outline" className="h-10 px-6 text-sm" asChild>
                    <a href="https://www.linkedin.com/in/krina-shah-a4b386318/" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="mr-2 w-4 h-4" /> LinkedIn
                    </a>
                  </Button>
                  <Button size="sm" variant="secondary" className="h-10 px-6 text-sm">
                    <Mail className="mr-2 w-4 h-4" /> Contact
                  </Button>
                </motion.div>

                <motion.div variants={item} className="flex flex-wrap gap-4 pt-3 border-t border-border/40 text-sm">
                  <a href="mailto:krinabr2007@gmail.com" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                    <Mail className="w-4 h-4" />
                    krinabr2007@gmail.com
                  </a>
                  <a href="tel:+919726470882" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                    <Phone className="w-4 h-4" />
                    +91 9726470882
                  </a>
                </motion.div>

                <motion.div variants={item} className="flex items-center gap-2 text-muted-foreground mt-3">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">Ahmedabad, Gujarat</span>
                </motion.div>
              </motion.div>
              
              <motion.div variants={item} className="w-48 sm:w-56 md:w-64 flex-shrink-0">
                <img 
                  src={profileImage}
                  alt="Krina Shah"
                  className="rounded-2xl w-full h-auto object-cover shadow-lg border border-border"
                />
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Skills Section */}
        <motion.section 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
          id="skills"
        >
          <div className="flex items-center gap-4 mb-10">
            <div className="p-3 bg-primary/10 rounded-xl text-primary">
              <Code2 className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-bold">Skills & Interests</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                  Technologies
                </h3>
                <div className="flex flex-wrap gap-3">
                  {["MySQL", "Python (Django, NumPy, Matplotlib)", "React", "HTML", "CSS (Bootstrap)", "JavaScript", "ML", "Swift", "SwiftUI"].map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-base px-4 py-2 hover:bg-primary hover:text-primary-foreground transition-colors cursor-default">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                  Tools
                </h3>
                <div className="flex flex-wrap gap-3">
                  {["Git & GitHub", "Postman", "MySQL Workbench", "Jupyter", "Google Colab", "Xcode"].map((skill) => (
                    <Badge key={skill} variant="outline" className="text-base px-4 py-2 hover:border-primary/50 transition-colors cursor-default">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-accent-purple"></span>
                  Interests
                </h3>
                <div className="flex flex-wrap gap-3">
                  {["AI & ML", "Finance", "Stocks", "LeetCode", "Competitive Programming", "Sports"].map((interest) => (
                    <Badge key={interest} variant="outline" className="text-base px-4 py-2 hover:border-primary/50 transition-colors cursor-default">
                      {interest}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

          </div>
        </motion.section>

        {/* Education Section */}
        <motion.section 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
          id="about"
        >
          <div className="flex items-center gap-4 mb-10">
            <div className="p-3 bg-primary/10 rounded-xl text-primary">
              <GraduationCap className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-bold">Education</h2>
          </div>

          <Card className="border-none shadow-lg bg-card/50 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-accent-cyan">Nirma University</h3>
                  <p className="text-lg font-medium text-muted-foreground">B.Tech in Computer Science & Engineering</p>
                </div>
                <Badge variant="outline" className="text-base px-4 py-1">2024 - 2028</Badge>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Currently in 2nd year, focusing on Data Structures, Algorithms, and Core Computer Science fundamentals. 
                Active participant in technical clubs, hackathons, and competitive programming.
              </p>
            </CardContent>
          </Card>
        </motion.section>

        {/* Achievements Section */}
        <motion.section 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
          id="achievements"
        >
          <div className="flex items-center gap-4 mb-10">
            <div className="p-3 bg-primary/10 rounded-xl text-primary">
              <Trophy className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-bold">Hackathon Achievements</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* IntelliHackathon */}
            <Card className="group hover:border-primary/50 transition-all duration-300 hover:shadow-lg overflow-hidden">
              <CardContent className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-yellow-100 dark:bg-yellow-900/20 text-yellow-600 dark:text-yellow-400 rounded-full">
                    <Trophy className="w-6 h-6" />
                  </div>
                  <span className="text-sm font-medium text-muted-foreground">Hackathon</span>
                </div>
                <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">IntelliHackathon</h3>
                <div className="flex items-center gap-2 text-muted-foreground mb-4">
                  <Badge variant="default" className="bg-yellow-500 hover:bg-yellow-600 border-none text-white">2nd Place</Badge>
                  <span>•</span>
                  <span className="text-sm">2nd Hackathon</span>
                </div>
                <h4 className="font-semibold text-accent-cyan mb-3">Login Anomalies Detection AI Project</h4>
                <p className="text-muted-foreground mb-6">
                  Built an intelligent AI system to detect anomalous login patterns using machine learning algorithms. Achieved accuracy of 95%+ in detecting suspicious activities.
                </p>
                
                {/* Carousel */}
                <div className="relative">
                  <div className="overflow-hidden rounded-lg border border-border">
                    {intelliSlide === 0 ? (
                      <img 
                        src={intellihackCert} 
                        alt="IntelliHackathon Certificate" 
                        className="w-full h-auto object-cover"
                      />
                    ) : (
                      <video 
                        src={intellihackVideo}
                        controls
                        className="w-full h-auto"
                      />
                    )}
                  </div>
                  
                  {/* Navigation */}
                  <div className="flex items-center justify-between mt-4">
                    <Button 
                      size="icon" 
                      variant="outline"
                      onClick={() => setIntelliSlide(intelliSlide === 0 ? 1 : 0)}
                      className="h-8 w-8"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </Button>
                    
                    <div className="flex gap-2">
                      {[0, 1].map((i) => (
                        <button
                          key={i}
                          onClick={() => setIntelliSlide(i)}
                          className={`h-2 rounded-full transition-all ${
                            intelliSlide === i ? 'w-6 bg-primary' : 'w-2 bg-muted'
                          }`}
                        />
                      ))}
                    </div>
                    
                    <Button 
                      size="icon" 
                      variant="outline"
                      onClick={() => setIntelliSlide(intelliSlide === 0 ? 1 : 0)}
                      className="h-8 w-8"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <div className="border-t border-border/40 pt-4 mt-6 flex gap-2">
                  <Button size="sm" variant="ghost" className="flex-1 text-xs h-8" asChild>
                    <a href="https://github.com/Krina317/intelliHackathon.git" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-1">
                      <Github className="w-3 h-3" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" variant="ghost" className="flex-1 text-xs h-8" asChild>
                    <a href="https://www.linkedin.com/posts/krisha-shah-973214317_2nd-place-at-intellihack-ieee-da-iict-ugcPost-7383420084599431169-B5-t?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFCAWlsB1LWcl4VX91T24Xl0WiZIhWLnVIo" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-1">
                      <Linkedin className="w-3 h-3" />
                      LinkedIn
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* HackNUthon */}
            <Card className="group hover:border-primary/50 transition-all duration-300 hover:shadow-lg overflow-hidden">
              <CardContent className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-full">
                    <Trophy className="w-6 h-6" />
                  </div>
                  <span className="text-sm font-medium text-muted-foreground">Hackathon</span>
                </div>
                <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">HackNUthon'25</h3>
                <div className="flex items-center gap-2 text-muted-foreground mb-4">
                  <Badge variant="outline" className="border-blue-500 text-blue-600">Top 10</Badge>
                  <span>•</span>
                  <span className="text-sm">1st Hackathon</span>
                </div>
                <h4 className="font-semibold text-accent-cyan mb-3">Bank Fraud Detection AI Project</h4>
                <p className="text-muted-foreground mb-6">
                  Developed a comprehensive fraud detection system using ensemble machine learning techniques. Implemented real-time transaction analysis with 92% precision in fraud identification.
                </p>
                <div className="overflow-hidden rounded-lg border border-border hover:border-primary/50 transition-colors cursor-default">
                  <img 
                    src={hacknuthonCert} 
                    alt="HackNUthon Certificate" 
                    className="w-full h-auto object-cover"
                  />
                </div>

                <div className="border-t border-border/40 pt-4 mt-6 flex gap-2">
                  <Button size="sm" variant="ghost" className="flex-1 text-xs h-8" asChild>
                    <a href="https://github.com/Krina317/hackNUthon2025.git" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-1">
                      <Github className="w-3 h-3" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" variant="ghost" className="flex-1 text-xs h-8" asChild>
                    <a href="https://www.linkedin.com/posts/krina-shah-a4b386318_hacknuthon6-top10-9thplace-activity-7318681106990448640-PGsf?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFCAWlsB1LWcl4VX91T24Xl0WiZIhWLnVIo" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-1">
                      <Linkedin className="w-3 h-3" />
                      LinkedIn
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.section>

        {/* Projects Section */}
        <motion.section 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
          id="projects"
        >
          <div className="flex items-center justify-between gap-4 mb-10">
            <h2 className="text-3xl font-bold">Personal Projects</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Project 1 - Order Management */}
            <Card className="group hover:border-primary/50 transition-all duration-300 hover:shadow-lg overflow-hidden">
              <CardContent className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-emerald-100 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 rounded-full">
                    <Code2 className="w-6 h-6" />
                  </div>
                  <Badge variant="secondary" className="bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 border-0">Completed</Badge>
                </div>
                <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">Order Management Site</h3>
                <p className="text-muted-foreground mb-4 text-sm">
                  Full-stack CRUD application for managing orders with a responsive interface and complete database integration.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge variant="outline" className="text-xs">Django</Badge>
                  <Badge variant="outline" className="text-xs">HTML</Badge>
                  <Badge variant="outline" className="text-xs">CSS</Badge>
                  <Badge variant="outline" className="text-xs">AngularJS</Badge>
                  <Badge variant="outline" className="text-xs">MySQL</Badge>
                </div>
                <p className="text-xs text-muted-foreground font-medium mb-6">Full Stack Development</p>
                
                <div className="border-t border-border/40 pt-4 flex gap-2">
                  <Button size="sm" variant="ghost" className="flex-1 text-xs h-8" asChild>
                    <a href="#" className="flex items-center justify-center gap-1">
                      <Github className="w-3 h-3" />
                      Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Project 2 - Shopping Site with AI */}
            <Card className="group hover:border-primary/50 transition-all duration-300 hover:shadow-lg overflow-hidden">
              <CardContent className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-purple-100 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 rounded-full">
                    <Code2 className="w-6 h-6" />
                  </div>
                  <Badge variant="default" className="bg-amber-500 hover:bg-amber-600 border-none text-white">Coming Soon</Badge>
                </div>
                <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">Shopping Site with AI</h3>
                <p className="text-muted-foreground mb-4 text-sm">
                  Intelligent e-commerce platform with AI-powered recommendations and personalized shopping experience.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge variant="outline" className="text-xs">React</Badge>
                  <Badge variant="outline" className="text-xs">Django</Badge>
                  <Badge variant="outline" className="text-xs">MySQL</Badge>
                  <Badge variant="outline" className="text-xs">Python (AI)</Badge>
                </div>
                <p className="text-xs text-muted-foreground font-medium mb-6">AI-Enhanced E-Commerce</p>
                
                <div className="border-t border-border/40 pt-4 flex gap-2">
                  <Button size="sm" variant="ghost" className="flex-1 text-xs h-8" asChild>
                    <a href="#" className="flex items-center justify-center gap-1">
                      <Github className="w-3 h-3" />
                      Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.section>

        {/* Contact/Resume CTA */}
        <motion.section 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="rounded-3xl bg-gradient-to-br from-zinc-900 via-zinc-900 to-zinc-800 text-white p-12 text-center relative overflow-hidden border border-primary/20"
          id="contact"
        >
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent"></div>
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Connect!</h2>
            <p className="text-zinc-400 text-lg mb-8">
              I'm always open to discussing new ideas, collaborating on projects, or exploring opportunities in AI and tech.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white h-14 px-8 text-lg rounded-full" asChild>
                <a href="mailto:krinabr2007@gmail.com">
                  <Mail className="mr-2 w-5 h-5" /> Email Me
                </a>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-zinc-700 hover:bg-zinc-800 text-white h-14 px-8 text-lg rounded-full" asChild>
                <a href="https://www.linkedin.com/in/krina-shah-a4b386318/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-2 w-5 h-5" /> Message on LinkedIn
                </a>
              </Button>
            </div>
          </div>
        </motion.section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/40 py-8 text-center text-muted-foreground">
        <p className="flex items-center justify-center gap-2 text-sm">
          Built with <span className="text-red-500">♥</span> by Krina Shah
        </p>
      </footer>
    </div>
  );
}
