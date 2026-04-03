import { PlaceholderPage } from '../../components/PlaceholderPage';

export function Partnerships() {
  return (
    <PlaceholderPage
      title="Partnerships"
      description="Building relationships for Kingdom impact"
      breadcrumbs={[
        { label: 'Home', path: '/' },
        { label: 'Community', path: '/community' },
        { label: 'Partnerships' },
      ]}
    />
  );
}
