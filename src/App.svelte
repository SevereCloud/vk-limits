<script lang="ts">
  import {
    AppRoot,
    Footer,
    Group,
    Header,
    Link,
    Panel,
    PanelHeader,
    SplitCol,
    SplitLayout,
    Search,
    ViewWidth,
    useAdaptivity,
    usePlatform,
    VKCOM,
    SimpleCell,
  } from "@sveltevk/vksui";
  import Item from "./lib/Item.svelte";
  import { data, DataGroup, DataItem } from "./data";

  const adaptivity = useAdaptivity();
  const platform = usePlatform();
  $: console.log($adaptivity);

  $: isDesktop = $adaptivity.viewWidth >= ViewWidth.TABLET;

  const searchData = (search: string): DataGroup[] => {
    const groups: DataGroup[] = [];
    data.forEach((group) => {
      if (group.name.toLowerCase().indexOf(search) > -1) {
        groups.push(group);
      } else {
        const items: DataItem[] = [];
        group.items.forEach((item) => {
          if (
            item.name.toLowerCase().indexOf(search) > -1 ||
            item.text.toLowerCase().indexOf(search) > -1 ||
            (item.hint && item.hint.toLowerCase().indexOf(search) > -1)
          ) {
            items.push(item);
          }
        });
        if (items.length > 0) {
          groups.push({
            name: group.name,
            color: group.color,
            items: items,
          });
        }
      }
    });

    return groups;
  };

  let search = "";
  $: limits = searchData(search.toLowerCase());
</script>

<AppRoot>
  <SplitLayout class="Doc">
    <svelte:fragment slot="header">
      {#if $platform !== VKCOM}
        <PanelHeader separator={false} />
      {/if}
    </svelte:fragment>

    {#if isDesktop}
      <SplitCol fixed maxWidth="280px" width="280px">
        <Panel>
          {#if $platform !== VKCOM}
            <PanelHeader />
          {/if}
          <Group>
            {#each data as group}
              <SimpleCell href={`#${group.name}`}>
                {group.name}
              </SimpleCell>
            {/each}
          </Group>
        </Panel>
      </SplitCol>
    {/if}

    <SplitCol
      spaced={isDesktop}
      animate={!isDesktop}
      width={isDesktop ? "560px" : "100%"}
      maxWidth={isDesktop ? "560px" : "100%"}
    >
      <Panel id="main">
        <PanelHeader>Лимиты</PanelHeader>
        <Group>
          <Search bind:value={search} onChange={this.onChange}
            ><svelte:fragment slot="after" /></Search
          >
        </Group>
        {#each limits as group}
          <Group>
            <Header>{group.name}</Header>
            <!-- svelte-ignore a11y-missing-content -->
            <a id={group.name} class="Archer" />
            {#each group.items as item}
              <Item {item} fill={group.color} />
            {/each}
          </Group>
        {:else}
          <Group>
            <Footer>Ничего не найдено</Footer>
          </Group>
        {/each}
        <Footer
          ><Link href="https://github.com/SevereCloud/vk-limits/edit/master/src/data.ts" target="_blank"
            >Редактировать</Link
          ></Footer
        >
      </Panel>
    </SplitCol>
  </SplitLayout>
</AppRoot>

<style>
  :global(.Doc) {
    justify-content: center;
  }

  :global(.SplitLayout--vkcom .Doc) {
    margin-top: 0!important;
  }

  .Archer {
    display: block;
    top: -112px;
    position: relative;
  }
</style>
