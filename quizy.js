document.getElementById('correct').addEventListener('click', () =>　{
  document.getElementById('correct').classList.add('answer');

  
  const div = document.createElement('div')
  div.classList.add('answerBox')
  document.getElementById('quizdiv').appendChild(div)

  const answerTitle= document.createElement('p')
  const answerText= document.createElement('p')
  answerTitle.innerHTML ='<p class="title">正解！<p>'
  answerText.innerHTML ="<p>正解は「たかなわ」です！<p>"
  div.appendChild(answerTitle)
  div.appendChild(answerText)

 
})
　　
document.getElementById('fault').addEventListener('click', () =>　{
　　document.getElementById('fault').classList.add('')






})