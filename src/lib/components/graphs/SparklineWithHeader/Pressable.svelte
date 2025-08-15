<script lang="ts">
	interface Props {
		text: string;
		callback: () => void;

		// Controls for background-color
		key: string;
		active: string;
	}
	let { text, callback, key, active = $bindable() }: Props = $props();

	const click = () => {
		active = key;
		callback();
	};
</script>

<div id="cover" class={key === active ? 'colored' : ''}>
	<button onclick={click}>
		<div>{text}</div>
	</button>
</div>

<style>
	#cover {
		border-radius: 0.5rem;
	}

	button {
		background-color: transparent;
		border: none;
		cursor: pointer;

		color: inherit;
		font: inherit;
		font-size: 0.875rem;

		border-radius: 0.5rem;
		padding: 0.5rem 1rem;
	}

	button:hover {
		background-color: rgba(255, 255, 255, 0.1);
	}

	.colored {
		background-color: rgba(255, 255, 255, 0.1);
	}
</style>
