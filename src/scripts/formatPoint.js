  export default function formatPoint(entry) {
    let splitted = entry.split(',')
    return {lat: parseFloat(splitted[0]), lng: parseFloat(splitted[1])}
  }