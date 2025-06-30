<!-- Exercise -->

<script lang="ts">
	import Markdown from '$lib/components/pages/Markdown.svelte';

    interface Duration {
        minute: number;
        second: number;
    }
    const duration = (minute: number, second: number): Duration => { return { minute: minute, second: second }}

    interface RunRecord {
        date: Date;

        mile1?: Duration;
        mile2?: Duration;
        mile3?: Duration;

        minute30?: number;
        final: [Duration, number]; // time, mile

        temp?: number; // Outside temperature in Fahrenheit (doesn't matter too much, but is a reference point)
        notes?: string;
    }

    // Helper to wrap the stupid monthIndex interaction
    const date = (year: number, month: number, day: number): Date => { return new Date(year, month - 1, day) }
    const runRecords: RunRecord[] = [
        {
            date: date(2025, 6, 29), mile2: duration(26, 0), mile3: duration(40, 22), minute30: 2.28, final: [duration(44, 21), 3.15],
            temp: 83, notes: "AC and fans felt good today.",
        },
    ];

    const padZero = (num: number): string => { return num.toString().padStart(2, "0"); }
    const formatDate = (date: Date): string => { return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`; };
    const formatDuration = (duration: Duration): string => { return `${padZero(duration.minute)}:${padZero(duration.second)}`; };
</script>

<Markdown>
	<h1>Exercise</h1>

    <ul>
        {#each runRecords as record}
            <li>
                {formatDate(record.date)}: {record.final[1]} miles in {formatDuration(record.final[0])} {#if record.temp} in {record.temp} degree weather {/if}
                <ul>
                    {#if record.mile1} <li>Mile 1 in {formatDuration(record.mile1)}</li> {/if}
                    {#if record.mile2} <li>Mile 2 in {formatDuration(record.mile2)}</li> {/if}
                    {#if record.mile3} <li>Mile 3 in {formatDuration(record.mile3)}</li> {/if}
                    {#if record.minute30} <li>In 30 minutes, ran {record.minute30} miles</li> {/if}
                    {#if record.notes} <li>Notes: {record.notes}</li> {/if}
                </ul>
            </li>
        {/each}
    </ul>
</Markdown>