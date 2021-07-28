const str = `
010-1234-5678
thewlakasd@naver.com
https://www.youtube.com/?gl=KR
The quick brown fox jumps over the lazy dog.
abbcccdddd
`

console.log(
  str.match(/(?<=@).{1,}/g)
)