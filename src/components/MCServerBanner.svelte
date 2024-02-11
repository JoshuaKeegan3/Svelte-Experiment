<script lang="ts">
    import Accordion, { Panel, Header, Content } from "@smui-extra/accordion";
    import {query} from "@utils/query"

    export let address = "0";

    let queryAddress = query(address);
</script>

<div class="accordion-container">
    <!--  Await the result from the server at the given address  -->
    {#await queryAddress then res}
    <Accordion>
        <Panel>
            <Header>
                <div class="content-container recommendation-container">
                    <div class="MCServerBannerDivContainer">
                        <img
                            alt="Page content placeholder"
                            src={res.favicon}
                            style="align-self: center;"
                        />
                        <div class="MCServerBannerTextDiv">
                            <p>Server Name: {res.motd}</p>
                            <p>Version: {res.server.name}</p>
                            <p>Server Address: {address}</p>
                        </div>
                    </div>
                </div>
            </Header>
            <Content>
                {res.motd_json}
            </Content>
        </Panel>
    </Accordion>
    {/await}
</div>

<style>
    .recommendation-container {
        width: 80%;
    }
    .MCServerBannerDivContainer {
        display: flex;
    }
    .MCServerBannerTextDiv {
        text-align: left;
        padding-left: 5%;
    }
</style>
