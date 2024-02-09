import AccountDeletionRequest from "@/app/components/PreviewOfAccountDeletion";
import Complaints from "@/app/components/PreviewOfComplaint";

export default function Reports() {
  return (
    <div>
      <Complaints />
      <AccountDeletionRequest />
    </div>
  );
}
