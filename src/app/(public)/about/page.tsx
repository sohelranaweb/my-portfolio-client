"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Code2, Lightbulb, Settings } from "lucide-react"; // example icons

export default function AboutPage() {
  const skills = {
    Frontend: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
    ],
    Backend: [
      "TypeScript",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "MongoDB",
      "Prisma",
      "Mongoose",
    ],
    Architecture: [
      "REST APIs",
      "MVC Pattern",
      "Clean Code",
      "Database Design",
      "Performance Optimization",
    ],
    "Tools & Others": ["Git", "Docker", "AWS", "Vercel", "Testing", "CI/CD"],
  };
  const services = [
    {
      icon: <Code2 className="w-6 h-6 text-yellow-400 mb-3" />,
      title: "Full-Stack Development",
      desc: "MERN & PERN stack specialist with focus on scalable applications",
    },
    {
      icon: <Lightbulb className="w-6 h-6 text-yellow-400 mb-3" />,
      title: "Self-Driven",
      desc: "Highly motivated to learn and deliver impactful solutions",
    },
    {
      icon: <Settings className="w-6 h-6 text-yellow-400 mb-3" />,
      title: "Problem Solver",
      desc: "Adept at tackling complex challenges with clean, efficient code",
    },
  ];
  return (
    <section className="w-full min-h-screen bg-gradient-to-r from-green-50 to-purple-50 dark:from-gray-900 dark:to-gray-950 py-20 px-6 md:px-12">
      <div className="flex flex-col items-center justify-center text-center pb-14 px-4 lg:px-0">
        <h1 className="text-4xl font-bold mb-4">About Me</h1>
        <p className="text-muted-foreground text-sm max-w-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          libero maiores ipsa labore molestiae veniam omnis laudantium
          repudiandae, architecto ex hic odit reiciendis eum quidem perferendis
          eaque pariatur sapiente ea.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8 items-start">
        {/* Left Side */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left md:col-span-1 space-y-6">
          {/* Profile */}

          {/* <Card className="w-full">
            <CardContent className="flex flex-col items-center p-6">
              <Avatar className="h-28 w-28 mb-4">
                <AvatarImage src="/profile.png" alt="Profile" />
                <AvatarFallback>SR</AvatarFallback>
              </Avatar>
              <h2 className="text-2xl font-medium text-center lg:text-left">
                Sohel Rana
              </h2>
              <p className="text-muted-foreground text-center lg:text-left text-sm mt-2">
                Full-Stack Developer
              </p>
            </CardContent>
          </Card> */}

          <Card className="w-full transform transition-transform duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/30">
            <CardContent className="flex flex-col items-center p-6">
              <Avatar className="h-28 w-28 mb-4 transition-transform duration-300 hover:scale-110">
                <AvatarImage src="/profile.png" alt="Profile" />
                {/* <AvatarFallback>SR</AvatarFallback> */}
              </Avatar>
              <h2 className="text-2xl font-medium text-center lg:text-left transition-colors duration-300 hover:text-purple-500">
                Sohel Rana
              </h2>
              <p className="text-muted-foreground text-center lg:text-left text-sm mt-2">
                Full-Stack Developer
              </p>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <Card className="w-full transform transition-transform duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/30">
            <CardContent className="p-6 space-y-4">
              <h3 className="text-xl font-bold mb-4">Contact Info</h3>
              <div className="flex items-center gap-3 text-sm">
                <Mail className="h-5 w-5 text-blue-400" />
                <span>youremail@example.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="h-5 w-5 text-green-400" />
                <span>+880 1234-567890</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="h-5 w-5 text-red-400" />
                <span>Dhaka, Bangladesh</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Github className="h-5 w-5 text-gray-400" />
                <a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline break-all"
                >
                  github.com/yourusername
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Linkedin className="h-5 w-5 text-blue-500" />
                <a
                  href="https://linkedin.com/in/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline break-all"
                >
                  linkedin.com/in/yourusername
                </a>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Side */}
        <div className="md:col-span-3 space-y-8">
          {/* My Journey */}
          <Card className="shadow-md bg-white/70 dark:bg-gray-800 transform transition-transform duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/30">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                My Journey
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                I started my career as a self-taught developer, gradually diving
                into frontend and backend technologies. Over the years, I’ve
                built full-stack applications, solved complex problems, and
                collaborated with clients to deliver impactful solutions.
              </p>
            </CardContent>
          </Card>

          {/* Cards Row 1 */}
          {/* <div className="grid md:grid-cols-3 gap-4">
            <Card className="bg-primary/10 dark:bg-primary/20 text-center shadow-md">
              <CardContent className="py-6">
                <p className="font-semibold text-gray-900 dark:text-white">
                  Full-Stack Developer
                </p>
              </CardContent>
            </Card>
            <Card className="bg-primary/10 dark:bg-primary/20 text-center shadow-md">
              <CardContent className="py-6">
                <p className="font-semibold text-gray-900 dark:text-white">
                  Self-Driven
                </p>
              </CardContent>
            </Card>
            <Card className="bg-primary/10 dark:bg-primary/20 text-center shadow-md">
              <CardContent className="py-6">
                <p className="font-semibold text-gray-900 dark:text-white">
                  Problem Solver
                </p>
              </CardContent>
            </Card>
          </div> */}
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card
                key={index}
                className="bg-white/5 dark:bg-gray-900 border border-gray-800 rounded-xl shadow-md transform transition-transform duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/30"
              >
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center">{service.icon}</div>
                  <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {service.desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Cards Row 2 */}
          <div className="grid md:grid-cols-4 gap-4">
            {Object.entries(skills).map(([category, items]) => (
              <Card
                key={category}
                className="bg-white/70 dark:bg-gray-800 shadow-md rounded-xl transform transition-transform duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/30"
              >
                <CardContent className="p-6">
                  <p className="font-semibold text-lg text-gray-900 dark:text-white mb-4 text-center">
                    {category}
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {items.map((skill) => (
                      <Badge
                        key={skill}
                        className="px-3 py-1 rounded-full text-sm font-medium
                  bg-gray-200 text-gray-900 dark:bg-gray-700 dark:text-gray-100
                  hover:bg-gray-300 dark:hover:bg-gray-600 transition"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
