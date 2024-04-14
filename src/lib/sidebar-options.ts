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

export const subaccountSidebarOptions = (subaccountId: string) => {
  return [
    {
      name: 'Launchpad',
      icon: 'clipboardIcon',
      link: `/subaccount/${subaccountId}/launchpad`,
    },
    {
      name: 'Settings',
      icon: 'settings',
      link: `/subaccount/${subaccountId}/settings`,
    },
    {
      name: 'Funnels',
      icon: 'pipelines',
      link: `/subaccount/${subaccountId}/funnels`,
    },
    {
      name: 'Media',
      icon: 'database',
      link: `/subaccount/${subaccountId}/media`,
    },
    {
      name: 'Automations',
      icon: 'chip',
      link: `/subaccount/${subaccountId}/automations`,
    },
    {
      name: 'Pipelines',
      icon: 'flag',
      link: `/subaccount/${subaccountId}/pipelines`,
    },
    {
      name: 'Contacts',
      icon: 'person',
      link: `/subaccount/${subaccountId}/contacts`,
    },
    {
      name: 'Dashboard',
      icon: 'category',
      link: `/subaccount/${subaccountId}`,
    },
  ]
}