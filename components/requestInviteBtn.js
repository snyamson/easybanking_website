const RequestInviteBtn = () => {
  return (
    <>
      <button
        style={{
          backgroundImage: `linear-gradient(45deg, hsl(136, 65%, 51%), hsl(192, 70%, 51%))`,
        }}
        className="px-6 py-2 rounded-full outline-none text-center text-neutral-white hover:shadow-md "
      >
        Request Invite
      </button>
    </>
  );
};

export default RequestInviteBtn;
