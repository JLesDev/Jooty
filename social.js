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

const ladderButton = document.querySelector('.city-nav #adel');
const ladderMenu = document.getElementById('ladder-menu');
const fixtureButton = document.querySelector('.city-nav #melb');
const fixtureMenu = document.getElementById('fixture-menu');
let ladderCache = {}; // cache ladder data per year for this session
let fixtureCache = {}; // cache fixtures per year
let roundsListenersAdded = false;



function closeOtherMenus(exceptButton) {
  try {
    if (dropdownMenu && exceptButton !== moreButton) {
      dropdownMenu.classList.remove('show');
      moreButton && moreButton.classList.remove('active');
      if (document.activeElement === moreButton) moreButton.blur();
    }
    if (ladderMenu && exceptButton !== ladderButton) {
      ladderMenu.classList.remove('show');
      const yo = ladderMenu.querySelector('.year-options');
      if (yo) yo.classList.remove('show');
      ladderButton && ladderButton.classList.remove('active');
      if (document.activeElement === ladderButton) ladderButton.blur();
    }
    if (fixtureMenu && exceptButton !== fixtureButton) {
      fixtureMenu.classList.remove('show');
      // rounds-options may have been moved to document.body to avoid clipping; handle both cases
      let ro = fixtureMenu.querySelector('.rounds-options');
      if (!ro) ro = document.querySelector('.rounds-options');
      if (ro) {
        ro.classList.remove('show');
        // if it was moved to body, move it back into fixture controls so DOM stays tidy
        try {
          const controls = fixtureMenu.querySelector('.fixture-controls');
          if (controls && ro.parentElement === document.body) {
            controls.appendChild(ro);
            ro.style.position = '';
            ro.style.left = '';
            ro.style.top = '';
          }
        } catch (e) { }
      }
      fixtureButton && fixtureButton.classList.remove('active');
      if (document.activeElement === fixtureButton) fixtureButton.blur();
    }
  } catch (err) {
    console.error('closeOtherMenus error', err);
  }
}

// Ensure clicking any top button closes other menus (keeps only the clicked menu open)
document.querySelectorAll('.top-btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    // let the specific handlers manage toggling their own menu; just ensure others close
    closeOtherMenus(btn);
  });
});

if (moreButton && dropdownMenu) {
  moreButton.addEventListener('click', (e) => {
    e.stopPropagation();
    // close any other open top menus (like the ladder) before toggling More
    closeOtherMenus(moreButton);
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

// Fixture wiring: show upcoming games when Fixture is clicked
if (fixtureButton && fixtureMenu) {
  fixtureButton.addEventListener('click', async (e) => {
    e.stopPropagation();
    // close other menus first
    closeOtherMenus(fixtureButton);
    const showing = fixtureMenu.classList.toggle('show');
    fixtureButton.classList.toggle('active', showing);

    // toggle overlay like ladder
    if (showing) {
      document.body.classList.add('overlay-open');
    } else {
      document.body.classList.remove('overlay-open');
      fixtureButton.blur();
      return;
    }

    // build UI once: controls (rounds) + rows container
    if (!fixtureMenu.querySelector('.fixture-rows')) {
      fixtureMenu.innerHTML = '';
      const controls = document.createElement('div');
      controls.className = 'fixture-controls dropdown-item';

      const roundsButton = document.createElement('div');
      roundsButton.className = 'dropdown-item rounds-button';
      roundsButton.tabIndex = 0;
      roundsButton.innerText = 'All Rounds';



      const roundsOptions = document.createElement('div');
      roundsOptions.className = 'rounds-options';

      // Position the rounds-options into document.body so it cannot be clipped by ancestor overflow
      roundsButton.addEventListener('click', (ev) => {
        console.log('clicked rounds button!')
        ev.stopPropagation();
        try {
          console.log('Inside try block')
          // If not already moved to body, move it so it escapes clipping contexts
          if (roundsOptions.parentElement !== document.body) {
            console.log('If was true')
            // preserve the options element but move it to body
            document.body.appendChild(roundsOptions);
            roundsOptions.style.position = 'absolute';
            roundsOptions.style.left = 'auto';
          }
          const rect = roundsButton.getBoundingClientRect();
          const left = Math.max(8, rect.left + window.scrollX);
          const top = rect.bottom + window.scrollY + 6;
          roundsOptions.style.left = left + 'px';
          roundsOptions.style.top = top + 'px';
          // roundsOptions.classList.toggle('show');
        } catch (e) {
          console.log(e);
        }
        roundsOptions.classList.toggle('show');
      });

      // prevent clicks inside the options from bubbling to document and closing menus :D
      roundsOptions.addEventListener('click', (ev) => ev.stopPropagation());

      controls.appendChild(roundsButton);
      controls.appendChild(roundsOptions);
      fixtureMenu.appendChild(controls);

      // reposition helper: keep the rounds dropdown aligned to the button when it's moved to body
      const repositionRoundsOptions = () => {
        try {
          const ro = document.querySelector('.rounds-options');
          const btn = document.querySelector('.rounds-button');
          if (!ro || !btn) return;
          if (ro.parentElement !== document.body) return;
          if (!ro.classList.contains('show')) return;
          const rect = btn.getBoundingClientRect();
          // compute left so the menu stays within the viewport
          let left = Math.max(8, rect.left + window.scrollX);
          const roWidth = ro.offsetWidth || Math.min(200, window.innerWidth - 16);
          const maxLeft = window.innerWidth - roWidth - 8;
          if (left > maxLeft) left = Math.max(8, maxLeft);
          const top = rect.bottom + window.scrollY + 6;
          ro.style.left = left + 'px';
          ro.style.top = top + 'px';
        } catch (e) { }
      };
      if (!roundsListenersAdded) {
        window.addEventListener('resize', repositionRoundsOptions);
        // use capture so scrolls inside other containers also trigger reposition
        window.addEventListener('scroll', repositionRoundsOptions, true);
        roundsListenersAdded = true;
      }

      const rows = document.createElement('div');
      rows.className = 'fixture-rows';
      rows.id = 'fixture-rows';
      fixtureMenu.appendChild(rows);


      const year = String(new Date().getFullYear());
      const all = await loadFixturesForYear(year, rows);

      const rounds = Array.from(new Set(all.map(g => g.round).filter(r => r !== undefined && r !== null))).sort((a, b) => a - b);
      let defaultRound = rounds.includes(0) ? 0 : (rounds.length ? rounds[0] : 'all');
      const optsFrag = document.createDocumentFragment();
      const allOpt = document.createElement('div');
      allOpt.className = 'dropdown-item round-option';
      allOpt.dataset.round = 'all';
      allOpt.innerText = 'All Rounds';
      allOpt.addEventListener('click', () => {
        roundsButton.innerText = 'All Rounds';
        roundsOptions.classList.remove('show');
        renderFixtures(all, rows);
      });
      optsFrag.appendChild(allOpt);
      rounds.forEach(r => {
        const opt = document.createElement('div');
        opt.className = 'dropdown-item round-option';
        opt.dataset.round = String(r);
        opt.innerText = 'Round ' + roundFormat(r);
        opt.addEventListener('click', () => {
          console.log(r)
          roundsButton.innerText = 'Round ' + roundFormat(r);
          roundsOptions.classList.remove('show');
          const subset = all.filter(g => String(g.round) === String(r));
          renderFixtures(subset, rows);
        });
        optsFrag.appendChild(opt);
      });
      roundsOptions.appendChild(optsFrag);
      // set initial selection and render only that round (user requested start on Round 0)
      if (defaultRound === 'all') {
        roundsButton.innerText = 'All Rounds';
        renderFixtures(all, rows);
      } else {
        let stringRound = roundFormat(defaultRound);
        roundsButton.innerText = 'Round ' + stringRound;
        const subset = all.filter(g => String(g.round) === String(defaultRound));
        renderFixtures(subset, rows);
      }
    } else {
      const rows = fixtureMenu.querySelector('#fixture-rows');
      const year = String(new Date().getFullYear());
      // reload fixtures and respect any previously selected round
      const all = await loadFixturesForYear(year, rows);
      const roundsButton = fixtureMenu.querySelector('.rounds-button');
      if (roundsButton) {
        const txt = roundsButton.innerText || '';
        if (txt.startsWith('Round ')) {
          const r = txt.replace('Round ', '').trim();
          const subset = all.filter(g => String(g.round) === String(r));
          renderFixtures(subset, rows);
        } else {
          renderFixtures(all, rows);
        }
      }
    }
  });

  // Close fixture when clicking outside
  document.addEventListener('click', () => {
    if (fixtureMenu) {
      fixtureMenu.classList.remove('show');
      // find rounds-options either nested or moved to body and hide it
      let ro = fixtureMenu.querySelector('.rounds-options');
      if (!ro) ro = document.querySelector('.rounds-options');
      if (ro) {
        ro.classList.remove('show');
        try {
          const controls = fixtureMenu.querySelector('.fixture-controls');
          if (controls && ro.parentElement === document.body) {
            controls.appendChild(ro);
            ro.style.position = '';
            ro.style.left = '';
            ro.style.top = '';
          }
        } catch (e) { }
      }
    }
    if (fixtureButton) fixtureButton.classList.remove('active');
    // remove overlay if present
    document.body.classList.remove('overlay-open');
    if (document.activeElement === fixtureButton) fixtureButton.blur();
  });
}

// Ladder wiring: fetch and render the AFL ladder using Squiggle's standings endpoint
if (ladderButton && ladderMenu) {
  ladderButton.addEventListener('click', async (e) => {
    e.stopPropagation();
    // close any other open top menus (like More) before toggling Ladder
    closeOtherMenus(ladderButton);
    const showing = ladderMenu.classList.toggle('show');
    ladderButton.classList.toggle('active', showing);

    // toggle body overlay so rest of page is dim/blurred while ladder is open
    if (showing) {
      document.body.classList.add('overlay-open');
    } else {
      document.body.classList.remove('overlay-open');
      const yo = ladderMenu.querySelector('.year-options');
      if (yo) yo.classList.remove('show');
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

      for (let y = currentYear; y >= 1898; y--) {
        const opt = document.createElement('div');
        opt.className = 'dropdown-item year-option';
        opt.dataset.year = String(y);
        opt.innerText = String(y);
        opt.addEventListener('click', (ev) => {
          ev.stopPropagation();
          button.innerText = ev.currentTarget.dataset.year;
          options.classList.remove('show');
          loadLadderForYear(ev.currentTarget.dataset.year, rows);
        });
        options.appendChild(opt);
      }

      button.addEventListener('click', (ev) => {
        ev.stopPropagation();
        options.classList.toggle('show');
      });
      // keyboard support (Enter / Space)
      button.addEventListener('keydown', (ev) => {
        if (ev.key === 'Enter' || ev.key === ' ') {
          ev.preventDefault();
          ev.stopPropagation();
          options.classList.toggle('show');
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
    if (ladderMenu) {
      ladderMenu.classList.remove('show');
      // also close any open year-options inside
      const yo = ladderMenu.querySelector('.year-options');
      if (yo) yo.classList.remove('show');
    }
    if (ladderButton) ladderButton.classList.remove('active');
    // remove page overlay if present
    document.body.classList.remove('overlay-open');
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

    percent = percentFormat(percent);
    team = teamFormat(team);


    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'dropdown-item ladder-row';

    const left = document.createElement('span');
    left.className = 'ladder-left';
    left.innerText = `${pos} ${team}`;

    const right = document.createElement('span');
    right.className = 'ladder-right';
    right.innerText = `${wins}W ${losses}L ${draws ? ' ' + draws + 'D' : ''}  Pts:${points} ${percent}`;

    btn.style.backgroundColor = teamColours(team);
    left.style.color = teamTextColours(team);
    right.style.color = teamTextColours(team);

    btn.appendChild(left);
    btn.appendChild(right);
    container.appendChild(btn);
  });
}

function renderFixtures(games, container) {
  if (!Array.isArray(games) || games.length === 0) {
    container.innerHTML = '<div class="dropdown-item">No upcoming games</div>';
    return;
  }
  container.innerHTML = '';
  const now = Date.now();
  // sort by date ascending
  games.sort((a, b) => {
    const da = a.date ? new Date(a.date).getTime() : 0;
    const db = b.date ? new Date(b.date).getTime() : 0;
    return da - db;
  });
  games.forEach((g) => {
    let team1 = g.hteam || g.home || g.team1id || g.teamA || 'T1';
    let team2 = g.ateam || g.away || g.team2id || g.teamB || 'T2';
    const dateStr = g.date ? new Date(g.date).toLocaleString([], { dateStyle: 'short', timeStyle: 'short' }) : (g.round ? 'Rnd ' + g.round : 'TBA');

    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'dropdown-item fixture-row';


    team1 = teamFormat(team1);
    team2 = teamFormat(team2);

    btn.style.backgroundColor = teamColours(team1);
    

    const left = document.createElement('span');
    left.className = 'fixture-left';
    left.innerText = `${team1} v ${team2}`;

    const right = document.createElement('span');
    right.className = 'fixture-right';
    // show date and venue on the second line
    const venueText = g.venue ? `  •  ${g.venue}` : '';
    right.innerText = `${dateStr}${venueText}`;

    // btn.style.backgroundColor = teamColours("white");

    left.style.color = teamTextColours(team1);
    right.style.color = teamTextColours(team1);
    // left.style.color = teamTextColours("white");
    // right.style.color = teamTextColours("white");

    btn.appendChild(left);
    btn.appendChild(right);
    // no venue images: simple text-only rows (venue may appear in the right column)
    container.appendChild(btn);
  });
}

async function loadFixturesForYear(year, rowsContainer) {
  if (fixtureCache[year]) {
    renderFixtures(fixtureCache[year], rowsContainer);
    return fixtureCache[year];
  }
  rowsContainer.innerHTML = '<div class="dropdown-item">Loading upcoming...</div>';
  try {
    const url = 'https://api.squiggle.com.au/?q=games;format=json;year=' + encodeURIComponent(year) + ';';
    const res = await fetch(url);
    if (!res.ok) throw new Error('Network response was not ok');
    const data = await res.json();
    // normalize to array if needed
    const arr = normalizeLadderData(data);
    // filter for future games (date > now) or games without scores
    const now = Date.now();
    const upcoming = arr.filter(g => {
      try {
        if (g.date) return new Date(g.date).getTime() > now;
        // fallback: treat games without score fields as upcoming
        return !(g.score1 || g.score2 || g.home_score || g.away_score);
      } catch (e) { return false; }
    });
    fixtureCache[year] = upcoming;
    renderFixtures(upcoming, rowsContainer);
    return upcoming;
  } catch (err) {
    rowsContainer.innerHTML = '<div class="dropdown-item">Failed to load fixtures</div>';
    console.error('Failed to fetch fixtures for year', year, err);
    return [];
  }
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

function roundFormat(round) {
  if (round == 25) {
    return "QF/EF"
  }
  else if (round == 26) {
    return "SF"
  }
  else if (round == 27) {
    return "PF"
  }
  else if (round == 28) {
    return "GF"
  }
  else {
    return round;
  }
}

function teamFormat(team) {
  if (team == "Greater Western Sydney") {
    return "GWS"
  }
  else if (team == "Brisbane Lions")
    return "Bris. Lions"
  else if (team == "North Melbourne") {
    return "North Melb."
  }
  else {
    return team
  }
}

function percentFormat(percent) {
  if (typeof percent === 'number') {
    if (percent == 0) {
      return 0 + '%';
    }
    return percent.toFixed(1) + '%';
  }
  return percent;
}

function teamColours(team) {
  if (team == "Adelaide") {
    return '#08005bff'
  }
  else if (team == "Bris. Lions") {
    return '#7b0909ff'
  }
  else if (team == "Carlton") {
    return '#09004dff'
  }
  else if (team == "Collingwood") {
    return '#000000ff'
  }
  else if (team == "Essendon") {
    return '#000000ff'
  }
  else if (team == "Fitzroy") {
    return '#a20913ff'
  }
  else if (team == "Fremantle") {
    return '#341697ff'
  }
  else if (team == "Geelong") {
    return '#233075ff'
  }
  else if (team == "Gold Coast") {
    return '#ff93d0ff'
  }
  else if (team == "GWS") {
    return '#ff8317ff'
  }
  else if (team == "Hawthorn") {
    return '#4c3800ff'
  }
  else if (team == "Melbourne") {
    return '#580000ff'
  }
  else if (team == "North Melb.") {
    return '#598dffff'
  }
  else if (team == "Port Adelaide") {
    return '#1394b8ff'
  }
  else if (team == "Richmond") {
    return '#ffcc00ff'
  }
  else if (team == "St Kilda") {
    return '#f4f4f4ff'
  }
  else if (team == "Sydney") {
    return '#ed1c24ff'
  }
  else if (team == "West Coast") {
    return '#006affff'
  }
  else if (team == "Western Bulldogs") {
    return '#0055aaff'
  }
  else if (team == "University") {
    return '#ffffffff'
  }
  else {
    return '#ffffff'
  }
}


function teamTextColours(team) {
  if (team == "Adelaide") {
    return '#ffc219ff'
  }
  else if (team == "Bris. Lions") {
    return '#f6ff50ff'
  }
  else if (team == "Carlton") {
    return '#ffffffff'
  }
  else if (team == "Collingwood") {
    return '#ffffffff'
  }
  else if (team == "Essendon") {
    return '#ff0000ff'
  }
  else if (team == "Fitzroy") {
    return '#f1ee2aff'
  }
  else if (team == "Fremantle") {
    return '#ffffffff'
  }
  else if (team == "Geelong") {
    return '#ffffffff'
  }
  else if (team == "Gold Coast") {
    return '#000000ff'
  }
  else if (team == "GWS") {
    return '#ffffffff'
  }
  else if (team == "Hawthorn") {
    return '#ffcc00ff'
  }
  else if (team == "Melbourne") {
    return '#ffffffff'
  }
  else if (team == "North Melb.") {
    return '#ffffffff'
  }
  else if (team == "Port Adelaide") {
    return '#ffffffff'
  }
  else if (team == "Richmond") {
    return '#000000ff'
  }
  else if (team == "St Kilda") {
    return '#ff0000ff'
  }
  else if (team == "Sydney") {
    return '#ffffffff'
  }
  else if (team == "West Coast") {
    return '#ffee00ff'
  }
  else if (team == "Western Bulldogs") {
    return '#ffffffff'
  }
  else if (team == "University") {
    return '#233075ff'
  }
  else {
    return '#ffffff'
  }
}