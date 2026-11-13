<script>
	import profile from "$lib/assets/profile.jpg";
</script>

<section class="container mx-auto min-h-[80vh] p-4 lg:p-8">
	<h1 class="font-head text-3xl font-extrabold text-primary lg:text-4xl"># About Me</h1>
	<div class=" items-center justify-between lg:flex">
		<div class="my-8 flex items-center justify-center lg:p-8">
			<img class="w-64 rounded-full lg:w-80" src={profile} alt="Profile Picture" />
		</div>
		<div class="w-full lg:p-8">
			<h2 class="font-head text-xl font-extrabold text-primary lg:text-2xl">## Manan Karnik</h2>
			<h3 class="font-head text-sm font-bold text-muted lg:text-base">
				### MS in Computer Science, Northeastern University
			</h3>
			<p class="pt-4 text-justify">
				Hello World! I’m a Master’s student in Computer Science at Northeastern University,
				graduating in May 2027. I work on operating systems and low-level infrastructure, mostly in
				C and Rust.
			</p>
			<p class="pt-4 text-justify">
				As a research apprentice with Prof. Gene Cooperman, I helped extend MANA, the lab’s
				transparent MPI checkpointing system, to NVIDIA’s NCCL, and implemented the drain of
				in-flight point-to-point messages before a checkpoint. For my Operating Systems
				Implementation final project, I took egos-2k+, a RISC-V teaching OS, from a single core to
				16 and added kernel-level threads. I also TA CS3650 Computer Systems, where I explain
				processes, file descriptors, memory, and pointers to students at the board in office hours.
			</p>
			<p class="pt-4 text-justify">
				Before Northeastern, I spent almost two years as a part-time software developer shipping
				Android apps and web features. In the summer of 2026, I built an internal IoT device
				emulator at SharkNinja so developers and QA could test the mobile apps without physical
				hardware.
			</p>
			<p class="pt-4 text-justify">
				Outside of coursework, I run Arch Linux (btw) with Hyprland and live in the terminal with
				Neovim. I also make games in the Godot Engine and pixel art in Aseprite, and my Rust library
				bevy_generative brings procedural generation to the Bevy engine.
			</p>
		</div>
	</div>
</section>
