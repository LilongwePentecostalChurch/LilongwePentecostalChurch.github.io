import { PlaceholderPage } from '../../components/PlaceholderPage';

export function PastoralTeam() {
  return (
    <PlaceholderPage
      title="Pastoral Team"
      description="Serving together in ministry"
      breadcrumbs={[
        { label: 'Home', path: '/' },
        { label: 'Leadership', path: '/leadership' },
        { label: 'Pastoral Team' },
      ]}
    />
  );
}
