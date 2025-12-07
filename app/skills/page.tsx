import React from "react";
import { BlurFade } from "@/components/ui/blur-fade";
import { AuroraText } from "@/components/ui/aurora-text";
import { IconShieldLock, IconNetwork, IconTerminal2, IconCode, IconCertificate, IconCpu } from "@tabler/icons-react";

export const metadata = {
  title: "Skills | Ruturaj Khondre",
  description: "Detailed breakdown of technical skills, certifications, and expertise in Cybersecurity, Networking, and AI.",
};

interface SkillItem {
  name: string;
  level: number; // 1-100
  icon?: React.ReactNode;
}

interface SkillCategory {
  title: string;
  description: string;
  icon: React.ReactNode;
  skills: SkillItem[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Offensive Security",
    description: "Red Teaming, Penetration Testing & Vulnerability Assessment",
    icon: <IconShieldLock className="w-6 h-6 text-red-400" />,
    skills: [
      { name: "Metasploit Framework", level: 90 },
      { name: "Burp Suite Pro", level: 85 },
      { name: "Nmap / Zenmap", level: 95 },
      { name: "Wireshark", level: 90 },
      { name: "Kali Linux", level: 95 },
      { name: "OWASP Top 10", level: 90 },
    ],
  },
  {
    title: "Defensive Security",
    description: "Blue Teaming, SOC Operations & Incident Response",
    icon: <IconCpu className="w-6 h-6 text-blue-400" />,
    skills: [
      { name: "Splunk (SIEM)", level: 85 },
      { name: "Snort / Suricata", level: 80 },
      { name: "Firewall Config (Cisco/Palo Alto)", level: 75 },
      { name: "Forensics (Volatility)", level: 70 },
      { name: "Endpoint Security", level: 80 },
    ],
  },
  {
    title: "Networking",
    description: "Infrastructure, Protocols & Architecture",
    icon: <IconNetwork className="w-6 h-6 text-green-400" />,
    skills: [
      { name: "TCP/IP Suite", level: 95 },
      { name: "Routing & Switching (OSPF/BGP)", level: 85 },
      { name: "VPN / IPsec", level: 80 },
      { name: "SDN (Software Defined Networking)", level: 75 },
      { name: "Network Mapping", level: 90 },
    ],
  },
  {
    title: "Development & AI",
    description: "Security Automation & Machine Learning",
    icon: <IconCode className="w-6 h-6 text-purple-400" />,
    skills: [
      { name: "Python (Scripting/Automation)", level: 90 },
      { name: "TensorFlow / Keras", level: 80 },
      { name: "Next.js / React", level: 75 },
      { name: "Bash Scripting", level: 85 },
      { name: "Git / Version Control", level: 90 },
    ],
  },
];

const certifications = [
  {
    name: "CompTIA Security+",
    issuer: "CompTIA",
    date: "2023",
    color: "from-red-500 to-orange-500",
  },
  {
    name: "Certified Ethical Hacker (CEH)",
    issuer: "EC-Council",
    date: "In Progress",
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "Cisco Certified Network Associate (CCNA)",
    issuer: "Cisco",
    date: "2023",
    color: "from-green-500 to-emerald-500",
  },
];

export default function SkillsPage() {
  return (
    <section className="relative min-h-screen pt-32 pb-20 bg-black overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Hero Header */}
        <div className="mb-20 text-center">
          <BlurFade delay={0.1} inView>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Technical <AuroraText colors={["#FF9933", "#FFFFFF", "#FF3333"]} speed={1.5}>Arsenal</AuroraText>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
              A comprehensive breakdown of my capabilities across Offensive Security, Network Engineering, and Software Development.
            </p>
          </BlurFade>
        </div>

        {/* Certifications Section */}
        <div className="mb-20">
          <BlurFade delay={0.2} inView>
            <div className="flex items-center gap-3 mb-8 justify-center md:justify-start">
              <IconCertificate className="w-6 h-6 text-yellow-500" />
              <h2 className="text-2xl font-bold text-white">Certifications</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, idx) => (
                <div key={idx} className="relative group p-1 rounded-2xl bg-gradient-to-br from-zinc-800 to-zinc-900 hover:from-zinc-700 hover:to-zinc-800 transition-all duration-300">
                  <div className={`absolute inset-0 bg-gradient-to-r ${cert.color} opacity-0 group-hover:opacity-20 rounded-2xl transition-opacity blur-md`} />
                  <div className="relative h-full bg-black/80 rounded-xl p-6 border border-zinc-700/50 backdrop-blur-sm flex flex-col justify-between">
                    <div>
                      <h3 className="text-lg font-bold text-white mb-1">{cert.name}</h3>
                      <p className="text-sm text-zinc-400">{cert.issuer}</p>
                    </div>
                    <div className="mt-4 flex justify-between items-center">
                      <span className="text-xs font-mono text-zinc-500">{cert.date}</span>
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${cert.color}`} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </BlurFade>
        </div>

        {/* Skills Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {skillCategories.map((category, idx) => (
            <BlurFade key={category.title} delay={0.3 + idx * 0.1} inView>
              <div className="h-full bg-zinc-900/30 border border-zinc-800 rounded-3xl p-8 hover:border-zinc-700 transition-colors">
                <div className="flex items-start gap-4 mb-8">
                  <div className="p-3 bg-zinc-900 rounded-xl border border-zinc-700">
                    {category.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">{category.title}</h3>
                    <p className="text-sm text-zinc-400">{category.description}</p>
                  </div>
                </div>

                <div className="space-y-6">
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-zinc-200 font-medium">{skill.name}</span>
                        <span className="text-zinc-500">{skill.level}%</span>
                      </div>
                      <div className="h-2 w-full bg-zinc-800 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-purple-600 to-blue-500 rounded-full"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
