function tail(i) {
  if (i > 3) return;
  console.log('before:', i);
  tail(i + 1);
  console.log('after', i);
}
tail(0);

function tail1(i) {
  if (i > 3) return i;
  console.log(i);
  return tail1(i + 1);
}

tail1(0);