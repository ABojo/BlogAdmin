const formatDate = (timestamp) => {
  const ts = new Date(timestamp);
  return `${ts.getMonth() + 1}/${ts.getDate()}/${ts.getFullYear()}`;
};

export default formatDate;
