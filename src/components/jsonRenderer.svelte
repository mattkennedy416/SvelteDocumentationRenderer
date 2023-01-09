<script>
    import SvelteMarkdown from 'svelte-markdown'
    import { TextArea } from 'carbon-components-svelte';

    const source = `
    # This is a header
  
  This is a paragraph.
  
  * This is a list\n
  * With two items\n
    1. And a sublist
    2. That is ordered
      * With another
      * Sublist inside
  
  | And this is | A table |
  |-------------|---------|
  | With two    | columns |`


  const numRows = 40;
const title = "JSON Content";

  </script>
  
  <div class="box">
  <p>{title}</p>


  <div>
    <TextArea
      cols={60}
      id="test2"
      placeholder={source}
      rows={numRows}
    />
    </div>

    

</div>


  <style>
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