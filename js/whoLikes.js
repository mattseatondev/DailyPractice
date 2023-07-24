
function likes(names) {
  const l = names.length;
  const p = l ? '' : 'no one';
  const f = names[0] + (l > 1 ? ', ' : ' and ');
  const s = names[1] + (l > 2 ? ' and ' : ' ');
  return`${p} ${l ? f : ''}${l > 1 ? s : ''}${l > 2 ? l + ' others ' : ''}like${l > 1 ? '' : 's'} this`;
}
