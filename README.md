![](/assets/svelte_cap.png)
# Minecraft server viewer

This app's main purpose is the ability to view information about Minecraft Servers that you specify in the app. This can be useful to see if your friends are playing or being able to tell if the server is online.

This uses a project template for [Svelte](https://svelte.dev) + [CapacitorJS](https://capacitorjs.com) apps with live reload, granting the ability to quickly build production ready applications for iOS and Android at near-native performance using JavaScript (Svelte). 


## Setup

*Note that you will need to have [Node.js](https://nodejs.org) installed.*<br>
*Note mac users will need to have [cocoapods](https://cocoapods.org) installed.*
- sudo gem install cocoapods

### Get started

Install the dependencies...

```bash
git clone "https://gitlab.ecs.vuw.ac.nz/course-work/swen325/2022/assignment3/t12/SWEN325-assignment3.git"
cd SWEN325-assignment3
npm install
npm i --force
```

### Run local dev server (no capacitor)

```bash
npm run dev:start
```

### Add your Capacitor platform

```bash
npx cap add android // (or ios)
```

### To build a production application:

`npm run build:android` or `npm run build:ios`

### External Components: 
Our external IoT component is Minecraft servers. We use a public API called MCApi that pings Minecraft servers and gives us the result.

[Server List Ping](https://wiki.vg/Server_List_Ping)
The interface that MCApi uses to retrieve information from the Minecraft servers. It sends a JSON object as a response.

Accordion

Sliders

Buttons 

Labels

Icons

Routify - navigation

Iot(model) represents the external components
We have planned to use firebase and Mc server as the external components.
Due to the svelte language, the javascript(model) and controller are tightly coupled. Therefore, the components will call a function in query which works as the controller to access the external components 

![structure](structure.png)
