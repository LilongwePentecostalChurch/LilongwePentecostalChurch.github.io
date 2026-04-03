import { PlaceholderPage } from '../../components/PlaceholderPage';

export function ChildrensEvents() {
  return (
    <PlaceholderPage
      title="Children's Events"
      description="Special activities for our young ones"
      breadcrumbs={[
        { label: 'Home', path: '/' },
        { label: 'Children', path: '/children' },
        { label: "Children's Events" },
      ]}
    />
  );
}
