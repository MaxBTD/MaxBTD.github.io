<script lang="ts">
	let { children } = $props();
</script>

{@render children()}

<style>
    :global(html) {
    max-width: 100%;
    overflow-x: hidden;
    }
</style>