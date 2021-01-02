const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

let storyText = '気温 摂氏-1度で外は寒かった。この日は:insertx:のライブが:inserty:であった。ファンの友達に誘われて来ていた梅子は:insertx:にはあまり興味がなかった。梅子はスポーツ全般に興味を持っていて、この日のライブに来たのも:inserty:に行ってみたかったからだ。そんな梅子に驚く出来事が！！それは、たまたま隣の席に年俸5000万ドルのプロ:insertz:選手がいた。梅子はライブどころではなかった。';
let insertX = ['嵐','back number','Perfume','ゆず','NiziU']];
let insertY = ['東京ドーム','国立競技場'];
let insertZ = ['野球','サッカー','バスケットボール','卓球','ゴルフ'];


randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;

  let xItem = randomValueFromArray(insertX);
  let yItem = randomValueFromArray(insertY);
  let zItem = randomValueFromArray(insertZ);

  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':inserty:',yItem);
  newStory = newStory.replace(':inserty:',yItem);
  newStory = newStory.replace(':inserty:',zItem);

  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace('梅子',name);
  }

  if(document.getElementById("日本").checked) {
    const price = Math.round(1) + ' 億円';
    const temperature = '華氏 '+ Math.round((94-32) * 5 / 9) + ' 度';
    newStory = newStory.replace('摂氏-1度',temperature);
    newStory = newStory.replace('410万ドル',price);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
