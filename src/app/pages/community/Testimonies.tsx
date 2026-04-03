import { PlaceholderPage } from '../../components/PlaceholderPage';

export function Testimonies() {
  return (
    <PlaceholderPage
      title="Testimonies"
      description="Stories of God's faithfulness"
      breadcrumbs={[
        { label: 'Home', path: '/' },
        { label: 'Community', path: '/community' },
        { label: 'Testimonies' },
      ]}
    />
  );
}
