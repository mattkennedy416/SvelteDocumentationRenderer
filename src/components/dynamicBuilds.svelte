
<script>

import { TextArea } from 'carbon-components-svelte';
import HtmlRenderer from './htmlRenderer.svelte';
import MarkdownRenderer from './markdownRenderer.svelte';
import { Button } from "carbon-components-svelte";
import JsonRenderer from './jsonRenderer.svelte';
import { Dropdown } from "carbon-components-svelte";


function build() {
    // build the selected content
}

</script>


<Button id="buildButton"> Build! </Button>

<Dropdown
  titleText="Select Build Type Template"
  selectedId="0"
  items={[
    { id: "0", text: "Basic" },
    { id: "1", text: "Filename and Folder Search" },
    { id: "2", text: "Reordering" },
  ]}
/>

<div class="w-full md:w-12/12">
    <div class="shadow-lg w-full bg-white dark:bg-gray-700 relative overflow-hidden">
        <a href="/" class="w-full h-full block">
            <div class="flex items-top justify-between px-4 py-6 space-x-4">
    
    
                <JsonRenderer />



                <HtmlRenderer />

</div>
</a>
</div>
</div>



<style>

    :global(#buildButton) {
      --unit: 10px; 
      padding: var(--unit);
      height: 40;
      width: 50;
      border: 3px solid #aaa;
          border-radius: 5px;
        background-color: aquamarine;
    }
    

</style>