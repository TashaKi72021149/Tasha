<h2>Решение 1:</h2>
<script>
   var text = "hardware printers Epson"; //исходная строка
   var paths = text.split("a"); //укажите искомый символ или группу символов
   document.writeln('<p>В строке "' + text + '" ' + (paths.length -1) + ' "a".');
</script>

<h2>Решение 2:</h2>
<script>
   var text = "hardware printers Epson"; //исходная строка
   var numBs = 0;
   var index = 0;
   while(index != -1) {
      index = text.indexOf("r", index); //укажите искомый символ или группу символов
      if (index != -1) {
         numBs++;
         index++;
      }
   }
   document.writeln('<p>В строке "' + text + '" ' + numBs + ' "r".');
</script>
