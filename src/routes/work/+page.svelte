<script>
	const works = [
		{
			title: "Software Developer",
			subtitle: "Kewisolutionary LLP",
			highlights: [
				"Contributed to the development and successful launch of two client-facing Android applications, MyMBMC and PayMyTV, delivering high-quality user experiences tailored to client needs.",
				"Designed and implemented application features using Flutter, ensuring efficient, responsive user interfaces and seamless integration with C# back-end systems.",
				"Collaborated directly with clients to gather requirements, define project scope, and ensure solutions met business objectives."
			]
		},
		{
			title: "Software Developer",
			subtitle: "Kewisolutionary LLP",
			highlights: [
				"Responsible for development of real-estate platform Manage Property with features such as interactive dashboard, service requests, inspection requests, email templates using technologies like VueJS and Vuetify.",
				"Played an integral role in designing and developing the Manage Property website, which featured components such as the hero section, header, footer, and FAQ section.",
				"Contributed to the design and development of Kewisolutionary website, including cards, carousels, the header and footer, hero sections, and tabs showcasing company technologies.",
				"Improved responsiveness of pages to ensure compatibility across various devices and developed engaging animations to enhance user experience and visual appeal."
			]
		}
	];
</script>

<section class="container mx-auto min-h-[80vh] p-4 lg:p-8">
	<h1 class="font-head text-4xl font-extrabold text-primary xl:text-6xl"># Work Experience</h1>
	<div class="my-8 w-full">
		{#each works as work}
			<div class="my-8 w-full rounded-lg bg-midground p-4 shadow-lg lg:p-8">
				<div class="flex h-full flex-col justify-between">
					<div>
						<h2 class="font-head text-2xl font-extrabold text-primary xl:text-4xl">
							## {work.title}
						</h2>
						<h3 class="text-md font-head font-bold text-muted xl:text-xl">
							### {work.subtitle}
						</h3>
						<ul class="mt-4 list-['-_'] text-justify">
							{#each work.highlights as point}
								<li class="ml-4 py-2 xl:text-xl">{point}</li>
							{/each}
						</ul>
					</div>
					<div class="flex gap-2 text-nowrap sm:gap-4 lg:gap-6">
						{#each work.buttons as button}
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
