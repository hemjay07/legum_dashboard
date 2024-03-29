"use client";
import AccountDeletionRequest from "@/app/components/PreviewOfAccountDeletion";
import BackButton from "@/app/components/backButton";

export default function AccountDeletionPage() {
  return (
    <div class="mt-6">
      <BackButton />
      <AccountDeletionRequest />
    </div>
  );
}
