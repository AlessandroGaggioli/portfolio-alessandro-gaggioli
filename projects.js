const projects = [
  // --- ROBOTICS & AUTONOMOUS SYSTEMS ---
  {
    title: "Autonomous Mobile Robotics: SLAM, AMCL & Pick & Place Manipulation",
    category: "robotics",
    degree: "msc",
    context: "Autonomous and Mobile Robotics Exam · UniBo",
    date: "2025 - 2026",
    role: "M.Sc. Project (Team of 2)",
    tags: ["ROS2", "TIAGo Robot", "Nav2", "SLAM Toolbox", "MoveIt2", "ArUco"],
    points: [
      "Task 1: Full autonomous exploration and occupancy grid mapping in Gazebo using slam_toolbox and explore_lite with TIAGo arm tucked in home position.",
      "Task 2: Global localization using AMCL with particle redistribution and yaw sweep; random waypoint exploration on global costmaps to detect pick/place ArUco markers.",
      "Task 3: Non-blocking state machine orchestrating approach trajectory, head-tilt visual servoing, cartesian descent, and IFRA link attacher for dual-cube pick & place."
    ],
    pdf: "Autonomous_Mobile_Robotics_Exam_Group30_Report.pdf",
    image: "",
    video: ""
  },
  {
    title: "Robotic Manipulation Assisted by Shared Control Algorithms",
    category: "robotics",
    degree: "bsc",
    context: "Bachelor's Degree Thesis · UniBo (Advisor: Prof. G. Palli)",
    date: "2022 - 2023",
    role: "B.Sc. Thesis Project",
    tags: ["ROS", "C++", "Franka Emika Panda", "Geomagic Touch", "Bézier Splines", "Haptics"],
    points: [
      "Designed and evaluated a human-in-the-loop shared control framework on a 7-DOF Franka Emika Panda cobot and Geomagic Touch haptic interface.",
      "Implemented a dynamic force field based on cubic Bézier curves and arctangent potential valleys to guide the operator toward grasping targets.",
      "Conducted experimental validation with 10 test subjects, demonstrating a ~47% reduction in task completion time and significant fatigue reduction."
    ],
    pdf: "TesiGaggioli.pdf",
    image: "",
    video: ""
  },
  {
    title: "Naval Robotics & Autonomous Navigation Simulation",
    category: "robotics",
    degree: "msc",
    context: "Fincantieri NexTech (Genoa)",
    date: "03.2026 - 06.2026",
    role: "Thesis Internship · Naval Robotics",
    tags: ["ROS2", "Mobile Robotics", "Autonomous Navigation", "Simulation"],
    points: [
      "Investigation and engineering of mobile and assistive robotics applications on naval vessels.",
      "Development of realistic ROS2-based simulation pipelines for obstacle avoidance, guidance, and path planning."
    ],
    pdf: "",
    image: "",
    video: ""
  },

  // --- CONTROL & OPTIMIZATION ---
  {
    title: "Optimal Control of an Acrobot (Gymnast Robot)",
    category: "control",
    degree: "msc",
    context: "Optimal Control & Reinforcement Learning · UniBo (Prof. G. Notarstefano)",
    date: "2025 - 2026",
    role: "M.Sc. Project (Team of 3)",
    tags: ["CasADi", "Python", "LQR", "MPC", "Nonlinear Optimization", "Armijo"],
    points: [
      "Discretized continuous non-linear double pendulum dynamics symbolically in CasADi using CVODES integrator and exact algorithmic differentiation Jacobians.",
      "Synthesized optimal equilibrium-to-equilibrium trajectories via Gauss-Newton closed-loop method with Armijo backtracking line search.",
      "Developed time-varying LQR trajectory tracking and constrained MPC with IPOPT solver to handle actuator torque limits under perturbed initial conditions."
    ],
    pdf: "Report_group_08.pdf",
    image: "",
    video: ""
  },
  {
    title: "Inverted Pendulum Control Synthesis & Simulation",
    category: "control",
    degree: "bsc",
    context: "Automatic Control Course · UniBo",
    date: "2021 - 2022",
    role: "B.Sc. Course Project",
    tags: ["MATLAB", "Simulink", "State-Space", "Root Locus", "PID"],
    points: [
      "Mathematical modeling and nonlinear equations of motion for an inverted pendulum on a cart.",
      "Linearization around unstable upright equilibrium and synthesis of stabilizing state-feedback and PID control architectures."
    ],
    pdf: "",
    image: "",
    video: ""
  },

  // --- VISION & REAL-TIME SYSTEMS ---
  {
    title: "Stereo Robot Navigation & Disparity Analysis",
    category: "vision-realtime",
    degree: "msc",
    context: "Computer Vision & Image Processing · UniBo (Prof. L. Di Stefano)",
    date: "2025 - 2026",
    role: "M.Sc. Project (Team of 3)",
    tags: ["Computer Vision", "Disparity Mapping", "Stereo Vision", "Moravec", "Python"],
    points: [
      "Implemented stereo block matching with SAD cost functions to estimate obstacle distance (z in mm) and chessboard dimensional metrics over time.",
      "Compared Gaussian filtering against Moravec interest operator filtering to eliminate low-texture outliers.",
      "Implemented dynamic adaptive disparity ranges (64-pixel sliding window) and 5-stripe vertical planar angle estimation for obstacle orientation."
    ],
    pdf: "Computer_Vision___Image_Processing_project.pdf",
    image: "",
    video: ""
  },
  {
    title: "Real-Time Systems: Multi-Thread Synchronization & IPC",
    category: "vision-realtime",
    degree: "msc",
    context: "Real-Time Systems Course · UniBo",
    date: "2024 - 2025",
    role: "M.Sc. Project (Team of 4)",
    tags: ["C", "POSIX Threads", "Named Pipes", "Monitors", "Mutex", "Barriers"],
    points: [
      "Assignment 1: Implemented interprocess communication (IPC) between master and slave processes via POSIX named pipes and signal handling (SIGUSR1).",
      "Assignment 2: Architected thread synchronization monitor managing 15 threads on a 30-slot shared buffer using pthread mutexes, condition variables, and barriers.",
      "Benchmarked and analyzed starvation and deadlock behaviors across Shortest-Vector-First (SVF), Longest-Vector-First (LVF), and FCFS policies."
    ],
    pdf: "A1 Documentation.pdf",
    image: "",
    video: ""
  },
  {
    title: "Analog-to-CANFD Communication Bridge for Brushless Drives",
    category: "vision-realtime",
    degree: "bsc",
    context: "SmartSystem S.R.L. (Fano)",
    date: "05.2023 - 08.2023",
    role: "Computer Programmer",
    tags: ["Embedded C", "STM32", "CAN-FD", "UART", "Brushless Drivers"],
    points: [
      "Developed firmware bridge running on STM32 microcontrollers to interface an analog controller with an industrial brushless motor driver.",
      "Managed real-time protocol conversion between UART and high-speed CAN-FD bus."
    ],
    pdf: "",
    image: "",
    video: ""
  },

  // --- POWER ELECTRONICS & PLC ---
  {
    title: "Design & Simulation of a 20kW NPC Inverter for 1500V BESS",
    category: "power-auto",
    degree: "msc",
    context: "Power Electronic Circuits · UniBo",
    date: "2024 - 2025",
    role: "M.Sc. Project (Team of 2)",
    tags: ["PLECS", "SiC MOSFET", "NPC Multilevel Inverter", "SPWM-PD", "BESS", "THD"],
    points: [
      "Designed and simulated a 3-level Neutral-Point Clamped (NPC) grid-connected inverter (1500V DC-link to 480V Line-to-Line AC) using PLECS.",
      "Selected Wolfspeed Silicon Carbide MOSFETs (C3M0021120K) and Schottky diodes (C4D20120D); evaluated thermal limits ensuring Tj < 100°C.",
      "Implemented Sinusoidal PWM with Phase Disposition (SPWM-PD) at 16 kHz, achieving THD < 3.5% and European weighted efficiency above 98.8%."
    ],
    pdf: "Design_and_Simulation_of_a_20kW_NPC_inverter_for_a_1500V_BESS_in_the_USA_market.pdf",
    image: "",
    video: ""
  },
  {
    title: "UniBoAT Racing Catamaran: Powertrain & Systems Architecture",
    category: "power-auto",
    degree: "msc",
    context: "UniBoAT Team · Monaco Energy Boat Challenge",
    date: "2023 - 2025",
    role: "CTO (2024-2025) · Powertrain Member (2023-2024)",
    tags: ["Power Electronics", "Inverter", "LabVIEW", "CAN Bus", "STM32", "Telemetry"],
    points: [
      "Coordinated full design, testing, and subsystem integration for zero-emission racing catamaran, winning 1st Place Overall at MEBC 2025.",
      "Engineered high/low voltage powertrain, programmed STM32 boards and prototype inverter for electric outboard motor, and implemented Master ECU logic in LabVIEW."
    ],
    pdf: "",
    image: "",
    video: ""
  },
  {
    title: "Industrial Automation: Washing Machine Control Logic",
    category: "power-auto",
    degree: "bsc",
    context: "Industrial Automation Course · UniBo",
    date: "2021 - 2022",
    role: "B.Sc. Project (Team of 3)",
    tags: ["PLC", "Guide d'Animazione (GA)", "State Machines", "Fault Handling", "Automation"],
    points: [
      "Engineered automated washing machine controller structured around 5 Guide di Animazione (GA) (Water, Temperature, Motor, Soap, Door) with Do/Done and Start/Stop protocols.",
      "Implemented comprehensive fault-management policies for heating element breakdown, pump failures, and drain blockages."
    ],
    pdf: "LAVATRICE Petrone,Roscigno,Gaggioli.pdf",
    image: "",
    video: ""
  }
];

let activeCategory = "all";
let activeDegree = "all";

function renderProjects() {
  const container = document.getElementById("projects-container");
  if (!container) return;

  const filtered = projects.filter(p => {
    const matchCat = (activeCategory === "all") || (p.category === activeCategory);
    const matchDeg = (activeDegree === "all") || (p.degree === activeDegree);
    return matchCat && matchDeg;
  });

  if (filtered.length === 0) {
    container.innerHTML = `<p class="text-zinc-500 font-mono text-xs py-8 text-center">No projects found for the selected filter.</p>`;
    return;
  }

  container.innerHTML = filtered.map(p => `
    <details class="group bg-zinc-900/60 border border-zinc-800 rounded-lg p-5 transition-all">
      <summary class="cursor-pointer select-none">
        <div class="flex flex-col md:flex-row md:items-baseline justify-between gap-1">
          <div class="flex items-center gap-2">
            <span class="text-zinc-500 font-mono text-xs transition-transform group-open:rotate-90">▶</span>
            <h3 class="text-base font-medium text-white group-hover:text-cyan-400 transition-colors">${p.title}</h3>
          </div>
          <div class="flex items-center gap-2 self-start md:self-auto font-mono text-xs">
            <span class="px-1.5 py-0.5 rounded bg-zinc-800 text-cyan-300 uppercase">${p.degree}</span>
            <span class="text-zinc-500">${p.date}</span>
          </div>
        </div>
        <div class="mt-2 pl-4 text-xs font-mono text-cyan-400/90">
          ${p.role} · ${p.context}
        </div>
      </summary>

      <div class="mt-5 pt-4 border-t border-zinc-800/80 pl-4 space-y-4 text-sm text-zinc-300">
        <div class="flex flex-wrap gap-1.5 font-mono text-xs">
          ${p.tags.map(t => `<span class="px-2 py-0.5 rounded bg-zinc-800 text-zinc-400">${t}</span>`).join('')}
        </div>

        <ul class="list-disc list-inside space-y-1.5 text-zinc-300 leading-relaxed text-xs md:text-sm">
          ${p.points.map(pt => `<li>${pt}</li>`).join('')}
        </ul>

        <div class="flex flex-wrap items-center gap-4 pt-2">
          ${p.pdf ? `
            <a href="${p.pdf}" target="_blank" class="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 hover:underline">
              <span>📄</span> View Report PDF
            </a>
          ` : ''}
        </div>

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

function initFilters() {
  document.querySelectorAll("#category-filters .filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll("#category-filters .filter-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      activeCategory = btn.getAttribute("data-cat");
      renderProjects();
    });
  });

  document.querySelectorAll("#degree-filters .degree-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll("#degree-filters .degree-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      activeDegree = btn.getAttribute("data-degree");
      renderProjects();
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initFilters();
  renderProjects();
});