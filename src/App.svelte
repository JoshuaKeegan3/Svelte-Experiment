<script lang="ts">
    import { Router } from "@roxi/routify";
    import { routes } from "../.routify/routes";
    import { DarkMode } from "@store/store";

    // Use reactivity for listen to changes in DarMode store
    $: if ($DarkMode) {
        // Change class to dark and remove light class
        document.getElementById("app").classList.add("dark");
        document.getElementById("app").classList.remove("light");
        document.documentElement.classList.add("dark");
        document.documentElement.classList.remove("light");
        document.getElementsByTagName("body")[0].className = "dark";
    } else {
        // Change class to light and remove dark class
        document.getElementById("app").classList.add("light");
        document.getElementById("app").classList.remove("dark");
        document.documentElement.classList.add("light");
        document.documentElement.classList.remove("dark");
        document.getElementsByTagName("body")[0].className = "light";
    }
</script>

<!-- Global -->
<link rel="stylesheet" href="/global.css" />
<!-- Material Icons -->
<link
    rel="stylesheet"
    href="https://fonts.googleapis.com/icon?family=Material+Icons"
/>
<!-- Roboto -->
<link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,600,700"
/>
<!-- Roboto Mono -->
<link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css?family=Roboto+Mono"
/>
<link rel="stylesheet" href="build/smui-dark.css" />
<link rel="stylesheet" href="build/smui.css" />

<!-- Wrap main element with a variable class for light and dark mode -->
<main class={$DarkMode ? "dark" : "light"}>
    <Router {routes} />
</main>
