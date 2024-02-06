function getDateFormat(inputDate) {
  const date = new Date(inputDate);
  // Create the formatted date string
  const formattedDate = {
    day: date.getDay(),
    month: date.getMonth(),
    year: date.getFullYear(),
  };

  return {
    disp: ` ${formattedDate.day}/${formattedDate.month}/${formattedDate.year} `,
    formattedDate: formattedDate,
  };
}

export { getDateFormat };
