<!-- Standalone navigation component that covers the entire viewport. -->

<script context="module" lang="ts">
	export interface Link {
		label: string;
		link: string;
	}
</script>

<script lang="ts">
	export let links: Link[];
	export let title: string = 'Navigation';
</script>

<div id="container">
	<h1>{title}</h1>
	<div>
		<ul>
			{#each links as link}
				<li>
					<a href={link.link}
						><div>
							{link.label}
						</div></a
					>
				</li>
			{/each}
		</ul>
	</div>
</div>

<style>
	#container {
		height: 100dvh;
		width: 100dvw;

		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		/* font-family: 'Courier New', Courier, monospace; */
	}

	h1 {
		margin: 0;
		padding: 0.5rem 0;
	}

	ul {
		margin: 0;
		padding: 0.5rem;
		list-style-type: none;
	}

	li {
		padding: 0.5em;
	}

	a {
		color: var(--font-color);
		text-decoration: none;
		text-align: center;

		/* font-size: 1.25em; */
	}

	a:hover {
		cursor: pointer;
	}
</style>
