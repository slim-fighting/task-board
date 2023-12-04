import { auth, OrganizationSwitcher } from "@clerk/nextjs"
const OrganizationPage = ()=>{
    const { userId, orgId } = auth();
    return (
        <div>
            {/*<OrganizationSwitcher/>*/}
            hello org
        </div>
    );
}

export default OrganizationPage;