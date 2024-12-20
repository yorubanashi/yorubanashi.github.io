<script lang="ts">
	interface Props {
		checked: boolean;
        label: string;
	}
	let { checked = $bindable(), label }: Props = $props();

    const toggle = () => { checked = !checked; }
</script>

<div class="main">
    <div class="label">{ label }</div>
    <!-- TODO: Resolve svelte-ignore clause -->
    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <toggle-button onclick={toggle} checked={checked ? "" : null} role="button" tabindex="0">
        <div class="toggle-container">
            <div class="toggle-bar"></div>
            <div class="toggle-button"></div>
        </div>
    </toggle-button>
</div>

<style>
    .main {
        font-size: 0.875em;
        display: flex;
        align-items: center;
        justify-content: space-between;

        margin-bottom: 8px;
    }

    .label {
        display: flex;
        align-items: center;
    }

    toggle-button {
        display: flex;
        flex-direction: row;
        align-items: center;

        /* Variables */
        --transition-duration: 0.08s;
        --bar-color: rgb(113, 113, 113);
        --unchecked-opacity: 0.4;
        --checked-opacity: 0.5;
        --unchecked-button-color: #fafafa;
        --checked-button-color: rgb(62, 166, 255);
    }

	.toggle-container {
		display: inline-block;
		position: relative;
		width: 36px;
		height: 14px;
		margin: 4px 1px;
		padding: 0;
		border: 0;
		background: transparent;
	}

	.toggle-bar {
		position: absolute;
		height: 100%;
		width: 100%;
		border-radius: 8px;
		pointer-events: none;
		transition: background-color linear var(--transition-duration);
		background-color: var(--bar-color);
		opacity: var(--unchecked-opacity);
	}

	.toggle-button {
		position: absolute;
		top: -3px;
		left: 0;
		right: auto;
		height: 20px;
		width: 20px;
		border-radius: 50%;
		box-shadow: rgba(0, 0, 0, 0.6) 0 1px 5px 0 rgba(0, 0, 0, 0.6);
		transition:
			transform linear var(--transition-duration),
			background-color linear var(--transition-duration);
		will-change: transform;
		background-color: var(--unchecked-button-color);
	}

	toggle-button[checked] .toggle-bar {
		background-color: var(--bar-color);
		opacity: var(--checked-opacity);
	}

	toggle-button[checked] .toggle-button {
		background-color: var(--checked-button-color);
		transform: translate(16px, 0);
	}
</style>