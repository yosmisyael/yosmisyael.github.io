<script lang="ts">
	let isOpen = $state(false);

	function handleToggleMenu(): void {
		isOpen = !isOpen;
	}
</script>

<nav class="fixed left-0 z-30 w-full">
	<div class="flex items-center justify-between px-6 py-4 md:px-16 lg:px-32">
		<!-- brand -->
		<div class="relative z-50 inline-flex items-center gap-5 md:gap-10">
			<svg
				width="198"
				height="193"
				viewBox="0 0 198 193"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				class="h-14 w-fit hover:cursor-pointer md:h-16"
			>
				<path
					class="fill-complementary-light"
					d="M101.5 19.0357L122.862 56.0357L47.8064 186.036L5 186.036L101.5 19.0357Z"
				/>
				<path
					class="fill-complementary-light"
					d="M160.5 19.0357L181.862 56.0357L106.806 186.036L64 186.036L160.5 19.0357Z"
				/>
				<path
					class="fill-complementary-light"
					d="M160.043 121.071L138.681 158.072L155 186.337L197.806 186.337L160.043 121.071Z"
				/>
				<path
					d="M114.398 37.0354L41.0746 164.035L5.19768 164.035L96.4991 6.03309L114.398 37.0354Z"
					stroke="#6400FF"
					stroke-width="6"
				/>
				<path
					d="M173.398 37.0354L100.075 164.035L64.1977 164.035L155.499 6.03309L173.398 37.0354Z"
					stroke="#6400FF"
					stroke-width="6"
				/>
				<path
					d="M137.145 139.071L151.732 164.336L187.604 164.336L155.046 108.065L137.145 139.071Z"
					stroke="#6400FF"
					stroke-width="6"
				/>
			</svg>

			<!-- border -->
			<span class="border-r-primary h-16 w-1 border-r-2 md:h-20"></span>

			<!-- toggle -->
			<svg
				width="48"
				height="48"
				viewBox="0 0 34 34"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				class="h-10 hover:cursor-pointer md:h-max"
			>
				<path
					class="fill-complementary-light"
					d="M14 10C14 16.6274 19.3726 22 26 22C27.2123 22 28.3827 21.8207 29.4859 21.4863C27.9924 26.4137 23.4151 29.9998 18 29.9998C11.3726 29.9998 6 24.6276 6 18.0002C6 12.5851 9.58677 8.00779 14.5141 6.51434C14.1798 7.6175 14 8.78767 14 10Z"
				/>
				<path
					d="M12 8.00002C12 14.6274 17.3726 20 24 20C25.2123 20 26.3827 19.8207 27.4859 19.4863C25.9924 24.4137 21.4151 27.9998 16 27.9998C9.37258 27.9998 4 22.6276 4 16.0002C4 10.5851 7.58677 6.00779 12.5141 4.51434C12.1798 5.6175 12 6.78767 12 8.00002Z"
					stroke="#6400FF"
					stroke-width="1.7"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
			</svg>
		</div>

		<!-- nav menu -->
		<ul
			class="bg-complementary-light font-raleway absolute top-0 right-0 bottom-0 left-0 mx-2 flex h-screen origin-top flex-col gap-20 px-4 text-2xl font-medium transition-transform duration-400 ease-out md:relative md:h-fit md:scale-y-100 md:flex-row md:gap-10 md:bg-transparent lg:gap-20"
			class:scale-y-100={isOpen === true}
			class:scale-y-0={isOpen === false}
		>
			<li class="nav-item mt-40 delay-300 md:mt-0" class:-translate-x-[110%]={isOpen === true}>
				<a href="/about" class="relative z-10" draggable="false" onclick={handleToggleMenu}>
					About
				</a>
			</li>
			<li class="nav-item delay-[400ms]" class:-translate-x-[110%]={isOpen === true}>
				<a
					href="https://medium.com"
					class="relative z-10"
					draggable="false"
					onclick={handleToggleMenu}>Writing</a
				>
			</li>
			<li class="nav-item delay-500" class:-translate-x-[110%]={isOpen === true}>
				<a
					href="mailto:yosevelian@gmail.com"
					class="relative z-10"
					draggable="false"
					onclick={handleToggleMenu}>Hire Me</a
				>
			</li>
		</ul>

		<button class="toggle-text relative z-40 md:hidden" onclick={handleToggleMenu}>Menu</button>
	</div>
</nav>
