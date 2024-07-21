<script lang="ts">
  import type { Link } from "$lib/components/Navigation.svelte";
  import Navigation from "$lib/components/Navigation.svelte";

  const LINKS: Link[] = [
    { link: "/chinese", label: "中文" },
    { link: "/#", label: "日本語 [WIP]" },
  ];
</script>

<Navigation links={LINKS} />
