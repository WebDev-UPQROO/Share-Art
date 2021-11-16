export const getDate = (date) => {
  const nowDate = new Date();
  const postDate = new Date(date);
  const difference = nowDate.getTime() - postDate.getTime();

  const diffMinutes = Math.trunc(difference / (1000 * 60));
  const diffHour = Math.trunc(difference / (1000 * 60 * 60));
  const diffDay = Math.trunc(difference / (1000 * 60 * 60 * 24));
  const diffYear = Math.trunc(difference / (1000 * 60 * 60 * 24 * 365));

  var yearsFormat = {
    hour12: true,
    minute: "numeric",
    hour: "numeric",
    day: "numeric",
    month: "short",
    year: "numeric",
  };

  var daysFormat = {
    hour12: true,
    minute: "numeric",
    hour: "numeric",
    day: "numeric",
    weekday: "long",
  };

  if (diffYear > 0) return postDate.toLocaleString("es-ES", yearsFormat);
  else if (diffDay > 7) return postDate.toLocaleString("es-ES", daysFormat);
  else if (diffDay > 0) return Math.trunc(diffDay) + "d";
  else if (diffHour > 0) return Math.trunc(diffHour) + "h";
  else if (diffMinutes > 0) return Math.trunc(diffMinutes) + "m";
  else return "Hace un momento";
};
