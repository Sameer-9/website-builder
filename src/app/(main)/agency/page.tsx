import AgencyDetails from '@/components/forms/agency-details';
import { getAuthUserDetails, verifyAndAcceptInvitation } from '@/lib/queries';
import { currentUser } from '@clerk/nextjs';
import { Plan } from '@prisma/client';
import { redirect } from 'next/navigation';

async function AgencyPage({
  searchParams,
}: {
  searchParams: {
    plan: Plan;
    state: string;
    code: string;
  };
}) {
  //invitation
  const agencyId = await verifyAndAcceptInvitation();

  console.log(agencyId);

  const user = await getAuthUserDetails();

  if (agencyId) {
    if (user?.role === 'SUBACCOUNT_GUEST' || user?.role === 'SUBACCOUNT_USER') {
      return redirect('/subaccount');
    } else if (user?.role === 'AGENCY_ADMIN') {
      if (searchParams.plan) {
        return redirect(
          `/agency/${agencyId}/billing?plan=${searchParams.plan}`,
        );
      }

      if (searchParams.state) {
        const statePath = searchParams.state.split('_')[0];
        const stateAgencyId = searchParams.state.split('___')[1];

        if (!stateAgencyId) return <div>Not Authorized</div>;

        return redirect(
          `/agency/${stateAgencyId}/${statePath}?code=${searchParams.code}`,
        );
      }
    } else {
      return redirect(`/agency/${agencyId}`);
    }
  }
  
  const authUser = await currentUser();
  return (
    <div className="mt-4 flex items-center justify-center">
      <div className="max-w-[850px] rounded-xl border-[1px] p-4">
        <h1 className="text-4xl">Create An Agency</h1>
        <AgencyDetails
          data={{
            companyEmail: authUser?.emailAddresses[0].emailAddress,
          }}
        />
      </div>
    </div>
  );
}

export default AgencyPage;
