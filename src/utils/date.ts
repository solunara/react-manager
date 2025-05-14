export const toLocalDateTime = (date?: Date, rule?: string) => {
  let curDate = new Date()
  if (date) curDate = date
  if (rule === "YYYY-MM-DD" || rule === "yyyy-mm-dd") return curDate.toLocaleDateString()
  if (rule === "HH:MM:SS" || rule === "hh:mm:ss") return curDate.toLocaleTimeString()
  return curDate.toLocaleString()
}
