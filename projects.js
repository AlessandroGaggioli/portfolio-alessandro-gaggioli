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
    summary: "Simulation project on the TIAGo mobile manipulator in Gazebo with ROS2: the robot autonomously explores and maps an unknown environment, localizes itself within it, and then detects ArUco markers to pick up and place objects.",
    points: [
      "Task 1: Full autonomous exploration and occupancy grid mapping in Gazebo using slam_toolbox and explore_lite with TIAGo arm tucked in home position.",
      "Task 2: Global localization using AMCL with particle redistribution and yaw sweep; random waypoint exploration on global costmaps to detect pick/place ArUco markers.",
      "Task 3: Non-blocking state machine orchestrating approach trajectory, head-tilt visual servoing, cartesian descent, and IFRA link attacher for dual-cube pick & place."
    ],
    pdf: "Autonomous_Mobile_Robotics_Exam_Group30_Report.pdf",
    image: "img/amr-map.jpg",
    video: "Task 2 & 3.mp4"
  },
  {
    title: "Robotic Manipulation Assisted by Shared Control Algorithms",
    category: "robotics",
    degree: "bsc",
    context: "Bachelor's Degree Thesis · UniBo (Advisor: Prof. G. Palli)",
    date: "2022 - 2023",
    role: "B.Sc. Thesis Project",
    highlight: "Bachelor's Thesis",
    tags: ["ROS", "C++", "Franka Emika Panda", "Geomagic Touch", "Bézier Splines", "Haptics"],
    points: [
      "Designed and evaluated a human-in-the-loop shared control framework on a 7-DOF Franka Emika Panda cobot and Geomagic Touch haptic interface.",
      "Implemented a dynamic force field based on cubic Bézier curves and arctangent potential valleys to guide the operator toward grasping targets.",
      "Conducted experimental validation with 10 test subjects, demonstrating a ~47% reduction in task completion time and significant fatigue reduction."
    ],
    pdf: "Tesi_Gaggioli_Alessandro.pdf",
    pdfLabel: "View Thesis PDF",
    image: "img/thesis-setup.jpg",
    video: ""
  },
  {
    title: "Naval Robotics: navigation in non inertial marine environments",
    category: "robotics",
    degree: "msc",
    context: "Fincantieri NexTech (Genoa)",
    date: "03.2026 - 06.2026",
    role: "Thesis Internship · Naval Robotics",
    highlight: "Internship",
    tags: ["ROS2", "Mobile Robotics", "Autonomous Navigation", "Visual-Inertial Odometry", "Simulation"],
    points: [
      "Investigation and engineering of mobile and assistive robotics applications on naval vessels.",
      "Development of a ROS2-based simulation to evaluate loosely coupled visual-inertial stereo odometry."
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
    video: "task5optimalcontrol.mp4",
    videoMaxWidth: "340px"
  },
  {
    title: "Inverted Pendulum Control",
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
    video: "pendolo-inverso-cropped.mp4",
    videoMaxWidth: "280px"
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
    pdf: "Faedo_Paltrinieri_Gaggioli_RobotNavigationProject.pdf",
    image: "",
    video: "CompVision.mp4"
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
    highlight: "Internship",
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
    image: "img/npc-plecs.png",
    video: ""
  },
  {
    title: "UniBoAT Racing Catamaran",
    category: "power-auto",
    degree: "msc",
    context: "UniBoAT Team · Monaco Energy Boat Challenge",
    date: "2023 - 2025",
    role: "CTO (2024-2025) · Powertrain Member (2023-2024)",
    highlight: "University Team",
    tags: ["Power Electronics", "Inverter", "LabVIEW", "CAN Bus", "STM32", "Telemetry"],
    points: [
      "Coordinated full design, testing, and subsystem integration for zero-emission racing catamaran, winning 1st Place Overall at MEBC 2025, Design Prize and Innovation Prize.",
      "Engineered high/low voltage powertrain, programmed STM32 boards and inverter for electric prototype outboard motor, and implemented Master ECU logic in LabVIEW. 4th place at MEBC 2024, 3rd place at SIBW 2024."
    ],
    pdf: "",
    image: ["img/mebc-prize.jpg", "img/uniboat.jpg"],
    video: "UniBoAT_slalom_race.mp4"
  },
  {
    title: "DC Motor Drive: 4-Quadrant Converter with Cascaded Speed & Current Control",
    category: "power-auto",
    degree: "bsc",
    context: "Electric Drives Laboratory (Laboratorio di Azionamenti Elettrici) · UniBo",
    date: "2022",
    role: "B.Sc. Course Project",
    tags: ["MATLAB", "Simulink", "4-Quadrant DC/DC Converter", "PWM", "PI Control", "Anti-Windup"],
    points: [
      "Modeled in Simulink a DC motor drive fed by a real 4-quadrant (H-bridge) DC/DC converter with source impedance and input filter, including motor and load dynamics.",
      "Designed cascaded control with an inner current loop and an outer speed loop (PI regulators with anti-windup saturation) driving a unipolar PWM at 100 kHz.",
      "Achieved 0.28% output current ripple, 0.38% input current ripple and 0% speed overshoot; the <100 ms rise time target proved unachievable due to the current limit."
    ],
    pdf: "DC control.pdf",
    image: "img/dc-simulink.png",
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

function renderVideo(src, maxWidth) {
  if (/\.(mp4|webm)$/i.test(src)) {
    return `
      <div class="mt-3 mx-auto"${maxWidth ? ` style="max-width: ${maxWidth}"` : ''}>
        <video controls preload="metadata" class="w-full rounded border border-zinc-700 bg-black">
          <source src="${encodeURI(src)}" type="video/${src.split('.').pop().toLowerCase()}">
        </video>
      </div>
    `;
  }
  return `
    <div class="mt-3 aspect-video">
      <iframe src="${src}" class="w-full h-full rounded border border-zinc-800" allowfullscreen></iframe>
    </div>
  `;
}

// Sort key from the end of the date range: "03.2026 - 06.2026" -> 202606, "2025 - 2026" -> 202612
function endDateKey(date) {
  const end = (date || "").split("-").pop().trim();
  const [first, second] = end.split(".");
  const year = parseInt(second || first, 10) || 0;
  const month = second ? parseInt(first, 10) : 12;
  return year * 100 + month;
}

function renderProjects() {
  const container = document.getElementById("projects-container");
  if (!container) return;

  const filtered = projects.filter(p => {
    const matchCat = (activeCategory === "all") || (p.category === activeCategory);
    const matchDeg = (activeDegree === "all") || (p.degree === activeDegree);
    return matchCat && matchDeg;
  }).sort((a, b) => (!!b.highlight - !!a.highlight) || (endDateKey(b.date) - endDateKey(a.date)));

  if (filtered.length === 0) {
    container.innerHTML = `<p class="text-zinc-400 font-mono text-xs py-8 text-center">No projects found for the selected filter.</p>`;
    return;
  }

  container.innerHTML = filtered.map(p => `
    <details class="project-card group rounded-lg p-5 transition-all${p.highlight ? ' featured' : ''}">
      <summary class="cursor-pointer select-none">
        <div class="flex flex-col md:flex-row md:items-baseline justify-between gap-1">
          <div class="flex items-center gap-2">
            <span class="text-zinc-400 font-mono text-xs transition-transform group-open:rotate-90">▶</span>
            <h3 class="text-base font-medium text-white group-hover:text-cyan-400 transition-colors">${p.title}</h3>
          </div>
          <div class="flex items-center gap-2 self-start md:self-auto font-mono text-xs">
            ${p.highlight ? `<span class="featured-badge px-2 py-0.5 rounded font-semibold uppercase tracking-wide">★ ${p.highlight}</span>` : ''}
            <span class="px-1.5 py-0.5 rounded bg-zinc-800 text-cyan-300 uppercase">${p.degree}</span>
            ${p.date ? `<span class="text-zinc-400">${p.date}</span>` : ''}
          </div>
        </div>
        <div class="mt-2 pl-4 text-xs font-mono text-cyan-400/90">
          ${p.role} · ${p.context}
        </div>
      </summary>

      <div class="mt-5 pt-4 border-t border-zinc-800/80 pl-4 space-y-4 text-sm text-zinc-300">
        <div class="flex flex-wrap gap-1.5 font-mono text-xs">
          ${p.tags.map(t => `<span class="px-2 py-0.5 rounded bg-zinc-800 border border-zinc-700 text-zinc-300">${t}</span>`).join('')}
        </div>

        ${p.summary ? `<p class="text-xs md:text-sm text-zinc-200 leading-relaxed">${p.summary}</p>` : ''}

        <ul class="list-disc list-inside space-y-1.5 text-zinc-300 leading-relaxed text-xs md:text-sm">
          ${p.points.map(pt => `<li>${pt}</li>`).join('')}
        </ul>

        ${[].concat(p.image || []).map(src => `
          <a href="${src}" target="_blank" class="mt-3 block" title="Open full size">
            <img src="${src}" alt="${p.title}" loading="lazy" class="mx-auto rounded border border-zinc-600 bg-white max-h-96 w-auto max-w-full">
          </a>
        `).join('')}

        ${p.video ? renderVideo(p.video, p.videoMaxWidth) : ''}

        ${p.pdf ? `
          <div class="flex flex-wrap items-center gap-4 pt-2">
            <a href="${p.pdf}" target="_blank" class="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 hover:underline">
              <span>📄</span> ${p.pdfLabel || "View Report PDF"}
            </a>
          </div>
        ` : ''}
      </div>
    </details>
  `).join('');
}

function syncFilterButtons() {
  document.querySelectorAll("#category-filters .filter-btn").forEach(b => {
    const on = b.getAttribute("data-cat") === activeCategory;
    b.classList.toggle("active", on);
    b.setAttribute("aria-pressed", on);
  });
  document.querySelectorAll("#degree-filters .degree-btn").forEach(b => {
    const on = b.getAttribute("data-degree") === activeDegree;
    b.classList.toggle("active", on);
    b.setAttribute("aria-pressed", on);
  });
}

// Keep the selected filters in the URL (#cat=robotics&degree=msc) so a filtered view can be shared
function writeFiltersToUrl() {
  const params = new URLSearchParams();
  if (activeCategory !== "all") params.set("cat", activeCategory);
  if (activeDegree !== "all") params.set("degree", activeDegree);
  const hash = params.toString();
  history.replaceState(null, "", hash ? `#${hash}` : location.pathname + location.search);
}

function readFiltersFromUrl() {
  const params = new URLSearchParams(location.hash.slice(1));
  const cat = params.get("cat");
  const degree = params.get("degree");
  if (cat && document.querySelector(`#category-filters [data-cat="${CSS.escape(cat)}"]`)) activeCategory = cat;
  if (degree && document.querySelector(`#degree-filters [data-degree="${CSS.escape(degree)}"]`)) activeDegree = degree;
}

function initFilters() {
  readFiltersFromUrl();
  syncFilterButtons();

  document.querySelectorAll("#category-filters .filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      activeCategory = btn.getAttribute("data-cat");
      syncFilterButtons();
      writeFiltersToUrl();
      renderProjects();
    });
  });

  document.querySelectorAll("#degree-filters .degree-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      activeDegree = btn.getAttribute("data-degree");
      syncFilterButtons();
      writeFiltersToUrl();
      renderProjects();
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initFilters();
  renderProjects();
});