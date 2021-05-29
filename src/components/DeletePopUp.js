import API from '../utils/API';

function DeletePopUp(props) {
  const { id, title, hidePopUp } = props;

  const onClickDelete = async () => {
    const json = await API.deletePost(id);
  };

  return (
    <div className="fixed h-screen w-screen bg-opacity-40 bg-black top-0 left-0 z-10">
      <div className="rounded p-5 max-w-3xl w-11/12 bg-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <h1 className="text-xl mb-5 border-gray-200 border-b pb-5">
          Are you sure you want to delete {title}?
        </h1>
        <div className="ml-auto block w-max	">
          <button
            onClick={hidePopUp}
            className="hover:cursor-pointer mr-3 p-3 border text-gray-500 border-gray-200 rounded"
          >
            Cancel
          </button>
          <button
            onClick={onClickDelete}
            className="p-3 bg-red-100 text-red-900 font-bold rounded"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeletePopUp;
