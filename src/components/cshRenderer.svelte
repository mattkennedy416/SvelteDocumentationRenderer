<script>
    import { Button } from "carbon-components-svelte";
    import { Modal } from "carbon-components-svelte";
    import CshPopup from "./cshPopup.svelte";
    //import { Button, Modal } from 'antd';


    let popup;


    //import Button from './Button.svelte';

    function cshClicked(key) {
        console.log("hello " + key);


        getAndShowContentForCSH(key);
        
    }

    function getAndShowContentForCSH(key)
    {
        let marking = "ABC";
        let text = key + key + key + ": hello world I am a context help text!"
        popup.selected(marking, text);

    }

const cshActions = ["1", "2", "3", "4", "5", "6", "7"];

  </script>
  

  <div class="w-full md:w-12/12">
    <div class="shadow-lg w-full bg-white dark:bg-gray-700 relative overflow-hidden">
        <a href="/" class="w-full h-full block">
            <div class="flex items-top justify-between px-4 py-6 space-x-4">

                {#each cshActions as action}
                <div class=button>
                <Button buttonType="primary" on:click="{() => cshClicked(action)}" id="button">{action} </Button>
            </div>
                {/each}

</div>
</a>
</div>
</div>


<CshPopup bind:this={popup}/>




<style>

:global(#button) {
  --unit: 40px; 
  padding: var(--unit);
  height: 40;
  width: 50;
  border: 1px solid #aaa;
      border-radius: 2px;
}

:global(#csh_modal) {
  --unit: 40px; 
  padding: var(--unit);
  height: 40;
  width: 50;
  border: 1px solid #aaa;
      border-radius: 2px;
}


  </style>