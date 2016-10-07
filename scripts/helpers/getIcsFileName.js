const getIcsFileName = title => {
  return title.replace(/[^\w ]+/g, '') + '.ics';
}

export default getIcsFileName;