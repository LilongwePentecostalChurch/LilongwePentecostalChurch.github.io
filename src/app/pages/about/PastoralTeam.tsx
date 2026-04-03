import { PlaceholderPage } from '../../components/PlaceholderPage';

export function PastoralTeam() {
  return (
    <PlaceholderPage
      title="Pastoral Team"
      description="The pastors leading and shepherding the LPC congregation"
      breadcrumbs={[
        { label: 'Home', path: '/' },
        { label: 'About', path: '/about' },
        { label: 'Pastoral Team' },
      ]}
    />
  );
}
