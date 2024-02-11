import { writable } from "svelte/store";
import { scaleLinear } from 'd3-scale';

export const xTicks = writable<string[]>([]) // x labels of the graph
export const yTicks = writable<number[]>([]) // y labels of the graph
export const points = writable<any>([])      // ip results
export const xScale = writable(scaleLinear() // xscale
.domain([0, Math.max.apply(null, yTicks)])
.range([200 - 10, 10]))

export const yScale = writable(scaleLinear() // yscale
.domain([0, Math.max.apply(null, yTicks)])
.range([200 - 10, 10]))

export const innerWidth = writable<number>() // width of all bars
export const barWidth = writable<number>()  // width of individual bars