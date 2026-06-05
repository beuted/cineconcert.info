function fromCodes(codes) {
  return codes.map((code) => String.fromCharCode(code)).join('')
}

export function getContactEmail() {
  const local = fromCodes([99, 105, 110, 101, 99, 111, 110, 99, 101, 114, 116, 105, 110, 102, 111])
  const domain = fromCodes([103, 109, 97, 105, 108])
  const tld = fromCodes([99, 111, 109])
  return [local, `${domain}.${tld}`].join(String.fromCharCode(64))
}
