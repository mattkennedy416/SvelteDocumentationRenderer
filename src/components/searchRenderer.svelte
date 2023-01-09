<script>
  import { Button } from "carbon-components-svelte";
    import { DataTable } from "carbon-components-svelte";

    import { TextInput } from "carbon-components-svelte";

    import SearchResultBox from "./searchResultBox.svelte";

    let searchResults = ["1", "2", "3", "4", "5"];


    function search()
    {
      console.log("searching!");
    }

  </script>




<div class="w-full md:w-12/12">
      <a href="/" class="w-full h-full block">
          <div class="flex items-top justify-between px-4 py-6 space-x-4">

            <TextInput labelText="Document Substring Search" placeholder="term..." />

              <Button id="buildButton" on:click={search}>Search! </Button>
            
            
</div>
</a>
</div>





{#each searchResults as result}
    <div >
    <SearchResultBox />
</div>
    {/each}



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

<!-- <TextInput labelText="User name" placeholder="Enter user name..." />
  
  <DataTable
    headers={[
      { key: "name", value: "Name" },
      { key: "protocol", value: "Protocol" },
      { key: "port", value: "Port" },
      { key: "rule", value: "Rule" },
    ]}
    rows={[
      {
        id: "a",
        name: "Load Balancer 3",
        protocol: "HTTP",
        port: 3000,
        rule: "Round robin",
      },
      {
        id: "b",
        name: "Load Balancer 1",
        protocol: "HTTP",
        port: 443,
        rule: "Round robin",
      },
      {
        id: "c",
        name: "Load Balancer 2",
        protocol: "HTTP",
        port: 80,
        rule: "DNS delegation",
      },
      {
        id: "d",
        name: "Load Balancer 6",
        protocol: "HTTP",
        port: 3000,
        rule: "Round robin",
      },
      {
        id: "e",
        name: "Load Balancer 4",
        protocol: "HTTP",
        port: 443,
        rule: "Round robin",
      },
      {
        id: "f",
        name: "Load Balancer 5",
        protocol: "HTTP",
        port: 80,
        rule: "DNS delegation",
      },
    ]}
  /> -->