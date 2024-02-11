<script lang="ts">
  import Accordion, {Content, Header, Panel} from "@smui-extra/accordion";
  import TopHeader from "@components/header.svelte"
</script>

<!-- Very top bar of screen -->
<TopHeader title="About"/>

<div class="flexy">
  <div class="accordion-container">
    <Accordion multiple>
      <Panel>
        <Header>About Minecraft Server Viewer</Header>
        <Content>
          <p>Welcome to Minecraft Server Viewer!</p>

          This app provides insight to minecraft servers listed by you (the user) with analytics and server status.
        </Content>
      </Panel>
      <Panel>
        <Header>How to use Minecraft Server Viewer</Header>
        <Content>
          <!-- Create nested accordion-->
          <Accordion multiple>
            <Panel>
              <!-- No Server panel -->
              <Header>I've got no servers!</Header>
              <Content>
                <p>Don't have any servers currently saved?</p>
                <p>No problem!</p>

                Down in the bottom left corner theres a plus ( + ) icon that you can press that will take you to the add servers page.
                From there, you can enter the ip of the server you wish to view and if the server is successfully pinged, it'll be added to the main page!
              </Content>
            </Panel>
            <Panel>
              <!-- Unsure about servers to add panel -->
              <Header>Don't know what servers to add?</Header>
              <Content>
                <p>We've got that sorted for you as well!</p>
                That light bulb icon next to the add server icon is our recommendations page where you can see servers that you might be interested in!
                Just tap on the server and add it to your home page.
              </Content>
            </Panel>
          </Accordion>
        </Content>
      </Panel>
    </Accordion>
  </div>
</div>