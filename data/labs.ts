export interface LabProject {
    slug: string;
    title: string;
    subtitle: string;
    rol: string;
    duration: string;
    coverImage: string;
    images?: string[];
    technologies: string[];
    githubUrl?: string; // Optional
    overview: string;
    methodology: {
        title: string;
        description: string;
    }[];
    features: string[];
    codeSnippet: {
        language: string;
        code: string;
        filename: string;
    };
}

export const labProjects: LabProject[] = [
    {
        slug: "packet-tracer-basics",
        title: "First Network Setup",
        subtitle: "Building a Multi-Device Network Infrastructure",
        rol: "Network Engineer",
        duration: "1 Week",
        coverImage: "/packet-tracer-1.png",
        images: ["/packet-tracer-1.png", "/packet-tracer-1.1.png"],
        technologies: ["Cisco Packet Tracer", "Routing", "Switching"],
        overview: "My entry into the world of network engineering. I designed and simulated my first comprehensive network topology connecting routers, switches, and firewalls, establishing connectivity between multiple end devices.",
        methodology: [
            {
                title: "Topology Design",
                description: "Laid out a structured network with clear segmentation between router, switch, and end-device layers."
            },
            {
                title: "Cabling & Connectivity",
                description: "Learned the physical layer distinctions: Straight-through cables for dissimilar devices (PC-Switch) vs Crossover for similar ones, and Serial DCE/DTE connections for WAN links."
            },
            {
                title: "Verification",
                description: "Validated connectivity using simple PDU transfers and ICMP ping tests across the simulation."
            }
        ],
        features: [
            "Functional Multi-Node Network",
            "Correct Cabling Standards Applied",
            "Basic Device Configuration"
        ],
        codeSnippet: {
            filename: "verification.txt",
            language: "bash",
            code: `PC> ping 192.168.1.1

Pinging 192.168.1.1 with 32 bytes of data:
Reply from 192.168.1.1: bytes=32 time=1ms TTL=255
Reply from 192.168.1.1: bytes=32 time<1ms TTL=255
Reply from 192.168.1.1: bytes=32 time<1ms TTL=255

Ping statistics for 192.168.1.1:
    Packets: Sent = 4, Received = 4, Lost = 0 (0% loss),
Approximate round trip times in milli-seconds:
    Minimum = 0ms, Maximum = 1ms, Average = 0ms`
        }
    },
    {
        slug: "cli-mastery",
        title: "Cisco IOS CLI Mastery",
        subtitle: "Managing Devices via Command Line",
        rol: "Network Admin",
        duration: "2 Weeks",
        coverImage: "/packet-tracer-2.png",
        images: ["/packet-tracer-2.png", "/packet-tracer-2.1.png"],
        technologies: ["Cisco IOS", "CLI", "Security"],
        overview: "Moved beyond the GUI to master the Cisco IOS Command Line Interface. This lab focused on secure device management, navigating privilege levels, and hardening device access.",
        methodology: [
            {
                title: "Mode Navigation",
                description: "Mastered the hierarchy: User EXEC (>), Privileged EXEC (#), and Global Config ((config)#)."
            },
            {
                title: "Access Hardening",
                description: "Secured console and VTY lines with passwords. Implemented 'enable secret' for encrypted privileged access."
            },
            {
                title: "Configuration Management",
                description: "Practiced the critical workflow of saving 'running-config' (RAM) to 'startup-config' (NVRAM) to ensure persistence."
            }
        ],
        features: [
            "Encrypted Password Storage",
            "Console & Remote Access Security",
            "Banner MOTD Configuration"
        ],
        codeSnippet: {
            filename: "security_config.ios",
            language: "bash",
            code: `Router> enable
Router# configure terminal
Router(config)# hostname R1
R1(config)# enable secret cisco123
R1(config)# service password-encryption
R1(config)# banner motd # Unauthorized Access Prohibited #
R1(config)# line console 0
R1(config-line)# password conpass
R1(config-line)# login
R1(config-line)# exit
R1(config)# do write memory
Building configuration...
[OK]`
        }
    },
    {
        slug: "ethernet-switching-analysis",
        title: "Ethernet Switching & ARP",
        subtitle: "Deep Dive into Frame Analysis and MAC Tables",
        rol: "Network Analyst",
        duration: "1 Week",
        coverImage: "/packet-tracer-3.png",
        images: ["/packet-tracer-3.png"],
        technologies: ["ARP", "Ethernet", "Wireshark"],
        overview: "A detailed analysis of Layer 2 switching logic. I visualized how switches build their MAC address tables dynamically and how ARP resolution precedes IP communication.",
        methodology: [
            {
                title: "ARP Analysis",
                description: "Observed the broadcast nature of ARP Requests (Who has 192.168.1.5?) and the unicast nature of ARP Replies."
            },
            {
                title: "MAC Table Building",
                description: "Verified how switches learn source MAC addresses from incoming frames to populate their CAM tables."
            },
            {
                title: "Frame Inspection",
                description: "Dissected Ethernet frames to identify Preamble, SFD, MAC addresses, and Type fields (0x0806 for ARP)."
            }
        ],
        features: [
            "packet-level Traffic Visualization",
            "Dynamic MAC Address Learning",
            "ARP/ICMP Handshake Analysis"
        ],
        codeSnippet: {
            filename: "switch_verification.ios",
            language: "bash",
            code: `Switch# show mac address-table
          Mac Address Table
-------------------------------------------

Vlan    Mac Address       Type        Ports
----    -----------       --------    -----
   1    0001.4234.5678    DYNAMIC     Fa0/1
   1    0001.9988.7766    DYNAMIC     Fa0/2
   1    0002.1122.3344    DYNAMIC     Fa0/24

Switch# show interfaces fastEthernet 0/1 header
! Captured Frame Analysis:
! Dest MAC: FFFF.FFFF.FFFF (Broadcast)
! Source MAC: 0001.4234.5678 (PC1)
! Type: 0x0806 (ARP)`
        }
    }
];

export function getLabBySlug(slug: string) {
    return labProjects.find((project) => project.slug === slug);
}
