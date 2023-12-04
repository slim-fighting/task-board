import { OrganizationList} from "@clerk/nextjs"
export default function CreateOrganizationPage() {
    return (
        <OrganizationList
            hidePersonal
            afterCreateOrganizationUrl= "/org/:id"
            afterSelectOrganizationUrl= "/org/:id"
        />
    );
}