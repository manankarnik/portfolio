<script>
	const works = [
		{
			title: "Research Apprentice",
			subtitle: "Northeastern University, Prof. Gene Cooperman · Jan 2026 – Apr 2026",
			highlights: [
				"Part of a team extending MANA, the lab's transparent MPI checkpointing system, to NVIDIA's NCCL through a DMTCP plugin that intercepts NCCL calls and drains in-flight messages before a checkpoint, with no changes to the application or NCCL.",
				"Implemented the drain for NCCL point-to-point messages, tracking each pending message's size per sender-receiver pair, receiving unmatched sends into a plugin buffer, and satisfying unmatched receives with a placeholder send before re-posting them into the application's buffer on resume.",
				"Verified the drain with two-rank MPI and NCCL tests that checkpoint mid-transfer, then integrated CRAC to checkpoint CUDA state and traced the remaining restart failure to cuCheckpointProcessRestore.",
				"Presented the work as the poster \"Checkpoint-Restart of LLMs and Scientific Computation with NCCL for GPUs\" at Northeastern's Research Apprenticeship Program, which I joined on Prof. Cooperman's nomination."
			]
		},
		{
			title: "Mobile App Developer Intern",
			subtitle: "SharkNinja · Jun 2026 – Aug 2026",
			highlights: [
				"Built an internal IoT device emulator end to end (React, TypeScript, FastAPI, WebSockets), writing most of its feature and bug tickets from my own findings. It connects emulated devices to SharkNinja's platform over MQTT, letting developers and QA test the Android and iOS apps without physical hardware, even before device firmware existed or in hard-to-reach edge-case states.",
				"Generated the emulator's forms from YAML device schemas so the UI stays in sync with the canonical device contract without hand-written form code.",
				"Made the tool hostable by decoupling it from an internal developer-only CLI and adding Auth0 device-flow login, httpOnly cookies with refresh-token rotation, authenticated WebSockets, unit-tested local/S3 storage, and Docker.",
				"Resolved bug tickets in the production SharkClean app (Kotlin, Swift) and implemented minor features in the SharkNinja app (React Native).",
				"Received the Relentless Innovator intern award from SharkNinja's Early Talent team on a teammate's nomination."
			]
		},
		{
			title: "Teaching Assistant, CS3650 Computer Systems",
			subtitle: "Northeastern University · Spring & Fall 2026",
			highlights: [
				"Supported Prof. Alden Jackson across 3 sections in Spring 2026 and 2 in Fall 2026, each with roughly 100 students, in a course covering C, x86-64 assembly, processes, virtual memory, concurrency, and file systems.",
				"Taught groups of students at the board during office hours, drawing out the process and file structs to explain file descriptors and walking through memory and pointers.",
				"Resolved conceptual questions and questions on assignments and projects in office hours and on Piazza, and helped students debug their C and assembly code.",
				"Graded assignments and projects, handled regrade requests, and conducted code walks in which students explained their design and implementation.",
				"Helped Prof. Jackson review assignments and exam questions."
			]
		},
		{
			title: "Software Developer (Part-time)",
			subtitle: "Kewisolutionary LLP · Dec 2022 – Oct 2024",
			highlights: [
				"Built and shipped 2 Android apps in Flutter (MyMBMC, PayMyTV) and 20+ features in Vue.js and Vuetify for the real-estate platform Manage Property, including dashboards, a service request system, and email template management over a C# backend.",
				"Contributed to 5 client-facing websites, working directly with 3 clients to gather requirements and define scope."
			]
		}
	];
</script>

<section class="container mx-auto min-h-[80vh] p-4 lg:p-8">
	<h1 class="font-head text-3xl font-extrabold text-primary lg:text-4xl"># Work Experience</h1>
	<div class="my-8 w-full">
		{#each works as work}
			<div class="my-8 w-full rounded-lg bg-midground p-4 shadow-lg lg:p-6">
				<div class="flex h-full flex-col justify-between">
					<div>
						<h2 class="font-head text-xl font-extrabold text-primary lg:text-2xl">
							## {work.title}
						</h2>
						<h3 class="font-head text-sm font-bold text-muted lg:text-base">
							### {work.subtitle}
						</h3>
						<ul class="mt-4 list-['-_'] text-justify">
							{#each work.highlights as point}
								<li class="ml-4 py-2">{point}</li>
							{/each}
						</ul>
					</div>
					<div class="flex gap-2 text-nowrap sm:gap-4 lg:gap-6">
						{#each work.buttons as button}
							<button
								on:click={() => (window.location = button.href)}
								class="w-full rounded-lg bg-primary px-4 py-2.5 font-semibold text-zinc-200"
							>
								&lang; {button.text} &rang;
							</button>
						{/each}
					</div>
				</div>
			</div>
		{/each}
	</div>
</section>
