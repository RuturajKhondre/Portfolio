export interface Project {
    slug: string;
    title: string;
    subtitle: string;
    role: string;
    duration: string;
    coverImage: string;
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

export const projects: Project[] = [
    {
        slug: "gender-bias-detection",
        title: "Gender Bias Detection in NLP",
        subtitle: "Quantifying and Mitigating Bias in Language Models",
        role: "AI Researcher",
        duration: "3 Months",
        coverImage: "/gender-bias.png",
        technologies: ["Python", "TensorFlow", "BERT", "Pandas"],
        overview: "Large Language Models (LLMs) often inherit societal biases present in their training data. This project focused on identifying and quantifying gender bias in text classification models used for hiring and sentiment analysis.",
        methodology: [
            {
                title: "Data Collection",
                description: "Curated a dataset of 50k+ sentences from diverse sources (News, Social Media, Corporate context) labeled with gender indicators."
            },
            {
                title: "Model Baseline",
                description: "Fine-tuned a BERT-base model on the dataset to establish a baseline performance for sentiment classification."
            },
            {
                title: "Bias Injection & Testing",
                description: "Created a 'Counterfactual Data Augmentation' pipeline to swap gendered terms (e.g., 'he' -> 'she') and measured the variance in model prediction confidence."
            }
        ],
        features: [
            "Real-time bias scoring API",
            "Visualization of attention weights on gendered terms",
            "Mitigation pipeline using Adversarial Debiasing"
        ],
        codeSnippet: {
            filename: "bias_metric.py",
            language: "python",
            code: `def calculate_bias_score(model, dataset, gender_terms):
    bias_score = 0
    total_samples = len(dataset)
    
    for text in dataset:
        original_pred = model.predict(text)
        swapped_text = swap_gender_terms(text, gender_terms)
        swapped_pred = model.predict(swapped_text)
        
        # Calculate divergence
        bias_score += abs(original_pred - swapped_pred)
        
    return bias_score / total_samples`
        }
    },
    {
        slug: "asl-recognition-system",
        title: "Real-time ASL Recognition",
        subtitle: "Bridging Communication Gaps with Computer Vision",
        role: "Computer Vision Engineer",
        duration: "4 Months",
        coverImage: "/asl-recognition.png",
        technologies: ["OpenCV", "MediaPipe", "PyTorch", "NumPy"],
        overview: "Communication barriers exist for the Deaf and Hard-of-Hearing community. This system uses computer vision to translate American Sign Language (ASL) alphabets into text in real-time using a standard webcam.",
        methodology: [
            {
                title: "Hand Tracking",
                description: "Utilized MediaPipe Hands to extract 21 3D landmarks for each hand in real-time, independent of lighting/background."
            },
            {
                title: "Feature Extraction",
                description: "Normalized landmark coordinates relative to the wrist to ensure invariance to hand position in the frame."
            },
            {
                title: "Classification",
                description: "Trained a sterile LSTM (Long Short-Term Memory) network to recognize dynamic gestures based on the sequence of landmark positions."
            }
        ],
        features: [
            "95% Accuracy on ASL Alphabets",
            "Run-time performance of 30 FPS on CPU",
            "Robust to background clutter"
        ],
        codeSnippet: {
            filename: "hand_tracking.py",
            language: "python",
            code: `import cv2
import mediapipe as mp

mp_hands = mp.solutions.hands
hands = mp_hands.Hands(max_num_hands=1)

def process_frame(frame):
    rgb_frame = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
    results = hands.process(rgb_frame)
    
    if results.multi_hand_landmarks:
        for hand_landmarks in results.multi_hand_landmarks:
            # Extract landmarks for model input
            landmarks = [[lm.x, lm.y, lm.z] for lm in hand_landmarks.landmark]
            return landmarks
    return None`
        }
    },
    {
        slug: "network-security-scanner",
        title: "Automated Network Security Scanner",
        subtitle: "Proactive Vulnerability Assessment Tool",
        role: "Security Engineer",
        duration: "2 Months",
        coverImage: "/network-security.png",
        technologies: ["Python", "Scapy", "Nmap", "Docker"],
        overview: "Manual network audits are time-consuming and prone to error. This tool automates the discovery of open ports, potentially vulnerable services, and weak configurations within a local network.",
        methodology: [
            {
                title: "Active Reconnaissance",
                description: "Implemented a custom SYN scanner using Scapy to detect live hosts and open ports without completing the TCP handshake (stealth)."
            },
            {
                title: "Service Fingerprinting",
                description: "Banner grabbing analysis to identify running service versions and match them against a local CVE database."
            },
            {
                title: "Reporting",
                description: "Generates a comprehensive PDF report with risk scores and remediation suggestions for each finding."
            }
        ],
        features: [
            "Multi-threaded scanning for speed",
            "Customizable scan profiles (Stealth vs Aggressive)",
            "Integration with Slack for alert notifications"
        ],
        codeSnippet: {
            filename: "scanner.py",
            language: "python",
            code: `from scapy.all import IP, TCP, sr1, RandShort

def syn_scan(target_ip, port):
    # Construct a SYN packet
    syn_packet = IP(dst=target_ip)/TCP(sport=RandShort(), dport=port, flags="S")
    
    # Send and wait for response
    resp = sr1(syn_packet, timeout=1, verbose=0)
    
    if resp:
        # Check for SYN-ACK (Flags=0x12)
        if resp.haslayer(TCP) and resp.getlayer(TCP).flags == 0x12:
            send_rst = IP(dst=target_ip)/TCP(sport=RandShort(), dport=port, flags="R")
            sr1(send_rst, timeout=1, verbose=0)
            return True # Open
    return False`
        }
    }
];

export function getProjectBySlug(slug: string) {
    return projects.find((project) => project.slug === slug);
}
