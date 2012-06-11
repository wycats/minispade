# Minispade

A tiny runtime dependency management solution that makes it easy to 
wrap up an entire package as a dependency.


See https://github.com/wycats/rake-pipeline-web-filters and 
https://github.com/livingsocial/rake-pipeline for a more complete
solution for building minispade wrapped files.

Alternatively, use the command line tool after installing the gem

```sh
gem install minispade
```

```sh
minispade --module_id="jquery" < jquery-1.7.0 > jquery-spade.js
```

```html
<script src="minispade.js"></script>
<script src="jquery-spade.js"></script>
<script>
  minispade.require("jquery");
</script>
```