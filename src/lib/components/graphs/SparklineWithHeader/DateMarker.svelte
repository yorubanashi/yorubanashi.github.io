<script lang="ts">
	interface Props {
		date: number;

		chartWidth: number;
		show: boolean;
		xPosition: number;
	}
	let { date, chartWidth, show, xPosition }: Props = $props();

	const getLocaleOptions = (): Intl.DateTimeFormatOptions => {
		return {
			weekday: 'short',
			year: 'numeric',
			month: 'short',
			day: 'numeric',
			hour: 'numeric',
			minute: 'numeric'
		};
	};
	let textRef = $state<HTMLDivElement>();
	const translateX = (x: number) => {
		if (textRef === undefined) return;
		// Update the text at the same time we do the translate to prevent awkward clipping
		textRef.innerHTML = new Date(date).toLocaleString('en-US', getLocaleOptions());

		const textWidth = textRef.offsetWidth;
		const halfWidth = textWidth / 2;
		// 1. Don't let the text go past x = 0
		// 2. Don't let the text go past the chard width either
		let textPos = Math.max(0, x - halfWidth);
		textPos = Math.min(textPos, chartWidth - textWidth);
		return `transform: translateX(${textPos}px);`;
	};
</script>

<div id="container">
	<div bind:this={textRef} class={`text ${show ? 'show' : ''}`} style={translateX(xPosition)}>
		{new Date(date).toLocaleString('en-US', getLocaleOptions())}
	</div>
</div>

<style>
	#container {
		padding-bottom: 4px;
	}

	.text {
		display: inline-flex;
		/* TODO: Should I convert this into a tertiary intermediate color? Not officially used in YT though... */
		color: rgb(205, 205, 205);
		font-size: 0.875rem;
		opacity: 0;

		transition: opacity 0.15s ease-out;
	}

	.show {
		opacity: 1;
	}
</style>
