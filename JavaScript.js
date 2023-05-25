function generate(){
  var qoutes = {
    '-Андрей Семенов' : '"Все люди гоняться за деньгами..."',
    '-Тимофей Полищук' : '"Не слушай всех и в жизни ждет успех!"',
    '-Ярослав Воробьев' : '"Меня сможет убить только я..."',
    '-Максим Монастырский' : '"Тренеруйся до последнего вздоха"',
  };

  var authors = Object.keys(qoutes);

  var author = authors[Math.floor(Math.random() * authors.length)];
  var quote = qoutes[author];
  document.getElementById('quotes').innerHTML = quote;
  document.getElementById('author').innerHTML = author;

}