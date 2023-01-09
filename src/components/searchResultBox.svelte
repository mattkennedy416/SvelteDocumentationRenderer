
<script>

import { TextArea } from 'carbon-components-svelte';

let markingMetadata = {i1:"i1", i2: "i2"};

let packageMetadata = {i1: "i1", i2: "i2"};

let documentName = "Document Name";
let documentPath = "test/path/document_name.md";
let content = "test content";


</script>




<div class=box>

    <div class="w-full md:w-12/12">
            <a href="/" class="w-full h-full block">
                <div class="flex items-top justify-between px-0 py-0 space-x-5">

    <div class=markingBox>
        Markings:
        {markingMetadata.i1};
    </div>

    <div class=markingBox>
        Package Details:
        {packageMetadata.i1};
    </div>

</div>
</a>
</div>

<div>
{documentName}
</div>

<div>
    {documentPath}
</div>


{content}
</div>


<style>

.markingBox {
      width: 300px;
      border: 1px solid #aaa;
      border-radius: 2px;
      box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.1);
      padding: 1em;
      margin: 0 0 1em 0;
      
      display: flex;
      flex-direction: column;
      gap: 1em;
    }

    .box {
      width: 700px;
      border: 1px solid #aaa;
      border-radius: 2px;
      box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.1);
      padding: 1em;
      margin: 0 0 1em 0;
      
      display: flex;
      flex-direction: column;
      gap: 1em;
    }
  </style>






