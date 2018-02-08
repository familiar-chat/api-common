export default a => {
  let b = ""

  for (let i in a)
    b += encodeURIComponent(i) + "=" + encodeURIComponent(a[i]) + "&"

  return b.slice(0, -1)
}