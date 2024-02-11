<!-- Page to plug quinns server and any other recommendations
Requires Connection to firebase or some other database to fetch data (may need loading page when fetching data)
 -->
<script>
    // imports 
    import Header from "@components/header.svelte";
    import McServerBanner from "@components/MCServerBanner.svelte";
    import { getRecommendations } from "@utils/firebase";

    // get the recommendations
    const recommendationsPromise = getRecommendations();
</script>

<Header title={"Recommendations"} />
<div>
    <div class="flexor-content">
        {#await recommendationsPromise then IPs} <!-- wait for the promise completion -->
            {#each IPs as ip} <!-- loop through all the ips -->
                <McServerBanner address={ip} /> <!-- create a banner for each ip -->
            {/each}
        {/await}
    </div>
</div>
