import { useEffect } from "react";
import { Users } from "lucide-react";
import { useAuthStore } from "../store/useAuthStore";
import { useChatStore } from "../store/useChartStore";
import SidebarSkeleton from "./skeletons/SidebarSkeleton";

const Sidebar = () => {
  const { getUsers, users, selectedUser, setSelectedUser, isUsersLoading } =
    useChatStore();

  const { onlineUsers } = useAuthStore();

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  //   const filteredUsers = showOnlineOnly
  //     ? users.filter((user) => onlineUsers.includes(user._id))
  //     : users;

  if (isUsersLoading) return <SidebarSkeleton />;
  console.log(users);
  return (
    <aside className="h-full w-20 lg:w-72 border-r border-base-300 flex flex-col transition-all duration-200">
      <div className="border-b border-base-300 w-full p-5">
        <div className="flex items-center gap-2">
          <Users className="size-6" />
          <span className="font-medium hidden lg:block">Contacts</span>
        </div>
        {/* TODO: Online filter toggle */}
        <div className="mt-3 hidden lg:flex items-center gap-2">
          <label className="cursor-pointer flex items-center gap-2">
            <input type="checkbox" className="checkbox checkbox-sm" />
            <span className="text-sm">Show online only</span>
          </label>
          <span className="text-xs text-zinc-500"></span>
        </div>
      </div>

      <div className="overflow-y-auto w-full py-3">
        {users.map((user) => (
          <button
            key={user._id}
            onClick={() => setSelectedUser(user)}
            className={`
              w-full p-3 flex items-center gap-3
              hover:bg-base-300 transition-colors
              ${
                selectedUser?._id === user._id
                  ? "bg-base-300 ring-1 ring-base-300"
                  : ""
              }
            `}
          >
            <div className="relative mx-auto lg:mx-0">
              <img
                src={
                  user?.profilePic || "https://i.ibb.co/sp9PV3t2/3607444.png"
                }
                alt={user.name}
                className="size-12 object-cover rounded-full"
              />
            </div>

            {/* User info - only visible on larger screens */}
            <div className="hidden lg:block text-left min-w-0">
              <div className="font-medium truncate">{user?.fullname}</div>
            </div>
          </button>
        ))}

        <div className="text-center text-zinc-500 py-4">No online users</div>
      </div>
    </aside>
  );
};
export default Sidebar;
