/* eslint-disable */
import logo from './logo.svg';
import './App.css';
import IpscapeWebClient from "@ipscape/web-client";
import { namespaceExists } from "./lib.js";
import "./style.css";
import { useEffect } from 'react';

function App() {
  
// useEffect(() => {
//   (function () {
//     const webClient = new IpscapeWebClient();
//     const integration = "ipscape-qa-test";
//     const version = "1.0.0";
  
//     if (!namespaceExists("window.ipscape")) {
//       throw new Error("Unable to connect to Ipscape");
//     }
  
//     function invokeParentPostMessage(name, args) {
//       const params = {
//         methodName: name,
//         clientVersion: webClient.version,
//         response: args,
//       };
//       console.log("info =>", params);
//       const payload = JSON.parse(JSON.stringify(params));
//       if (window && window.top) window.top.postMessage(payload, "*");
//     }
//     console.log("info =>", payload);
//     // Get instance custom configuration
//     webClient.getIntegrationSettings("QA").then((response) => {
//       const integrationSettings = response.result.config;
//       invokeParentPostMessage("getIntegrationSettings", integrationSettings);
//     });
  
//     // Set listener for agent login
//     webClient.onAgentLogin((eventData) => {
//       console.log("info =>", eventData);
//       if (eventData.error)
//         throw Error(`AGENT:LOGIN: ${JSON.stringify(eventData.error)}`);
//       invokeParentPostMessage("agentLogin", eventData);
//     });
  
//     // Set listener for agent logout
//     webClient.onAgentLogout((eventData) => {
//       if (eventData.error)
//         throw Error(`AGENT:LOGOUT: ${JSON.stringify(eventData.error)}`);
//       invokeParentPostMessage("agentLogout", eventData);
//     });
  
//     // Set listener for agent presence
//     webClient.onAgentPresenceChange((eventData) => {
//       console.log("info =>", eventData);
//       invokeParentPostMessage("agentPresenceChange", eventData);
//     });
  
//     // Call failed
//     webClient.onCallFailed((eventData) => {
//       invokeParentPostMessage("callFailed", eventData);
//     });
  
//     // Call start
//     webClient.onCallStarted((eventData) => {
//       console.log("info =>", eventData);
//       invokeParentPostMessage("callStarted", eventData);
//     });
  
//     // Call disconnected (hangup)
//     webClient.onCallHangup((eventData) => {
//       console.log("info =>", eventData);
//       invokeParentPostMessage("callHangup", eventData);
//     });
  
//     // Call wrap
//     webClient.onCallWrapped((eventData) => {
//       console.log("info =>", eventData);
//       invokeParentPostMessage("callWrapped", eventData);
//     });
  
//     // Preview Allocated
//     webClient.onPreviewAllocated((eventData) => {
//       console.log("info =>", eventData);
//       invokeParentPostMessage("previewAllocated", eventData);
//     });
  
//     // In call component update
//     webClient.onComponentChanged((eventData) => {
//       invokeParentPostMessage("componentChanged", eventData);
//     });
  
//     // Interaction Open
//     webClient.onInteractionOpen((eventData) => {
//       invokeParentPostMessage("interactionOpen", eventData);
//     });
  
//     // Interaction Closed
//     webClient.onInteractionClosed((eventData) => {
//       invokeParentPostMessage("interactionClosed", eventData);
//     });
  
//     // Listen for events from the UI
//     window.addEventListener(
//       "message",
//       (event) => {
//         console.log('events', event, event?.data)
//         // if (event.origin !== scriptOrigin) return;
//         const { payload } = event.data;
//         switch (event.data.event) {
//           case "clickToDial":
//             webClient.clickToDial(event.data).then((eventData) => {
//               console.log("info =>", eventData);
//               invokeParentPostMessage("clickToDial", eventData);
//             });
//             break;
//           case "isAuthorised":
//             webClient.isAuthorised().then((eventData) => {
//               console.log("info =>", eventData);
//               invokeParentPostMessage("isAuthorised", eventData);
//             });
//             break;
//           case "getAgentDetails":
//             webClient.getAgentDetails().then((data) => {
//               console.log("info =>", eventData);
//               invokeParentPostMessage("getAgentDetails", data);
//             });
//             break;
//           case "getAgentPresence":
//             webClient.getAgentPresence().then((data) => {
//               invokeParentPostMessage("getAgentPresence", data);
//             });
//             break;
//           case "getAgentCampaigns":
//             webClient.getAgentCampaigns().then((data) => {
//               invokeParentPostMessage("getAllocatedCampaigns", data);
//             });
//             break;
//           case "getPauseReasons":
//             webClient.getPauseReasons().then((data) => {
//               console.log("info =>", eventData);
//               invokeParentPostMessage("getPauseReasons", data);
//             });
//             break;
//           case "getCurrentInteraction":
//             webClient.getCurrentInteraction().then((data) => {
//               console.log("info =>", eventData);
//               invokeParentPostMessage("getCurrentInteraction", data);
//             });
//             break;
//           case "getInteractionById":
//             webClient.getInteractionById(JSON.parse(payload)).then((data) => {
//               console.log("info =>", eventData);
//               invokeParentPostMessage("getInteractionById", data);
//             });
//             break;
//           case "getIntegrationSettings":
//             webClient.getIntegrationSettings(payload).then((data) => {
//               invokeParentPostMessage("getIntegrationSettings", data);
//             });
//             break;
//           case "inCallComponentOptionAdd":
//             webClient.addComponentOption(JSON.parse(payload)).then((data) => {
//               invokeParentPostMessage("addComponentOption", data);
//             });
//             break;
//           default:
//             console.warn(
//               `QA Integration: unidentified event (${JSON.stringify(event.data)})`
//             );
//         }
//       },
//       false
//     );
  
//     console.log(`
//       ===========================================
//         WebClientVersion: ${webClient.version}
//         Integration: ${integration}
//         IntegrationVersion: ${version}
//       ===========================================`);
//   })();
// }, [])
  

  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
