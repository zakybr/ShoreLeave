export type Lead = {
  name: string;
  mobile: string;
  email: string;
  boatType: string;
  boatLength: string;
  location: string;
  services: string[];
  date: string;
  timeWindow: string;
  notes: string;
  heard: string;
};

const NAVY = '#0e2233';
const SAND = '#f2ebdd';
const BRASS = '#c8963e';

const esc = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
const oneLine = (s: string) => s.replace(/[\r\n]+/g, ' ');

const shell = (heading: string, inner: string) => `<!doctype html><html lang="en-NZ"><body style="margin:0;background:${SAND};padding:24px 12px;font-family:Helvetica,Arial,sans-serif;color:${NAVY}">
<table role="presentation" width="100%" style="max-width:600px;margin:0 auto;background:#fbf7ef;border-collapse:collapse">
<tr><td style="background:${NAVY};color:${SAND};padding:20px 24px;font-family:Georgia,serif;font-size:20px">Shore Leave</td></tr>
<tr><td style="height:4px;background:${BRASS};font-size:0">&nbsp;</td></tr>
<tr><td style="padding:24px"><h1 style="margin:0 0 16px;font-family:Georgia,serif;font-weight:400;font-size:26px;line-height:1.2">${esc(heading)}</h1>${inner}</td></tr>
</table></body></html>`;

export function leadEmail(l: Lead) {
  const rows: [string, string][] = [
    ['Name', l.name],
    ['Mobile', l.mobile],
    ['Email', l.email],
    ['Boat type', l.boatType],
    ['Length', `${l.boatLength} ft`],
    ['Location', l.location],
    ['Services', l.services.join(', ')],
    ['Date', l.date],
    ['Time window', l.timeWindow],
    ['Restock list / notes', l.notes || 'None'],
    ['Heard about us', l.heard || 'Not given'],
  ];
  const table = rows
    .map(
      ([k, v]) =>
        `<tr><th align="left" valign="top" style="padding:8px 12px 8px 0;border-top:1px solid #d9cfba;font-size:14px;white-space:nowrap">${esc(k)}</th><td style="padding:8px 0;border-top:1px solid #d9cfba;font-size:15px;white-space:pre-wrap">${esc(v)}</td></tr>`,
    )
    .join('');
  return {
    subject: oneLine(`New booking: ${l.name} – ${l.boatType} – ${l.date}`),
    html: shell('New booking request', `<table role="presentation" style="width:100%;border-collapse:collapse">${table}</table><p style="font-size:14px;margin:16px 0 0">Hit reply to answer ${esc(l.name)} directly.</p>`),
  };
}

export function confirmationEmail(l: Lead) {
  const first = esc(l.name.split(' ')[0]);
  return {
    subject: "Got it. Here's what happens next.",
    html: shell(
      "Got it. Here's what happens next.",
      `<p style="font-size:16px;line-height:1.5">Thanks ${first}. Your request is with us.</p>
<ol style="font-size:16px;line-height:1.6;padding-left:20px"><li>Zak or Bozzy reads it.</li><li>We reply with a quote and any questions.</li><li>We agree on access, and the boat gets reset.</li></ol>
<p style="font-size:16px;line-height:1.5">In a hurry? Call or text 022 305 3853.</p>`,
    ),
  };
}
