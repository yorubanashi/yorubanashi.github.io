<script lang="ts">
  import type { Link } from "$lib/components/Navigation.svelte";
  import Navigation from "$lib/components/Navigation.svelte";

  const LINKS: Link[] = [
    { link: "/chinese/songs", label: "Songs" },
  ];
</script>

<Navigation links={LINKS} />
