

<script>

const content = `<!DOCTYPE html>
<html>
<body>

<p>This is a paragraph.</p>
<p>This is another paragraph.</p>

</body>
</html>
`

</script>

<div class="box">

{@html content}

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

