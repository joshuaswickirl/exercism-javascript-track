export const hey = (message) => {
  if (/^[^a-z]*[?]$/.test(message) && /[A-Z]/.test(message)) {
    return "Calm down, I know what I'm doing!"
  } else if (/^\s*$/.test(message)) {
    return "Fine. Be that way!"
  } else if (/^[^a-z]*$/.test(message) && /[A-Z]/.test(message)) {
    return "Whoa, chill out!"
  } else if (/^.*[?]\s*$/.test(message)) {
    return "Sure."
  }  else {
    return "Whatever."
  }
}
