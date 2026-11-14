<script>
	import { enhance } from "$app/forms";
	import profile from "$lib/assets/profile.jpg";
	import Terminal from "$lib/components/terminal.svelte";
	import {
		education,
		experience,
		projects,
		otherProjects,
		skills,
		socials
	} from "$lib/content.js";

	let { form } = $props();
</script>

{#snippet code(text)}
	<!-- Renders `backticked` spans from content.js as inline code -->
	{#each text.split("`") as part, i}{#if i % 2}<code class="bg-chip px-1.5 py-0.5 text-muted"
				>{part}</code
			>{:else}{part}{/if}{/each}
{/snippet}

{#snippet tags(items)}
	<ul class="flex flex-wrap gap-2">
		{#each items as tag}
			<li class="bg-primary-soft px-2 py-0.5 text-xs text-on-primary-soft">{tag}</li>
		{/each}
	</ul>
{/snippet}

{#snippet details(points)}
	<details class="group">
		<summary
			class="cursor-pointer list-none font-bold text-primary transition-colors hover:text-primary-hover"
		>
			<span class="group-open:hidden">[+] details</span>
			<span class="hidden group-open:inline">[-] hide details</span>
		</summary>
		<ul class="mt-3 list-['-_'] pl-4 text-sm">
			{#each points as point}
				<li class="py-1">{@render code(point)}</li>
			{/each}
		</ul>
	</details>
{/snippet}

{#snippet projectEntry(project)}
	<article id="project-{project.slug}" class="scroll-mt-24 space-y-4 py-8 first:pt-0 last:pb-0">
		<div class="flex flex-wrap items-start justify-between gap-x-6 gap-y-1">
			<div>
				<h3 class="text-lg font-bold">{project.title}</h3>
				<div class="text-sm text-muted">{project.subtitle}</div>
			</div>
			{#if project.highlight}
				<p class="text-sm font-bold text-primary md:pt-1">{project.highlight}</p>
			{/if}
		</div>
		<div class="grid items-start gap-6 {project.media ? 'md:grid-cols-[1fr_16rem]' : ''}">
			{#if project.media}
				<!-- Beside the text on desktop, under the title on phones -->
				<figure class="max-w-sm md:order-last">
					{#if project.media.type == "video"}
						<video
							class="w-full {project.media.blend
								? 'mix-blend-multiply invert dark:mix-blend-screen dark:invert-0'
								: ''}"
							src={project.media.src}
							aria-label={project.media.alt}
							autoplay
							muted
							loop
							playsinline
						></video>
					{:else}
						<img class="w-full" src={project.media.src} alt={project.media.alt} loading="lazy" />
					{/if}
				</figure>
			{/if}
			<div class="space-y-4">
				<p class="leading-relaxed">{@render code(project.summary)}</p>
				{@render tags(project.tags)}
				{@render details(project.details)}
				{#if project.links.length}
					<div class="flex flex-wrap gap-x-4 gap-y-1 font-bold">
						{#each project.links as link}
							<a
								class="text-primary transition-colors hover:text-primary-hover"
								href={link.href}
								target="_blank"
								rel="noopener noreferrer"
								>{link.text}<span aria-hidden="true" class="ml-0.5">↗</span></a
							>
						{/each}
					</div>
				{/if}
			</div>
		</div>
	</article>
{/snippet}

<main class="container mx-auto max-w-6xl px-4">
	<section class="flex min-h-[calc(100svh-4.5rem)] flex-col justify-center py-16">
		<h1 class="sr-only">Manan Karnik</h1>
		<pre
			aria-hidden="true"
			class="overflow-hidden text-[3px] leading-none text-primary sm:text-[5px] md:text-[8px] lg:text-[13px] xl:text-[15px]">
 ██████   ██████                                              █████   ████                                 ███  █████     
  ██████ ██████                                                ███   ███                                         ███      
  ███ █████ ███   ██████   ████████    ██████   ████████       ███  ███     ██████   ████████  ████████   ████   ███ █████
  ███  ███  ███       ███   ███  ███       ███   ███  ███      ███████          ███   ███  ███  ███  ███   ███   ███  ███ 
  ███       ███   ███████   ███  ███   ███████   ███  ███      ███  ███     ███████   ███       ███  ███   ███   ██████   
  ███       ███  ███  ███   ███  ███  ███  ███   ███  ███      ███   ███   ███  ███   ███       ███  ███   ███   ███  ███ 
 █████     █████  ████████ ████ █████  ████████ ████ █████    █████   ████  ████████ █████     ████ █████ █████ ████ █████
                                                                                                                         
</pre>
		<div class="mt-12 grid items-center gap-10 lg:grid-cols-[1fr_1.35fr]">
			<div>
				<p class="text-lg leading-relaxed">
					Exploring how software really works, from operating systems to compilers and programming
					languages.
				</p>
				<p class="mt-4 text-muted">MS CS at Northeastern University, graduating May 2027.</p>
				<div class="mt-8 flex flex-wrap gap-2 text-sm font-bold sm:gap-3 sm:text-base">
					<a class="bg-primary px-4 py-2.5 text-on-primary hover:opacity-90" href="#projects"
						>$ ls projects/</a
					>
					{#each socials as link}
						<a
							class="border border-primary px-4 py-2.5 text-primary hover:bg-primary hover:text-on-primary"
							href={link.href}
							target="_blank"
							rel="noopener noreferrer">{link.text}</a
						>
					{/each}
				</div>
			</div>
			<Terminal />
		</div>
	</section>

	<section
		id="about"
		class="relative my-20 scroll-mt-24 border border-line px-5 pb-10 pt-12 md:px-10"
	>
		<h2 class="absolute -top-3.5 left-4 bg-background px-2 text-lg font-bold text-primary">
			./about
		</h2>
		<div class="grid items-start gap-10 md:grid-cols-[1fr_auto]">
			<div class="space-y-4 leading-relaxed">
				<p>
					I’m Manan, a Master’s student in Computer Science at Northeastern University in Boston,
					originally from Mumbai.
				</p>
				<p>
					I like unwrapping abstractions and learning how the machine actually works. Figuring out
					what’s really going on under the hood is the fun part for me, which is why I keep ending
					up in operating systems, compilers, and programming languages.
				</p>
				<p>
					I run Arch Linux (btw) with Hyprland, and I set up my desktop from scratch. I write and
					maintain my own <a
						class="font-bold text-primary transition-colors hover:text-primary-hover"
						href="https://github.com/manankarnik/dotfiles"
						target="_blank"
						rel="noopener noreferrer">dotfiles<span aria-hidden="true" class="ml-0.5">↗</span></a
					>, and I’ve experimented with other setups too, like NixOS and its declarative
					configuration. My workflow is built around the terminal and the keyboard, and Neovim is my
					editor of choice.
				</p>
				<p>
					My interest in game development started with playing computer games, and I make games in
					the Godot Engine and pixel art in Aseprite. I’m also interested in low-level graphics.
					When I have the time, I watch anime.
				</p>
			</div>
			<img class="w-48 border border-line md:w-64" src={profile} alt="Manan Karnik" />
		</div>
	</section>

	<section
		id="education"
		class="relative my-20 scroll-mt-24 border border-line px-5 pb-10 pt-12 md:px-10"
	>
		<h2 class="absolute -top-3.5 left-4 bg-background px-2 text-lg font-bold text-primary">
			./education
		</h2>
		<ol class="space-y-8">
			{#each education as school}
				<li class="grid gap-2 md:grid-cols-[12rem_1fr] md:gap-8">
					<div class="text-sm text-muted md:pt-1">{school.date}</div>
					<div class="space-y-1">
						<h3 class="text-lg font-bold">{school.degree}</h3>
						<div class="font-bold text-primary">{school.school}</div>
						<p>GPA {school.gpa}</p>
						{#if school.coursework}
							<p class="text-sm text-muted">{school.coursework}</p>
						{/if}
					</div>
				</li>
			{/each}
		</ol>
	</section>

	<section
		id="experience"
		class="relative my-20 scroll-mt-24 border border-line px-5 pb-10 pt-12 md:px-10"
	>
		<h2 class="absolute -top-3.5 left-4 bg-background px-2 text-lg font-bold text-primary">
			./experience
		</h2>
		<ol class="space-y-12">
			{#each experience as job}
				<li class="grid gap-2 md:grid-cols-[12rem_1fr] md:gap-8">
					<div class="text-sm text-muted md:pt-1">{job.date}</div>
					<div class="space-y-3">
						<div>
							<h3 class="text-lg font-bold">{job.title}</h3>
							<div class="font-bold text-primary">{job.org}</div>
						</div>
						<p class="leading-relaxed">{@render code(job.summary)}</p>
						{@render tags(job.tags)}
						{@render details(job.details)}
					</div>
				</li>
			{/each}
		</ol>
	</section>

	<section
		id="projects"
		class="relative my-20 scroll-mt-24 border border-line px-5 pb-10 pt-12 md:px-10"
	>
		<h2 class="absolute -top-3.5 left-4 bg-background px-2 text-lg font-bold text-primary">
			./projects
		</h2>
		<div class="divide-y divide-line">
			{#each projects as project}
				{@render projectEntry(project)}
			{/each}
		</div>
	</section>

	<section
		id="skills"
		class="relative my-20 scroll-mt-24 border border-line px-5 pb-10 pt-12 md:px-10"
	>
		<h2 class="absolute -top-3.5 left-4 bg-background px-2 text-lg font-bold text-primary">
			./skills
		</h2>
		<dl class="space-y-5">
			{#each skills as group}
				<div class="grid gap-2 md:grid-cols-[12rem_1fr] md:gap-8">
					<dt class="text-sm text-muted md:pt-0.5">{group.label}</dt>
					<dd>{@render tags(group.items)}</dd>
				</div>
			{/each}
		</dl>
	</section>

	<section
		id="archive"
		class="relative my-20 scroll-mt-24 border border-line px-5 pb-10 pt-12 md:px-10"
	>
		<h2 class="absolute -top-3.5 left-4 bg-background px-2 text-lg font-bold text-primary">
			./archive
		</h2>
		<div class="divide-y divide-line">
			{#each otherProjects as project}
				{@render projectEntry(project)}
			{/each}
		</div>
	</section>

	<section
		id="contact"
		class="relative my-20 scroll-mt-24 border border-line px-5 pb-10 pt-12 md:px-10"
	>
		<h2 class="absolute -top-3.5 left-4 bg-background px-2 text-lg font-bold text-primary">
			./contact
		</h2>
		<div class="grid gap-10 md:grid-cols-2">
			<div class="space-y-4">
				<p class="text-xl font-bold leading-relaxed lg:text-2xl">Building something interesting?</p>
				<p class="text-muted">
					Or just want to say hi? Either way, email me at <a
						class="font-bold text-primary transition-colors hover:text-primary-hover"
						href="mailto:karnik.ma@northeastern.edu">karnik.ma@northeastern.edu</a
					> or leave a message here, and I’ll get back to you.
				</p>
			</div>
			<form method="post" use:enhance class="flex flex-col gap-5">
				{#if form}
					<p class="font-bold {form.success ? 'text-green-500' : 'text-red-500'}">
						{form.success ? "Message sent successfully!" : "Something went wrong! Try again."}
					</p>
				{/if}
				<label class="block">
					<span class="font-bold">name <span class="text-red-500">*</span></span>
					<span class="ml-2 text-sm text-muted"># git config user.name</span>
					<input
						name="name"
						required
						class="mt-1 w-full border border-line bg-midground p-2 focus:border-primary focus-visible:outline-none"
					/>
				</label>
				<label class="block">
					<span class="font-bold">email <span class="text-red-500">*</span></span>
					<span class="ml-2 text-sm text-muted"># git config user.email</span>
					<input
						name="email"
						type="email"
						required
						class="mt-1 w-full border border-line bg-midground p-2 focus:border-primary focus-visible:outline-none"
					/>
				</label>
				<label class="block">
					<span class="font-bold">message <span class="text-red-500">*</span></span>
					<span class="ml-2 text-sm text-muted"># git commit --message</span>
					<textarea
						name="message"
						required
						rows="5"
						class="mt-1 w-full resize-none border border-line bg-midground p-2 focus:border-primary focus-visible:outline-none"
					></textarea>
				</label>
				<button
					type="submit"
					class="w-full bg-primary px-4 py-2.5 font-bold text-on-primary hover:opacity-90"
				>
					$ git push origin main
				</button>
			</form>
		</div>
	</section>
</main>

<style>
	pre {
		font-family: monospace;
	}
</style>
