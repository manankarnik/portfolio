<script>
	import bevyGenerative from "$lib/assets/bevy-generative.png";

	const projects = [
		{
			title: "SMP & Kernel Threads for egos-2k+",
			subtitle: "Independent CS6640 Final Project",
			highlights: [
				"Extended egos-2k+, a RISC-V teaching OS, from a single hart to 16. Each hart gets its own boot and trap setup, the trap entry path takes a big kernel lock acquired with amoswap, and idle harts park in wfi.",
				"Implemented kernel-level threads as process-table entries that share the parent's page table, with per-thread stacks and syscall pages located through the tp register.",
				"Built a pthreads-style library with create, join, and exit, plus mutexes, semaphores, and condition variables, and measured a contended mutex at 57x the per-increment cost of per-thread counters.",
				"Debugged multicore races such as a torn 64-bit mtimecmp write that left harts asleep forever, and stress-tested 120,000 threads in one run with an exact final count under QEMU multi-threaded TCG."
			],
			buttons: []
		},
		{
			title: "Transparent Checkpoint-Restart",
			subtitle: "Process Checkpointing for Linux x86-64 (CS5600 Assignment)",
			highlights: [
				"Checkpoints unmodified programs through a library loaded with LD_PRELOAD, whose signal handler saves the process's memory regions from /proc/self/maps and its register context to an image file.",
				"Wrote a static restart program that runs at fixed low addresses on its own stack, so none of its memory collides with the target's mappings, then remaps each saved region with MAP_FIXED and resumes with setcontext.",
				"Fixed a stack-canary abort on restart by saving and restoring the fs base with arch_prctl, since setcontext does not restore the thread-local storage that holds the canary."
			],
			buttons: []
		},
		{
			title: "Bevy Generative & Procedra",
			subtitle: "Procedural Generation, Native and in the Browser",
			src: bevyGenerative,
			highlights: [
				"Published an open-source Rust plugin for the Bevy game engine (135+ GitHub stars, 5,900+ crates.io downloads) that bridges the noise crate and Bevy's ECS, exposing 7 noise algorithms and 6 multifractal functions through 20+ parameters to generate textures, terrain meshes, and planets.",
				"Built Procedra on top of the library, compiling the Rust generators to WebAssembly and embedding them in a SvelteKit app so users generate and preview assets in real time in the browser.",
				"Added Procedra asset management with authentication, public/private storage in PostgreSQL-compatible CockroachDB through Prisma, likes, clones, and multi-format export."
			],
			buttons: [
				{ text: "Github", href: "https://github.com/manankarnik/bevy_generative" },
				{ text: "Crates.io", href: "https://crates.io/crates/bevy_generative" },
				{ text: "Live", href: "https://procedra.netlify.app" },
				{
					text: "Project Report",
					href: "https://drive.google.com/file/d/1EVUsy2JGASFMLV7FXE_1uqTmSClQrp0X/view"
				}
			]
		}
	];

	const otherProjects = [
		{
			title: "Kanbanxt",
			description: "A Kanban board with drag-and-drop cards and containers, built with React.",
			links: [
				{ text: "Github", href: "https://github.com/manankarnik/kanbanxt" },
				{ text: "Live", href: "https://kanbanxt.netlify.app" }
			]
		},
		{
			title: "Static Site Generator",
			description: "Generates blog routes from Markdown files and their front-matter metadata.",
			links: [
				{ text: "Github", href: "https://github.com/manankarnik/static-site-generator" },
				{ text: "Live", href: "https://cosmos-blog.netlify.app" }
			]
		},
		{
			title: "Voting App",
			description: "A voting app with OTP authentication, backed by Firebase and Cloud Firestore.",
			links: [{ text: "Github", href: "https://github.com/manankarnik/e-voting-app" }]
		},
		{
			title: "Solar System",
			description: "A single-page app about the planets and the Sun, with interactive 3D models.",
			links: [
				{ text: "Github", href: "https://github.com/manankarnik/solar-system" },
				{ text: "Live", href: "https://manankarnik.github.io/solar-system" }
			]
		}
	];
</script>

<section class="container mx-auto min-h-[80vh] p-4 lg:p-8">
	<h1 class="font-head text-3xl font-extrabold text-primary lg:text-4xl"># Projects</h1>
	<div class="my-8 grid gap-4 xl:grid-cols-2 xl:gap-8">
		{#each projects as project}
			<div class="w-full rounded-lg bg-midground p-4 shadow-lg lg:p-6">
				<div class="flex h-full flex-col justify-between">
					<div>
						<h2 class="font-head text-xl font-extrabold text-primary lg:text-2xl">
							## {project.title}
						</h2>
						<h3 class="font-head text-sm font-bold text-muted lg:text-base">
							### {project.subtitle}
						</h3>
						{#if project.src}
							<img
								class="contain mx-auto my-4 border border-muted lg:max-h-[320px]"
								src={project.src}
								alt={project.title}
							/>
						{/if}
						<ul class="my-4 list-['-_'] text-justify">
							{#each project.highlights as point}
								<li class="ml-4 py-2">{point}</li>
							{/each}
						</ul>
					</div>
					<div class="flex flex-col gap-2 text-nowrap sm:flex-row sm:gap-4">
						{#each project.buttons as button}
							<button
								on:click={() => (window.location = button.href)}
								class="block w-full rounded-lg bg-primary py-2.5 font-semibold text-zinc-200 sm:my-0"
							>
								&lang; {button.text} &rang;
							</button>
						{/each}
					</div>
				</div>
			</div>
		{/each}
	</div>
	<h2 class="font-head text-xl font-extrabold text-primary lg:text-2xl">## Other Projects</h2>
	<div class="my-8 grid gap-4 md:grid-cols-2 xl:gap-8">
		{#each otherProjects as project}
			<div class="w-full rounded-lg bg-midground p-4 shadow-lg lg:p-6">
				<h3 class="font-head font-bold text-primary lg:text-lg">### {project.title}</h3>
				<p class="py-2">{project.description}</p>
				<div class="flex gap-4 font-head font-bold">
					{#each project.links as link}
						<a class="text-muted hover:text-primary" href={link.href}>[ {link.text} ]</a>
					{/each}
				</div>
			</div>
		{/each}
	</div>
</section>
