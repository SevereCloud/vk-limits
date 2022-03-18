<script lang="ts">
	import { ConfigProvider, VKCOM, Platform } from '@sveltevk/vksui';
	import { onMount } from 'svelte';
	import bridge, {type AppearanceSchemeType} from '@vkontakte/vk-bridge';
	import App from './App.svelte';
  import './app.css'

	let platform: Platform | undefined = undefined;
	let scheme: AppearanceSchemeType = 'bright_light';

	onMount(() => {
		bridge.send('VKWebAppInit', {});

		bridge.send('VKWebAppGetLaunchParams').then((data) => {
			if (data.vk_platform === 'desktop_web') {
				platform = VKCOM
			}
		});

		bridge.subscribe((e) => {
			if (e.detail.type === 'VKWebAppUpdateConfig') {
				scheme = e.detail.data.scheme
			}
		});
	});
</script>

<ConfigProvider {platform} {scheme}>
	<!-- <AdaptivityProvider> -->
		<App />
	<!-- </AdaptivityProvider> -->
</ConfigProvider>
