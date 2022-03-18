<script lang="ts">
	import { SimpleCell } from '@sveltevk/vksui';
	import type { DataItem } from '../data';

	export let item: DataItem;
	export let fill: string = undefined
</script>

<SimpleCell multiline description={item.text} href={item.link} target="_blank">
	<svelte:component this={item.icon} slot="before" {fill} width={28} height={28} />
	{item.name}
	{#if item.hint}
		<span style:color="var(--text_secondary)">
			{' ' + item.hint}
		</span>
	{/if}
</SimpleCell>
