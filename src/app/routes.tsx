import { createBrowserRouter, Navigate } from 'react-router';
import { NotFound } from './pages/NotFound';
import { Layout } from './components/Layout';
import { PlaceholderPage } from './components/PlaceholderPage';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      {
        index: true,
        lazy: () => import('./pages/Home').then(m => ({ Component: m.Home })),
      },
      // About routes
      {
        path: 'about',
        lazy: () => import('./pages/About').then(m => ({ Component: m.About })),
      },
      {
        path: 'about/our-story',
        lazy: () => import('./pages/about/OurStory').then(m => ({ Component: m.OurStory })),
      },
      {
        path: 'about/lead-pastor',
        lazy: () => import('./pages/about/TheLeadPastor').then(m => ({ Component: m.TheLeadPastor })),
      },
      {
        path: 'about/the-lead-pastor',
        lazy: () => import('./pages/about/TheLeadPastor').then(m => ({ Component: m.TheLeadPastor })),
      },
      {
        path: 'about/leadership-team',
        lazy: () => import('./pages/about/LeadershipTeam').then(m => ({ Component: m.LeadershipTeam })),
      },
      {
        path: 'about/what-we-believe',
        lazy: () => import('./pages/about/WhatWeBelieve').then(m => ({ Component: m.WhatWeBelieve })),
      },
      {
        path: 'about/lpc-at-a-glance',
        lazy: () => import('./pages/about/LPCAtAGlance').then(m => ({ Component: m.LPCAtAGlance })),
      },
      {
        path: 'about/staff',
        lazy: () => import('./pages/about/Staff').then(m => ({ Component: m.Staff })),
      },
      // Sermons routes
      {
        path: 'sermons',
        lazy: () => import('./pages/Sermons').then(m => ({ Component: m.Sermons })),
      },
      {
        path: 'sermons/bible-study-notes',
        lazy: () => import('./pages/sermons/BibleStudyNotes').then(m => ({ Component: m.BibleStudyNotes })),
      },
      {
        path: 'sermons/devotionals',
        lazy: () => import('./pages/sermons/Devotionals').then(m => ({ Component: m.Devotionals })),
      },
      // Ministries routes
      {
        path: 'ministries',
        element: <PlaceholderPage title="Ministries" />,
      },
      {
        path: 'ministries/sunday-school/lpc-kids',
        lazy: () => import('./pages/children/LPCKidsPage').then(m => ({ Component: m.LPCKidsPage })),
      },
      {
        path: 'ministries/sunday-school/parent-resources',
        lazy: () => import('./pages/ministries/ParentResources').then(m => ({ Component: m.ParentResources })),
      },
      {
        path: 'ministries/sunday-school/vbs',
        lazy: () => import('./pages/ministries/VBS').then(m => ({ Component: m.VBS })),
      },
      {
        path: 'ministries/:ministryId',
        lazy: () => import('./pages/ministries/MinistryPage').then(m => ({ Component: m.MinistryPage })),
      },
      // Events routes
      {
        path: 'events',
        lazy: () => import('./pages/Events').then(m => ({ Component: m.Events })),
      },
      {
        path: 'events/upcoming',
        lazy: () => import('./pages/events/Upcoming').then(m => ({ Component: m.Upcoming })),
      },
      {
        path: 'events/annual',
        lazy: () => import('./pages/events/Annual').then(m => ({ Component: m.Annual })),
      },
      {
        path: 'events/past',
        lazy: () => import('./pages/events/Past').then(m => ({ Component: m.Past })),
      },
      // Connect routes
      {
        path: 'connect',
        element: <Navigate to="/connect/plan-your-visit" replace />,
      },
      {
        path: 'connect/plan-your-visit',
        lazy: () => import('./pages/connect/PlanYourVisit').then(m => ({ Component: m.PlanYourVisit })),
      },
      {
        path: 'connect/care-groups',
        lazy: () => import('./pages/connect/CareGroups').then(m => ({ Component: m.CareGroups })),
      },
      {
        path: 'connect/counselling-prayer',
        lazy: () => import('./pages/connect/CounsellingPrayer').then(m => ({ Component: m.CounsellingPrayer })),
      },
      {
        path: 'connect/volunteer',
        lazy: () => import('./pages/connect/Volunteer').then(m => ({ Component: m.Volunteer })),
      },
      {
        path: 'connect/membership',
        lazy: () => import('./pages/connect/Membership').then(m => ({ Component: m.Membership })),
      },
      // Children routes
      {
        path: 'children',
        element: <PlaceholderPage title="Children" />,
      },
      {
        path: 'children/lpc-kids',
        lazy: () => import('./pages/children/LPCKids').then(m => ({ Component: m.LPCKids })),
      },
      {
        path: 'children/parent-resources',
        lazy: () => import('./pages/children/ParentResources').then(m => ({ Component: m.ParentResources })),
      },
      {
        path: 'children/childrens-events',
        lazy: () => import('./pages/children/ChildrensEvents').then(m => ({ Component: m.ChildrensEvents })),
      },
      // Community routes
      {
        path: 'community',
        element: <Navigate to="/community/city-outreach" replace />,
      },
      {
        path: 'community/city-outreach',
        lazy: () => import('./pages/community/CityOutreach').then(m => ({ Component: m.CityOutreach })),
      },
      {
        path: 'community/care-and-welfare',
        lazy: () => import('./pages/community/CareAndWelfare').then(m => ({ Component: m.CareAndWelfare })),
      },
      {
        path: 'community/partnerships',
        lazy: () => import('./pages/community/Partnerships').then(m => ({ Component: m.Partnerships })),
      },
      {
        path: 'community/testimonies',
        lazy: () => import('./pages/community/Testimonies').then(m => ({ Component: m.Testimonies })),
      },
      // Gallery route
      {
        path: 'gallery',
        lazy: () => import('./pages/Gallery').then(m => ({ Component: m.Gallery })),
      },
      // Give routes
      {
        path: 'give',
        element: <Navigate to="/give/tithes-and-offering" replace />,
      },
      {
        path: 'give/tithes-and-offering',
        lazy: () => import('./pages/give/TithesAndOffering').then(m => ({ Component: m.TithesAndOffering })),
      },
      {
        path: 'give/testimony-of-giving',
        lazy: () => import('./pages/give/TestimonyOfGiving').then(m => ({ Component: m.TestimonyOfGiving })),
      },
      // Leadership routes
      {
        path: 'leadership',
        lazy: () => import('./pages/Leadership').then(m => ({ Component: m.Leadership })),
      },
      {
        path: 'leadership/lead-pastor',
        lazy: () => import('./pages/leadership/LeadPastor').then(m => ({ Component: m.LeadPastor })),
      },
      {
        path: 'leadership/pastoral-team',
        lazy: () => import('./pages/leadership/PastoralTeam').then(m => ({ Component: m.PastoralTeam })),
      },
      // Catch-all 404
      {
        path: '*',
        Component: NotFound,
      },
    ],
  },
]);
