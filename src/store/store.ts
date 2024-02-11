import { writable } from "svelte/store";
// @ts-ignore
import type {Tab} from "@components/navigation-bar.svelte";

// Holds the IP addresses or hostnames of Minecraft servers. It is populated by the addServer page. The servers in this
// store can be viewed from the index page.
export const addresses = writable<string[]>([]);

// The number of seconds until the app should ping all servers within addresses.
// This is a setting within the settings page.
export const UpdateInterval = writable<number>(60);

// If true then will display the apps dark mode theme.
// This is a setting within the settings page.
export const DarkMode = writable<boolean>(false);

// The current tab in the navigation. This determines what page the app is on. This should only be changed by the
// navigation-bar component. This default value can be changed to set the initial page when the app is loaded.
export const active = writable<Tab>({
    link: "./index",
    icon: "home",
})