<script lang="ts">
  import type { Link } from "$lib/components/Navigation.svelte";
  import Navigation from "$lib/components/Navigation.svelte";

  const LINKS: Link[] = [
    { link: "/chinese", label: "Chinese" },
    { link: "/#", label: "Japanese [WIP]" },
  ];
</script>

<Navigation links={LINKS} />
