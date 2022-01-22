


const scriptsInEvents = {

		async EventSheet1_Event1(runtime, localVars)
		{
			vkBridge.send("VKWebAppInit", {});
		},

		async EventSheet1_Event2_Act1(runtime, localVars)
		{
			vkBridge.send("VKWebAppGetUserInfo", {});
		},

		async EventSheet1_Event3(runtime, localVars)
		{
			vkBridge.subscribe((e) => console.log(e)); 
		}

};

self.C3.ScriptsInEvents = scriptsInEvents;

