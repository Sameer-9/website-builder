import AgencyDetails from '@/components/forms/agency-details';
import UserDetails from '@/components/forms/user-details';
import { db } from '@/lib/db';
import { currentUser } from '@clerk/nextjs';
import { notFound, redirect } from 'next/navigation';
import React from 'react';

type Props = {
  params: { agencyId: string };
};

const SettingsPage = async ({ params }: Props) => {
  const authUser = await currentUser();
  if (!authUser) return null;

  const userDetails = await db.user.findUnique({
    where: {
      email: authUser.emailAddresses[0].emailAddress,
    },
  });

  if (!userDetails) return null;
  const agencyDetails = await db.agency.findUnique({
    where: {
      id: params.agencyId,
    },
    include: {
      SubAccount: true,
    },
  });

  if (!agencyDetails) return notFound();

  const subAccounts = agencyDetails.SubAccount;

  return (
    <div className="grid grid-cols-5 gap-4">
      <div className="col-span-full lg:col-span-3">
        <AgencyDetails data={agencyDetails} />
      </div>
      <div className="col-span-full lg:col-span-2">
        <UserDetails
          type="agency"
          id={params.agencyId}
          subAccounts={subAccounts}
          userData={userDetails}
        />
      </div>
    </div>
  );
};

export default SettingsPage;
