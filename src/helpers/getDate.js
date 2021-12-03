const calcDate = (date) => {
  const nowDate = new Date();
  const postDate = new Date(date);
  const difference = nowDate.getTime() - postDate.getTime();

  const diff = {
    diffMinutes: Math.trunc(difference / (1000 * 60)),
    diffHour: Math.trunc(difference / (1000 * 60 * 60)),
    diffDay: Math.trunc(difference / (1000 * 60 * 60 * 24)),
    diffYear: Math.trunc(difference / (1000 * 60 * 60 * 24 * 365)),
    nowDate,
    postDate,
  };
  return diff;
};

export const getDate = (date) => {
  const diff = calcDate(date);
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

  if (diff?.diffYear > 0)
    return diff.postDate.toLocaleString("es-ES", yearsFormat);
  else if (diff?.diffDay > 7)
    return diff.postDate.toLocaleString("es-ES", daysFormat);
  else if (diff?.diffDay > 0) return Math.trunc(diff?.diffDay) + "d";
  else if (diff?.diffHour > 0) return Math.trunc(diff?.diffHour) + "h";
  else if (diff?.diffMinutes > 0) return Math.trunc(diff?.diffMinutes) + "m";
  else return "Hace un momento";
};

export const getDateInput = (date) => {
  const newDate = new Date(date);
  const dateSting = newDate.toISOString().split("T")[0];
  return dateSting;
};

export const getAge = (date) => {
  const { diffYear } = calcDate(date);
  return diffYear + 1;
};
