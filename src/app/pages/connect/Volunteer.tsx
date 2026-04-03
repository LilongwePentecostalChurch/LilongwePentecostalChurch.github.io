import { PlaceholderPage } from '../../components/PlaceholderPage';

export function Volunteer() {
  return (
    <PlaceholderPage
      title="Volunteer"
      description="Use your gifts to serve others"
      breadcrumbs={[
        { label: 'Home', path: '/' },
        { label: 'Connect', path: '/connect' },
        { label: 'Volunteer' },
      ]}
    />
  );
}
