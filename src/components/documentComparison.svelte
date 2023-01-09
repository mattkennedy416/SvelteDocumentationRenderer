<script>


import MarkdownRenderer from './markdownRenderer.svelte';
import HtmlRenderer from './htmlRenderer.svelte';
import DocumentSelector from './documentSelector.svelte';
import { Dropdown } from "carbon-components-svelte";

</script>


<div >
    <Dropdown 
    titleText="Select Document"
    selectedId="0"
    items={[
      { id: "0", text: "Document 1" },
      { id: "1", text: "Document 2" },
      { id: "2", text: "Document 3" },
    ]}
    />
</div>


<div class="w-full md:w-12/12">
    <div class="shadow-lg w-full bg-white dark:bg-gray-700 relative overflow-hidden">
        <a href="/" class="w-full h-full block">
            <div class="flex items-top justify-between px-4 py-6 space-x-4">
    
    
                <MarkdownRenderer />



                <HtmlRenderer />

</div>
</a>
</div>
</div>

<style>
    :global(.bx--list-box__menu-item, .bx--list-box__menu-item__option, .bx--list-box) {
      height: auto;
      width: 200px;
      background-color: gray;
      border-bottom: 10px;
      border-top: 10px;
      box-shadow: 0 2px 6px 0 rgba(0,0,0,.2)
    }
  </style>
