// config.js (Students edit only this file)
window.SITE_CONFIG = {
  pageTitle: "Academic Digital Twin Case Study | Student Showcase",
  homeUrl: "https://roadwayvr.com",

  hero: {
    profileImage: "assets/img/image1.jpg",

    // NEW: course code tag shown above the course project pill
    courseTag: "SMRTTECH 4SC3",

    // updated tagline text (big pill)
    tagline: "Course Project: Smart Cities and Communities",

    studentName: "Tri Pham",
    program: "B-Tech Automation Smart System",
    university: "McMaster University, Canada",
    email: "phamt39@mcmaster.ca"
  },

  disclaimer: {
    short:
      "Academic project for a university course. Educational purposes only. Not an official city analysis, consultation, or endorsement.",
    long:
      "This website presents a student academic project created for coursework. Any analyses, results, and potential improvements are simulation-based and provided for educational purposes only. They do not represent official work, endorsement, or consultation for any city or agency.",
    videoOverlaySuggestion:
      "Academic Project · Educational Use Only · Not Official City Work"
  },

  theme: {
    heroBg: "#111111",
    heroText: "#ffffff",
    pageBg: "#f8fafc",
    accent: "#7c3aed"
  },

  dividers: {
    dividerBg: "#f9f9f9",
    dividerText: "#ffffff"
  },

  footer: {
	  footerBg: "#111111",
	  footerText: "#ffffff",
	  footerBorder: "#222222",
	
	  homeLinkText: "RoadwayVR",
	
	  templateCredit:
	    "This academic showcase template was developed by RoadwayVR.",
	
	  templateCreditLinkText:
	    "Learn more at RoadwayVR.com",
	
	  templateCreditUrl:
	    "https://roadwayvr.com"
  },

  intro: {
    projectTitleLabel: "Project Title",
    projectTitle: "Digital Twin of the Bayview Avenue and Finch Avenue East Intersection Using SUMO Traffic Simulation",
    heroVideo: "assets/video/video.mp4",
    heroVideoPoster: "",
    heroVideoAlt: "Autoplay preview video (academic project)",
    videoCaption:
      "Autoplay preview (≈20 seconds): Base Scenario (100% HDV) & Scenario 1 (100% CAV)"
  },

  caseStudy: {
    title: "Introduction",

    backgroundTitle: "Background",
    backgroundBullets: [
			"Bayview Avenue and Finch Avenue East is a major intersection in North York, Toronto.",
			"Both roads carry major-road traffic and connect to nearby local streets.",
			"Connected and autonomous vehicles (CAVs) may change how traffic flows at intersections.",
			"SUMO simulation can test traffic changes without disrupting real roads."
    ],

    problemTitle: "Problem Statement",
    problemBullets: [
			"The intersection lacks a digital roadway model.",
			"No human-driven (HDV) traffic baseline exists for comparison.",
			"The impact of CAVs on traffic flow is uncertain.",
			"Interventions need evidence before they can be justified."
    ],

    objectivesTitle: "Project Objectives",
    objectivesBullets: [
			"Build the SUMO road network and a 100% HDV traffic baseline.",
			"Compare speed–density on edge E66 for 100% CAV versus 100% HDV.",
			"Implement and evaluate a signal timing intervention on edge E66.",
			"Present the project's methods and findings through a web showcase."
    ]
  },

  overview: {
    title: "Methodology",
    steps: [
      {
        title: "Step 1: Road Network Development (SUMO NetEdit)",
				text: "Build the study-area road network and a 100% HDV traffic baseline.",
        image: "assets/img/image2.jpg"
      },
      {
				title: "Step 2: HDV vs CAV Scenario Comparison (SUMO)",
				text: "Compare 100% HDV and 100% CAV speed–density on edge E66.",
        image: "assets/img/image3.jpg"
      },
      {
				title: "Step 3: Signal Timing Intervention (SUMO)",
				text: "Extend the E66 green phase from 27 s to 30 s and compare results.",
        image: "assets/img/image4.jpg"
      },
      {
				title: "Step 4: Results & Communication (Figures + Showcase Website)",
				text: "Summarize results using figures, KPIs, and the showcase website.",
        image: "assets/img/image5.jpg"
      }
    ]
  },

  implementation: {
    title: "Methodology Steps (Demo Modules)",
    modules: [
      {
        title: "Module 1: Road Network Development (SUMO NetEdit)",
        bullets: [
				  { text: "Trace major and local roads from the study-area GIS map in NetEdit." },
          { text: "Define lane counts, turning lanes, and junction connections at Bayview and Finch." },
          { text: "Add traffic demand, routes, and signal phases for a 100% HDV baseline." }
        ],
        image: "assets/img/image2.jpg"
      },
      {
        title: "Module 2: HDV vs CAV Scenario Comparison (SUMO)",
        bullets: [
          { text: "Define HDV and CAV vehicle types using SUMO car-following parameters." },
          { text: "Give CAVs a shorter gap (1.5 m), shorter headway (0.6 s), and stronger acceleration and braking." },
          { text: "Keep the network, demand, routes, and signals the same, and record speed–density on edge E66." }
        ],
        image: "assets/img/image3.jpg"
      },
      {
        title: "Module 3: Signal Timing Intervention (SUMO)",
        bullets: [
				  { text: "Diagnose persistent congestion on edge E66 in the HDV baseline." },
          { text: "Increase the green time of the phase serving E66 from 27 s to 30 s." },
          { text: "Keep all other settings unchanged and compare before-and-after speed–density." }
        ],
        image: "assets/img/image4.jpg"
      },
      {
        title: "Module 4: Results & Communication",
        bullets: [
          { text: "Fit Greenshields speed–density curves and report free-flow speed, jam density, and R²." },
          { text: "Compare scenarios at equal densities to show what changed and what tradeoffs appeared." },
          { text: "Limitations + next steps: repeated runs, field calibration, and queue, delay, and throughput data." }
        ],
        image: "assets/img/image5.jpg"
      }
    ]
  },

	results: {
			title: "Results & Potential Improvements",
			subtitle:
				"Speed–density results on edge E66 for the Base Scenario (100% HDV) and Scenario 1 (100% CAV), fitted with the Greenshields model. Results are for educational purposes only.",

			charts: {
				left: {
					title: "Base Scenario — 100% HDV: Speed vs. Density on Edge E66",
					src: "assets/img/image6.jpg",
					alt: "Base scenario speed–density plot with Greenshields fit for 100% HDV on edge E66"
				},
				right: {
					title: "Scenario 1 — 100% CAV: Speed vs. Density on Edge E66",
					src: "assets/img/image7.jpg",
					alt: "Scenario 1 speed–density plot with Greenshields fit for 100% CAV on edge E66"
				}
			},

			discussionTitle: "Discussion",
			discussionBullets: [
				"The Base Scenario (100% HDV) fit gives a free-flow speed of 8.0 m/s, jam density of 83 veh/km, and R² = 0.904.",
				"Scenario 1 (100% CAV) gives a lower free-flow speed of 7.4 m/s, higher jam density of 92 veh/km, and R² = 0.914.",
				"At 20 veh/km, HDV is slightly faster (6.07 vs 5.79 m/s); at 50 veh/km, CAV is slightly faster (3.38 vs 3.18 m/s).",
				"CAV benefits appear only at higher densities, not across all traffic conditions.",
				"Results come from one run per scenario, so repeated runs and field calibration are needed to confirm them."
			]
		},

  team: {
    title: "Team & Acknowledgments",
    subtitle:
      "This section clarifies academic context, roles, tools, and sources. Clear attribution improves credibility and shows ethical data handling.",

    members: [
      { name: "Tri Pham", role: "SUMO Road Network Development + Traffic Demand and Signal Configuration + HDV/CAV Scenario Development + Intervention Design and Implementation + Results Analysis and Visualization + Report Writing and Referencing" }
    ],

    acknowledgments: [
      "Workshop: Railway Engineering",
      "Institution: RoadwayVR University",
      "Instructor: Ahmad Mohammadi",
      "Tools: SUMO, Blender, Unity, Python"
    ],

    repoLabel: "Project Repository",
    repoUrl: "https://github.com/Trihappy14/Trihappy14.github.io"
  }
};
