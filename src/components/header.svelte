<!-- Contains the header of every page -->
<script lang="ts">
    import IconButton from "@smui/icon-button";
    import TopAppBar, { Row, Section, Title } from "@smui/top-app-bar";
    export let title = "default title";
    import { active } from "../store/store";
    let prominent = false;
    let dense = false;

</script>

<div class="flexy">
    <div class="top-app-bar-container flexor">
        <TopAppBar variant="static" {prominent} {dense}> <!-- Create the bar -->
            <Row>
                <Section>
                    <Title>{title}</Title> <!-- title -->
                </Section>
                <Section align="end" toolbar> 
                    <!-- question mark button to goto the about page -->
                    <IconButton
                        class="material-icons"
                        on:click={() => {
                            $active = { icon: "", link: "./about" };
                        }}>?</IconButton
                    >
                </Section>
            </Row>
        </TopAppBar>
    </div>
</div>

<style>
    .top-app-bar-container {
        max-width: 100%;
        width: 100%;
        min-height: 100%;
        height: 100%;
    }

    .flexy {
        display: flex;
        flex-wrap: wrap;
    }

    .flexor {
        display: inline-flex;
        flex-direction: column;
    }
</style>
