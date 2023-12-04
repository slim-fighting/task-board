// import { currentUser,auth } from "@clerk/nextjs";
//
// const ProtectPage = async () => {
//     const user = await currentUser();
//     const { userId } = auth();
//     return (
//         <div>
//             user: {user?.firstName }
//             userID: {userId}
//         </div>
//     )
// }
//
// export default ProtectPage;
// "use client";
//
// import {useAuth, useUser} from "@clerk/nextjs";
//
// const ProtectPage = () => {
//     const { userId } = useAuth();
//     const { user } = useUser();
//     return (
//         <div>
//             user: {user?.firstName }
//             userID: {userId}
//         </div>
//     )
// }
//
// export default ProtectPage;

"use client";
import {UserButton} from "@clerk/nextjs";
import {useAuth, useUser} from "@clerk/nextjs";

const ProtectPage = () => {
    return (
        <div>
            <UserButton afterSignOutUrl="/"/>
        </div>
    )
}

export default ProtectPage;