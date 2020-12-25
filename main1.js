const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

let storyText = '気温　摂氏-1度で外は寒かった。:insertx: は出かけた。 :inserty:についた。混雑していた。体重100ポンドの:insertx:は驚いたが、梅子は驚かなかった。:inserty:ではよくあることだった。 ';
let insertX = ['ジャッキー','リラックマ','ダッフィー'];
let insertY = ['琵琶湖','富士山','信濃川'];


randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;

  let xItem = randomValueFromArray(insertX);
  let yItem = randomValueFromArray(insertY);
  

  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':inserty:',yItem);
  newStory = newStory.replace(':inserty:',yItem);

  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace('梅子',name);
  }

  if(document.getElementById("日本").checked) {
    const weight = Math.round(300*0.0714286) + ' kg';
    const temperature = '華氏 '+ Math.round((94-32) * 5 / 9) + ' 度';
    newStory = newStory.replace('摂氏-1度',temperature);
    newStory = newStory.replace('100',weight);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
