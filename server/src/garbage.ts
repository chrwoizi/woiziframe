import * as request from 'request-promise-native';
import { GarbageDisposal } from '../../shared/garbage/GarbageDisposal';
import { mock } from '../../shared/garbage/GarbageMock';
import { environment } from './environments/environment';
import { parse } from 'node-html-parser';
import { GarbageDisposalEvent } from '../../shared/garbage/GarbageDisposalEvent';

export async function loadGarbage(): Promise<GarbageDisposal> {
  if (environment.garbage.mockGarbage) {
    return mock;
  }

  const url =
    'https://www.aha-region.de/abholtermine/abfuhrkalender?gemeinde=' + environment.garbage.garbageQueryString.gemeinde + '&von=' + environment.garbage.garbageQueryString.von + '&bis=' + environment.garbage.garbageQueryString.bis;
  console.log(url);
  console.log(environment.garbage.garbageFormData);

  const headers = {
    'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
    'accept-language': 'de-DE,de;q=0.9,en-US;q=0.8,en;q=0.7',
    'cache-control': 'max-age=0',
    'content-type': 'application/x-www-form-urlencoded',
    'origin': 'https://www.aha-region.de',
    'priority': 'u=0, i',
    'referer': url,
    'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'sec-fetch-dest': 'document',
    'sec-fetch-mode': 'navigate',
    'sec-fetch-site': 'same-origin',
    'sec-fetch-user': '?1',
    'upgrade-insecure-requests': '1',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36'
  };

  const html = await request(url, {
    method: 'POST',
    headers: headers,
    form: environment.garbage.garbageFormData,
  });

  const root = parse(html);

  try {
    const th = root
      .querySelectorAll('th')
      .find((x) => x.innerText === 'Abholungen');
    const tbody = th.parentNode.parentNode;

    let events = [
      ...parseEvents(tbody, 'Restabfall', 'misc'),
      ...parseEvents(tbody, 'Bioabfall', 'organic'),
      ...parseEvents(tbody, 'Papier', 'paper'),
      ...parseEvents(tbody, 'Leichtverpackungen', 'packaging'),
    ];

    return {
      events: events,
    } as GarbageDisposal;
  }
  catch (e) {
    //console.log(html);
    console.error(e);
    throw e;
  }
}

function parseEvents(
  tbody,
  text: string,
  type: GarbageDisposalEvent['type']
): GarbageDisposalEvent[] {
  const strong = tbody
    .querySelectorAll('strong')
    .find((x) => x.innerText === text);
  if (!strong) {
    return [];
  }
  const tr = strong.parentNode.parentNode;
  const eventsTr = tr.nextElementSibling;
  const td = eventsTr.querySelectorAll('td')[1];
  const regex = /(Mo|Di|Mi|Do|Fr|Sa|So),\s*(\d\d)\.(\d\d).(\d\d\d\d)/;
  const eventStrings = td.innerHTML.split('<br>').filter((x) => regex.test(x));

  const events: GarbageDisposalEvent[] = [];
  for (const eventString of eventStrings) {
    const groups = regex.exec(eventString);
    const day = groups[2];
    const month = groups[3];
    const year = groups[4];
    events.push({
      type: type,
      date: `${year}-${month}-${day}`,
    });
  }
  return events;
}
