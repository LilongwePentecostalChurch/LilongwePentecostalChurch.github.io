import { createBrowserRouter } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Sermons } from './pages/Sermons';
import { Leadership } from './pages/Leadership';
import { Events } from './pages/Events';
import { Gallery } from './pages/Gallery';
import { MinistryPage } from './pages/ministries/MinistryPage';

// About sub-pages
import { OurStory } from './pages/about/OurStory';
import { TheLeadPastor } from './pages/about/TheLeadPastor';
import { LeadershipTeam } from './pages/about/LeadershipTeam';
import { WhatWeBelieve } from './pages/about/WhatWeBelieve';
import { LPCAtAGlance } from './pages/about/LPCAtAGlance';
import { Staff } from './pages/about/Staff';

// Sermons sub-pages
import { BibleStudyNotes } from './pages/sermons/BibleStudyNotes';
import { Devotionals } from './pages/sermons/Devotionals';

// Events sub-pages
import { Upcoming } from './pages/events/Upcoming';
import { Annual } from './pages/events/Annual';
import { Past } from './pages/events/Past';

// Connect sub-pages
import { PlanYourVisit } from './pages/connect/PlanYourVisit';
import { CareGroups } from './pages/connect/CareGroups';
import { CounsellingPrayer } from './pages/connect/CounsellingPrayer';
import { Volunteer } from './pages/connect/Volunteer';
import { Membership } from './pages/connect/Membership';

// Children sub-pages
import { LPCKids } from './pages/children/LPCKids';
import { LPCKidsPage } from './pages/children/LPCKidsPage';
import { ParentResources as ChildrenParentResources } from './pages/children/ParentResources';
import { ChildrensEvents } from './pages/children/ChildrensEvents';

// Community sub-pages
import { CityOutreach } from './pages/community/CityOutreach';
import { CareAndWelfare } from './pages/community/CareAndWelfare';
import { Partnerships } from './pages/community/Partnerships';
import { Testimonies } from './pages/community/Testimonies';

// Give sub-pages
import { TithesAndOffering } from './pages/give/TithesAndOffering';
import { TestimonyOfGiving } from './pages/give/TestimonyOfGiving';

// Leadership sub-pages
import { LeadPastor } from './pages/leadership/LeadPastor';
import { PastoralTeam } from './pages/leadership/PastoralTeam';

// Ministries
import { PlaceholderPage } from './components/PlaceholderPage';
import { ParentResources as MinistriesParentResources } from './pages/ministries/ParentResources';
import { VBS } from './pages/ministries/VBS';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      {
        index: true,
        Component: Home,
      },
      // About routes
      {
        path: 'about',
        Component: About,
      },
      {
        path: 'about/our-story',
        Component: OurStory,
      },
      {
        path: 'about/lead-pastor',
        Component: TheLeadPastor,
      },
      {
        path: 'about/the-lead-pastor',
        Component: TheLeadPastor,
      },
      {
        path: 'about/leadership-team',
        Component: LeadershipTeam,
      },
      {
        path: 'about/what-we-believe',
        Component: WhatWeBelieve,
      },
      {
        path: 'about/lpc-at-a-glance',
        Component: LPCAtAGlance,
      },
      {
        path: 'about/staff',
        Component: Staff,
      },
      // Sermons routes
      {
        path: 'sermons',
        Component: Sermons,
      },
      {
        path: 'sermons/bible-study-notes',
        Component: BibleStudyNotes,
      },
      {
        path: 'sermons/devotionals',
        Component: Devotionals,
      },
      // Ministries routes
      {
        path: 'ministries',
        element: <PlaceholderPage title="Ministries" />,
      },
      {
        path: 'ministries/sunday-school/lpc-kids',
        Component: LPCKidsPage,
      },
      {
        path: 'ministries/sunday-school/parent-resources',
        Component: MinistriesParentResources,
      },
      {
        path: 'ministries/sunday-school/vbs',
        Component: VBS,
      },
      {
        path: 'ministries/:ministryId',
        Component: MinistryPage,
      },
      // Events routes
      {
        path: 'events',
        Component: Events,
      },
      {
        path: 'events/upcoming',
        Component: Upcoming,
      },
      {
        path: 'events/annual',
        Component: Annual,
      },
      {
        path: 'events/past',
        Component: Past,
      },
      // Connect routes
      {
        path: 'connect/plan-your-visit',
        Component: PlanYourVisit,
      },
      {
        path: 'connect/care-groups',
        Component: CareGroups,
      },
      {
        path: 'connect/counselling-prayer',
        Component: CounsellingPrayer,
      },
      {
        path: 'connect/volunteer',
        Component: Volunteer,
      },
      {
        path: 'connect/membership',
        Component: Membership,
      },
      // Children routes
      {
        path: 'children',
        element: <PlaceholderPage title="Children" />,
      },
      {
        path: 'children/lpc-kids',
        Component: LPCKids,
      },
      {
        path: 'children/parent-resources',
        Component: ChildrenParentResources,
      },
      {
        path: 'children/childrens-events',
        Component: ChildrensEvents,
      },
      // Community routes
      {
        path: 'community/city-outreach',
        Component: CityOutreach,
      },
      {
        path: 'community/care-and-welfare',
        Component: CareAndWelfare,
      },
      {
        path: 'community/partnerships',
        Component: Partnerships,
      },
      {
        path: 'community/testimonies',
        Component: Testimonies,
      },
      // Gallery route
      {
        path: 'gallery',
        Component: Gallery,
      },
      // Give routes
      {
        path: 'give/tithes-and-offering',
        Component: TithesAndOffering,
      },
      {
        path: 'give/testimony-of-giving',
        Component: TestimonyOfGiving,
      },
      // Leadership routes
      {
        path: 'leadership',
        Component: Leadership,
      },
      {
        path: 'leadership/lead-pastor',
        Component: LeadPastor,
      },
      {
        path: 'leadership/pastoral-team',
        Component: PastoralTeam,
      },
    ],
  },
], { basename: import.meta.env.BASE_URL });
