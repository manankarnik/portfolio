<script>
	import { onMount, tick } from "svelte";
	import { experience, projects, otherProjects, skills } from "$lib/content.js";

	const sections = ["about", "education", "experience", "projects", "skills", "archive", "contact"];
	const links = {
		github: "https://github.com/manankarnik",
		linkedin: "https://linkedin.com/in/manankarnik"
	};
	const files = {
		"focus.txt": "operating systems · compilers · programming languages",
		"skills.txt": skills.map((g) => `${g.label.toLowerCase()}: ${g.items.join(", ")}`).join("\n"),
		"about.txt":
			"MS CS at Northeastern University, graduating May 2027.\nExploring how software really works, from operating systems to compilers and programming languages."
	};
	const dirs = {
		"projects/": projects.map((p) => p.slug + "/").join("  "),
		"experience/": experience.map((e) => `${e.title} · ${e.org.split(",")[0]}`).join("\n"),
		"archive/": otherProjects.map((p) => p.slug + "/").join("  ")
	};

	const help = `available commands:
  help               show this message
  whoami             print the current user
  ls [dir]           list files (try: ls projects/)
  cat <file>         print a file (try: cat focus.txt)
  cd <name>          jump to a section or project (try: cd egos-2k+)
  github, linkedin   open my profiles
  email              send me an email
  contact            jump to the contact form
  history            show previous commands
  echo <text>        print text
  clear              clear the screen
  reset              restore the terminal to how it started`;

	function scrollTo(id) {
		document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
	}

	function run(input) {
		const [cmd, ...args] = input.trim().split(/\s+/);
		const arg = args.join(" ");
		switch (cmd) {
			case "":
				return "";
			case "help":
				return help;
			case "whoami":
				return "manan";
			case "ls":
				if (!arg) return Object.keys(dirs).concat(Object.keys(files)).join("  ");
				return (
					dirs[arg.endsWith("/") ? arg : arg + "/"] ??
					`ls: cannot access '${arg}': No such file or directory`
				);
			case "cat":
				if (!arg) return "cat: missing file operand";
				if (dirs[arg] || dirs[arg + "/"]) return `cat: ${arg}: Is a directory`;
				return files[arg] ?? `cat: ${arg}: No such file or directory`;
			case "cd": {
				const path = arg.replace(/\/$/, "");
				if (path == "" || path == "~") {
					window.scrollTo({ top: 0, behavior: "smooth" });
					return "";
				}
				if (sections.includes(path)) {
					scrollTo(path);
					return "";
				}
				// Accept projects/<slug> and archive/<slug>, or a bare slug from either
				const [dir, slug] = path.includes("/") ? path.split("/", 2) : [null, path];
				const pool =
					{ projects, archive: otherProjects }[dir] ?? (dir ? [] : [...projects, ...otherProjects]);
				if (pool.some((p) => p.slug == slug)) {
					scrollTo("project-" + slug);
					return "";
				}
				return `${cmd}: ${arg || "missing operand"}: try one of ${sections.join(", ")} or a project from ls projects/`;
			}
			case "email":
				window.location.href = "mailto:karnik.ma@northeastern.edu";
				return "opening mail to karnik.ma@northeastern.edu...";
			case "github":
			case "linkedin":
				window.open(links[cmd], "_blank", "noopener");
				return `opening ${links[cmd]}...`;
			case "contact":
				scrollTo("contact");
				return "";
			case "history":
				return history.map((h, i) => `${String(i + 1).padStart(4)}  ${h}`).join("\n");
			case "echo":
				return arg;
			case "sudo":
				return "manan is not in the sudoers file. This incident will be reported.";
			case "rm":
				return "rm: nice try";
			case "exit":
				return "there is no escape. try contact instead.";
			default:
				return `${cmd}: command not found. type help for a list of commands.`;
		}
	}

	const commands = [
		"help",
		"whoami",
		"ls",
		"cat",
		"cd",
		"github",
		"linkedin",
		"email",
		"contact",
		"history",
		"echo",
		"clear",
		"reset"
	];
	const targets = [
		...sections.map((s) => (dirs[s + "/"] && s != "experience" ? s + "/" : s)),
		...projects.map((p) => "projects/" + p.slug),
		...otherProjects.map((p) => "archive/" + p.slug),
		...[...projects, ...otherProjects].map((p) => p.slug)
	];
	// What each command accepts as an argument, for tab completion
	const argCompletions = {
		ls: Object.keys(dirs),
		cat: Object.keys(files),
		rm: [...Object.keys(dirs), ...Object.keys(files)],
		cd: targets
	};

	// What the terminal shows on load, and what reset restores
	const initialLines = () => [
		{ cmd: "whoami", out: "manan" },
		{ cmd: "cat focus.txt", out: files["focus.txt"] },
		{ cmd: "ls projects/", out: dirs["projects/"] },
		{ cmd: null, out: "type help to see what else this terminal can do." }
	];
	const initialHistory = ["whoami", "cat focus.txt", "ls projects/"];
	let lines = $state(initialLines());
	let history = [...initialHistory];
	let cursor = history.length;
	let value = $state("");
	// Tab completion options, shown under the prompt until the next keystroke
	let suggestions = $state("");
	let input;
	let screen;

	onMount(() => (screen.scrollTop = screen.scrollHeight));

	async function submit(event) {
		event.preventDefault();
		const cmd = value.trim();
		value = "";
		if (cmd) history.push(cmd);
		cursor = history.length;
		if (cmd == "clear") {
			lines = [];
		} else if (cmd == "reset") {
			lines = initialLines();
			history = [...initialHistory];
			cursor = history.length;
		} else {
			lines.push({ cmd, out: run(cmd) });
		}
		await tick();
		screen.scrollTop = screen.scrollHeight;
	}

	function keydown(event) {
		suggestions = "";
		if (event.key == "ArrowUp" && cursor > 0) {
			event.preventDefault();
			value = history[--cursor];
		} else if (event.key == "ArrowDown") {
			event.preventDefault();
			cursor = Math.min(cursor + 1, history.length);
			value = history[cursor] ?? "";
		} else if (event.key == "Tab") {
			event.preventDefault();
			const words = value.trimStart().split(" ");
			const last = words.pop();
			const candidates =
				words.length == 0 ? commands : words.length == 1 ? (argCompletions[words[0]] ?? []) : [];
			// Complete one path level at a time: projects/ before projects/<slug>
			const matches = candidates.filter(
				(c) => c.startsWith(last) && c != last && !c.slice(last.length, -1).includes("/")
			);
			if (matches.length == 1) {
				value = [...words, matches[0]].join(" ") + (matches[0].endsWith("/") ? "" : " ");
			} else if (matches.length > 1) {
				// Extend to the longest common prefix like bash, and list the options
				let prefix = matches[0];
				for (const m of matches) while (!m.startsWith(prefix)) prefix = prefix.slice(0, -1);
				value = [...words, prefix].join(" ");
				// Show only the last path component, like bash
				suggestions = matches.map((m) => m.slice(m.lastIndexOf("/", m.length - 2) + 1)).join("  ");
				tick().then(() => (screen.scrollTop = screen.scrollHeight));
			}
		} else if (event.key == "l" && event.ctrlKey) {
			event.preventDefault();
			lines = [];
		}
	}
</script>

<!-- svelte-ignore a11y_click_events_have_key_events, a11y_no_static_element_interactions -->
<div
	class="rounded-lg border-2 border-primary bg-midground text-sm shadow-lg"
	onclick={() => window.getSelection()?.isCollapsed && input.focus()}
>
	<!-- Hyprland-style bar: workspaces on the left, focused window title on the right -->
	<div class="flex items-center justify-between border-b border-line px-4 py-2 text-xs">
		<div class="flex gap-1">
			<span class="bg-primary px-1.5 text-on-primary">1</span>
			<span class="px-1.5 text-muted">2</span>
			<span class="px-1.5 text-muted">3</span>
		</div>
		<span class="text-muted">manan@arch: ~</span>
	</div>
	<div bind:this={screen} class="h-80 space-y-1 overflow-y-auto px-6 py-5 leading-relaxed">
		{#each lines as line}
			{#if line.cmd !== null}
				<p><span class="text-primary">$</span> {line.cmd}</p>
			{/if}
			{#if line.out}
				<p class="whitespace-pre-wrap pb-2 text-muted">{line.out}</p>
			{/if}
		{/each}
		<form class="flex items-center gap-2" onsubmit={submit}>
			<label for="terminal-input" class="text-primary">$</label>
			<input
				id="terminal-input"
				bind:this={input}
				bind:value
				onkeydown={keydown}
				aria-label="Terminal command"
				autocomplete="off"
				autocapitalize="off"
				spellcheck="false"
				class="flex-1 bg-transparent text-base caret-primary outline-none focus-visible:outline-none sm:text-sm"
			/>
		</form>
		{#if suggestions}
			<p class="whitespace-pre-wrap text-muted">{suggestions}</p>
		{/if}
	</div>
</div>
