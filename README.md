### Selector para la restriccion desde la pagina de seremi

http://seremi9.redsalud.gob.cl/?page_id=5037

```
// ayer
$('#Layer1 table:first table:first tr:nth-child(3) td:first b').html()

// hoy
$('#Layer1 table:first table:first tr:nth-child(3) td:nth-child(2) b')

// mañana
$('#Layer1 table:first table:first tr:nth-child(3) td:nth-child(3) b')
```