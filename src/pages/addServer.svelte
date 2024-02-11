<script lang="ts">
    import Button, { Label } from "@smui/button";
    import { addresses } from "../store/store.js";
    import Header from "@components/header.svelte";
    //@ts-ignore
    import { queryAll } from "@utils/query";
    import { scaleLinear } from "d3-scale";
    import {
        xTicks,
        yTicks,
        points,
        xScale,
        yScale,
        barWidth,
        innerWidth,
    } from "../store/graphstore";

    // this field is bound to the value in the input field
    let value: string;

    // create graph and store information for recreation in stores
    function storeServerIP() {
        $addresses = [...$addresses, value];

        // query all added ips
        queryAll($addresses).then((data) => {
            // after the query is finished reset all the graph values
            $yTicks = [];
            $xTicks = [];
            $points = data; // write to store

            // initial values
            let min = Number.MAX_VALUE;
            let max = Number.MIN_VALUE;
            const N = 5; // number of yTicks

            // loop through all the points
            for (let i = 0; i < $points.length; i++) {
                // add ips to the xticks
                $xTicks.push($addresses[i]);
                // get the min and the max y values
                // yvalues are the number of players online
                min = Math.min($points[i].players.online, min);
                max = Math.max($points[i].players.online, max);
            }
            // j is a multiplier of max
            for (let j = 0; j < 1; j += 1 / N) {
                $yTicks.push(Math.floor(max * j));
            }
            const padding = { top: 20, right: 15, bottom: 20, left: 25 }; // initial

            let width = 500;
            let height = 200;

            // xscaler
            $xScale = scaleLinear()
                .domain([0, $xTicks.length])
                .range([padding.left, width - padding.right]);

            // xscaler
            $yScale = scaleLinear()
                .domain([0, Math.max.apply(null, $yTicks)])
                .range([height - padding.bottom, padding.top]);

            // width of bar components
            $innerWidth = width - (padding.left + padding.right);

            // width of bars
            $barWidth = $innerWidth / $xTicks.length;
        });
    }
</script>

<!-- Header -->
<Header title={"Add Server"} />

<div class="Container flexy">
    <div class="content-container" style="width:80%">
        <!-- value of value bound to this input -->
        <input id="ip-input-box" bind:value placeholder="Enter the server IP" />
        <div class="bottom-buttons" id="add-server-button">
            <!-- when button clicked store Ip -->
            <Button
                on:click={() => {
                    storeServerIP();
                }}
            >
                <Label>Add Server</Label>
            </Button>
        </div>
    </div>
</div>

<style>
    #ip-input-box {
        padding: 5%;
        margin: 5%;
        width: 90%;
    }
    #add-server-button {
        padding: 2%;
        display: grid;
    }
</style>
