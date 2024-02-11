<script lang="ts">
    import Slider from "@smui/slider";
    import { UpdateInterval } from "@store/store";
    import { get } from "svelte/store";

    // Set and get slider value from store
    let value = get(UpdateInterval);
    $: value, UpdateInterval.set(value);
</script>

<!-- Set Details for slider -->
<Slider
    bind:value
    on:input={() => alert(value)}
    min={0}
    max={60}
    step={5}
    discrete
    input$aria-label="Discrete slider"
/>
<pre class="status">Interval: {value}s</pre>
