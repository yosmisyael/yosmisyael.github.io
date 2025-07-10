<script>
	import { theme } from "$lib/stores/theme";
</script>

<footer class="relative">
	<p
		class="md:fixed text-center md:text-left pb-2 pt:10 md:pb-0 md:pt-0 md:origin-bottom-left md:rotate-90 z-40 md:left-5 md:pr-8 md:top-7/12"
		class:text-primary-dark={!$theme}
		class:text-primary={$theme}
	>
		© MMXXV. 東ジャワで開発されました。
	</p>
</footer>
