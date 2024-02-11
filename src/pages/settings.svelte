<script lang="ts">
    import Header from "@components/header.svelte";
    import DarkModeToggle from "@components/darkModeToggle.svelte";
    import UpdateIntervalSlider from "@components/updateIntervalSlider.svelte";
</script>

<Header title={"Settings"} />

<!-- Settings Container with dark mode toggle and update interval -->
<div class="flexy Container ">
    <!-- Dark Mode Toggle container -->
    <div class="content-container">
        Toggle Dark Mode
        <DarkModeToggle />
    </div>
    <!-- Interval Slider -->
    <div class="content-container">
        Update Interval (seconds)
        <UpdateIntervalSlider />
    </div>
</div>
