<script>
	import { goto } from "$app/navigation";
	import bevyGenerative from "$lib/assets/bevy-generative.png";
	import procedra from "$lib/assets/procedra.png";
	import kanbanxt from "$lib/assets/kanbanxt.png";
	import votingApp from "$lib/assets/voting-app.png";
	import ssg from "$lib/assets/ssg.png";
	import solarSystem from "$lib/assets/solar-system.png";

	const projects = [
		{
			title: "Bevy Generative",
			subtitle: "A Plugin for Procedural Generation",
			src: bevyGenerative,
			highlights: [
				"A plugin written for the bevy engine that facilitates real-time procedural generation of maps, textures, terrain, and planets.",
				"Utilizes various noise algorithms such as Perlin and Simplex noise to generate assets variations, offering a highly customizable approach with several tweakable parameters for factors like seed, scale, and offset."
			],
			buttons: [
				{ text: "Github", href: "https://github.com/manankarnik/bevy_generative" },
				{ text: "Crates.io", href: "https://crates.io/crates/bevy_generative" },
				{ text: "Bevy Assets", href: "https://bevyengine.org/assets/#asset-generation" }
			]
		},
		{
			title: "Procedra",
			subtitle: "Procedural Assets in Real-Time",
			src: procedra,
			highlights: [
				"A web-based asset generation platform that leverages Bevy Generative to enable real-time generation of assets like textures, maps, terrain, and planets directly in the browser.",
				"Offers comprehensive asset management features, including asset generation, the ability to store assets as private or public, liking and cloning public assets, as well as editing and exporting them."
			],
			buttons: [
				{ text: "Github", href: "https://github.com/manankarnik/procedra" },
				{ text: "Live", href: "https://procedra.netlify.app" },
				{
					text: "Black Book",
					href: "https://drive.google.com/file/d/1EVUsy2JGASFMLV7FXE_1uqTmSClQrp0X/view"
				}
			]
		},
		{
			title: "Kanbanxt",
			src: kanbanxt,
			subtitle: "A Kanban Board",
			highlights: [
				"A Kanban board web application that allows users to create and manage tasks through cards and containers for efficient task tracking.",
				"Uses React Beautiful DnD to implement seamless drag-and-drop functionality, enabling users to reorder cards and move them between containers effortlessly."
			],
			buttons: [
				{ text: "Github", href: "https://github.com/manankarnik/kanbanxt" },
				{ text: "Live", href: "https://kanbanxt.netlify.app" }
			]
		},
		{
			title: "Static Site Generator",
			subtitle: "Markdown File Parser",
			src: ssg,
			highlights: [
				"Automates the creation of web pages, specifically blog posts, by parsing Markdown files and mapping them to dynamically generated routes.",
				"Automatically extracts key metadata (such as title, summary, date, and image) from Markdown files and displays it on the blog post listing cards."
			],
			buttons: [
				{ text: "Github", href: "https://github.com/manankarnik/static-site-generator" },
				{ text: "Live", href: "https://cosmos-blog.netlify.app" }
			]
		},
		{
			title: "Voting App",
			src: votingApp,
			subtitle: "An App to Cast Your Vote",
			highlights: [
				"A secure voting application that enables users to authenticate via OTP validation and cast votes seamlessly.",
				"Leverages Firebase and Cloud Firestore for user authentication and database management, ensuring secure and reliable data storage."
			],
			buttons: [{ text: "Github", href: "https://github.com/manankarnik/e-voting-app" }]
		},
		{
			title: "Solar System",
			src: solarSystem,
			subtitle: "An Informational SPA Web App",
			highlights: [
				"A multi-route single-page application (SPA) that provides in-depth, interactive content about the planets and the Sun in our solar system.",
				"Utilizes @google/model-viewer for integrating interactive 3D models, enhancing user engagement and visualization."
			],
			buttons: [
				{ text: "Github", href: "https://github.com/manankarnik/solar-system" },
				{ text: "Live", href: "https://manankarnik.github.io/solar-system" }
			]
		}
	];
</script>

<section class="container mx-auto min-h-[80vh] p-4 lg:p-8">
	<h1 class="font-head text-4xl font-extrabold text-primary xl:text-6xl"># Projects</h1>
	<div class="my-8 grid gap-4 xl:grid-cols-2 xl:gap-8">
		{#each projects as project}
			<div class="w-full rounded-lg bg-midground p-4 shadow-lg lg:p-8">
				<div class="flex h-full flex-col justify-between">
					<div>
						<h2 class="font-head text-2xl font-extrabold text-primary xl:text-4xl">
							## {project.title}
						</h2>
						<h3 class="text-md font-head font-bold text-muted xl:text-xl">
							### {project.subtitle}
						</h3>
						<img
							class="contain mx-auto my-4 border border-muted lg:max-h-[400px]"
							src={project.src}
							alt={project.title}
						/>
						<ul class="my-4 list-['-_'] text-justify">
							{#each project.highlights as point}
								<li class="ml-4 py-2 xl:text-xl">{point}</li>
							{/each}
						</ul>
					</div>
					<div class="flex flex-col gap-2 text-nowrap sm:flex-row sm:gap-4">
						{#each project.buttons as button}
							<button
								on:click={() => (window.location = button.href)}
								class="block w-full rounded-lg bg-primary py-4 font-semibold text-zinc-200 sm:my-0"
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
