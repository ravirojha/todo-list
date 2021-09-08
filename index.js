const api_url = 'https://www.acefrontend.com/c/critter/feed.json';

async function getapi(url) {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);

  show(data);
}

getapi(api_url);

function renderDate(dateString) {
  const date = new Date(dateString);
  const locale = 'en-us';
  const month = date.toLocaleString(locale, { month: 'short' });
  const day = date.getDate();
  return `${month} ${day}`;
}

function show(data) {
  let cards = '';
  for (let i = 0; i < data.feed.length; i++) {
    cards += `<div class='card'>
    <img class='avatar'
      src=${data.feed[i].user.avatar}
      />
      <div class='creet'>
      <div class='head'>
      <p class='username'>@${data.feed[i].user.username}</p>
      <p class='date'>${renderDate(data.feed[i].created_at)}</p>
      </div>
      <p class='content'>${data.feed[i].text}</p>
      <p class='like'>Likes: ${data.feed[i].likes}</p>
      </div>
    </div>`;
  }

  document.getElementById('creets').innerHTML = cards;
}
