<script lang="ts">
    import Switch from "@smui/switch";
    import FormField from "@smui/form-field";
    import { DarkMode } from "../store/store";
    import { get } from "svelte/store";

    // Bind darkMode to store
    let isDarkMode = get(DarkMode);
</script>

<div>
    <FormField>
        <!-- Switch to toggle dark mode setting -->
        <Switch
            bind:checked={isDarkMode}
            on:SMUISwitch:change={() => {
                DarkMode.set(isDarkMode);
            }}
        />
        <span slot="label">Dark Mode</span>
    </FormField>
</div>
