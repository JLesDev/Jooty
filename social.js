// import init, {
//   call_prog,
//   show_line_ticks
// } from './pkg/hot_or_not_3.js'
// await init()

// import * as root from './pkg/hot_or_not_3.js'

// window.callbacks = root
// window.mutate_chart_object = function (v) {
//   if (v.id == 'bar') {
//     v.options.scales.y1.ticks = {
//       callback: function (value, _index, _values) {
//         return '$' + value.toFixed(2)
//       }
//     }
//   }
//   return v
// }

// function cityText(city) {
//   let parent = document.querySelector('#content2')
//   switch (city) {
//     case 0:
//       parent.textContent = 'Melbourne'
//       break
//     case 1:
//       parent.textContent = 'Adelaide'
//       break
//     case 2:
//       parent.textContent = 'Sydney'
//       break
//     case 3:
//       parent.textContent = 'Brisbane'
//       break
//   }
// }

// let miner = 999
// let maxer = -999

// async function run() {
//   const d = new Date()
//   let time = d.getTime()

//   let minutes = d.getUTCMinutes()
//   let hours = d.getUTCHours()
//   let day = d.getUTCDate()
//   let month = d.getUTCMonth()

//   await init()
//   await loading()
//   // console.log('loaded')
//   await getMessages(day)
//   // console.log('write')
//   writeMessages()

//    if (message_count == 0 || isNaN(message_count) == true) {
//     // console.log('yes, there are no messages')

//   //   let content = document.getElementById('social-content')

//   //   content.innerHTML = ''

//   //   let p = document.createElement('p')

//   //   p.innerText = 'No messages posted today, be the first!';

//   //   content.appendChild(p);
//   // }

//   // let a = await call_prog();
// }

// let messages = []

// // const d = new Date()
// // let time = d.getTime()

// // let minutes = d.getUTCMinutes()
// // let hours = d.getUTCHours()
// // let day = d.getUTCDate()
// // let month = d.getUTCMonth()

// let message_count = 0;

// function formatMonth() {
//   switch (month) {
//     case 1:
//       return 'Jan'
//     case 2:
//       return 'Feb'
//     case 3:
//       return 'Mar'
//     case 4:
//       return 'Apr'
//     case 5:
//       return 'May'
//     case 6:
//       return 'Jun'
//     case 7:
//       return 'Jul'
//     case 8:
//       return 'Aug'
//     case 9:
//       return 'Sep'
//     case 10:
//       return 'Oct'
//     case 11:
//       return 'Nov'
//     case 12:
//       return 'Dec'
//   }
// }

// async function loading() {
//   // let content = document.getElementById('social-content')

//   // content.innerHTML = ''

//   // // console.log('loading content')

//   // let temp_message = document.createElement('p')

//   // temp_message.textContent = "Loading messages..."

//   // content.appendChild(temp_message);
// }

// async function getMessageCount() {
//   await fetch(
//     'https://script.google.com/macros/s/AKfycbzX0DmUX_b5BTwMkrV3BleUkUHqtIECeiaNXq46Orn5wUmZnPNqkUTaAs2qo8VfJs6eoA/exec?key=Melbourne' +
//     day +
//     ' count'
//   )
//     .then(res => res.text())
//     .then(value => {
//       let num_messages = Number(value)
//       message_count = Number(value)
//       // console.log(num_messages)
//       return num_messages
//     })
// }

// async function sendMessage() {
//   let name = document.getElementById('name').value

//   await getMessageCount()

//   let num_messages = message_count
//   // console.log(num_messages)

//   document.getElementById('name').value = ''

//   // console.log(name)

//   let message = document.getElementById('message').value

//   document.getElementById('message').value = ''

//   // console.log(time)
//   // console.log(minutes)
//   // console.log(hours)
//   // console.log(day)
//   // console.log(month)

//   await fetch(
//     'https://script.google.com/macros/s/AKfycbzX0DmUX_b5BTwMkrV3BleUkUHqtIECeiaNXq46Orn5wUmZnPNqkUTaAs2qo8VfJs6eoA/exec',
//     {
//       method: 'POST',
//       body: JSON.stringify({
//         key: 'Melbourne' + day + ' chat ' + message_count,
//         value: name + ' says: ' + message
//       })
//     }
//   )
//   if (num_messages == undefined) {
//     num_messages = 0
//   }
//   await fetch(
//     'https://script.google.com/macros/s/AKfycbzX0DmUX_b5BTwMkrV3BleUkUHqtIECeiaNXq46Orn5wUmZnPNqkUTaAs2qo8VfJs6eoA/exec',
//     {
//       method: 'POST',
//       body: JSON.stringify({
//         key: 'Melbourne' + day + ' count',
//         value: message_count + 1
//       })
//     }
//   )
//   // console.log('posted')
//   document.getElementById('send').style.backgroundColor = "##23b364";
//   document.getElementById('send').innerText = "Send"
// }

// async function getMessages(day, num_messages) {
//   // console.log('Starting to retrieve messages')
//   // console.log('It is the day: ' + day)
//   // await getMessageCount()
//   // // console.log('Message count = ' + message_count)
//   //   if (message_count == 0 || isNaN(message_count) == true) {

//   //   // console.log('yes, there are no messages')

//   //   let content = document.getElementById('social-content')

//   //   content.innerHTML = ''

//   //   let p = document.createElement('p')

//   //   p.innerText = 'No messages posted today, be the first!';

//   //   content.appendChild(p);
//   // }
//   for (let i = 0; i < message_count; i++) {
//     await fetch(
//       'https://script.google.com/macros/s/AKfycbzX0DmUX_b5BTwMkrV3BleUkUHqtIECeiaNXq46Orn5wUmZnPNqkUTaAs2qo8VfJs6eoA/exec?key=Melbourne' +
//       day +
//       ' chat ' + i
//     )
//       .then(res => res.text())
//       .then(value => {
//         // console.log('this is the value of message ' + i + ": " + value)
//         // let content = document.getElementById('social-content')

//         // content.innerHTML = ''

//         // let p = document.createElement('p')

//         // p.innerText = 'Loading messages... ' + i + '/' + message_count;

//         // content.appendChild(p);

//         // messages.push(value)
//       })
//   }

//   // console.log('finished getting messages')
// }

// async function writeMessages() {
//   // let content = document.getElementById('social-content')
//   // content.innerHTML = ''

//   // for (let i = message_count; i > 0; i--) {
//   //   // console.log('in')
//   //   let temp_message = document.createElement('p')

//   //   // console.log(temp_message)

//   //   temp_message.textContent = messages[i]

//   //   content.appendChild(temp_message)
//   // }
// }

// // document.getElementById('send').addEventListener('click', function (e) {
// //   document.getElementById('send').style.backgroundColor = "#364fcc";
// //   document.getElementById('send').innerText = "LOADING"
// //   sendMessage()
// // })

// // document.getElementById('melb').addEventListener('click', function (e) {
// //   window.location.href = 'index.html'
// // })

// // document.getElementById('adel').addEventListener('click', function (e) {
// //   window.location.href = 'adelaide.html'
// // })

// // document.getElementById('sydn').addEventListener('click', function (e) {
// //   window.location.href = 'sydney.html'
// // })

// // document.getElementById('bris').addEventListener('click', function (e) {
// //   window.location.href = 'brisbane.html'
// // })

// // document.getElementById('more').addEventListener('click', function (e) {
// //   window.location.href = 'more.html'
// // })

// function runner(city) {
//   cityText(city)
//   location.reload
//   run(city)
// }

// run(1)
// window.run = run

const moreButton = document.getElementById('more');
const dropdownMenu = document.getElementById('dropdown-menu');

// Ladder elements (top nav ladder button)
const ladderButton = document.querySelector('.city-nav #adel');
const ladderMenu = document.getElementById('ladder-menu');
let ladderCache = {}; // cache ladder data per year for this session

if (moreButton && dropdownMenu) {
  moreButton.addEventListener('click', (e) => {
    e.stopPropagation();
    const showing = dropdownMenu.classList.toggle('show');
    // toggle .active on the button to match the visual state
    moreButton.classList.toggle('active', showing);
    // ensure the button loses keyboard focus when hiding so :focus styles don't persist
    if (!showing) moreButton.blur();
  });

  // Close dropdown when clicking outside
  document.addEventListener('click', () => {
    dropdownMenu.classList.remove('show');
    moreButton.classList.remove('active');
    if (document.activeElement === moreButton) moreButton.blur();
  });

  // Handle dropdown item clicks
  document.querySelectorAll('.dropdown-item').forEach(item => {
    item.addEventListener('click', (e) => {
      e.stopPropagation();
      console.log('Clicked:', item.textContent);
      dropdownMenu.classList.remove('show');
      moreButton.classList.remove('active');
      if (document.activeElement === moreButton) moreButton.blur();
      // Add your navigation logic here
    });
  });
}

// Ladder wiring: fetch and render the AFL ladder using Squiggle's standings endpoint
if (ladderButton && ladderMenu) {
  ladderButton.addEventListener('click', async (e) => {
    e.stopPropagation();
    const showing = ladderMenu.classList.toggle('show');
    ladderButton.classList.toggle('active', showing);
    // close the More menu if open
    if (dropdownMenu && dropdownMenu.classList.contains('show')) {
      dropdownMenu.classList.remove('show');
      moreButton && moreButton.classList.remove('active');
    }

    if (!showing) {
      ladderButton.blur();
      return;
    }

    // Ensure UI structure: controls (year select) + rows container
    if (!ladderMenu.querySelector('.ladder-controls')) {
      ladderMenu.innerHTML = '';
      const controls = document.createElement('div');
      controls.className = 'ladder-controls dropdown-item';
      // create a stylable year dropdown (div-based) so it matches other dropdowns
      const currentYear = new Date().getFullYear();
      const button = document.createElement('div');
      button.className = 'dropdown-item year-button';
      button.tabIndex = 0;
      button.innerText = String(currentYear);

      const options = document.createElement('div');
      options.className = 'year-options';
      options.style.display = 'none';

      for (let y = currentYear; y >= 1990; y--) {
        const opt = document.createElement('div');
        opt.className = 'dropdown-item year-option';
        opt.dataset.year = String(y);
        opt.innerText = String(y);
        opt.addEventListener('click', (ev) => {
          ev.stopPropagation();
          button.innerText = ev.currentTarget.dataset.year;
          options.style.display = 'none';
          loadLadderForYear(ev.currentTarget.dataset.year, rows);
        });
        options.appendChild(opt);
      }

      // wire toggle and stop propagation so clicking the year control doesn't close the ladder
      button.addEventListener('click', (ev) => {
        ev.stopPropagation();
        options.style.display = options.style.display === 'none' ? 'block' : 'none';
      });
      // keyboard support (Enter / Space)
      button.addEventListener('keydown', (ev) => {
        if (ev.key === 'Enter' || ev.key === ' ') {
          ev.preventDefault();
          ev.stopPropagation();
          options.style.display = options.style.display === 'none' ? 'block' : 'none';
        }
      });
      options.addEventListener('click', (ev) => ev.stopPropagation());

      controls.appendChild(button);
      controls.appendChild(options);
      ladderMenu.appendChild(controls);

      const rows = document.createElement('div');
      rows.id = 'ladder-rows';
      ladderMenu.appendChild(rows);

      // load default year (current)
      loadLadderForYear(button.innerText, rows);
    } else {
      // if controls exist, read the year from the stylable year button and refresh
      const button = ladderMenu.querySelector('.year-button');
      const rows = ladderMenu.querySelector('#ladder-rows');
      const year = button ? button.innerText : String(new Date().getFullYear());
      loadLadderForYear(year, rows);
    }
  });

  // Close ladder when clicking outside
  document.addEventListener('click', () => {
    if (ladderMenu) ladderMenu.classList.remove('show');
    if (ladderButton) ladderButton.classList.remove('active');
    if (document.activeElement === ladderButton) ladderButton.blur();
  });
}

function normalizeLadderData(data) {
  if (Array.isArray(data)) return data;
  if (!data || typeof data !== 'object') return [];
  if (Array.isArray(data.standings)) return data.standings;
  if (Array.isArray(data.rows)) return data.rows;
  if (Array.isArray(data.data)) return data.data;
  if (Array.isArray(data.results)) return data.results;
  const vals = Object.values(data);
  for (const v of vals) {
    if (Array.isArray(v)) return v;
  }
  if (vals.length && typeof vals[0] === 'object') return vals;
  return [];
}

function renderLadder(rows, container) {
  if (!Array.isArray(rows) || rows.length === 0) {
    container.innerHTML = '<div class="dropdown-item">No ladder data</div>';
    return;
  }
  container.innerHTML = '';
  rows.forEach((r, i) => {
    const pos = r.rank ?? (i + 1);
    let team = r.team || r.name || (r.teamid ? 'Team ' + r.teamid : 'Unknown');
    const wins = r.wins ?? r.w ?? '-';
    const losses = r.losses ?? r.l ?? '-';
    const draws = r.draws ?? r.d ?? 0;
    const points = r.points ?? r.pts ?? '-';
    let percent = r.percentage ?? r.percent ?? r.pct ?? '-';

    const btn = document.createElement('button');

    team = teamFormat(team);
    percent = percentFormat(percent); 

    btn.type = 'button';
    btn.className = 'dropdown-item ladder-row';
    btn.style.backgroundColor = teamColours(team);
    btn.style.color = teamTextColours(team);

    btn.innerText = `${pos}. ${team}  -  ${wins}W ${losses}L${draws ? ' '+draws+'D' : ''}  Pts: ${points}  ${percent}`;
    
    container.appendChild(btn);
  });
}

async function loadLadderForYear(year, rowsContainer) {
  if (ladderCache[year]) {
    renderLadder(ladderCache[year], rowsContainer);
    return;
  }
  rowsContainer.innerHTML = '<div class="dropdown-item">Loading ladder...</div>';
  try {
    const url = 'https://api.squiggle.com.au/?q=standings;format=json;year=' + encodeURIComponent(year) + ';';
    const res = await fetch(url);
    if (!res.ok) throw new Error('Network response was not ok');
    const data = await res.json();
    const normalized = normalizeLadderData(data);
    ladderCache[year] = normalized;
    renderLadder(normalized, rowsContainer);
  } catch (err) {
    rowsContainer.innerHTML = '<div class="dropdown-item">Failed to load ladder</div>';
    console.error('Failed to fetch ladder for year', year, err);
  }
}

function teamFormat(team) {
    if(team == "Greater Western Sydney"){
        return "GWS"
    }
    else if(team == "Brisbane Lions")
        return "Bris. Lions"
    else if(team == "North Melbourne"){
        return "North Melb."
    }
    else {
        return team
    }
}

function percentFormat(percent) {
    if (typeof percent === 'number') {
        if(percent == 0){
            return 0 + '%';
        }
        return percent.toFixed(1) + '%';
    }
    return percent;
}

function teamColours(team) {
    if(team == "Adelaide"){
        return '#08005bff'
    }
    else if(team == "Bris. Lions"){
        return '#7b0909ff'
    }
    else if(team == "Carlton"){
        return '#09004dff'
    }
    else if (team == "Collingwood"){
        return '#000000ff'
    }
    else if (team == "Essendon"){
        return '#000000ff'
    }
    else if (team == "Fremantle"){
        return '#5331c4ff'
    }
    else if (team == "Geelong"){
        return '#001dabff'
    }
    else if (team == "Gold Coast"){
        return '#ff93d0ff'
    }
    else if (team == "GWS"){
        return '#ff8317ff'
    }
    else if (team == "Hawthorn"){
        return '#4c3800ff'
    }
    else if (team == "Melbourne"){
        return '#580000ff'
    }
    else if (team == "North Melb."){
        return '#598dffff'
    }
    else if (team == "Port Adelaide"){
        return '#1394b8ff'
    }
    else if (team == "Richmond"){
        return '#ffcc00ff'
    }
    else if (team == "St Kilda"){
        return '#f4f4f4ff'
    }
    else if (team == "Sydney"){
        return '#ed1c24ff'
    }
    else if (team == "West Coast"){
        return '#006affff'
    }
    else if (team == "Western Bulldogs"){
        return '#0055aaff'
    }
    else {
        return '#ffffff'
    }
}


function teamTextColours(team) {
    if(team == "Adelaide"){
        return '#e8ff19ff'
    }
    else if(team == "Bris. Lions"){
        return '#f6ff50ff'
    }
    else if(team == "Carlton"){
        return '#ffffffff'
    }
    else if (team == "Collingwood"){
        return '#ffffffff'
    }
    else if (team == "Essendon"){
        return '#ff0000ff'
    }
    else if (team == "Fremantle"){
        return '#ffffffff'
    }
    else if (team == "Geelong"){
        return '#ffffffff'
    }
    else if (team == "Gold Coast"){
        return '#000000ff'
    }
    else if (team == "GWS"){
        return '#ffffffff'
    }
    else if (team == "Hawthorn"){
        return '#ffcc00ff'
    }
    else if (team == "Melbourne"){
        return '#ffffffff'
    }
    else if (team == "North Melb."){
        return '#ffffffff'
    }
    else if (team == "Port Adelaide"){
        return '#ffffffff'
    }
    else if (team == "Richmond"){
        return '#000000ff'
    }
    else if (team == "St Kilda"){
        return '#ff0000ff'
    }
    else if (team == "Sydney"){
        return '#ffffffff'
    }
    else if (team == "West Coast"){
        return '#ffee00ff'
    }
    else if (team == "Western Bulldogs"){
        return '#ffffffff'
    }
    else {
        return '#ffffff'
    }
}