

<script>

import { Button } from "carbon-components-svelte";

let marking = "ABC";
let body = "this is a csh!";


let popupShown = false;


function selectOK ()
{
    popupShown = false;
}

export function selected(_marking, _text)
{
    console.log("open csh!");
    marking = _marking;
    body = _text;
    popupShown = true;
}

</script>

{#if popupShown}
<div class=box>

    <div>
        {marking}

    </div>
        {body}

    <div class="justify-right">
        <Button id="popupOK" on:click={selectOK}>OK</Button>
    </div>
</div>
{/if}


  <style>

:global(#popupOK) {
  --unit: 10px; 
  padding: var(--unit);
  height: 40;
  width: 50;
  border: 3px solid #aaa;
      border-radius: 5px;
    background-color: aquamarine;
}

    .box {
      width: 500px;
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