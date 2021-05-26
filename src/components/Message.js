function Message(props) {
  const { text, success } = props;
  const backgroundColor = success ? 'bg-green-100' : 'bg-red-100';
  const textColor = success ? 'text-green-900' : 'text-red-900';

  return (
    <div className={`p-5 w-full ${backgroundColor} rounded mb-10`}>
      <h1 className={`${textColor} text-sm text-center`}>{text}</h1>
    </div>
  );
}

export default Message;
