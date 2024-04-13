export const sidebarOptions = (agencyId: string) => {
  return [
      {
        name: 'Dashboard',
        icon: 'category',
        link: `/agency/${agencyId}`,
      },
      {
        name: 'Launchpad',
        icon: 'clipboardIcon',
        link: `/agency/${agencyId}/launchpad`,
      },
      {
        name: 'Billing',
        icon: 'payment',
        link: `/agency/${agencyId}/billing`,
      },
      {
        name: 'Settings',
        icon: 'settings',
        link: `/agency/${agencyId}/settings`,
      },
      {
        name: 'Sub Accounts',
        icon: 'person',
        link: `/agency/${agencyId}/all-subaccounts`,
      },
      {
        name: 'Team',
        icon: 'shield',
        link: `/agency/${agencyId}/team`,
      },
    ]
}