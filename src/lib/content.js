// Content for the single-page site, rendered in src/routes/+page.svelte.
import dodgeBash from "$lib/assets/dodge-bash.png";
import procedra from "$lib/assets/procedra.webm";
import cellabrate from "$lib/assets/cellabrate.webm";
import kanbanxt from "$lib/assets/kanbanxt.webp";
import ssg from "$lib/assets/ssg.webp";

export const socials = [
	{ text: "GitHub", href: "https://github.com/manankarnik" },
	{ text: "LinkedIn", href: "https://linkedin.com/in/manankarnik" }
];

export const experience = [
	{
		title: "Teaching Assistant, CS3650 Computer Systems",
		summary:
			"Teaching C, x86-64 assembly, and operating system concepts to roughly 500 students across 5 sections over two semesters, through office hours, code walks, and grading.",
		tags: ["C", "x86-64", "Linux"],
		org: "Northeastern University",
		date: "Spring & Fall 2026",
		details: [
			"Supported Prof. Alden Jackson across 3 sections in Spring 2026 and 2 in Fall 2026, each with roughly 100 students, in a course covering C, x86-64 assembly, processes, virtual memory, concurrency, and file systems.",
			"Taught groups of students at the board during office hours, drawing out the process and file structs to explain file descriptors and walking through memory and pointers.",
			"Resolved conceptual questions and questions on assignments and projects in office hours and on Piazza, and helped students debug their C and assembly code.",
			"Graded assignments and projects, handled regrade requests, and conducted code walks in which students explained their design and implementation.",
			"Helped Prof. Jackson review assignments and exam questions."
		]
	},
	{
		title: "Mobile App Developer Intern",
		summary:
			"Built an internal IoT device emulator so developers and QA could test the mobile apps without hardware, and won the Relentless Innovator intern award.",
		tags: ["React", "TypeScript", "FastAPI", "MQTT", "WebSockets", "Docker"],
		org: "SharkNinja",
		date: "Jun 2026 – Aug 2026",
		details: [
			"Built an internal IoT device emulator end to end (React, TypeScript, FastAPI, WebSockets), writing most of its feature and bug tickets from my own findings. It connects emulated devices to SharkNinja's platform over MQTT, letting developers and QA test the Android and iOS apps without physical hardware, even before device firmware existed or in hard-to-reach edge-case states.",
			"Generated the emulator's forms from YAML device schemas so the UI stays in sync with the canonical device contract without hand-written form code.",
			"Made the tool hostable by decoupling it from an internal developer-only CLI and adding Auth0 device-flow login, `httpOnly` cookies with refresh-token rotation, authenticated WebSockets, unit-tested local/S3 storage, and Docker.",
			"Resolved bug tickets in the production SharkClean app (Kotlin, Swift) and implemented minor features in the SharkNinja app (React Native).",
			"Received the Relentless Innovator intern award from SharkNinja's Early Talent team on a teammate's nomination."
		]
	},
	{
		title: "Research Apprentice",
		summary:
			"Worked with a team on transparently checkpointing multi-GPU programs that communicate through NVIDIA's NCCL library, and implemented the draining of in-flight messages before each checkpoint.",
		tags: ["C", "MPI", "NCCL", "DMTCP"],
		org: "Northeastern University, Prof. Gene Cooperman",
		date: "Jan 2026 – Apr 2026",
		details: [
			"Part of a team extending MANA, the lab's transparent MPI checkpointing system, to NVIDIA's NCCL through a DMTCP plugin that intercepts NCCL calls and drains in-flight messages before a checkpoint, with no changes to the application or NCCL.",
			"Implemented the drain for NCCL point-to-point messages, tracking each pending message's size per sender-receiver pair, receiving unmatched sends into a plugin buffer, and satisfying unmatched receives with a placeholder send before re-posting them into the application's buffer on resume.",
			"Verified the drain with two-rank MPI and NCCL tests that checkpoint mid-transfer, then integrated CRAC to checkpoint CUDA state and traced the remaining restart failure to `cuCheckpointProcessRestore`.",
			"Presented the work as the poster \"Checkpoint-Restart of LLMs and Scientific Computation with NCCL for GPUs\" at Northeastern's Research Apprenticeship Program, which I joined on Prof. Cooperman's nomination."
		]
	},
	{
		title: "Software Developer (Part-time)",
		summary:
			"Shipped 2 Android apps and 20+ features for a real-estate platform, working directly with clients.",
		tags: ["Flutter", "Vue.js", "C#"],
		org: "Kewisolutionary LLP",
		date: "Dec 2022 – Oct 2024",
		details: [
			"Built and shipped 2 Android apps in Flutter (MyMBMC, PayMyTV) and 20+ features in Vue.js and Vuetify for the real-estate platform Manage Property, including dashboards, a service request system, and email template management over a C# backend.",
			"Contributed to 5 client-facing websites, working directly with 3 clients to gather requirements and define scope."
		]
	}
];

export const projects = [
	{
		slug: "egos-2k+",
		title: "SMP & Kernel Threads for egos-2k+",
		summary:
			"Took a RISC-V teaching OS from a single hart to 16, then added kernel threads and a pthreads-style library on top.",
		tags: ["C", "RISC-V", "QEMU"],
		highlight: "16 harts · 120,000 threads in one run",
		subtitle: "Independent Final Project, OS Course",
		details: [
			"Extended egos-2k+, a RISC-V teaching OS, from a single hart to 16. Each hart gets its own boot and trap setup, the trap entry path takes a big kernel lock acquired with `amoswap`, and idle harts park in `wfi`.",
			"Implemented kernel-level threads as process-table entries that share the parent's page table, with per-thread stacks and syscall pages located through the `tp` register.",
			"Built a pthreads-style library with create, join, and exit, plus mutexes, semaphores, and condition variables, and measured a contended mutex at 57× the per-increment cost of per-thread counters.",
			"Debugged multicore races such as a torn 64-bit `mtimecmp` write that left harts asleep forever, and stress-tested 120,000 threads in one run with an exact final count under QEMU multi-threaded TCG."
		],
		links: []
	},
	{
		slug: "checkpoint-restart",
		title: "Transparent Checkpoint-Restart",
		summary:
			"Saves a running Linux process to disk and brings it back later, without any changes to the program.",
		tags: ["C", "Linux", "x86-64"],
		highlight: "Restores a process at its original addresses",
		subtitle: "Process Checkpointing for Linux x86-64 (Course Assignment)",
		details: [
			"Checkpoints unmodified programs through a library loaded with `LD_PRELOAD`, whose signal handler saves the process's memory regions from `/proc/self/maps` and its register context to an image file.",
			"Wrote a static restart program that runs at fixed low addresses on its own stack, so none of its memory collides with the target's mappings, then remaps each saved region with `MAP_FIXED` and resumes with `setcontext`.",
			"Restored the `fs` base with `arch_prctl` so restarted programs keep their stack canary, since `setcontext` does not restore the thread-local storage that holds it."
		],
		links: []
	},
	{
		slug: "boot-sector",
		title: "x86 Boot Sector",
		subtitle: "Bare-Metal x86 in 512 Bytes",
		summary:
			"A boot sector that takes an x86 machine from 16-bit real mode into 32-bit protected mode.",
		tags: ["x86 Assembly", "NASM", "QEMU"],
		highlight: "Real mode to protected mode in one sector",
		details: [
			"Prints to the screen through BIOS interrupts while still in real mode, and includes an error-checked `int 0x13` disk-read routine.",
			"Switches to protected mode by loading a flat GDT, setting `CR0.PE`, and far-jumping into 32-bit code.",
			"Once in protected mode, reloads the segment registers, sets up a stack, and writes directly to VGA text memory."
		],
		links: [{ text: "GitHub", href: "https://github.com/manankarnik/os" }]
	},
	{
		slug: "bevy_generative",
		title: "Bevy Generative & Procedra",
		summary:
			"Procedural generation plugin for the Bevy engine, compiled to WebAssembly to generate assets in the browser.",
		tags: ["Rust", "Bevy", "WebAssembly", "SvelteKit", "TypeScript", "Prisma", "CockroachDB"],
		highlight: "135+ stars · 5,900+ downloads",
		subtitle: "Procedural Generation, Native and in the Browser",
		media: {
			type: "video",
			src: procedra,
			alt: "A terrain mesh generated with bevy_generative"
		},
		details: [
			"Published an open-source Rust plugin for the Bevy game engine (135+ GitHub stars, 5,900+ crates.io downloads) that bridges the `noise` crate and Bevy's ECS, exposing 7 noise algorithms and 6 multifractal functions through 20+ parameters to generate textures, terrain meshes, and planets.",
			"Built Procedra on top of the library, compiling the Rust generators to WebAssembly and embedding them in a SvelteKit app so users generate and preview assets in real time in the browser.",
			"Added Procedra asset management with authentication, public/private storage in PostgreSQL-compatible CockroachDB through Prisma, likes, clones, and multi-format export."
		],
		links: [
			{ text: "GitHub", href: "https://github.com/manankarnik/bevy_generative" },
			{ text: "Crates.io", href: "https://crates.io/crates/bevy_generative" },
			{ text: "Live", href: "https://procedra.netlify.app" },
			{
				text: "Project Report",
				href: "https://drive.google.com/file/d/1EVUsy2JGASFMLV7FXE_1uqTmSClQrp0X/view"
			}
		]
	}
];

export const otherProjects = [
	{
		slug: "daub",
		title: "Daub",
		subtitle: "Color Scheme Manager for Linux Desktops",
		summary:
			"Applies and switches color schemes in real time across a Linux desktop, from themes defined in TOML.",
		tags: ["Rust", "clap", "TOML", "Hyprland"],
		highlight: "Rethemes 6 apps with one command",
		details: [
			"Generates color configs for Hyprland, Waybar, kitty, Rofi, Neovim, and the shell from a single theme variant, using templates compiled into the binary.",
			"Reloads running Hyprland, kitty, Neovim, and Waybar instances after a switch, so a new theme applies without restarting anything.",
			"Loads custom themes from `$XDG_CONFIG_HOME/daub/daub.toml`, where each theme can define any number of variants plus a background-to-foreground gradient of levels.",
			"Built as a `clap`-based CLI with `set`, `list`, and `clean` subcommands."
		],
		links: [{ text: "GitHub", href: "https://github.com/manankarnik/daub" }]
	},
	{
		slug: "cellabrate",
		title: "Cellabrate",
		subtitle: "Conway's Game of Life in the Terminal",
		summary:
			"An interactive editor and simulator for Conway's Game of Life that runs entirely in the terminal.",
		tags: ["Go", "tcell", "TUI"],
		highlight: "Vim-inspired controls",
		media: {
			type: "video",
			src: cellabrate,
			alt: "A Gosper glider gun running in Cellabrate, firing gliders across the terminal",
			// White-on-black terminal capture; blended into the page so only the cells show
			blend: true
		},
		details: [
			"Simulates the cellular automaton in real time while letting you create and edit patterns with a cursor.",
			"Uses Vim-inspired keyboard navigation, with paint and erase modes for drawing patterns quickly.",
			"Resizes the grid to match the terminal's dimensions, rendering with `tcell`.",
			"Installs as a single binary with `go install`."
		],
		links: [{ text: "GitHub", href: "https://github.com/manankarnik/cellabrate" }]
	},
	{
		slug: "dodge-bash",
		title: "Dodge Bash",
		subtitle: "Arcade Survival Game in Godot",
		summary:
			"A fast-paced survival game where you dodge triangles, then grab a shield and smash into them for extra points.",
		tags: ["Godot", "GDScript"],
		highlight: "Taught to 30+ students in a workshop",
		media: {
			type: "image",
			src: dodgeBash,
			alt: "The player square dodging red triangles in Dodge Bash"
		},
		details: [
			"Built in the Godot Engine with GDScript and published on itch.io.",
			"Taught a hands-on Godot workshop where 30+ computer science students built the game from scratch, covering game loops, collision detection, and player mechanics."
		],
		links: [
			{ text: "GitHub", href: "https://github.com/manankarnik/dodge-bash" },
			{ text: "Play", href: "https://manankarnik.itch.io/dodge-bash" }
		]
	},
	{
		slug: "static-site-generator",
		title: "Static Site Generator",
		subtitle: "Markdown Blog Engine in Rust",
		summary:
			"Turns a folder of Markdown posts into a blog that runs in the browser as a WebAssembly app.",
		tags: ["Rust", "Yew", "WebAssembly"],
		highlight: "Posts embedded at compile time",
		media: {
			type: "image",
			src: ssg,
			alt: "A demo blog built with the static site generator, showing post cards"
		},
		details: [
			"Parses Markdown posts with `pulldown-cmark` and maps each one to a dynamically generated route with `yew-router`.",
			"Extracts front-matter metadata such as title, summary, date, and image with `gray_matter`, and shows it on the post listing cards.",
			"Embeds the posts into the build with `include_dir` and runs entirely client-side, built for `wasm32` with `trunk`."
		],
		links: [
			{ text: "GitHub", href: "https://github.com/manankarnik/static-site-generator" },
			{ text: "Live", href: "https://cosmos-blog.netlify.app" }
		]
	},
	{
		slug: "kanbanxt",
		title: "Kanbanxt",
		subtitle: "Drag-and-Drop Task Board",
		summary: "A Kanban board for organizing tasks into cards and containers.",
		highlight: "Live search across every column",
		tags: ["Next.js", "React", "TypeScript"],
		media: {
			type: "image",
			src: kanbanxt,
			alt: "A Kanbanxt board with five columns of task cards"
		},
		details: [
			"Lets users create and manage tasks through cards and containers for efficient task tracking.",
			"Uses React Beautiful DnD for drag-and-drop, so cards can be reordered and moved between containers.",
			"Filters the cards in every container as you type in the search bar."
		],
		links: [
			{ text: "GitHub", href: "https://github.com/manankarnik/kanbanxt" },
			{ text: "Live", href: "https://kanbanxt.netlify.app" }
		]
	}
];

export const education = [
	{
		school: "Northeastern University",
		degree: "Master of Science in Computer Science",
		date: "Sep 2025 – May 2027",
		gpa: "4.00/4.00",
		coursework:
			"Programming Design Paradigm, Computer Systems, Operating Systems Implementation, Principles of Programming Language, Algorithms"
	},
	{
		school: "University of Mumbai",
		degree: "Postgraduate Diploma in Computer Science",
		date: "Jun 2024 – Mar 2025",
		gpa: "9.59/10",
		coursework:
			"Data Mining, Machine Learning, DevOps, Blockchain Fundamentals, Natural Language Processing, Social Network Analysis"
	},
	{
		school: "University of Mumbai",
		degree: "Bachelor of Science in Computer Science",
		date: "Jun 2021 – Mar 2024",
		gpa: "9.51/10",
		coursework:
			"Operating Systems, Computer Networks, Data Structures, Algorithms, Database Management, Discrete Mathematics"
	}
];

export const skills = [
	{
		label: "Languages",
		items: [
			"C",
			"Rust",
			"x86-64/RISC-V Assembly",
			"Python",
			"Go",
			"TypeScript",
			"JavaScript",
			"Java",
			"C#",
			"Dart",
			"Kotlin",
			"Swift",
			"SQL"
		]
	},
	{
		label: "Systems & Tools",
		items: [
			"Linux",
			"GDB",
			"Valgrind",
			"QEMU",
			"MPI",
			"NCCL",
			"DMTCP",
			"Docker",
			"Git",
			"PostgreSQL",
			"Neovim",
			"Emacs"
		]
	},
	{
		label: "Frameworks",
		items: [
			"FastAPI",
			"React",
			"React Native",
			"Vue.js",
			"Svelte & SvelteKit",
			"Flutter",
			"Bevy",
			"Godot"
		]
	}
];
