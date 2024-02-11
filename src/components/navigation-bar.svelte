<script lang="ts" context="module">
    // Interface to represent the links and icons inside a tab
    export interface Tab {
        link: string;
        icon: string;
    }

    export interface Tabs extends Array<Tab> {}
</script>

<script lang="ts">
    import TabComponent, { Icon } from "@smui/tab";
    import TabBar from "@smui/tab-bar";
    import { goto } from "@roxi/routify";
    import { active } from "../store/store";

    // List of tabs containing link and icon for each page
    let tabs: Tabs = [
        {
            link: "./addServer",
            icon: "add",
        },
        {
            link: "./recommendations",
            icon: "lightbulb",
        },
        {
            link: "./index",
            icon: "home",
        },
        {
            link: "./serverStats",
            icon: "leaderboard",
        },
        {
            link: "./settings",
            icon: "settings",
        },
    ];

    $active = tabs[0];

    // Bind active and when active changes, go to the link of the current active tab
    active.subscribe((value) => {
        if (value) {
            $goto(value.link);
        }
    });
</script>

<!-- Div for nav bar -->
<div id="nav-bar">
    <!-- TabBar containing a TabComponent for each tab inside the bar -->
    <TabBar {tabs} let:tab key={(tab) => tab} bind:active={$active}>
        <TabComponent id="tab" {tab}>
            <Icon id="icon" class="material-icons">{tab.icon}</Icon>
        </TabComponent>
    </TabBar>
</div>

<style>
    * :global(#tab) {
        min-width: 0;
        padding-right: 0;
        padding-left: 0;
    }
    * :global(#icon) {
        color: #ff3e00;
    }
    #nav-bar {
        position: fixed;
        width: 100%;
        bottom: 0px;
    }
</style>
