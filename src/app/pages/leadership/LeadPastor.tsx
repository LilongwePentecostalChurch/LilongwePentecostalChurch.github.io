import { PlaceholderPage } from '../../components/PlaceholderPage';

export function LeadPastor() {
  return (
    <PlaceholderPage
      title="The Lead Pastor"
      description="Shepherding the LPC family"
      breadcrumbs={[
        { label: 'Home', path: '/' },
        { label: 'Leadership', path: '/leadership' },
        { label: 'The Lead Pastor' },
      ]}
    />
  );
}