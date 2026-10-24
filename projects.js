const projects = [
  {
    title: "Naval Robotics & Autonomous Navigation Simulation",
    organization: "Fincantieri NexTech",
    date: "03.2026 - 06.2026",
    role: "Thesis Internship · Naval Robotics",
    tags: ["ROS2", "Autonomous Navigation", "Robotics", "Simulation"],
    points: [
      "Study and development of mobile and assistive robotics applications onboard naval vessels.",
      "Implementation of ROS2-based simulation environments for autonomous guidance, obstacle detection, and path planning."
    ],
    // Inserisci qui l'URL dell'immagine o lascia vuoto "" se non disponibile
    image: "", 
    // Inserisci qui il link a YouTube/Vimeo o al file video se presente
    video: ""
  },
  {
    title: "UniBoAT Racing Catamaran Engineering & Subsystems Integration",
    organization: "UniBoAT Team",
    date: "09.2024 - 09.2025",
    role: "Chief Technical Officer",
    tags: ["System Integration", "Race Strategy", "Control Systems", "Team Leadership"],
    points: [
      "Full technical coordination of zero-emission racing boat design, manufacturing, and on-water testing.",
      "Supervision of complete subsystem integration (mechanical, electronics, hydrodynamics, and control algorithms).",
      "Definition of dynamic racing energy strategy; budget & technical sponsor management.",
      "Results: 1st Place Overall & Innovation/Design Prize at Monaco Energy Boat Challenge 2025."
    ],
    image: "",
    video: ""
  },
  {
    title: "Electric Outboard Inverter & Master ECU Firmware",
    organization: "UniBoAT Team",
    date: "09.2023 - 09.2024",
    role: "Powertrain Division Member",
    tags: ["STM32", "LabVIEW", "CAN Bus", "Power Electronics", "Inverter"],
    points: [
      "Design and implementation of the complete high/low-voltage marine electronic powertrain.",
      "Firmware development for STM32 microcontroller boards and electric outboard motor inverter prototype.",
      "Architecture of Master ECU telemetry and logic handling using LabVIEW via CAN Bus protocol.",
      "Results: 4th place MEBC 2024 & 3rd place SIBW 2024 (Olbia)."
    ],
    image: "",
    video: ""
  },
  {
    title: "Analog-to-CANFD Communication Bridge for Brushless Drivers",
    organization: "SmartSystem S.R.L.",
    date: "05.2023 - 08.2023",
    role: "Computer Programmer",
    tags: ["C/C++", "STM32", "CAN-FD", "UART", "Brushless Drives"],
    points: [
      "Engineered an embedded communication bridge module between an analog controller and an industrial brushless motor driver.",
      "Configured low-level peripherals and real-time protocol translation via CAN-FD and UART on STM32 microcontrollers."
    ],
    image: "",
    video: ""
  },
  {
    title: "Robotic Manipulation Assisted by Shared Control Algorithms",
    organization: "Alma Mater Studiorum - Università di Bologna",
    date: "2023",
    role: "Bachelor's Degree Thesis",
    tags: ["Robotics", "Shared Control", "MATLAB", "Kinematics"],
    points: [
      "Investigated shared autonomy paradigms where human operator guidance is dynamically blended with algorithmic obstacle avoidance.",
      "Simulated manipulator trajectories and validated safety envelopes during real-time teleoperation tasks."
    ],
    image: "",
    video: ""
  }
];

// Funzione che genera automaticamente l'HTML per ogni progetto
function renderProjects() {
  const container = document.getElementById("projects-container");
  if (!container) return;

  container.innerHTML = projects.map(p => `
    <details class="group bg-zinc-900/60 border border-zinc-800 rounded-lg p-5 transition-all">
      <summary class="cursor-pointer select-none">
        <div class="flex flex-col md:flex-row md:items-baseline justify-between gap-1">
          <div class="flex items-center gap-2">
            <span class="text-zinc-500 font-mono text-xs transition-transform group-open:rotate-90">▶</span>
            <h3 class="text-base font-medium text-white group-hover:text-cyan-400 transition-colors">${p.title}</h3>
          </div>
          <span class="font-mono text-xs text-zinc-500">${p.date}</span>
        </div>
        <div class="flex flex-wrap items-center gap-2 mt-2 pl-4 text-xs">
          <span class="text-cyan-400/90 font-mono">${p.role} · ${p.organization}</span>
        </div>
      </summary>

      <div class="mt-5 pt-4 border-t border-zinc-800/80 pl-4 space-y-4 text-sm text-zinc-300">
        <div class="flex flex-wrap gap-1.5 font-mono text-xs">
          ${p.tags.map(tag => `<span class="px-2 py-0.5 rounded bg-zinc-800 text-zinc-400">${tag}</span>`).join('')}
        </div>

        <ul class="list-disc list-inside space-y-1.5 text-zinc-300 leading-relaxed">
          ${p.points.map(pt => `<li>${pt}</li>`).join('')}
        </ul>

        ${p.image ? `
          <div class="mt-3">
            <img src="${p.image}" alt="${p.title}" class="rounded border border-zinc-800 max-h-80 object-cover w-full">
          </div>
        ` : ''}

        ${p.video ? `
          <div class="mt-3 aspect-video">
            <iframe src="${p.video}" class="w-full h-full rounded border border-zinc-800" allowfullscreen></iframe>
          </div>
        ` : ''}
      </div>
    </details>
  `).join('');
}

document.addEventListener("DOMContentLoaded", renderProjects);