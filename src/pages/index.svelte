<script lang="ts">
    import Header from "@components/header.svelte";
    import { addresses } from "@store/store";
    import McServerBanner from "@components/MCServerBanner.svelte";
</script>

<Header title="Home" />
<div class="flexy">
    <div class="flexor-content">
        <!-- Display all addresses from the store, which are added from the addServer page. -->
        {#each $addresses as address}
            <McServerBanner {address}></McServerBanner>
        {/each}
    </div>
</div>
