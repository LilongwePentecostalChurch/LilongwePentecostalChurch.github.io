import { PlaceholderPage } from '../../components/PlaceholderPage';

export function TheLeadPastor() {
  return (
    <PlaceholderPage
      title="The Lead Pastor"
      description="Full biography, vision and message from the Lead Pastor of LPC"
      breadcrumbs={[
        { label: 'Home', path: '/' },
        { label: 'About', path: '/about' },
        { label: 'The Lead Pastor' },
      ]}
    />
  );
}
