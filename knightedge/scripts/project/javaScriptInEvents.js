

const scriptsInEvents = {

	async Folhamenuprincipal_Event1_Act5(runtime, localVars)
	{
		const proxlayout = runtime.layout.index + 1;
		runtime.goToLayout(proxlayout);
	},

	async Folhatutorial_Event1_Act5(runtime, localVars)
	{
		const proxlayout = runtime.layout.index + 1;
		runtime.goToLayout(proxlayout);
	},

	async Folhagameover_Event2_Act6(runtime, localVars)
	{
		let faseatual = runtime.globalVars.fase;
		runtime.goToLayout(faseatual);
	},

	async Folhagameover_Event3_Act6(runtime, localVars)
	{
		runtime.goToLayout("titlescreen")
	},

	async Folhagameplay_Event20_Act15(runtime, localVars)
	{
		runtime.goToLayout("gameoverscreen")
	},

	async Folhagameplay_Event32_Act7(runtime, localVars)
	{
		runtime.goToLayout("gameoverscreen");
	},

	async Folhagameplay_Event44_Act12(runtime, localVars)
	{
		const proxlayout = runtime.layout.index + 1;
		runtime.goToLayout(proxlayout);
	}
};

globalThis.C3.JavaScriptInEvents = scriptsInEvents;
