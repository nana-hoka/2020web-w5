const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

let storyText = '気温 摂氏-1度で外は寒かった。この日は:insertx:のライブが:inserty:であった。:insertx:のファンの友達に誘われて来ていた梅子は、たまたま隣の席にいた年俸5000万ドルの野球選手に夢中だった。';
let insertX = ['嵐','back number','Perfume','ゆず','NiziU']];
let insertY = ['東京ドーム','日本武道館','国立競技場'];


randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;

  let xItem = randomValueFromArray(insertX);
  let yItem = randomValueFromArray(insertY);
  

  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':inserty:',yItem);
  

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
