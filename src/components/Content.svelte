


<script>
	export let title;

	import { Tabs, Tab, TabList, TabPanel } from 'svelte-tabs';

	import DocumentComparison from './documentComparison.svelte';
	import SearchRenderer from './searchRenderer.svelte';
	import CshRenderer from './cshRenderer.svelte';
	import DynamicBuilds from './dynamicBuilds.svelte';

</script>





<Tabs>
	<TabList>
	  <Tab>Documents</Tab>
	  <Tab>Search</Tab>
	  <Tab>Context Sensitive Help</Tab>
	  <Tab>Dynamic Builds</Tab>
	</TabList>
  
	<TabPanel>
		<DocumentComparison />
	</TabPanel>
		
	<TabPanel>
	  <!-- <h2>Panel Two</h2> -->
	  <SearchRenderer />

	</TabPanel>
		
	<TabPanel>
		<CshRenderer />
	</TabPanel>
	<TabPanel>
		<DynamicBuilds />
	</TabPanel>
  </Tabs>


