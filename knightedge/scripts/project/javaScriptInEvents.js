

const scriptsInEvents = {

	async Folhagameover_Event2_Act6(runtime, localVars)
	{
		let faseatual = runtime.globalVars.fase;
		runtime.goToLayout(faseatual);
	},

	async Folhagameover_Event3_Act7(runtime, localVars)
	{
		runtime.goToLayout("titlescreen")
	},

	async Folhamenuprincipal_Event1_Act5(runtime, localVars)
	{
		runtime.goToLayout(runtime.layout.index + 1);
	},

	async Folhatutorial_Event1_Act5(runtime, localVars)
	{
		runtime.goToLayout("historia");
	},

	async Folhagameplay_Event29_Act7(runtime, localVars)
	{
		runtime.goToLayout("gameoverscreen");
	},

	async Folhagameplay_Event18_Act15(runtime, localVars)
	{
		runtime.goToLayout("gameoverscreen");
	},

	async Folhagameplay_Event41_Act11(runtime, localVars)
	{
		runtime.goToLayout(runtime.layout.index + 1);
	}
};

globalThis.C3.JavaScriptInEvents = scriptsInEvents;
