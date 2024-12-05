<script>
	import { goto } from "$app/navigation";
	import bevyGenerative from "$lib/assets/bevy-generative.png";
	import procedra from "$lib/assets/procedra.png";
	import votingApp from "$lib/assets/voting-app.png";
	import ssg from "$lib/assets/ssg.png";
	import solarSystem from "$lib/assets/solar-system.png";

	let projects = [
		{
			title: "Bevy Generative",
			subtitle: "A Plugin for Procedural Generation",
			src: bevyGenerative,
			points: [
				"A plugin written for the bevy engine that facilitates real-time procedural generation of maps, textures, terrain, and planets.",
				"Utilizes various noise algorithms such as Perlin and Simplex noise to generate assets variations, offering a highly customizable approach with several tweakable parameters for factors like seed, scale, and offset."
			],
			buttons: [
				{ text: "Github", href: "https://github.com/manankarnik/bevy-generative" },
				{ text: "Bevy Assets", href: "https://bevyengine.org/assets/#asset-generation" }
			]
		},
		{
			title: "Procedra",
			subtitle: "Procedural Assets in Real-Time",
			src: procedra,
			points: [
				"A web-based asset generation platform with cross platform generation utilities that generate maps, textures, terrains, and planets on the fly.",
				"Allows generation, storage, editing, cloning, and exporting of generated assets."
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
			title: "Static Site Generator",
			subtitle: "Markdown File Parser",
			src: ssg,
			points: [
				"Automates the creation of web pages, specifically blog posts, by parsing Markdown files and mapping them to dynamically generated routes.",
				"Enables automatic metadata extraction (title, summary, date, and image) from Markdown files to streamline content management."
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
			points: [
				"A secure voting application using Flutter, enabling users to authenticate via OTP validation and cast votes seamlessly.",
				"Leverages Firebase for database management and user authentication, ensuring reliable data storage."
			],
			buttons: [{ text: "Github", href: "https://github.com/manankarnik/e-voting-app" }]
		},
		{
			title: "Solar System",
			src: solarSystem,
			subtitle: "An Informational SPA Web App",
			points: [
				"A multi-route single-page application (SPA) featuring 3D models of the Sun and other planets, with detailed informational content on each page.",
				"Utilizes @google/model-viewer for integrating interactive 3D models, enhancing user engagement and visualization."
			],
			buttons: [
				{ text: "Github", href: "https://github.com/manankarnik/solar-system" },
				{ text: "Live", href: "https://manankarnik.github.io/solar-system" }
			]
		}
	];
</script>

<section class="container mx-auto min-h-[80vh] p-4 xl:p-8">
	<h1 class="font-head font-head text-4xl font-extrabold text-primary xl:text-6xl"># Projects</h1>
	<div class="my-8 grid gap-4 xl:grid-cols-2 xl:gap-8">
		{#each projects as project}
			<div class="w-full rounded-lg border-2 border-muted p-2 hover:border-primary sm:p-4 lg:p-8">
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
							{#each project.points as point}
								<li class="ml-4 py-2 xl:text-xl">{point}</li>
							{/each}
						</ul>
					</div>
					<div class="flex gap-2 text-nowrap sm:gap-4 lg:gap-6">
						{#each project.buttons as button}
							<button
								on:click={() => (window.location = button.href)}
								class="w-full rounded-lg bg-primary p-4 font-semibold text-zinc-200"
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
